import * as pr from "pareto-runtime"

import * as g from "../../../../grammar/esc/interfaces"
import * as wapi from "../../interfaces/WriteAPI"
import { findNextPossibleTokens } from "../findNextPossibleTokens"

export function generateParser(
    grammar: g.NewGrammar,
    $w: wapi.Block
) {

    $w.line(($w) => {
        $w.snippet(`import * as pr from "pareto-runtime"`)
    })
    $w.line(($w) => {
        $w.snippet(`import * as tast from "../../interfaces/typedAST"`)
    })
    $w.line(($w) => {
        $w.snippet(`import { Consumer, Node } from "./Consumer"`)
    })

    $w.line(($w) => { })
    $w.line(($w) => {
        $w.snippet(`export class UnrecognizedNodeError extends Error {`)
        $w.indent(($w) => {
            $w.line(($w) => {
                // see https://www.dannyguo.com/blog/how-to-fix-instanceof-not-working-for-custom-errors-in-typescript/
                $w.snippet(`constructor(message: string) { super(message); Object.setPrototypeOf(this, UnrecognizedNodeError.prototype); }`)

            })
        })
        $w.snippet(`}`)
    })
    $w.line(($w) => { })

    $w.line(($w) => {
        $w.snippet(`export function createParser<Annotation>(`)
        $w.indent(($w) => {
            $w.line(($w) => {
                $w.snippet(`callback: ($: tast.T${grammar.startToken}<Annotation>) => void,`)
            })
            $w.line(($w) => {
                $w.snippet(`handleUnexpectedChild: ($: { parentKindName: string, child: Node<Annotation>, }) => Consumer<Annotation>,`)
            })
            $w.line(($w) => {
                $w.snippet(`reportMissingSymbol: ($: { parentAnnotation: Annotation | null, parentKindName: string, symbolName: string, }) => void,`)
            })
        })
        $w.snippet(`): Consumer<Annotation> {`)
        $w.indent(($w) => {

            g.forEachEntry(grammar.tokens, ($, key) => {
                const tokenName = key
                $w.line(($w) => {

                    $w.snippet(`function _${key}(`)
                    $w.indent(($w) => {
                        $w.line(($w) => {
                            $w.snippet(`node: Node<Annotation> | null,`)
                        })
                        $w.line(($w) => {
                            $w.snippet(`callback: ($: tast.T${key}<Annotation>) => void,`)
                        })
                    })
                    $w.snippet(`): Consumer<Annotation> {`)
                    $w.indent(($w) => {

                        $w.line(($w) => {
                            $w.snippet(`type State =`)

                            function generateRule(
                                $: g.Rule,
                                $w: wapi.Line,
                                path: string,
                            ) {
                                $w.indent(($w) => {
                                    $w.line(($w) => {
                                        $w.snippet(`| ["done", {}]`)
                                    })
                                    $.symbols.forEach(($) => {
                                        const name = $.name
                                        $w.line(($w) => {
                                            $w.snippet(`| ["_${$.name}", {`)
                                            $w.indent(($w) => {
                                                switch ($.type[0]) {
                                                    case "array":
                                                        pr.cc($.type[1], ($) => {
                                                            $w.line(($w) => {
                                                                $w.snippet(`x: `)
                                                                generateRule(
                                                                    $.rule,
                                                                    $w,
                                                                    `${path}.${name}[]`
                                                                )
                                                            })
                                                        })
                                                        break
                                                    case "choice":
                                                        pr.cc($.type[1], ($) => {
                                                            $w.line(($w) => {
                                                                $w.snippet(`//choice`)
                                                            })
                                                        })
                                                        break
                                                    case "token":
                                                        pr.cc($.type[1], ($) => {
                                                            $w.line(($w) => {
                                                                $w.snippet(`//token`)
                                                            })
                                                        })
                                                        break
                                                    default:
                                                        pr.au($.type[0])
                                                }
                                            })
                                            $w.snippet(`}]`)
                                        })
                                    })
                                })
                            }
                            generateRule(
                                $,
                                $w,
                                tokenName,
                            )
                        })
                        $w.line(($w) => {
                            $w.snippet(`let state: State = `)
                            function generateRule(
                                $: g.Rule,
                                $w: wapi.Line,
                            ) {
                                if ($.symbols.length === 0) {
                                    $w.snippet(`["done", {}]`)
                                } else {
                                    const $$ = $.symbols[0]
                                    $w.snippet(`["_${$$.name}", {`)
                                    $w.indent(($w) => {
                                        $w.line(($w) => {
                                            switch ($$.type[0]) {
                                                case "array":
                                                    pr.cc($$.type[1], ($) => {
                                                        $w.snippet(`x: `)
                                                        generateRule(
                                                            $.rule,
                                                            $w,
                                                        )
                                                    })
                                                    break
                                                case "choice":
                                                    pr.cc($$.type[1], ($) => {
                                                        $w.snippet(`//choice`)
                                                    })
                                                    break
                                                case "token":
                                                    pr.cc($$.type[1], ($) => {
                                                        $w.snippet(`//token`)
                                                    })
                                                    break
                                                default:
                                                    pr.au($$.type[0])
                                            }
                                        })
                                    })
                                    $w.snippet(`}]`)
                                }
                            }
                            generateRule(
                                $,
                                $w,
                            )
                        })
                        $w.line(($w) => {
                            $w.snippet(`return {`)
                            $w.indent(($w) => {
                                $w.line(($w) => {
                                    $w.snippet(`onNode: ($) => {`)
                                    $w.indent(($w) => {
                                        $w.line(($w) => {
                                            $w.snippet(`function handle(): Consumer<Annotation> {`)
                                            $w.indent(($w) => {
                                                $w.line(($w) => {
                                                    function generateRule(
                                                        rule: g.Rule,
                                                        $w: wapi.Line,
                                                        path: string,
                                                    ) {
                                                        $w.snippet(`switch (state[0]) {`)
                                                        $w.indent(($w) => {
                                                            const symbols = $.symbols
                                                            $.symbols.forEach(($, index) => {

                                                                $w.line(($w) => {
                                                                    $w.snippet(`case "_${$.name}": {`)
                                                                    $w.indent(($w) => {
                                                                        switch ($.type[0]) {
                                                                            case "array":
                                                                                pr.cc($.type[1], ($) => {
                                                                                    const strategies: {
                                                                                        [key: string]:
                                                                                        | ["break", {}]
                                                                                        | ["add", {}]
                                                                                        | ["not sure", {}]
                                                                                    } = {}
                                                                                    findNextPossibleTokens(
                                                                                        {
                                                                                            symbols: symbols,
                                                                                            position: index + 1
                                                                                        },
                                                                                        (token) => {
                                                                                            if (strategies[token] !== undefined) {
                                                                                                if (strategies[token][0] !== "break") {
                                                                                                    strategies[token] = ["not sure", {}]
                                                                                                }
                                                                                            } else {
                                                                                                strategies[token] = ["break", {}]
                                                                                            }
                                                                                        },
                                                                                        () => {
                                                                                            console.log("FIXME BREAKLOOP END")
                                                                                        },
                                                                                    )
                                                                                    findNextPossibleTokens(
                                                                                        {
                                                                                            symbols: $.rule.symbols,
                                                                                            position: 0
                                                                                        },
                                                                                        (token) => {
                                                                                            if (strategies[token] !== undefined) {
                                                                                                if (strategies[token][0] !== "add") {
                                                                                                    strategies[token] = ["not sure", {}]
                                                                                                }
                                                                                            } else {
                                                                                                strategies[token] = ["add", {}]
                                                                                            }
                                                                                        },
                                                                                        () => {
                                                                                            console.log("FIXME ADD ENTRY END")
                                                                                        },
                                                                                    )
                                                                                    $w.line(($w) => {
                                                                                        $w.snippet(`switch ($.kindName) {`)
                                                                                        $w.indent(($w) => {
                                                                                            pr.Objectkeys(strategies).forEach((key) => {
                                                                                                const strategy = strategies[key]
                                                                                                $w.line(($w) => {
                                                                                                    $w.snippet(`case "${key}": {`)
                                                                                                    $w.indent(($w) => {
                                                                                                        switch (strategy[0]) {
                                                                                                            case "add":
                                                                                                                pr.cc(strategy[1], ($) => {
                                                                                                                    $w.line(($w) => {
                                                                                                                        $w.snippet(`return _${key}($, () => {})`)
                                                                                                                    })
                                                                                                                })
                                                                                                                break
                                                                                                            case "break":
                                                                                                                pr.cc(strategy[1], ($) => {
                                                                                                                    $w.line(($w) => {
                                                                                                                        $w.snippet(`state = `)
                                                                                                                        if (symbols.length <= index + 1) {
                                                                                                                            $w.snippet(`["done", {}]`)
                                                                                                                        } else {
                                                                                                                            $w.snippet(`["_${symbols[index + 1].name}", {}]`)
                                                                                                                        }
                                                                                                                    })
                                                                                                                    $w.line(($w) => {
                                                                                                                        $w.snippet(`return handle()`)
                                                                                                                    })
                                                                                                                })
                                                                                                                break
                                                                                                            case "not sure":
                                                                                                                pr.cc(strategy[1], ($) => {
                                                                                                                    $w.line(($w) => {
                                                                                                                        $w.snippet(`throw new Error("FIXME")`)
                                                                                                                    })
                                                                                                                })
                                                                                                                break
                                                                                                            default:
                                                                                                                pr.au(strategy[0])
                                                                                                        }
                                                                                                    })
                                                                                                    $w.snippet(`}`)
                                                                                                })
                                                                                            })
                                                                                            $w.line(($w) => {
                                                                                                $w.snippet(`default: {`)
                                                                                                $w.indent(($w) => {
                                                                                                    $w.line(($w) => {
                                                                                                        $w.snippet(`return handleUnexpectedChild({`)
                                                                                                        $w.indent(($w) => {
                                                                                                            $w.line(($w) => {
                                                                                                                $w.snippet(`parentKindName: "${path}",`)
                                                                                                            })
                                                                                                            $w.line(($w) => {
                                                                                                                $w.snippet(`child: $,`)
                                                                                                            })
                                                                                                        })
                                                                                                        $w.snippet(`})`)
                                                                                                    })
                                                                                                })
                                                                                                $w.snippet(`}`)

                                                                                            })

                                                                                        })
                                                                                        $w.snippet(`}`)

                                                                                    })
                                                                                })
                                                                                break
                                                                            case "choice":
                                                                                pr.cc($.type[1], ($) => {
                                                                                    const strategies: {
                                                                                        [key: string]: string
                                                                                    } = {}
                                                                                    pr.Objectkeys($.options).forEach((key) => {
                                                                                        const option = $.options[key]
                                                                                        findNextPossibleTokens(
                                                                                            {
                                                                                                symbols: option.symbols,
                                                                                                position: 0,
                                                                                            },
                                                                                            (token) => {
                                                                                                strategies[token] = key
                                                                                            },
                                                                                            () => {
                                                                                                console.log("FIXME CHOOSE")
                                                                                            },
                                                                                        )
                                                                                    })
                                                                                    $w.line(($w) => {
                                                                                        $w.snippet(`switch ($.kindName) {`)
                                                                                        $w.indent(($w) => {
                                                                                            pr.Objectkeys(strategies).forEach((key) => {
                                                                                                const strategy = strategies[key]
                                                                                                $w.line(($w) => {
                                                                                                    $w.snippet(`case "${key}": {`)
                                                                                                    $w.indent(($w) => {
                                                                                                        $w.line(($w) => {
                                                                                                            $w.snippet(`return _${key}($, () => {})`)
                                                                                                        })
                                                                                                    })
                                                                                                    $w.snippet(`}`)
                                                                                                })
                                                                                            })
                                                                                            $w.line(($w) => {
                                                                                                $w.snippet(`default: {`)
                                                                                                $w.indent(($w) => {
                                                                                                    $w.line(($w) => {
                                                                                                        $w.snippet(`return handleUnexpectedChild({`)
                                                                                                        $w.indent(($w) => {
                                                                                                            $w.line(($w) => {
                                                                                                                $w.snippet(`parentKindName: "${path}",`)
                                                                                                            })
                                                                                                            $w.line(($w) => {
                                                                                                                $w.snippet(`child: $,`)
                                                                                                            })
                                                                                                        })
                                                                                                        $w.snippet(`})`)
                                                                                                    })
                                                                                                })
                                                                                                $w.snippet(`}`)

                                                                                            })

                                                                                        })
                                                                                        $w.snippet(`}`)

                                                                                    })
                                                                                })
                                                                                break
                                                                            case "token":
                                                                                pr.cc($.type[1], ($) => {
                                                                                    $w.line(($w) => {
                                                                                        $w.snippet(`if ($.kindName === "${$.name}") {`)
                                                                                        $w.indent(($w) => {
                                                                                            $w.line(($w) => {
                                                                                                $w.snippet(`state = `)
                                                                                                if (symbols.length <= index + 1) {
                                                                                                    $w.snippet(`["done", {}]`)
                                                                                                } else {
                                                                                                    $w.snippet(`["_${symbols[index + 1].name}", {}]`)
                                                                                                }
                                                                                            })
                                                                                            $w.line(($w) => {
                                                                                                $w.snippet(`return _${$.name}(`)
                                                                                                $w.indent(($w) => {
                                                                                                    $w.line(($w) => {
                                                                                                        $w.snippet(`$,`)
                                                                                                    })
                                                                                                    $w.line(($w) => {
                                                                                                        $w.snippet(`() => {},`)
                                                                                                    })
                                                                                                })
                                                                                                $w.snippet(`)`)
                                                                                            })
                                                                                        })
                                                                                        $w.snippet(`} else {`)
                                                                                        $w.indent(($w) => {
                                                                                            $w.line(($w) => {
                                                                                                $w.snippet(`return handleUnexpectedChild({`)
                                                                                                $w.indent(($w) => {
                                                                                                    $w.line(($w) => {
                                                                                                        $w.snippet(`parentKindName: "${path}",`)
                                                                                                    })
                                                                                                    $w.line(($w) => {
                                                                                                        $w.snippet(`child: $,`)
                                                                                                    })
                                                                                                })
                                                                                                $w.snippet(`})`)
                                                                                            })
                                                                                        })
                                                                                        $w.snippet(`}`)
                                                                                    })
                                                                                })
                                                                                break
                                                                            default:
                                                                                pr.au($.type[0])
                                                                        }
                                                                    })
                                                                    $w.snippet(`}`)
                                                                })
                                                            })
                                                            $w.line(($w) => {
                                                                $w.snippet(`case "done": {`)
                                                                $w.indent(($w) => {
                                                                    $w.line(($w) => {
                                                                        $w.snippet(`return handleUnexpectedChild({`)
                                                                        $w.indent(($w) => {
                                                                            $w.line(($w) => {
                                                                                $w.snippet(`parentKindName: "${path}",`)
                                                                            })
                                                                            $w.line(($w) => {
                                                                                $w.snippet(`child: $,`)
                                                                            })
                                                                        })
                                                                        $w.snippet(`})`)
                                                                    })
                                                                })
                                                                $w.snippet(`}`)
                                                            })
                                                            $w.line(($w) => {
                                                                $w.snippet(`default: return pr.au(state[0])`)
                                                            })
                                                        })
                                                        $w.snippet(`}`)

                                                    }
                                                    generateRule(
                                                        $,
                                                        $w,
                                                        tokenName,
                                                    )
                                                })
                                            })
                                            $w.snippet(`}`)
                                        })
                                        $w.line(($w) => {
                                            $w.snippet(`return handle()`)
                                        })
                                    })
                                    $w.snippet(`},`)
                                })
                                $w.line(($w) => {
                                    $w.snippet(`onEnd: () => {`)
                                    $w.indent(($w) => {
                                        $w.line(($w) => {
                                            $w.snippet(`function handle(): void {`)
                                            $w.indent(($w) => {
                                                $w.line(($w) => {
                                                    $w.snippet(`switch (state[0]) {`)
                                                    $w.indent(($w) => {
                                                        const symbols = $.symbols
                                                        $.symbols.forEach(($, index) => {
                                                            const symbolName = $.name
                                                            $w.line(($w) => {
                                                                $w.snippet(`case "_${$.name}": {`)
                                                                $w.indent(($w) => {
                                                                    switch ($.type[0]) {
                                                                        case "array":
                                                                            pr.cc($.type[1], ($) => {
                                                                                $w.line(($w) => {
                                                                                    $w.snippet(`state = `)
                                                                                    if (symbols.length <= index + 1) {
                                                                                        $w.snippet(`["done", {}]`)
                                                                                    } else {
                                                                                        $w.snippet(`["_${symbols[index + 1].name}", {}]`)
                                                                                    }
                                                                                })
                                                                                $w.line(($w) => {
                                                                                    $w.snippet(`return handle()`)
                                                                                })
                                                                            })
                                                                            break
                                                                        case "choice":
                                                                            pr.cc($.type[1], ($) => {
                                                                                $w.line(($w) => {
                                                                                    $w.snippet(`reportMissingSymbol({`)
                                                                                    $w.indent(($w) => {
                                                                                        $w.line(($w) => {
                                                                                            $w.snippet(`parentAnnotation: node === null ? null : node.annotation,`)
                                                                                        })
                                                                                        $w.line(($w) => {
                                                                                            $w.snippet(`parentKindName: "${tokenName}",`)
                                                                                        })
                                                                                        $w.line(($w) => {
                                                                                            $w.snippet(`symbolName: "${symbolName}",`)
                                                                                        })
                                                                                    })
                                                                                    $w.snippet(`})`)
                                                                                })
                                                                            })
                                                                            break
                                                                        case "token":
                                                                            pr.cc($.type[1], ($) => {
                                                                                $w.line(($w) => {
                                                                                    $w.snippet(`reportMissingSymbol({`)
                                                                                    $w.indent(($w) => {
                                                                                        $w.line(($w) => {
                                                                                            $w.snippet(`parentAnnotation: node === null ? null : node.annotation,`)
                                                                                        })
                                                                                        $w.line(($w) => {
                                                                                            $w.snippet(`parentKindName: "${tokenName}",`)
                                                                                        })
                                                                                        $w.line(($w) => {
                                                                                            $w.snippet(`symbolName: "${symbolName}",`)
                                                                                        })
                                                                                    })
                                                                                    $w.snippet(`})`)
                                                                                })
                                                                            })
                                                                            break
                                                                        default:
                                                                            pr.au($.type[0])
                                                                    }
                                                                })
                                                                $w.snippet(`}`)
                                                            })
                                                        })
                                                        $w.line(($w) => {
                                                            $w.snippet(`case "done": {`)
                                                            $w.indent(($w) => {
                                                                $w.line(($w) => {
                                                                    $w.snippet(`return`)
                                                                })
                                                            })
                                                            $w.snippet(`}`)
                                                        })
                                                        $w.line(($w) => {
                                                            $w.snippet(`default: return pr.au(state[0])`)
                                                        })
                                                    })
                                                    $w.snippet(`}`)
                                                    // $w.snippet(`if (state[0] !== "done") {`)
                                                    // $w.indent(($w) => {
                                                    //     $w.line(($w) => {
                                                    //         $w.snippet(`reportMissingSymbol({`)
                                                    //         $w.indent(($w) => {
                                                    //             $w.line(($w) => {
                                                    //                 $w.snippet(`parentAnnotation: node === null ? null : node.annotation,`)
                                                    //             })
                                                    //             $w.line(($w) => {
                                                    //                 $w.snippet(`parentKindName: "${tokenName}",`)
                                                    //             })
                                                    //             $w.line(($w) => {
                                                    //                 $w.snippet(`symbolName: state[0],`)
                                                    //             })
                                                    //         })
                                                    //         $w.snippet(`})`)
                                                    //     })
                                                    // })
                                                    // $w.snippet(`}`)
                                                })
                                            })
                                            $w.snippet(`}`)
                                        })
                                        $w.line(($w) => {
                                            $w.snippet(`return handle()`)
                                        })
                                    })
                                    $w.snippet(`}`)
                                })
                            })
                            $w.snippet(`}`)
                        })
                    })
                    $w.snippet(`}`)
                })
            })

            $w.line(($w) => {
                $w.snippet(`return _${grammar.startToken}(null, callback)`)
            })
        })
        $w.snippet(`}`)
    })
}
