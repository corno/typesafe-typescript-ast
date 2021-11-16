import * as pr from "pareto-runtime"

export type Type =
    | ["bag", Definition[]]
    | ["leaf", {}]

export type Definition =
    | ["local", [string, Type]]
    | ["global", string]

export type Grammar = {
    tokenRules: { [key: string]: Type }
    startRule: string
}


export function forEachEntry<T>(
    dictionary: { [key: string]: T },
    callback: (entry: T, key: string) => void,
) {
    pr.Objectkeys(dictionary).forEach((key) => {
        callback(dictionary[key], key)
    })
}