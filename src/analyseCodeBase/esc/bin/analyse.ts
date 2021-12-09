#!/usr/bin/env node

import * as tsmorph from "ts-morph"
import { newGrammar } from "../../../dev/data/esc/newGrammar"
import * as xx from "../../../pub/esc/implementations"
import * as tr from "../implementations"

const [, , tsconfigPath] = process.argv

if (tsconfigPath === undefined) {
    throw new Error("missing tsconfig path")
}

xx.loadUntypedProject<tsmorph.Node>({
    tsconfigPath: tsconfigPath,
    callback: (
        project,
    ) => {
        tr.analyseCodebaseForNodeOccurences(
            project,
            newGrammar,
            (
                filePath,
                $,

            ) => {
                //console.log(`${$.getKindName()} ${filePath}: ${getLocationInfo($)}`)
                console.log(`FIXME!`)
            },
        )
    },
    createAnnotation: ($) => {
        return $
    },
})
