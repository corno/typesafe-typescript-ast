import * as pr from "pareto-runtime"
import { createFile } from "./createFile"
import * as g from "./grammar"
import { Block } from "./WriteAPI"

function assertUnreachable<RT>(_x: never): RT {
    throw new Error("unreachable")
}
function cc<T, RT>(input: T, callback: (output: T) => RT): RT {
    return callback(input)
}

const [, , targetDirPath] = pr.getProcessArguments()
if (targetDirPath === undefined) {
    console.error("missing target directory path")
    pr.processExit(1)
}

function forEachEntry<T>(
    dictionary: { [key: string]: T },
    callback: (entry: T, key: string) => void,
) {
    Object.keys(dictionary).forEach((key) => {
        callback(dictionary[key], key)
    })
}

function generateAPI($w: Block) {
    $w.line(($w) => {
        $w.snippet(`import * as pr from "pareto-runtime"`)
    })
    forEachEntry(g.grammar.tokenRules, ($, key) => {
        function generateType(
            $k: string,
            $: g.Type,
        ) {
            switch ($[0]) {
                case "bag":
                    cc($[1], ($) => {
                        $.forEach(($) => {
                            switch ($[0]) {
                                case "global":
                                    cc($[1], ($) => {
                                    })
                                    break
                                case "local":
                                    cc($[1], ($) => {
                                        generateType(
                                            $[0],
                                            $[1],
                                        )
                                    })
                                    break
                                default:
                                    assertUnreachable($[0])
                            }
                        })
                    })
                    break
                case "leaf":
                    cc($[1], ($) => {
                    })
                    break
                default:
                    assertUnreachable($[0])
            }
            $w.line(($w) => {
                $w.snippet(``)
            })
            $w.line(($w) => {
                $w.snippet(`export type C${$k}<Annotation> = `)
                switch ($[0]) {
                    case "bag":
                        cc($[1], ($) => {
                            $w.indent(($w) => {
                                $.forEach(($) => {
                                    $w.line(($w) => {
                                        switch ($[0]) {
                                            case "global":
                                                cc($[1], ($) => {
                                                    $w.snippet(`| ["${$}", T${$}<Annotation>]`)
                                                })
                                                break
                                            case "local":
                                                cc($[1], ($) => {
                                                    $w.snippet(`| ["${$[0]}", T${$[0]}<Annotation>]`)
                                                })
                                                break
                                            default:
                                                assertUnreachable($[0])
                                        }
                                    })
                                })
                            })
                        })
                        break
                    case "leaf":
                        cc($[1], ($) => {
                            $w.snippet(`number`)
                        })
                        break
                    default:
                        assertUnreachable($[0])
                }

            })
            $w.line(($w) => {
                $w.snippet(`export type T${$k}<Annotation> = `)
                switch ($[0]) {
                    case "bag":
                        cc($[1], ($) => {
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
                        cc($[1], ($) => {
                            $w.snippet(`number`)
                        })
                        break
                    default:
                        assertUnreachable($[0])
                }

            })
        }
        generateType(
            key,
            $,
        )
    })

    $w.line(($w) => {
        $w.snippet(`export type Root<Annotation> = T${g.grammar.startRule}<Annotation>`)
    })

}

function generateBuilder($w: Block) {

    $w.line(($w) => {
        $w.snippet(`import * as pr from "pareto-runtime"`)
    })
    $w.line(($w) => {
        $w.snippet(`import * as uapi from "./untypedAPI"`)
    })
    $w.line(($w) => {
        $w.snippet(`import * as tapi from "./ts_api.generated"`)
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
                $w.snippet(`$: uapi.Node<Annotation>,`)
            })
            $w.line(($w) => {
                $w.snippet(`callback: ($: tapi.T${g.grammar.startRule}<Annotation>) => void,`)
            })
            $w.line(($w) => {
                $w.snippet(`reportUnexpectedChild: ($: { parent: uapi.Node<Annotation>, child: uapi.Node<Annotation>, }) => void,`)
            })
        })
        $w.snippet(`): void {`)
        $w.indent(($w) => {

            forEachEntry(g.grammar.tokenRules, ($, key) => {
                $w.line(($w) => {

                    $w.snippet(`function _${key}(`)
                    $w.indent(($w) => {
                        $w.line(($w) => {
                            $w.snippet(`$: uapi.Node<Annotation>,`)
                        })
                        $w.line(($w) => {
                            $w.snippet(`callback: ($: tapi.T${key}<Annotation>) => void,`)
                        })
                    })
                    $w.snippet(`) {`)
                    $w.indent(($w) => {
                        function generateType(
                            $k: string,
                            $: g.Type,
                            $w: Block,
                        ) {
                            switch ($[0]) {
                                case "bag":
                                    cc($[1], ($) => {
                                        $w.line(($w) => {
                                            $w.snippet(`const temp: tapi.C${$k}<Annotation>[] = []`)
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
                                                                    cc($[1], ($) => {
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
                                                                    cc($[1], ($) => {
                                                                        $w.line(($w) => {
                                                                            $w.snippet(`case "${$[0]}": {`)
                                                                            $w.indent(($w) => {
                                                                                $w.line(($w) => {
                                                                                    $w.snippet(`const callback = ($: tapi.T${$[0]}<Annotation>) => {`)
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
                                                                    assertUnreachable($[0])
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
                                    cc($[1], ($) => {
                                    })
                                    break
                                default:
                                    assertUnreachable($[0])
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
                $w.snippet(`return _${g.grammar.startRule}($, callback)`)
            })
        })
        $w.snippet(`}`)
    })
}

function generateVisitorTemplate($w: Block) {

    $w.line(($w) => {
        $w.snippet(`import * as pr from "pareto-runtime"`)
    })
    $w.line(($w) => {
        $w.snippet(`import * as api from "./ts_api.generated"`)
    })
    $w.line(($w) => { })

    $w.line(($w) => {
        $w.snippet(`export function visit<Annotation>(`)
        $w.indent(($w) => {
            $w.line(($w) => {
                $w.snippet(`$: api.T${g.grammar.startRule}<Annotation>,`)
            })
            $w.line(($w) => {
                $w.snippet(`report: (annotation: Annotation) => void,`)
            })
        })
        $w.snippet(`): void {`)
        $w.indent(($w) => {

            forEachEntry(g.grammar.tokenRules, ($, key) => {
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
                            $w: Block
                        ) {
                            switch ($[0]) {
                                case "bag":
                                    cc($[1], ($) => {
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
                                                                        cc($[1], ($) => {
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
                                                                        cc($[1], ($) => {
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
                                                                        assertUnreachable($[0])
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
                                    cc($[1], ($) => {
                                        $w.line(($w) => {
                                            $w.snippet(`//report($.annotation)//LEAF`)
                                        })
                                        $w.line(($w) => {
                                            $w.snippet(`//FIXME`)
                                        })
                                    })
                                    break
                                default:
                                    assertUnreachable($[0])
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
                $w.snippet(`return _${g.grammar.startRule}($)`)
            })
        })
        $w.snippet(`}`)
    })
}

function generate(
    targetPath: string,
    func: (
        $w: Block,
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
    "ts_api.generated.ts",
    generateAPI,
)

generate(
    "builder.generated.ts",
    generateBuilder,
)

generate(
    "visitor_template.generated.ts",
    generateVisitorTemplate,
)
