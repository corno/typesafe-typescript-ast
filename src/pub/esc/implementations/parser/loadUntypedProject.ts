import * as tsm from "ts-morph"
import * as ts from "typescript"
import * as uast from "../../interfaces/untypedAST"
import * as path from "path"

export function loadUntypedProject<Annotation>($p: {
    tsconfigPath: string,
    callback: (
        project: uast.Project<Annotation>,
        //getLineInfo: ($: Annotation) => string,
    ) => void,
    createAnnotation: ($: tsm.Node) => Annotation,
}) {
    const project = new tsm.Project({})

    project.addSourceFilesFromTsConfig($p.tsconfigPath)

    //SKIP: project.resolveSourceFileDependencies()



    function wrapNode($: tsm.Node<ts.Node>): uast.Node<Annotation> {
        // return {
        //     get kindName() {
        //         return $.getKindName()
        //     },
        //     get startLineNumber() {
        //         return $.getStartLineNumber()
        //     },
        //     get startLinePos() {
        //         return $.getStartLinePos()
        //     },
        //     children: {
        //         forEach: (callback) => {
        //             $.forEachChild((x) => {
        //                 callback(wrapNode(x))
        //             })
        //         }
        //     },
        //     get annotation() {
        //         return $
        //     },
        // }

        // {
        //     getLineInfo: () => {
        //         const lp = $.getSourceFile().getLineAndColumnAtPos($.getStart())
        //         return `[${lp.line}, ${lp.column}]`
        //     }
        // },
        class WrappedNode implements uast.Node<Annotation> {
            get kindName() {
                return $.getKindName()
            }
            get children() {
                return {
                    forEach: (callback: ($: uast.Node<Annotation>) => void) => {
                        $.forEachChild((x) => {
                            callback(wrapNode(x))
                        })
                    }
                }
            }
            get annotation() {
                return $p.createAnnotation($)
            }
        }
        return new WrappedNode()
    }
    $p.callback(
        {
            get path() {
                return path.dirname(path.resolve($p.tsconfigPath))
            },
            sourceFiles: {
                forEach: ((callback) => {
                    project.getSourceFiles().forEach(($) => {
                        callback({
                            path: $.getFilePath(),
                            node: wrapNode($)
                        })
                    })
                })
            }
        },
        // ($) => {
        //     return $p.getLineInfo($)
        //     // const lp = $.getSourceFile().getLineAndColumnAtPos($.getStart())
        //     // return `[${lp.line}, ${lp.column}]`
        // },
    )
}