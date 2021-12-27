import * as pr from "pareto-runtime"
import * as tsmorph from "ts-morph";
import * as uast from "../../../pub/esc/interfaces/untypedAST"
import { loadTypedProject } from "../../../pub/esc/implementations/parser/loadTypedProject";
import { createFoo } from "./foo";
import * as path from "path"
import { visit } from "../../../pub/esc/typescriptAST/esc/implementation/visitor_template.generated";

function getLineInfo(
    $: tsmorph.Node,
) {
    const lp = $.getSourceFile().getLineAndColumnAtPos($.getStart())
    return `[${lp.line}, ${lp.column}]`
}

export function testTypedProjectLoading(
    tsconfigPath: string
) {
    loadTypedProject<tsmorph.Node>({
        callback: ($) => {
            $.sourceFiles.forEach(($) => {
                console.log($.path)
                visit(
                    $.root,
                    createFoo(
                        (str) => {
                            //console.log(`    ${str}`)
                        }
                    ),
                )
            })
        },
        createAnnotation: ($) => {
            return $
        },
        reportUnexpectedRoot: ($) => {
            console.error(`>unexpected root '${$.child.getKindName()}' @ ${$.path}${getLineInfo($.child)}`)
        },
        reportUnexpectedChild: ($) => {
            console.error(`>'${$.nodePath}': unexpected child '${$.child.getKindName()}', expected ${$.expected === null ? "nothing" : $.expected.map(($) => `'${$}'`).join(" or ")}} @ ${$.filePath}${getLineInfo($.child)}`)
        },
        reportMissingSymbol: ($) => {
            console.error(`>'${$.nodePath}': missing symbol (options: ${$.kindNameOptions.map(($) => `'${$}'`).join(", ")}) @ ${$.filePath}${$.parentAnnotation === null ? "" : getLineInfo($.parentAnnotation)}`)
        },
        loadUntypedProject: ($p) => {
            const project = new tsmorph.Project({})
            project.addSourceFilesFromTsConfig(tsconfigPath)

            $p.callback(
                {
                    get path() {
                        return pr.dirname(path.resolve(tsconfigPath))
                    },
                    sourceFiles: {
                        forEach: ((callback) => {
                            project.getSourceFiles().forEach(($) => {
                                function wrapNode($: tsmorph.Node): uast.Node<tsmorph.Node> {
                                    class WrappedNode implements uast.Node<tsmorph.Node> {
                                        get kindName() {
                                            return $.getKindName()
                                        }
                                        get value() {
                                            return $.getText()
                                        }
                                        get children() {
                                            return {
                                                forEach: (callback: ($: uast.Node<tsmorph.Node>) => void) => {
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
                                callback({
                                    path: $.getFilePath(),
                                    node: wrapNode($)
                                })
                            })
                        })
                    }
                },
            )
        }
    })
}