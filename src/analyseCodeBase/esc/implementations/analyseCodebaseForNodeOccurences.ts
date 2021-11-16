import * as pr from "pareto-runtime"
import * as grm from "../../../generateCode/esc/interfaces/Grammar"
import { Line } from "../../../generateCode/esc/interfaces/WriteAPI"
import * as uastAPI from "../../../pub/esc/interfaces/untypedAST"
import { createBlock } from "./createBlock"

//import * as tsastImp from "../../../pub/esc"

export function analyseCodebaseForNodeOccurences<Annotation>(
    project: uastAPI.Project<Annotation>,
    grammar: grm.Grammar,
    getLocationInfo: (annotation: Annotation) => string,
    reportExistence: (
        filePath: string,
        annotation: Annotation,
    ) => void,
): void {

    const block = createBlock(
        "    ",
        "\r\n",
        ($) => {
            process.stdout.write($)
        }
    )

    block.line(($w) => {
        $w.snippet(`{`)
        $w.indent(($w) => {
            $w.line(($w) => {
                $w.snippet(`"tokenRules": {`)
                $w.indent(($w) => {
                    let isFirst = true
                    grm.forEachEntry(
                        grammar.tokenRules,
                        ($, key) => {
                            $w.line(($w) => {
                                $w.snippet(`"${key}": `)
                                function doType(
                                    $: grm.Type,
                                    $w: Line,
                                ) {
                                    switch ($[0]) {
                                        case "bag":
                                            pr.cc($[1], ($) => {
                                                $w.snippet(`["bag", [`)
                                                $w.indent(($w) => {
                                                    $.forEach(($) => {
                                                        $w.line(($w) => {
                                                            function doDefinition(
                                                                $: grm.Definition,
                                                                $w: Line,
                                                            ) {
                                                                switch ($[0]) {
                                                                    case "global":
                                                                        pr.cc($[1], ($) => {
                                                                            $w.snippet(`["global", "${$}"],`)
                                                                        })
                                                                        break
                                                                    case "local":
                                                                        pr.cc($[1], ($) => {
                                                                            $w.snippet(`["local", ["${$[0]}", `)
                                                                            doType(
                                                                                $[1],
                                                                                $w,
                                                                            )
                                                                            $w.snippet(`]],`)
                                                                        })
                                                                        break
                                                                    default:
                                                                        pr.au($[0])
                                                                }
                                                            }
                                                            doDefinition(
                                                                $,
                                                                $w,
                                                            )
                                                        })
                                                    })
                                                })
                                                $w.snippet(`]],`)
                                            })
                                            break
                                        case "leaf":
                                            pr.cc($[1], ($) => {
                                                $w.snippet(`["leaf", {}]`)
                                            })
                                            break
                                        default:
                                            pr.au($[0])
                                    }
                                }
                                doType(
                                    $,
                                    $w,
                                )
                                $w.snippet(`${isFirst ? "": ","}`)
                                isFirst = false
                            })
                        }
                    )
                })
                $w.snippet(`},`)
            })
            $w.line(($w) => {
                $w.snippet(`"startRule": "${grammar.startRule}"`)
            })
        })
        $w.snippet(`}`)
    })

    project.sourceFiles.forEach(($) => {
        const filePath = $.path

        if ($.node.kindName !== "SourceFile") {
            throw new Error("HMMMM")
        }
        if (!filePath.startsWith(project.path)) {
            throw new Error("unexpected")
        }



        function descend(
            $: uastAPI.Node<Annotation>,
            type: grm.Type | undefined,
        ) {
            if (type === undefined) {
                //console.log("FIXME TYPE")
            } else {
                switch (type[0]) {
                    case "bag":
                        pr.cc(type[1], ($g) => {
                            //g.grammar.tokenRules[type]
                        })
                        break
                    case "leaf":
                        pr.cc(type[1], (definition) => {
                            $.children.forEach(($) => {
                                // if (t.index[type].indexOf($.kin dName) === -1) {
                                //     console.log(`MISSINGXX: ${type}>${$.kindName} @ ${getLocationInfo($.annotation)}`)
                                // }
                                console.log($.kindName)
                                descend(
                                    $,
                                    undefined,
                                )
                            })
                        })
                        break
                    default:
                        pr.au(type[0])
                }
                // switch (definition[0]) {
                //     case "global":
                //         cc(definition[1], (definition) => {
                //             g.grammar.tokenRules[type]
                //         })
                //         break
                //     case "local":
                //         cc(definition[1], (definition) => {
                //         })
                //         break
                //     default:
                //         assertUnreachable(definition[0])
                // }
            }




            // const children = t.index[type]
            // if (children === undefined) {
            //     //console.log(`MISSING TYPE: ${type}`)
            // } else {
            $.children.forEach(($) => {
                // if (t.index[type].indexOf($.kindName) === -1) {
                //     console.log(`MISSINGXX: ${type}>${$.kindName} @ ${getLocationInfo($.annotation)}`)
                // }
                //console.log($.kindName)
                descend(
                    $,
                    undefined,
                )
            })
            // }
        }
        descend(
            $.node,
            grammar.tokenRules[grammar.startRule]
        )

    })
}

