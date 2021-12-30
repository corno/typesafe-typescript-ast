#!/usr/bin/env node
import * as pr from "pareto-runtime"
import * as tsg from "../../data/typescriptGrammar"
import * as gta from "generate-typesafe-ast/esc/implementations"
import * as fp from "fountain-pen/esc/implementations/fountain-pen"

function x() {

    const [, , targetDirPath] = pr.getProcessArguments()

    if (targetDirPath === undefined) {
        pr.logError("missing target directory path")
        pr.processExit(1)
    }

    fp.createContext(
        pr.trimRight,
    ).configure(
        {
            newline: "\r\n",
            trimLines: true,
            indentation: "    ",
        },
        ($i) => {

            gta.generateCode(
                $i,
                tsg.typeScriptGrammar,
                targetDirPath
            )
        },
    )
}

x()
