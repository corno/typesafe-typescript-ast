#!/usr/bin/env node
import * as pr from "pareto-runtime"
import * as tsg from "../data/typescriptGrammar"
import * as gta from "generate-typesafe-ast/esc/implementations"


const [, , targetDirPath] = pr.getProcessArguments()

if (targetDirPath === undefined) {
    pr.logError("missing target directory path")
    pr.processExit(1)
}

gta.generateCode(
    tsg.typeScriptGrammar,
    targetDirPath
)
