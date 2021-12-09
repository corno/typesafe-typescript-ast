import * as pr from "pareto-runtime"

import * as g from "../../../grammar/esc/interfaces"


export type SymbolIterator = {
    symbols: g.Symbol[]
    position: number
}

export function findNextPossibleTokens(
    si: SymbolIterator,
    onToken: (token: string) => void,
    onEnd: () => void,
) {
    function increment(
        si: SymbolIterator
    ): SymbolIterator {
        return {
            symbols: si.symbols,
            position: si.position + 1
        }
    }
    if (si.symbols.length <= si.position) {
        onEnd()
    } else {
        const symbol = si.symbols[si.position]
        switch (symbol.type[0]) {
            case "array":
                pr.cc(symbol.type[1], ($) => {
                    findNextPossibleTokens(
                        {
                            symbols: $.rule.symbols,
                            position: 0
                        },
                        onToken,
                        () => {
                            console.warn("STRANGE, NO TOKEN FOUND IN ARRAY")
                            findNextPossibleTokens(
                                increment(si),
                                onToken,
                                onEnd
                            )
                        },
                    )
                    findNextPossibleTokens(
                        increment(si),
                        onToken,
                        onEnd,
                    )
                })
                break
            case "choice":
                pr.cc(symbol.type[1], ($) => {
                    pr.Objectkeys($.options).forEach((key) => {
                        const option = $.options[key]
                        findNextPossibleTokens(
                            {
                                symbols: option.symbols,
                                position: 0,
                            },
                            onToken,
                            () => {
                                findNextPossibleTokens(
                                    increment(si),
                                    onToken,
                                    onEnd
                                )
                            },

                        )
                    })
                })
                break
            case "token":
                pr.cc(symbol.type[1], ($) => {
                    onToken($.name)
                })
                break
            default:
                pr.au(symbol.type[0])
        }
    }
}