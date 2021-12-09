#!/usr/bin/env node

import * as pr from "pareto-runtime"
import { generateCode } from "../implementations/generateCode"
import { newGrammar } from "../../../dev/data/esc/newGrammar"


const [, , targetDirPath] = pr.getProcessArguments()

if (targetDirPath === undefined) {
    pr.logError("missing target directory path")
    pr.processExit(1)
}

generateCode(
    newGrammar,
    targetDirPath,
)