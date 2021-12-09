import * as pr from "pareto-runtime"

export type Rule = {
    symbols: Symbol[]
}

export type Options = { [key: string]: Rule }

export type Symbol = {
    name: string
    type: 
    | ["array", {
        rule: Rule
    }]
    | ["choice", {
        //"optional": boolean
        "options": Options
    }]
    | ["token", {
        //"optional": boolean
        "name": string
    }]
}

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