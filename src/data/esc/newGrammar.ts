import { NewGrammar } from "../../grammar/esc/interfaces"

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