#!/usr/bin/env node
import * as pr from "pareto-runtime"
import * as pf from "pareto-filesystem"
import * as tsg from "../../data/typescriptGrammar"
import * as gta from "generate-typesafe-ast"
import * as fp from "fountain-pen"

pr.runProgram(
    ($) => {

        const targetDirPath = $.argument
        function x() {


            if (targetDirPath === undefined) {
                pr.logError("missing target directory path")
                pr.processExit(1)
            } else {

                fp.createContext(
                    pr.trimRight,
                ).configure(
                    {
                        newline: "\r\n",
                        trimLines: true,
                        indentation: "    ",
                    },
                    ($i) => {
                        const wc = $i
                        pf.wrapDirectory(
                            {
                                rootDirectory: pr.join([targetDirPath, "typescriptAST"]),
                            },
                            {
                                callback: ($i) => {
                                    const dir = $i
                                    gta.generateCode(
                                        {
                                            grammar: tsg.typeScriptGrammar,
                                        },
                                        {
                                            onError: ($) => {
                                                console.error($)
                                            },
                                            createWriteStream: ($, $i) => {
                                                const x = $i
                                                dir.createWriteStream(
                                                    {
                                                        path: $.path,
                                                        createMissingDirectories: true,
                                                    },
                                                    {
                                                        consumer: ($i) => {
                                                            wc.processBlock(
                                                                {
                                                                    onBlock: ($) => {
                                                                        x($)
                                                                    },
                                                                    consumer: $i,
                                                                }
                                                            )
                                                        }
                                                    }
                                                )
                                            }
                                        }
                                    )
                                },
                                onError: ($) => {
                                    pr.logError(pf.printFSError($))
                                },
                                onEnd: () => {

                                },
                            }
                        )
                    },
                )
            }
        }

        x()

    }
)
