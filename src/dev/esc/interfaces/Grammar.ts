
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