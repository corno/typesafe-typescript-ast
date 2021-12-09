import * as pr from "pareto-runtime"
import { findNextPossibleTokens, SymbolIterator } from "../../../generateCode/esc/implementations/findNextPossibleTokens"
import { serialize } from "../../../grammar/esc/implementations"
import * as newGrm from "../../../grammar/esc/interfaces"
import * as uastAPI from "../../../pub/esc/interfaces/untypedAST"
import { createBlock } from "../../../write/esc/implementations"


export function analyseCodebaseForNodeOccurences<Annotation>(
    project: uastAPI.Project<Annotation>,
    grammar: newGrm.NewGrammar,
    reportExistence: (
        filePath: string,
        annotation: Annotation,
    ) => void,
): void {

    let changed = false
    project.sourceFiles.forEach(($) => {
        const filePath = $.path

        if ($.node.kindName !== "SourceFile") {
            throw new Error("HMMMM")
        }
        if (!filePath.startsWith(project.path)) {
            throw new Error("unexpected")
        }

        function getToken(
            name: string
        ) {
            if (grammar.tokens[name] === undefined) {
                grammar.tokens[name] = {
                    symbols: []
                }
            }
            return grammar.tokens[name]
        }
        function parseNode(
            rule: newGrm.Rule,
            $: uastAPI.Node<Annotation>,
        ) {
            let si: SymbolIterator = {
                symbols: rule.symbols,
                position: 0,
            }
            //let position = 0

            $.children.forEach(($) => {
                const child = $
                if (si.symbols.length <= si.position) {
                    console.error("Unexpected token!!!!")
                } else {
                    let currentSymbol = si.symbols[si.position]
                    switch (currentSymbol.type[0]) {
                        case "array":
                            pr.cc(currentSymbol.type[1], ($) => {
                                console.log("FIXME!!!!!!!!!!!!!!")
                                // findNextToken(
                                //     {
                                //         symbols: rule.symbols,
                                //         position: 0,
                                //     },
                                //     (token) => {
                                //         console.log("FIXME!!")
                                //     },
                                //     () => {
                                //         console.log("FIXME!!!")
                    
                                //     }
                                // )
                            })
                            break
                        case "choice":
                            pr.cc(currentSymbol.type[1], ($) => {
                                console.log("FIXME!!!!!!!XXXXX!!!!!!!")

                            })
                            break
                        case "token":
                            pr.cc(currentSymbol.type[1], ($) => {
                                if ($.name !== child.kindName) {
                                    console.error("MISMATCH")
                                }
                                parseNode(
                                    getToken(child.kindName),
                                    child,
                                )
                                si.position += 1
                            })
                            break
                        default:
                            pr.au(currentSymbol.type[0])
                    }
                }
                // if (currentSymbol)
                // while (true) {
                //     if (currentSymbol === undefined) {
                //         //No symbol, create one
                //         const options: newGrm.Options = {}
                //         options[$.kindName] = {}
                //         rule.symbols.push(["array", {
                //             type: {
                //                 "symbols": [
                //                     ["token", {
                //                         "optional": false,
                //                         "options": options
                //                     }]
                //                 ]
                //             }
                //         }])
                //     } else {
                //         switch (currentSymbol[0]) {
                //             case "array":
                //                 pr.cc(currentSymbol[1], ($r) => {
                //                     //FIXME
                //                 })
                //                 break
                //             case "token":
                //                 pr.cc(currentSymbol[1], ($r) => {

                //                     if ($r.options[$.kindName] !== undefined) {
                //                         //nothing to do except increment counter
                //                         position++
                //                     } else {

                //                     }
                //                     // && !$r.optional) {
                //                     //     $r.options[$.kindName] = {}
                //                     // }
                //                 })
                //                 break
                //             default:
                //                 pr.au(currentSymbol[0])
                //         }
                //     }
                // }
                // parseNode(
                //     $,
                // )
            })
            if (si.symbols.length > si.position) {
                console.error("Missing token!!!!")
            }

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
            getToken(grammar.startToken),
            $.node,
        )

    })

    if (changed) {
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
    } else {
        console.warn("codebase conforms to grammar")
    }
}

