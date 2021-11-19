import * as pr from "pareto-runtime"

export type Rule = {
    symbols: Symbol[]
}

export type Options = { [key: string]: {} }

export type Symbol =
    | ["array", {
        type: Rule
    }]
    | ["token", {
        "optional": boolean
        "options": Options
    }]

export type NewGrammar = {
    tokens: { [key: string]: Rule }
    startToken: string
}


export function forEachEntry<T>(
    dictionary: { [key: string]: T },
    callback: (entry: T, key: string) => void,
) {
    pr.Objectkeys(dictionary).forEach((key) => {
        callback(dictionary[key], key)
    })
}