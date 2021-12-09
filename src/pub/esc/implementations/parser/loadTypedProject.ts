import * as tsm from "ts-morph"
import { createParser } from "./parser.generated"
import * as tast from "../../interfaces/typedAST"
import * as uast from "../../interfaces/untypedAST"

import { loadUntypedProject } from "./loadUntypedProject"
import { Consumer, createDummyConsumer, Node } from "./Consumer"

export function loadTypedProject<Annotation>($p: {
    tsconfigPath: string,
    callback: (
        project: tast.Project<Annotation>,
    ) => void,
    createAnnotation: ($: tsm.Node) => Annotation,
    reportUnexpectedChild: ($: {
        parentKindName: string,
        child: Annotation,
        path: string,
    }) => void,
    reportMissingSymbol: ($: {
        parentAnnotation: Annotation | null,
        parentKindName: string,
        symbolName: string,
        path: string,
    }) => void,
}) {
    loadUntypedProject<Annotation>({
        tsconfigPath: $p.tsconfigPath,
        callback: (
            project,
        ) => {
            $p.callback(
                {
                    sourceFiles: {
                        forEach: (callback) => {
                            project.sourceFiles.forEach(($) => {
                                const path = $.path
                                function doNode(
                                    $: uast.Node<Annotation>,
                                    parser: Consumer<Annotation>,
                                ) {

                                    $.children.forEach(($) => {
                                        doNode(
                                            $,
                                            parser.onNode({
                                                kindName: $.kindName,
                                                annotation: $.annotation,
                                            }),
                                        )
                                    })
                                    parser.onEnd()
                                }
                                doNode(
                                    $.node,
                                    createParser(
                                        ($) => {
                                            callback({
                                                root: $
                                            })
                                        },
                                        ($) => {
                                            $p.reportUnexpectedChild({
                                                parentKindName: $.parentKindName,
                                                child: $.child.annotation,
                                                path: path
                                            })
                                            return createDummyConsumer()
                                        },
                                        ($) => {
                                            $p.reportMissingSymbol({
                                                parentAnnotation: $.parentAnnotation,
                                                parentKindName: $.parentKindName,
                                                symbolName: $.symbolName,
                                                path: path
                                            })
                                        }
                                    ),
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