
import * as pr from "pareto-runtime"
import { gen } from "../implementations/generateCode"
import { grammar } from "../data/grammar"


const [, , targetDirPath] = pr.getProcessArguments()

if (targetDirPath === undefined) {
    pr.logError("missing target directory path")
    pr.processExit(1)
}

gen(
    grammar,
    targetDirPath,
)