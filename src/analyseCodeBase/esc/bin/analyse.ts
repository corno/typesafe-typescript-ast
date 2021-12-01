import { newGrammar } from "../../../data/esc/newGrammar"
import { loadUntypedProject } from "../../../pub/esc/implementations/builder/loadUntypedProject"
import * as tr from "../implementations"

const [, , tsconfigPath] = process.argv

if (tsconfigPath === undefined) {
    throw new Error("missing tsconfig path")
}

loadUntypedProject(
    tsconfigPath,
    (
        project,
        getLocationInfo,
    ) => {
        tr.analyseCodebaseForNodeOccurences(
            project,
            newGrammar,
            getLocationInfo,
            (
                filePath,
                $,

            ) => {
                //console.log(`${$.getKindName()} ${filePath}: ${getLocationInfo($)}`)
                console.log(`FIXME!`)
            },
        )
    },
    ($) => {
        return $
    },
    ($) => {
        return "FIXME"
    }
)
