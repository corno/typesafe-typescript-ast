// import * as t from "./types"
// import * as p from "./TypeScriptAPI/untypedAPI"
// import * as tsapi from "./TypeScriptAPI/generated_ts_api"
// import * as builder from "./TypeScriptAPI/generated_builder"
// import { visit } from "./TypeScriptAPI/generated_visitor_template"

// export function handleProject<Annotation>(
//     project: p.Project<Annotation>,
//     getLocationInfo: (annotation: Annotation) => string,
//     reportExistence: (
//         filePath: string,
//         annotation: Annotation,
//     ) => void,
// ) {
//     try {
//         project.sourceFiles.forEach(($) => {
//             const filePath = $.path
//             builder.root(
//                 $.node,
//                 ($) => {
//                     visit(
//                         $,
//                         ($) => {
//                             reportExistence(filePath, $)
//                         },
//                     )
//                 },
//                 // ($) => {
//                 //     return `${filePath}: ${getLocationInfo($.annotation)}`
//                 // },
//                 ($) => {
//                     return console.log(`unexpected child: '${$.child.kindName}' in '${$.parent.kindName}' @ ${filePath}: ${getLocationInfo($.child.annotation)}`)
//                 }
//             )
//         })


//     } catch (e) {
//         if (!(e instanceof builder.UnrecognizedNodeError)) {
//             throw e
//         } else {
//             console.error(`Encountered 1 or more unexpected typescript nodes, please mail files specified below to corno@schraverus.com`)

//             project.sourceFiles.forEach(($) => {
//                 const filePath = $.path

//                 if ($.node.kindName !== "SourceFile") {
//                     throw new Error("HMMMM")
//                 }
//                 if (!filePath.startsWith(project.path)) {
//                     throw new Error("unexpected")
//                 }
//                 const relativePath = filePath.substr(project.path.length)

//                 function descend(
//                     $: p.Node<Annotation>,
//                     indentation: string,
//                     type: string,
//                 ) {
//                     // switch (definition[0]) {
//                     //     case "global":
//                     //         cc(definition[1], (definition) => {
//                     //             g.grammar.tokenRules[type]
//                     //         })
//                     //         break
//                     //     case "local":
//                     //         cc(definition[1], (definition) => {
//                     //         })
//                     //         break
//                     //     default:
//                     //         assertUnreachable(definition[0])
//                     // }
//                     const children = t.index[type]
//                     if (children === undefined) {
//                         //console.log(`MISSING TYPE: ${type}`)
//                     } else {
//                         $.children.forEach(($) => {
//                             if (t.index[type].indexOf($.kindName) === -1) {
//                                 console.log(`MISSINGXX: ${type}>${$.kindName} @ ${getLocationInfo($.annotation)}`)
//                             }
//                             descend(
//                                 $,
//                                 indentation + "    ",
//                                 $.kindName,
//                             )
//                         })
//                     }
//                 }
//                 descend(
//                     $.node,
//                     "    ",
//                     "SourceFile",
//                 )

//             })
//         }

//     }

//     // const usages: { [key: string]: number } = {}

//     // Object.keys(index).forEach((key) => {
//     //     let counter = 0
//     //     Object.keys(index).forEach((candidateKey) => {
//     //         const candidate = index[candidateKey]
//     //         candidate.forEach((refKey) => {
//     //             if (refKey === key) {
//     //                 counter += 1
//     //             }
//     //         })

//     //     })
//     //     usages[key] = counter
//     // })

//     // const newIndex: g.Grammar = {
//     //     tokenRules: {}
//     // }

//     // function doToken(
//     //     $: string
//     // ): g.Y {
//     //     if (usages[$] === 1) {
//     //         const ref = index[$]
//     //         return ["local", [$, ["bag", ref.map(($) => {
//     //             return doToken($)
//     //         })]]]
//     //     } else {
//     //         return ["global", $]
//     //     }
//     // }

//     // Object.keys(index).forEach((key) => {
//     //     const entry = index[key]
//     //     if (usages[key] > 1) {
//     //         newIndex.tokenRules[key] = ["bag", entry.map(($) => {
//     //             return doToken($)
//     //         })]
//     //     }
//     // })

//     // console.log(JSON.stringify(newIndex, undefined, "\t"))
// }

