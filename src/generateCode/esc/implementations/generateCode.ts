import * as pr from "pareto-runtime"

import * as g from "../interfaces/Grammar"
import * as wapi from "../interfaces/WriteAPI"

import { createFile } from "./createBlock"

export function generateCode(
    grammar: g.Grammar,
    targetDirPath: string,
) {


    function generateAPI($w: wapi.Block) {
        $w.line(($w) => {
            $w.snippet(`import * as pr from "pareto-runtime"`)
        })
        g.forEachEntry(grammar.tokenRules, ($, key) => {
            function generateType(
                $k: string,
                $: g.Type,
            ) {
                switch ($[0]) {
                    case "bag":
                        pr.cc($[1], ($) => {
                            $.forEach(($) => {
                                switch ($[0]) {
                                    case "global":
                                        pr.cc($[1], ($) => {
                                        })
                                        break
                                    case "local":
                                        pr.cc($[1], ($) => {
                                            generateType(
                                                $[0],
                                                $[1],
                                            )
                                        })
                                        break
                                    default:
                                        pr.au($[0])
                                }
                            })
                        })
                        break
                    case "leaf":
                        pr.cc($[1], ($) => {
                        })
                        break
                    default:
                        pr.au($[0])
                }
                $w.line(($w) => {
                    $w.snippet(``)
                })
                $w.line(($w) => {
                    $w.snippet(`export type C${$k}<Annotation> = `)
                    switch ($[0]) {
                        case "bag":
                            pr.cc($[1], ($) => {
                                $w.indent(($w) => {
                                    $.forEach(($) => {
                                        $w.line(($w) => {
                                            switch ($[0]) {
                                                case "global":
                                                    pr.cc($[1], ($) => {
                                                        $w.snippet(`| ["${$}", T${$}<Annotation>]`)
                                                    })
                                                    break
                                                case "local":
                                                    pr.cc($[1], ($) => {
                                                        $w.snippet(`| ["${$[0]}", T${$[0]}<Annotation>]`)
                                                    })
                                                    break
                                                default:
                                                    pr.au($[0])
                                            }
                                        })
                                    })
                                })
                            })
                            break
                        case "leaf":
                            pr.cc($[1], ($) => {
                                $w.snippet(`number`)
                            })
                            break
                        default:
                            pr.au($[0])
                    }

                })
                $w.line(($w) => {
                    $w.snippet(`export type T${$k}<Annotation> = `)
                    switch ($[0]) {
                        case "bag":
                            pr.cc($[1], ($) => {
                                $w.snippet(`{`)
                                $w.indent(($w) => {
                                    $w.line(($w) => {
                                        $w.snippet(`readonly annotation: Annotation`)
                                    })
                                    $w.line(($w) => {
                                        $w.snippet(`readonly children: pr.IReadonlyArray<C${$k}<Annotation>>`)
                                    })
                                })
                                $w.snippet(`}`)
                            })
                            break
                        case "leaf":
                            pr.cc($[1], ($) => {
                                $w.snippet(`number`)
                            })
                            break
                        default:
                            pr.au($[0])
                    }

                })
            }
            generateType(
                key,
                $,
            )
        })

        $w.line(($w) => {
            $w.snippet(`export type Root<Annotation> = T${grammar.startRule}<Annotation>`)
        })

    }

    function generateBuilder($w: wapi.Block) {

        $w.line(($w) => {
            $w.snippet(`import * as pr from "pareto-runtime"`)
        })
        $w.line(($w) => {
            $w.snippet(`import * as uast from "../../interfaces/untypedAST"`)
        })
        $w.line(($w) => {
            $w.snippet(`import * as tast from "../../interfaces/typedAST"`)
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
            $w.snippet(`export function build<Annotation>(`)
            $w.indent(($w) => {
                $w.line(($w) => {
                    $w.snippet(`$: uast.Node<Annotation>,`)
                })
                $w.line(($w) => {
                    $w.snippet(`callback: ($: tast.T${grammar.startRule}<Annotation>) => void,`)
                })
                $w.line(($w) => {
                    $w.snippet(`reportUnexpectedChild: ($: { parent: uast.Node<Annotation>, child: uast.Node<Annotation>, }) => void,`)
                })
            })
            $w.snippet(`): void {`)
            $w.indent(($w) => {

                g.forEachEntry(grammar.tokenRules, ($, key) => {
                    $w.line(($w) => {

                        $w.snippet(`function _${key}(`)
                        $w.indent(($w) => {
                            $w.line(($w) => {
                                $w.snippet(`$: uast.Node<Annotation>,`)
                            })
                            $w.line(($w) => {
                                $w.snippet(`callback: ($: tast.T${key}<Annotation>) => void,`)
                            })
                        })
                        $w.snippet(`) {`)
                        $w.indent(($w) => {
                            function generateType(
                                $k: string,
                                $: g.Type,
                                $w: wapi.Block,
                            ) {
                                switch ($[0]) {
                                    case "bag":
                                        pr.cc($[1], ($) => {
                                            $w.line(($w) => {
                                                $w.snippet(`const temp: tast.C${$k}<Annotation>[] = []`)
                                            })
                                            $w.line(($w) => {
                                                $w.snippet(`const $parent = $`)
                                            })
                                            $w.line(($w) => {
                                                $w.snippet(`$.children.forEach(($) => {`)
                                                $w.indent(($w) => {
                                                    $w.line(($w) => {
                                                        $w.snippet(`switch ($.kindName) {`)
                                                        $w.indent(($w) => {
                                                            $.forEach(($) => {
                                                                switch ($[0]) {
                                                                    case "global":
                                                                        pr.cc($[1], ($) => {
                                                                            $w.line(($w) => {
                                                                                $w.snippet(`case "${$}": {`)
                                                                                $w.indent(($w) => {
                                                                                    $w.line(($w) => {
                                                                                        $w.snippet(`_${$}(`)
                                                                                        $w.indent(($w) => {
                                                                                            $w.line(($w) => {
                                                                                                $w.snippet(`$,`)
                                                                                            })
                                                                                            $w.line(($w) => {
                                                                                                $w.snippet(`($) => { temp.push(["${$}", $]) },`)
                                                                                            })
                                                                                        })
                                                                                        $w.snippet(`)`)
                                                                                    })
                                                                                    $w.line(($w) => {
                                                                                        $w.snippet(`break`)
                                                                                    })
                                                                                })
                                                                                $w.snippet(`}`)
                                                                            })
                                                                        })
                                                                        break
                                                                    case "local":
                                                                        pr.cc($[1], ($) => {
                                                                            $w.line(($w) => {
                                                                                $w.snippet(`case "${$[0]}": {`)
                                                                                $w.indent(($w) => {
                                                                                    $w.line(($w) => {
                                                                                        $w.snippet(`const callback = ($: tast.T${$[0]}<Annotation>) => {`)
                                                                                        $w.indent(($w) => {
                                                                                            $w.line(($w) => {
                                                                                                $w.snippet(`temp.push(["${$[0]}", $])`)
                                                                                            })
                                                                                        })
                                                                                        $w.snippet(`}`)
                                                                                    })
                                                                                    $w.line(($w) => {
                                                                                        $w.snippet(`pr.cc(null, (_) => {`)
                                                                                        $w.indent(($w) => {
                                                                                            generateType(
                                                                                                $[0],
                                                                                                $[1],
                                                                                                $w,
                                                                                            )
                                                                                            // $w.line(($w) => {
                                                                                            //     $w.snippet(`break`)
                                                                                            // })
                                                                                        })
                                                                                        $w.snippet(`})`)
                                                                                    })
                                                                                    $w.line(($w) => {
                                                                                        $w.snippet(`break`)
                                                                                    })
                                                                                })
                                                                                $w.snippet(`}`)
                                                                            })
                                                                        })
                                                                        break
                                                                    default:
                                                                        pr.au($[0])
                                                                }
                                                            })
                                                            $w.line(($w) => {
                                                                //$w.snippet(`default: throw new UnrecognizedNodeError(\`\${$.kindName}\`)`)
                                                                $w.snippet(`default: reportUnexpectedChild({ parent: $parent, child: $, })`)

                                                            })
                                                        })
                                                        $w.snippet(`}`)
                                                    })
                                                })
                                                $w.snippet(`})`)
                                            })
                                            $w.line(($w) => {
                                                $w.snippet(`callback({`)
                                                $w.indent(($w) => {
                                                    $w.line(($w) => {
                                                        $w.snippet(`annotation: $.annotation,`)
                                                    })
                                                    $w.line(($w) => {
                                                        $w.snippet(`children: temp`)
                                                    })
                                                })
                                                $w.snippet(`})`)
                                            })
                                        })
                                        break
                                    case "leaf":
                                        pr.cc($[1], ($) => {
                                        })
                                        break
                                    default:
                                        pr.au($[0])
                                }
                            }
                            generateType(
                                key,
                                $,
                                $w,
                            )
                        })
                        $w.snippet(`}`)
                    })
                })

                $w.line(($w) => {
                    $w.snippet(`return _${grammar.startRule}($, callback)`)
                })
            })
            $w.snippet(`}`)
        })
    }

    function generateVisitorTemplate($w: wapi.Block) {

        $w.line(($w) => {
            $w.snippet(`import * as pr from "pareto-runtime"`)
        })
        $w.line(($w) => {
            $w.snippet(`import * as api from "../interfaces/typedAST"`)
        })
        $w.line(($w) => { })

        $w.line(($w) => {
            $w.snippet(`export function visit<Annotation>(`)
            $w.indent(($w) => {
                $w.line(($w) => {
                    $w.snippet(`$: api.T${grammar.startRule}<Annotation>,`)
                })
                $w.line(($w) => {
                    $w.snippet(`report: (annotation: Annotation) => void,`)
                })
            })
            $w.snippet(`): void {`)
            $w.indent(($w) => {

                g.forEachEntry(grammar.tokenRules, ($, key) => {
                    $w.line(($w) => {

                        $w.snippet(`function _${key}(`)
                        $w.indent(($w) => {
                            $w.line(($w) => {
                                $w.snippet(`$: api.T${key}<Annotation>,`)
                            })
                        })
                        $w.snippet(`) {`)
                        $w.indent(($w) => {
                            function generateType(
                                $key: string,
                                $: g.Type,
                                $w: wapi.Block
                            ) {
                                switch ($[0]) {
                                    case "bag":
                                        pr.cc($[1], ($) => {
                                            $w.line(($w) => {
                                                $w.snippet(`report($.annotation)`)
                                            })
                                            $w.line(($w) => {
                                                $w.snippet(`$.children.forEach(($) => {`)
                                                $w.indent(($w) => {
                                                    $w.line(($w) => {

                                                        $w.snippet(`switch ($[0]) {`)
                                                        $w.indent(($w) => {
                                                            $.forEach(($) => {
                                                                $w.line(($w) => {
                                                                    switch ($[0]) {
                                                                        case "global":
                                                                            pr.cc($[1], ($) => {
                                                                                $w.snippet(`case "${$}": {`)
                                                                                $w.indent(($w) => {
                                                                                    $w.line(($w) => {
                                                                                        $w.snippet(`pr.cc($[1], ($) => {`)
                                                                                        $w.indent(($w) => {
                                                                                            $w.line(($w) => {
                                                                                                $w.snippet(`_${$}($)`)
                                                                                            })
                                                                                        })
                                                                                        $w.snippet(`})`)
                                                                                    })
                                                                                    $w.line(($w) => {
                                                                                        $w.snippet(`break`)
                                                                                    })
                                                                                })
                                                                                $w.snippet(`}`)
                                                                            })
                                                                            break
                                                                        case "local":
                                                                            pr.cc($[1], ($) => {
                                                                                $w.snippet(`case "${$[0]}": {`)
                                                                                $w.indent(($w) => {
                                                                                    $w.line(($w) => {
                                                                                        $w.snippet(`pr.cc($[1], ($) => {`)
                                                                                        $w.indent(($w) => {
                                                                                            generateType(
                                                                                                $[0],
                                                                                                $[1],
                                                                                                $w,
                                                                                            )
                                                                                            $w.line(($w) => {
                                                                                            })
                                                                                        })
                                                                                        $w.snippet(`})`)
                                                                                    })
                                                                                    $w.line(($w) => {
                                                                                        $w.snippet(`break`)
                                                                                    })
                                                                                })
                                                                                $w.snippet(`}`)
                                                                            })
                                                                            break
                                                                        default:
                                                                            pr.au($[0])
                                                                    }
                                                                })
                                                            })
                                                            $w.line(($w) => {
                                                                $w.snippet(`default: pr.au($[0])`)
                                                            })
                                                        })
                                                        $w.snippet(`}`)
                                                    })
                                                })
                                                $w.snippet(`})`)
                                            })
                                        })
                                        break
                                    case "leaf":
                                        pr.cc($[1], ($) => {
                                            $w.line(($w) => {
                                                $w.snippet(`//report($.annotation)//LEAF`)
                                            })
                                            $w.line(($w) => {
                                                $w.snippet(`//FIXME`)
                                            })
                                        })
                                        break
                                    default:
                                        pr.au($[0])
                                }
                            }
                            generateType(
                                key,
                                $,
                                $w,
                            )
                        })
                        $w.snippet(`}`)
                    })
                })

                $w.line(($w) => {
                    $w.snippet(`return _${grammar.startRule}($)`)
                })
            })
            $w.snippet(`}`)
        })
    }

    function generate(
        targetPath: string,
        func: (
            $w: wapi.Block,
        ) => void,
    ) {

        let apiOut = ""
        func(createFile(
            "    ",
            "\r\n",
            (str) => {
                apiOut += str
            }
        ))
        pr.writeFileSync(pr.join([targetDirPath, targetPath]), apiOut)
    }

    generate(
        "interfaces/typedAST/ts_api.generated.ts",
        generateAPI,
    )

    generate(
        "implementations/builder/builder.generated.ts",
        generateBuilder,
    )

    generate(
        "implementations/visitor_template.generated.ts",
        generateVisitorTemplate,
    )
}
