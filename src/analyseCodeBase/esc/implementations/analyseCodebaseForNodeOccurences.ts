import * as pr from "pareto-runtime"
import { serialize } from "../../../grammar/esc/implementations"
import * as newGrm from "../../../grammar/esc/interfaces"
import * as uastAPI from "../../../pub/esc/interfaces/untypedAST"
import { createBlock } from "../../../write/esc/implementations"


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
        ) {
            if (grammar.tokens[$.kindName] === undefined) {
                grammar.tokens[$.kindName] = {
                    symbols: []
                }
            }
            const rule = grammar.tokens[$.kindName]
            let position = 0

            $.children.forEach(($) => {
                let currentSymbol = rule.symbols[position]
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
                parseNode(
                    $,
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

