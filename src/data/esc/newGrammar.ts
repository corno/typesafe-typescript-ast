import { NewGrammar } from "../../generateCode/esc/interfaces/NewGrammar"

export const newGrammar: NewGrammar = {
    tokens: {
        "SourceFile": {
            symbols: [
                ["array", {
                    type: {
                        symbols: [
                            ["token", {
                                optional: false,
                                options: {
                                    "FunctionDeclaration": {},
                                }
                            }],
                        ]
                    }
                }],
                ["token", {
                    optional: false,
                    options: {
                        "EndOfFile": {},
                    }
                }],
            ]
        }
    },
    startToken: "SourceFile"
}