import * as pr from "pareto-runtime"
import * as tast from "../../interfaces/typedAST"
import { Consumer, Node } from "./Consumer"

export class UnrecognizedNodeError extends Error {
    constructor(message: string) { super(message); Object.setPrototypeOf(this, UnrecognizedNodeError.prototype); }
}

export function createParser<Annotation>(
    callback: ($: tast.TSourceFile<Annotation>) => void,
    handleUnexpectedChild: ($: { parentKindName: string, child: Node<Annotation>, }) => Consumer<Annotation>,
    reportMissingSymbol: ($: { parentAnnotation: Annotation | null, parentKindName: string, symbolName: string, }) => void,
): Consumer<Annotation> {
    function _Block(
        node: Node<Annotation> | null,
        callback: ($: tast.TBlock<Annotation>) => void,
    ): Consumer<Annotation> {
        type State =
            | ["done", {}]
        let state: State = ["done", {}]
        return {
            onNode: ($) => {
                function handle(): Consumer<Annotation> {
                    switch (state[0]) {
                        case "done": {
                            return handleUnexpectedChild({
                                parentKindName: "Block",
                                child: $,
                            })
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            },
            onEnd: () => {
                function handle(): void {
                    switch (state[0]) {
                        case "done": {
                            return
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            }
        }
    }
    function _EndOfFileToken(
        node: Node<Annotation> | null,
        callback: ($: tast.TEndOfFileToken<Annotation>) => void,
    ): Consumer<Annotation> {
        type State =
            | ["done", {}]
        let state: State = ["done", {}]
        return {
            onNode: ($) => {
                function handle(): Consumer<Annotation> {
                    switch (state[0]) {
                        case "done": {
                            return handleUnexpectedChild({
                                parentKindName: "EndOfFileToken",
                                child: $,
                            })
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            },
            onEnd: () => {
                function handle(): void {
                    switch (state[0]) {
                        case "done": {
                            return
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            }
        }
    }
    function _ExportDeclaration(
        node: Node<Annotation> | null,
        callback: ($: tast.TExportDeclaration<Annotation>) => void,
    ): Consumer<Annotation> {
        type State =
            | ["done", {}]
        let state: State = ["done", {}]
        return {
            onNode: ($) => {
                function handle(): Consumer<Annotation> {
                    switch (state[0]) {
                        case "done": {
                            return handleUnexpectedChild({
                                parentKindName: "ExportDeclaration",
                                child: $,
                            })
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            },
            onEnd: () => {
                function handle(): void {
                    switch (state[0]) {
                        case "done": {
                            return
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            }
        }
    }
    function _ExpressionStatement(
        node: Node<Annotation> | null,
        callback: ($: tast.TExpressionStatement<Annotation>) => void,
    ): Consumer<Annotation> {
        type State =
            | ["done", {}]
        let state: State = ["done", {}]
        return {
            onNode: ($) => {
                function handle(): Consumer<Annotation> {
                    switch (state[0]) {
                        case "done": {
                            return handleUnexpectedChild({
                                parentKindName: "ExpressionStatement",
                                child: $,
                            })
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            },
            onEnd: () => {
                function handle(): void {
                    switch (state[0]) {
                        case "done": {
                            return
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            }
        }
    }
    function _FunctionDeclaration(
        node: Node<Annotation> | null,
        callback: ($: tast.TFunctionDeclaration<Annotation>) => void,
    ): Consumer<Annotation> {
        type State =
            | ["done", {}]
            | ["_name", {
                //token
            }]
            | ["_block", {
                //token
            }]
        let state: State = ["_name", {
            //token
        }]
        return {
            onNode: ($) => {
                function handle(): Consumer<Annotation> {
                    switch (state[0]) {
                        case "_name": {
                            if ($.kindName === "Identifier") {
                                state = ["_block", {}]
                                return _Identifier(
                                    $,
                                    () => {},
                                )
                            } else {
                                return handleUnexpectedChild({
                                    parentKindName: "FunctionDeclaration",
                                    child: $,
                                })
                            }
                        }
                        case "_block": {
                            if ($.kindName === "Block") {
                                state = ["done", {}]
                                return _Block(
                                    $,
                                    () => {},
                                )
                            } else {
                                return handleUnexpectedChild({
                                    parentKindName: "FunctionDeclaration",
                                    child: $,
                                })
                            }
                        }
                        case "done": {
                            return handleUnexpectedChild({
                                parentKindName: "FunctionDeclaration",
                                child: $,
                            })
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            },
            onEnd: () => {
                function handle(): void {
                    switch (state[0]) {
                        case "_name": {
                            reportMissingSymbol({
                                parentAnnotation: node === null ? null : node.annotation,
                                parentKindName: "FunctionDeclaration",
                                symbolName: "name",
                            })
                        }
                        case "_block": {
                            reportMissingSymbol({
                                parentAnnotation: node === null ? null : node.annotation,
                                parentKindName: "FunctionDeclaration",
                                symbolName: "block",
                            })
                        }
                        case "done": {
                            return
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            }
        }
    }
    function _Identifier(
        node: Node<Annotation> | null,
        callback: ($: tast.TIdentifier<Annotation>) => void,
    ): Consumer<Annotation> {
        type State =
            | ["done", {}]
        let state: State = ["done", {}]
        return {
            onNode: ($) => {
                function handle(): Consumer<Annotation> {
                    switch (state[0]) {
                        case "done": {
                            return handleUnexpectedChild({
                                parentKindName: "Identifier",
                                child: $,
                            })
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            },
            onEnd: () => {
                function handle(): void {
                    switch (state[0]) {
                        case "done": {
                            return
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            }
        }
    }
    function _ImportClause(
        node: Node<Annotation> | null,
        callback: ($: tast.TImportClause<Annotation>) => void,
    ): Consumer<Annotation> {
        type State =
            | ["done", {}]
            | ["_type", {
                //choice
            }]
        let state: State = ["_type", {
            //choice
        }]
        return {
            onNode: ($) => {
                function handle(): Consumer<Annotation> {
                    switch (state[0]) {
                        case "_type": {
                            switch ($.kindName) {
                                case "NamespaceImport": {
                                    return _NamespaceImport($, () => {})
                                }
                                case "NamedImports": {
                                    return _NamedImports($, () => {})
                                }
                                default: {
                                    return handleUnexpectedChild({
                                        parentKindName: "ImportClause",
                                        child: $,
                                    })
                                }
                            }
                        }
                        case "done": {
                            return handleUnexpectedChild({
                                parentKindName: "ImportClause",
                                child: $,
                            })
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            },
            onEnd: () => {
                function handle(): void {
                    switch (state[0]) {
                        case "_type": {
                            reportMissingSymbol({
                                parentAnnotation: node === null ? null : node.annotation,
                                parentKindName: "ImportClause",
                                symbolName: "type",
                            })
                        }
                        case "done": {
                            return
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            }
        }
    }
    function _ImportDeclaration(
        node: Node<Annotation> | null,
        callback: ($: tast.TImportDeclaration<Annotation>) => void,
    ): Consumer<Annotation> {
        type State =
            | ["done", {}]
            | ["_type", {
                //choice
            }]
            | ["_file", {
                //token
            }]
        let state: State = ["_type", {
            //choice
        }]
        return {
            onNode: ($) => {
                function handle(): Consumer<Annotation> {
                    switch (state[0]) {
                        case "_type": {
                            switch ($.kindName) {
                                case "ImportClause": {
                                    return _ImportClause($, () => {})
                                }
                                default: {
                                    return handleUnexpectedChild({
                                        parentKindName: "ImportDeclaration",
                                        child: $,
                                    })
                                }
                            }
                        }
                        case "_file": {
                            if ($.kindName === "StringLiteral") {
                                state = ["done", {}]
                                return _StringLiteral(
                                    $,
                                    () => {},
                                )
                            } else {
                                return handleUnexpectedChild({
                                    parentKindName: "ImportDeclaration",
                                    child: $,
                                })
                            }
                        }
                        case "done": {
                            return handleUnexpectedChild({
                                parentKindName: "ImportDeclaration",
                                child: $,
                            })
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            },
            onEnd: () => {
                function handle(): void {
                    switch (state[0]) {
                        case "_type": {
                            reportMissingSymbol({
                                parentAnnotation: node === null ? null : node.annotation,
                                parentKindName: "ImportDeclaration",
                                symbolName: "type",
                            })
                        }
                        case "_file": {
                            reportMissingSymbol({
                                parentAnnotation: node === null ? null : node.annotation,
                                parentKindName: "ImportDeclaration",
                                symbolName: "file",
                            })
                        }
                        case "done": {
                            return
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            }
        }
    }
    function _InterfaceDeclaration(
        node: Node<Annotation> | null,
        callback: ($: tast.TInterfaceDeclaration<Annotation>) => void,
    ): Consumer<Annotation> {
        type State =
            | ["done", {}]
        let state: State = ["done", {}]
        return {
            onNode: ($) => {
                function handle(): Consumer<Annotation> {
                    switch (state[0]) {
                        case "done": {
                            return handleUnexpectedChild({
                                parentKindName: "InterfaceDeclaration",
                                child: $,
                            })
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            },
            onEnd: () => {
                function handle(): void {
                    switch (state[0]) {
                        case "done": {
                            return
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            }
        }
    }
    function _ImportSpecifier(
        node: Node<Annotation> | null,
        callback: ($: tast.TImportSpecifier<Annotation>) => void,
    ): Consumer<Annotation> {
        type State =
            | ["done", {}]
        let state: State = ["done", {}]
        return {
            onNode: ($) => {
                function handle(): Consumer<Annotation> {
                    switch (state[0]) {
                        case "done": {
                            return handleUnexpectedChild({
                                parentKindName: "ImportSpecifier",
                                child: $,
                            })
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            },
            onEnd: () => {
                function handle(): void {
                    switch (state[0]) {
                        case "done": {
                            return
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            }
        }
    }
    function _NamespaceImport(
        node: Node<Annotation> | null,
        callback: ($: tast.TNamespaceImport<Annotation>) => void,
    ): Consumer<Annotation> {
        type State =
            | ["done", {}]
            | ["_name", {
                //token
            }]
        let state: State = ["_name", {
            //token
        }]
        return {
            onNode: ($) => {
                function handle(): Consumer<Annotation> {
                    switch (state[0]) {
                        case "_name": {
                            if ($.kindName === "Identifier") {
                                state = ["done", {}]
                                return _Identifier(
                                    $,
                                    () => {},
                                )
                            } else {
                                return handleUnexpectedChild({
                                    parentKindName: "NamespaceImport",
                                    child: $,
                                })
                            }
                        }
                        case "done": {
                            return handleUnexpectedChild({
                                parentKindName: "NamespaceImport",
                                child: $,
                            })
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            },
            onEnd: () => {
                function handle(): void {
                    switch (state[0]) {
                        case "_name": {
                            reportMissingSymbol({
                                parentAnnotation: node === null ? null : node.annotation,
                                parentKindName: "NamespaceImport",
                                symbolName: "name",
                            })
                        }
                        case "done": {
                            return
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            }
        }
    }
    function _NamedImports(
        node: Node<Annotation> | null,
        callback: ($: tast.TNamedImports<Annotation>) => void,
    ): Consumer<Annotation> {
        type State =
            | ["done", {}]
            | ["_A", {
                //token
            }]
        let state: State = ["_A", {
            //token
        }]
        return {
            onNode: ($) => {
                function handle(): Consumer<Annotation> {
                    switch (state[0]) {
                        case "_A": {
                            if ($.kindName === "ImportSpecifier") {
                                state = ["done", {}]
                                return _ImportSpecifier(
                                    $,
                                    () => {},
                                )
                            } else {
                                return handleUnexpectedChild({
                                    parentKindName: "NamedImports",
                                    child: $,
                                })
                            }
                        }
                        case "done": {
                            return handleUnexpectedChild({
                                parentKindName: "NamedImports",
                                child: $,
                            })
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            },
            onEnd: () => {
                function handle(): void {
                    switch (state[0]) {
                        case "_A": {
                            reportMissingSymbol({
                                parentAnnotation: node === null ? null : node.annotation,
                                parentKindName: "NamedImports",
                                symbolName: "A",
                            })
                        }
                        case "done": {
                            return
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            }
        }
    }
    function _Parameter(
        node: Node<Annotation> | null,
        callback: ($: tast.TParameter<Annotation>) => void,
    ): Consumer<Annotation> {
        type State =
            | ["done", {}]
        let state: State = ["done", {}]
        return {
            onNode: ($) => {
                function handle(): Consumer<Annotation> {
                    switch (state[0]) {
                        case "done": {
                            return handleUnexpectedChild({
                                parentKindName: "Parameter",
                                child: $,
                            })
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            },
            onEnd: () => {
                function handle(): void {
                    switch (state[0]) {
                        case "done": {
                            return
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            }
        }
    }
    function _SourceFile(
        node: Node<Annotation> | null,
        callback: ($: tast.TSourceFile<Annotation>) => void,
    ): Consumer<Annotation> {
        type State =
            | ["done", {}]
            | ["_globals", {
                x:
                    | ["done", {}]
                    | ["_type", {
                        //choice
                    }]
            }]
            | ["_EndOfFileToken", {
                //token
            }]
        let state: State = ["_globals", {
            x: ["_type", {
                //choice
            }]
        }]
        return {
            onNode: ($) => {
                function handle(): Consumer<Annotation> {
                    switch (state[0]) {
                        case "_globals": {
                            switch ($.kindName) {
                                case "EndOfFileToken": {
                                    state = ["_EndOfFileToken", {}]
                                    return handle()
                                }
                                case "ExportDeclaration": {
                                    return _ExportDeclaration($, () => {})
                                }
                                case "ExpressionStatement": {
                                    return _ExpressionStatement($, () => {})
                                }
                                case "FunctionDeclaration": {
                                    return _FunctionDeclaration($, () => {})
                                }
                                case "ImportDeclaration": {
                                    return _ImportDeclaration($, () => {})
                                }
                                case "InterfaceDeclaration": {
                                    return _InterfaceDeclaration($, () => {})
                                }
                                case "TypeAliasDeclaration": {
                                    return _TypeAliasDeclaration($, () => {})
                                }
                                case "VariableStatement": {
                                    return _VariableStatement($, () => {})
                                }
                                default: {
                                    return handleUnexpectedChild({
                                        parentKindName: "SourceFile",
                                        child: $,
                                    })
                                }
                            }
                        }
                        case "_EndOfFileToken": {
                            if ($.kindName === "EndOfFileToken") {
                                state = ["done", {}]
                                return _EndOfFileToken(
                                    $,
                                    () => {},
                                )
                            } else {
                                return handleUnexpectedChild({
                                    parentKindName: "SourceFile",
                                    child: $,
                                })
                            }
                        }
                        case "done": {
                            return handleUnexpectedChild({
                                parentKindName: "SourceFile",
                                child: $,
                            })
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            },
            onEnd: () => {
                function handle(): void {
                    switch (state[0]) {
                        case "_globals": {
                            state = ["_EndOfFileToken", {}]
                            return handle()
                        }
                        case "_EndOfFileToken": {
                            reportMissingSymbol({
                                parentAnnotation: node === null ? null : node.annotation,
                                parentKindName: "SourceFile",
                                symbolName: "EndOfFileToken",
                            })
                        }
                        case "done": {
                            return
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            }
        }
    }
    function _StringLiteral(
        node: Node<Annotation> | null,
        callback: ($: tast.TStringLiteral<Annotation>) => void,
    ): Consumer<Annotation> {
        type State =
            | ["done", {}]
        let state: State = ["done", {}]
        return {
            onNode: ($) => {
                function handle(): Consumer<Annotation> {
                    switch (state[0]) {
                        case "done": {
                            return handleUnexpectedChild({
                                parentKindName: "StringLiteral",
                                child: $,
                            })
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            },
            onEnd: () => {
                function handle(): void {
                    switch (state[0]) {
                        case "done": {
                            return
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            }
        }
    }
    function _TypeAliasDeclaration(
        node: Node<Annotation> | null,
        callback: ($: tast.TTypeAliasDeclaration<Annotation>) => void,
    ): Consumer<Annotation> {
        type State =
            | ["done", {}]
        let state: State = ["done", {}]
        return {
            onNode: ($) => {
                function handle(): Consumer<Annotation> {
                    switch (state[0]) {
                        case "done": {
                            return handleUnexpectedChild({
                                parentKindName: "TypeAliasDeclaration",
                                child: $,
                            })
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            },
            onEnd: () => {
                function handle(): void {
                    switch (state[0]) {
                        case "done": {
                            return
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            }
        }
    }
    function _VariableStatement(
        node: Node<Annotation> | null,
        callback: ($: tast.TVariableStatement<Annotation>) => void,
    ): Consumer<Annotation> {
        type State =
            | ["done", {}]
        let state: State = ["done", {}]
        return {
            onNode: ($) => {
                function handle(): Consumer<Annotation> {
                    switch (state[0]) {
                        case "done": {
                            return handleUnexpectedChild({
                                parentKindName: "VariableStatement",
                                child: $,
                            })
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            },
            onEnd: () => {
                function handle(): void {
                    switch (state[0]) {
                        case "done": {
                            return
                        }
                        default: return pr.au(state[0])
                    }
                }
                return handle()
            }
        }
    }
    return _SourceFile(null, callback)
}