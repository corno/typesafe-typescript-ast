import * as pr from "pareto-runtime"

import * as g from "../../../../grammar/esc/interfaces"
import * as wapi from "../../interfaces/WriteAPI"

import { createBlock } from "../createBlock"
import { generateAPI } from "./generateAPI"
import { generateParser } from "./generateParser"
import { generateVisitorTemplate } from "./generateVisitorTemplate"

export function generateCode(
    grammar: g.NewGrammar,
    targetDirPath: string,
) {


    function generate(
        targetPath: string,
        func: (
            grammar: g.NewGrammar,
            $w: wapi.Block,
        ) => void,
    ) {

        let apiOut = ""
        func(
            grammar,
            createBlock(
                "    ",
                "\r\n",
                (str) => {
                    apiOut += str
                }
            )
        )
        pr.writeFileSync(pr.join([targetDirPath, targetPath]), apiOut)
    }

    generate(
        "interfaces/typedAST/ts_api.generated.ts",
        generateAPI,
    )

    generate(
        "implementations/parser/parser.generated.ts",
        generateParser,
    )

    generate(
        "implementations/visitor_template.generated.ts",
        generateVisitorTemplate,
    )
}
