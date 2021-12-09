#!/usr/bin/env node

import * as tsmorph from "ts-morph"
import { newGrammar } from "../../../dev/data/esc/newGrammar"
import * as xx from "../../../pub/esc/implementations"
import { Node } from "../../../pub/esc/interfaces/untypedAST"
import * as tr from "../implementations"

const [, , tsconfigPath, parentKindName] = process.argv

if (tsconfigPath === undefined) {
    throw new Error("missing tsconfig path")
}
if (parentKindName === undefined) {
    throw new Error("missing parentKindName")
}

xx.loadUntypedProject<tsmorph.Node>({
    tsconfigPath: tsconfigPath,
    callback: (
        project,
    ) => {
        const found: string[] = []
        project.sourceFiles.forEach(($) => {
            const filePath = $.path
            $.node
            function doNode(
                $: Node<tsmorph.Node>
            ) {
                function getLineInfo(
                ) {
                    const lp = $.annotation.getSourceFile().getLineAndColumnAtPos($.annotation.getStart())
                    return `[${lp.line}, ${lp.column}]`
                }
                if ($.kindName === parentKindName) {
                    console.log(`${filePath}${getLineInfo()}`)
                    $.children.forEach(($) => {
                        if (!found.includes($.kindName)) {
                            found.push($.kindName)
                        }
                        console.log(`\t${$.kindName}`)
                    })
                }

                $.children.forEach(($) => {
                    doNode($)
                })
            }
            doNode($.node)
        })
        console.log("")
        console.log("FOUND:")
        found.sort().forEach(($) => {
            console.log($)
        })
    },
    createAnnotation: ($) => {
        return $
    },
})
