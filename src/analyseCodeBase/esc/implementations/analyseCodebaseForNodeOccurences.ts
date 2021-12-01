import * as pr from "pareto-runtime"
import * as newGrm from "../../../generateCode/esc/interfaces/NewGrammar"
import * as uastAPI from "../../../pub/esc/interfaces/untypedAST"
import { createBlock } from "./createBlock"
import * as wapi from "./WriteAPI"


function serialize(
    grammar: newGrm.NewGrammar,
    $w: wapi.Block,
) {

    $w.line(($w) => {
        $w.snippet(`{`)
        $w.indent(($w) => {
            $w.line(($w) => {
                $w.snippet(`tokens: {`)
                $w.indent(($w) => {
                    let isFirst = true
                    newGrm.forEachEntry(
                        grammar.tokens,
                        ($, key) => {
                            $w.line(($w) => {
                                $w.snippet(`"${key}": `)
                                function doRule(
                                    $: newGrm.Rule,
                                    $w: wapi.Line,
                                ) {
                                    $w.snippet(`{`)
                                    $w.indent(($w) => {
                                        $w.line(($w) => {
                                            $w.snippet(`elements: [`)
                                            $w.indent(($w) => {
                                                $.symbols.forEach(($) => {
                                                    $w.line(($w) => {
                                                        $w.snippet(`[`)
                                                        switch ($[0]) {
                                                            case "token":
                                                                pr.cc($[1], ($) => {
                                                                    $w.snippet(`"token", {`)
                                                                    $w.indent(($w) => {
                                                                        $w.line(($w) => {
                                                                            $w.snippet(`optional: ${$.optional},`)
                                                                        })
                                                                        $w.line(($w) => {
                                                                            $w.snippet(`options: {`)
                                                                            $w.indent(($w) => {
                                                                                newGrm.forEachEntry($.options, ($, key) => {
                                                                                    $w.line(($w) => {
                                                                                        $w.snippet(`"${key}": {},`)
                                                                                    })
                                                                                })
                                                                            })
                                                                            $w.snippet(`}`)
                                                                        })
                                                                    })
                                                                    $w.snippet(`}`)
                                                                })
                                                                break
                                                            case "array":
                                                                pr.cc($[1], ($) => {
                                                                    $w.snippet(`"array", {`)
                                                                    $w.indent(($w) => {
                                                                        $w.line(($w) => {
                                                                            $w.snippet(`type: `)

                                                                            doRule(
                                                                                $.type,
                                                                                $w,
                                                                            )
                                                                        })
                                                                    })
                                                                    $w.snippet(`}`)
                                                                })
                                                                break
                                                            default:
                                                                pr.au($[0])
                                                        }

                                                        $w.snippet(`]`)
                                                        $w.snippet(`,`)
                                                    })
                                                })
                                            })
                                            $w.snippet(`]`)
                                        })
                                    })
                                    $w.snippet(`}`)
                                }
                                doRule(
                                    $,
                                    $w,
                                )
                                $w.snippet(`${isFirst ? "" : ","}`)
                                isFirst = false
                            })
                        }
                    )
                })
                $w.snippet(`},`)
            })
            $w.line(($w) => {
                $w.snippet(`startToken: "${grammar.startToken}"`)
            })
        })
        $w.snippet(`}`)
    })

}

export function analyseCodebaseForNodeOccurences<Annotation>(
    project: uastAPI.Project<Annotation>,
    grammar: newGrm.NewGrammar,
    getLocationInfo: (annotation: Annotation) => string,
    reportExistence: (
        filePath: string,
        annotation: Annotation,
    ) => void,
): void {

    project.sourceFiles.forEach(($) => {
        const filePath = $.path

        if ($.node.kindName !== "SourceFile") {
            throw new Error("HMMMM")
        }
        if (!filePath.startsWith(project.path)) {
            throw new Error("unexpected")
        }

        function parseNode(
            $: uastAPI.Node<Annotation>,
            rule: newGrm.Rule,
        ) {
            let position = 0

            $.children.forEach(($) => {
                let currentSymbol = rule.symbols[position]
                while (true) {
                    if (currentSymbol === undefined) {
                        //No symbol, create one
                        const options: newGrm.Options = {}
                        options[$.kindName] = {}
                        rule.symbols.push(["array", {
                            type: {
                                "symbols": [
                                    ["token", {
                                        "optional": false,
                                        "options": options
                                    }]
                                ]
                            }
                        }])
                    } else {
                        switch (currentSymbol[0]) {
                            case "array":
                                pr.cc(currentSymbol[1], ($r) => {
                                    //FIXME
                                })
                                break
                            case "token":
                                pr.cc(currentSymbol[1], ($r) => {

                                    if ($r.options[$.kindName] !== undefined) {
                                        //nothing to do except increment counter
                                        position++
                                    } else {

                                    }
                                    // && !$r.optional) {
                                    //     $r.options[$.kindName] = {}
                                    // }
                                })
                                break
                            default:
                                pr.au(currentSymbol[0])
                        }
                    }
                }
                if (grammar.tokens[$.kindName] === undefined) {
                    grammar.tokens[$.kindName] = {
                        symbols: []
                    }
                }
                parseNode(
                    $,
                    grammar.tokens[$.kindName],
                )
            })

            //         if (type === undefined) {
            //             //console.log("FIXME TYPE")
            //         } else {
            //             switch (type[0]) {
            //                 case "bag":
            //                     pr.cc(type[1], ($g) => {
            //                         //g.grammar.tokenRules[type]
            //                     })
            //                     break
            //                 case "leaf":
            //                     pr.cc(type[1], (definition) => {
            //                         $.children.forEach(($) => {
            //                             // if (t.index[type].indexOf($.kin dName) === -1) {
            //                             //     console.log(`MISSINGXX: ${type}>${$.kindName} @ ${getLocationInfo($.annotation)}`)
            //                             // }
            //                             console.log($.kindName)
            //                             descend(
            //                                 $,
            //                                 undefined,
            //                             )
            //                         })
            //                     })
            //                     break
            //                 default:
            //                     pr.au(type[0])
            //             }
            //             // switch (definition[0]) {
            //             //     case "global":
            //             //         cc(definition[1], (definition) => {
            //             //             g.grammar.tokenRules[type]
            //             //         })
            //             //         break
            //             //     case "local":
            //             //         cc(definition[1], (definition) => {
            //             //         })
            //             //         break
            //             //     default:
            //             //         assertUnreachable(definition[0])
            //             // }
            //         }




            //         // const children = t.index[type]
            //         // if (children === undefined) {
            //         //     //console.log(`MISSING TYPE: ${type}`)
            //         // } else {
            //         $.children.forEach(($) => {
            //             // if (t.index[type].indexOf($.kindName) === -1) {
            //             //     console.log(`MISSINGXX: ${type}>${$.kindName} @ ${getLocationInfo($.annotation)}`)
            //             // }
            //             //console.log($.kindName)
            //             descend(
            //                 $,
            //                 undefined,
            //             )
            //         })
            //         // }
        }
        parseNode(
            $.node,
            grammar.tokens[grammar.startToken]
        )

    })

    serialize(
        grammar,
        createBlock(
            "    ",
            "\r\n",
            ($) => {
                process.stdout.write($)
            }
        )
    )
}

