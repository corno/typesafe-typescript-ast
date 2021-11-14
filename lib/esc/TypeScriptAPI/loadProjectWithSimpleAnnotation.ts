import * as tsm from "ts-morph"
import * as ts from "typescript"
import * as p from "./untypedAPI"
import * as path from "path"

export type SimpleNode = {
    getLineInfo: () => string
}

export function loadProjectWithSimpleAnnotation(
    tsconfigPath: string,
    callback: (
        project: p.Project<SimpleNode>,
        getLineInfo: ($: SimpleNode) => string,
    ) => void,
) {
    const project = new tsm.Project({})

    project.addSourceFilesFromTsConfig(tsconfigPath)

    //SKIP: project.resolveSourceFileDependencies()

    class XNode implements p.Node<SimpleNode> {
        private imp: tsm.Node<ts.Node>
        private _annotation: SimpleNode
        constructor(
            imp: tsm.Node<ts.Node>,
            annotation: SimpleNode,
        ) {
            this.imp = imp
            this._annotation = annotation
        }
        get kindName() {
            return this.imp.getKindName()
        }
        get children() {
            return {
                forEach: (callback: ($: p.Node<SimpleNode>) => void) => {
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

    project.getSourceFiles().forEach(($) => {
        if ($.getKindName() === "assdfafdssfskja;sdf") {
            console.log("XXXXX")
        }
    })

    function wrapNode($: tsm.Node<ts.Node>): p.Node<SimpleNode> {
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
            {
                getLineInfo: () => {
                    const lp = $.getSourceFile().getLineAndColumnAtPos($.getStart())
                    return `[${lp.line}, ${lp.column}]`
                }
            },
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
            return $.getLineInfo()
            // const lp = $.getSourceFile().getLineAndColumnAtPos($.getStart())
            // return `[${lp.line}, ${lp.column}]`
        },
    )
}