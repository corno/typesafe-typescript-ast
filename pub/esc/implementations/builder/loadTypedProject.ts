// import * as tsm from "ts-morph"
// import { build } from "./builder.generated"
// import * as tast from "../../interfaces/typedAST"
// import { loadUntypedProject } from "./loadUntypedProject"

// export function loadTypedProject<Annotation>(
//     tsconfigPath: string,
//     callback: (
//         project: tast.Project<Annotation>,
//         getLineInfo: ($: Annotation) => string,
//     ) => void,
//     createAnnotation: ($: tsm.Node) => Annotation,
//     getLineInfo: ($: Annotation) => string,
// ) {
//     loadUntypedProject<Annotation>(
//         tsconfigPath,
//         (
//             project,
//             getLineInfo,
//         ) => {
//             callback(
//                 {
//                     sourceFiles: {
//                         forEach: (callback) => {
//                             project.sourceFiles.forEach(($) => {
//                                 build(
//                                     $.node,
//                                     ($)=> {
//                                         callback($)
//                                     },
//                                     ($) => {
//                                         return getLineInfo($)
//                                     }
//                                 )
//                             })
//                         },
//                     }
//                 },
//                 () => {
//                     return "FIXME"
//                 }
//             )
//         },
//         () => {

//         },
//         () => {

//         }
//     )
// }