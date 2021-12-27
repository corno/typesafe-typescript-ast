import * as tsm from "ts-morph"
import * as tast from "../../interfaces/typedAST"
import * as uast from "../../interfaces/untypedAST"
import { parse } from "../../typescriptAST/implementation/parser.generated"

export function loadTypedProject<Annotation>($p: {
    callback: (
        project: tast.Project<Annotation>,
    ) => void,
    createAnnotation: ($: tsm.Node) => Annotation,
    reportUnexpectedRoot: ($: {
        child: Annotation,
        path: string,
    }) => void,
    reportUnexpectedChild: ($: {
        filePath: string,
        nodePath: string,
        child: Annotation,
        expected: null | string[]
    }) => void,
    reportMissingSymbol: ($: {
        filePath: string,
        parentAnnotation: Annotation,
        nodePath: string,
        kindNameOptions: string[],
    }) => void,
    loadUntypedProject: ($p: {
        callback: (
            project: uast.Project<Annotation>,
            //getLineInfo: ($: Annotation) => string,
        ) => void,
        createAnnotation: ($: tsm.Node) => Annotation,
    }) => void
}) {
    $p.loadUntypedProject({
        callback: (
            project,
        ) => {
            $p.callback(
                {
                    sourceFiles: {
                        forEach: (callback) => {
                            project.sourceFiles.forEach(($) => {
                                const path = $.path

                                parse<Annotation>(
                                    $.node,
                                    ($) => {
                                        callback({
                                            path: path,
                                            root: $
                                        })
                                    },
                                    ($) => {
                                        $p.reportUnexpectedRoot({
                                            child: $.root.annotation,
                                            path: path
                                        })
                                    },
                                    ($) => {
                                        $p.reportUnexpectedChild({
                                            nodePath: $.path,
                                            child: $.child.annotation,
                                            filePath: path,
                                            expected: $.expected,
                                        })
                                    },
                                    ($) => {
                                        $p.reportMissingSymbol({
                                            filePath: path,
                                            parentAnnotation: $.parentAnnotation,
                                            nodePath: $.path,
                                            kindNameOptions: $.kindNameOptions,
                                        })
                                    }
                                )
                            })
                        },
                    }
                },
                // ($) => {
                //     return getLineInfo($)
                // }
            )
        },
        createAnnotation: ($) => {
            return $p.createAnnotation($)
        },
        // getLineInfo: ($) => {
        //     return $p.getLineInfo($)
        // }
    })
}