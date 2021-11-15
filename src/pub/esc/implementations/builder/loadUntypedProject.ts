import * as tsm from "ts-morph"
import * as ts from "typescript"
import * as uast from "../../interfaces/untypedAST"
import * as path from "path"

export function loadUntypedProject<Annotation>(
    tsconfigPath: string,
    callback: (
        project: uast.Project<Annotation>,
        getLineInfo: ($: Annotation) => string,
    ) => void,
    createAnnotation: ($: tsm.Node) => Annotation,
    getLineInfo: ($: Annotation) => string,
) {
    const project = new tsm.Project({})

    project.addSourceFilesFromTsConfig(tsconfigPath)

    //SKIP: project.resolveSourceFileDependencies()

    class XNode implements uast.Node<Annotation> {
        private imp: tsm.Node<ts.Node>
        private _annotation: Annotation
        constructor(
            imp: tsm.Node<ts.Node>,
            annotation: Annotation,
        ) {
            this.imp = imp
            this._annotation = annotation
        }
        get kindName() {
            return this.imp.getKindName()
        }
        get children() {
            return {
                forEach: (callback: ($: uast.Node<Annotation>) => void) => {
                    this.imp.forEachChild((x) => {
                        callback(wrapNode(x))
                    })
                }
            }
        }
        get annotation() {
            return this._annotation
        }
    }

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
        return new XNode(
            $,
            // {
            //     getLineInfo: () => {
            //         const lp = $.getSourceFile().getLineAndColumnAtPos($.getStart())
            //         return `[${lp.line}, ${lp.column}]`
            //     }
            // },
            createAnnotation($)
        )
    }
    callback(
        {
            get path() {
                return path.dirname(path.resolve(tsconfigPath))
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
        ($) => {
            return getLineInfo($)
            // const lp = $.getSourceFile().getLineAndColumnAtPos($.getStart())
            // return `[${lp.line}, ${lp.column}]`
        },
    )
}