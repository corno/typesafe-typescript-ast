import { grammar } from "../../../data/grammar"
import { loadUntypedProject } from "../../../pub"
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
            grammar,
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
