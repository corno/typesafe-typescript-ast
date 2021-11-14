import * as pr from "pareto-runtime"
import * as uapi from "./untypedAPI"
import * as tapi from "./ts_api.generated"

export class UnrecognizedNodeError extends Error {
    constructor(message: string) { super(message); Object.setPrototypeOf(this, UnrecognizedNodeError.prototype); }
}

export function root<Annotation>(
    $: uapi.Node<Annotation>,
    callback: ($: tapi.TSourceFile<Annotation>) => void,
    reportUnexpectedChild: ($: { parent: uapi.Node<Annotation>, child: uapi.Node<Annotation>, }) => void,
): void {
    function _SourceFile(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TSourceFile<Annotation>) => void,
    ) {
        const temp: tapi.CSourceFile<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "InterfaceDeclaration": {
                    const callback = ($: tapi.TInterfaceDeclaration<Annotation>) => {
                        temp.push(["InterfaceDeclaration", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "FunctionDeclaration": {
                    _FunctionDeclaration(
                        $,
                        ($) => { temp.push(["FunctionDeclaration", $]) },
                    )
                    break
                }
                case "VariableStatement": {
                    _VariableStatement(
                        $,
                        ($) => { temp.push(["VariableStatement", $]) },
                    )
                    break
                }
                case "EndOfFileToken": {
                    const callback = ($: tapi.TEndOfFileToken<Annotation>) => {
                        temp.push(["EndOfFileToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "ExportDeclaration": {
                    const callback = ($: tapi.TExportDeclaration<Annotation>) => {
                        temp.push(["ExportDeclaration", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tapi.CExportDeclaration<Annotation>[] = []
                        const $parent = $
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "StringLiteral": {
                                    _StringLiteral(
                                        $,
                                        ($) => { temp.push(["StringLiteral", $]) },
                                    )
                                    break
                                }
                                default: reportUnexpectedChild({ parent: $parent, child: $, })
                            }
                        })
                        callback({
                            annotation: $.annotation,
                            children: temp
                        })
                    })
                    break
                }
                case "ImportDeclaration": {
                    const callback = ($: tapi.TImportDeclaration<Annotation>) => {
                        temp.push(["ImportDeclaration", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tapi.CImportDeclaration<Annotation>[] = []
                        const $parent = $
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "StringLiteral": {
                                    _StringLiteral(
                                        $,
                                        ($) => { temp.push(["StringLiteral", $]) },
                                    )
                                    break
                                }
                                default: reportUnexpectedChild({ parent: $parent, child: $, })
                            }
                        })
                        callback({
                            annotation: $.annotation,
                            children: temp
                        })
                    })
                    break
                }
                case "TypeAliasDeclaration": {
                    _TypeAliasDeclaration(
                        $,
                        ($) => { temp.push(["TypeAliasDeclaration", $]) },
                    )
                    break
                }
                case "ExpressionStatement": {
                    _ExpressionStatement(
                        $,
                        ($) => { temp.push(["ExpressionStatement", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _Identifier(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TIdentifier<Annotation>) => void,
    ) {}
    function _TypeParameter(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TTypeParameter<Annotation>) => void,
    ) {
        const temp: tapi.CTypeParameter<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.push(["Identifier", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _MethodSignature(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TMethodSignature<Annotation>) => void,
    ) {
        const temp: tapi.CMethodSignature<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.push(["Identifier", $]) },
                    )
                    break
                }
                case "Parameter": {
                    _Parameter(
                        $,
                        ($) => { temp.push(["Parameter", $]) },
                    )
                    break
                }
                case "VoidKeyword": {
                    _VoidKeyword(
                        $,
                        ($) => { temp.push(["VoidKeyword", $]) },
                    )
                    break
                }
                case "TypeParameter": {
                    _TypeParameter(
                        $,
                        ($) => { temp.push(["TypeParameter", $]) },
                    )
                    break
                }
                case "ArrayType": {
                    _ArrayType(
                        $,
                        ($) => { temp.push(["ArrayType", $]) },
                    )
                    break
                }
                case "BooleanKeyword": {
                    _BooleanKeyword(
                        $,
                        ($) => { temp.push(["BooleanKeyword", $]) },
                    )
                    break
                }
                case "StringKeyword": {
                    _StringKeyword(
                        $,
                        ($) => { temp.push(["StringKeyword", $]) },
                    )
                    break
                }
                case "UnionType": {
                    _UnionType(
                        $,
                        ($) => { temp.push(["UnionType", $]) },
                    )
                    break
                }
                case "NumberKeyword": {
                    _NumberKeyword(
                        $,
                        ($) => { temp.push(["NumberKeyword", $]) },
                    )
                    break
                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.push(["TypeReference", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _Parameter(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TParameter<Annotation>) => void,
    ) {
        const temp: tapi.CParameter<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.push(["Identifier", $]) },
                    )
                    break
                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.push(["TypeReference", $]) },
                    )
                    break
                }
                case "FunctionType": {
                    _FunctionType(
                        $,
                        ($) => { temp.push(["FunctionType", $]) },
                    )
                    break
                }
                case "NumberKeyword": {
                    _NumberKeyword(
                        $,
                        ($) => { temp.push(["NumberKeyword", $]) },
                    )
                    break
                }
                case "StringKeyword": {
                    _StringKeyword(
                        $,
                        ($) => { temp.push(["StringKeyword", $]) },
                    )
                    break
                }
                case "ArrayType": {
                    _ArrayType(
                        $,
                        ($) => { temp.push(["ArrayType", $]) },
                    )
                    break
                }
                case "AnyKeyword": {
                    _AnyKeyword(
                        $,
                        ($) => { temp.push(["AnyKeyword", $]) },
                    )
                    break
                }
                case "QuestionToken": {
                    _QuestionToken(
                        $,
                        ($) => { temp.push(["QuestionToken", $]) },
                    )
                    break
                }
                case "NeverKeyword": {
                    const callback = ($: tapi.TNeverKeyword<Annotation>) => {
                        temp.push(["NeverKeyword", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "TypeLiteral": {
                    _TypeLiteral(
                        $,
                        ($) => { temp.push(["TypeLiteral", $]) },
                    )
                    break
                }
                case "UnionType": {
                    _UnionType(
                        $,
                        ($) => { temp.push(["UnionType", $]) },
                    )
                    break
                }
                case "BooleanKeyword": {
                    _BooleanKeyword(
                        $,
                        ($) => { temp.push(["BooleanKeyword", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _TypeReference(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TTypeReference<Annotation>) => void,
    ) {
        const temp: tapi.CTypeReference<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.push(["Identifier", $]) },
                    )
                    break
                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.push(["TypeReference", $]) },
                    )
                    break
                }
                case "QualifiedName": {
                    const callback = ($: tapi.TQualifiedName<Annotation>) => {
                        temp.push(["QualifiedName", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tapi.CQualifiedName<Annotation>[] = []
                        const $parent = $
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "Identifier": {
                                    _Identifier(
                                        $,
                                        ($) => { temp.push(["Identifier", $]) },
                                    )
                                    break
                                }
                                default: reportUnexpectedChild({ parent: $parent, child: $, })
                            }
                        })
                        callback({
                            annotation: $.annotation,
                            children: temp
                        })
                    })
                    break
                }
                case "StringKeyword": {
                    _StringKeyword(
                        $,
                        ($) => { temp.push(["StringKeyword", $]) },
                    )
                    break
                }
                case "LiteralType": {
                    _LiteralType(
                        $,
                        ($) => { temp.push(["LiteralType", $]) },
                    )
                    break
                }
                case "TypeLiteral": {
                    _TypeLiteral(
                        $,
                        ($) => { temp.push(["TypeLiteral", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _VoidKeyword(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TVoidKeyword<Annotation>) => void,
    ) {}
    function _FunctionType(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TFunctionType<Annotation>) => void,
    ) {
        const temp: tapi.CFunctionType<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Parameter": {
                    _Parameter(
                        $,
                        ($) => { temp.push(["Parameter", $]) },
                    )
                    break
                }
                case "VoidKeyword": {
                    _VoidKeyword(
                        $,
                        ($) => { temp.push(["VoidKeyword", $]) },
                    )
                    break
                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.push(["TypeReference", $]) },
                    )
                    break
                }
                case "AnyKeyword": {
                    _AnyKeyword(
                        $,
                        ($) => { temp.push(["AnyKeyword", $]) },
                    )
                    break
                }
                case "UnionType": {
                    _UnionType(
                        $,
                        ($) => { temp.push(["UnionType", $]) },
                    )
                    break
                }
                case "BooleanKeyword": {
                    _BooleanKeyword(
                        $,
                        ($) => { temp.push(["BooleanKeyword", $]) },
                    )
                    break
                }
                case "ArrayType": {
                    _ArrayType(
                        $,
                        ($) => { temp.push(["ArrayType", $]) },
                    )
                    break
                }
                case "StringKeyword": {
                    _StringKeyword(
                        $,
                        ($) => { temp.push(["StringKeyword", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _NumberKeyword(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TNumberKeyword<Annotation>) => void,
    ) {}
    function _ArrayType(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TArrayType<Annotation>) => void,
    ) {
        const temp: tapi.CArrayType<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.push(["TypeReference", $]) },
                    )
                    break
                }
                case "StringKeyword": {
                    _StringKeyword(
                        $,
                        ($) => { temp.push(["StringKeyword", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _BooleanKeyword(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TBooleanKeyword<Annotation>) => void,
    ) {}
    function _PropertySignature(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TPropertySignature<Annotation>) => void,
    ) {
        const temp: tapi.CPropertySignature<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.push(["Identifier", $]) },
                    )
                    break
                }
                case "NumberKeyword": {
                    _NumberKeyword(
                        $,
                        ($) => { temp.push(["NumberKeyword", $]) },
                    )
                    break
                }
                case "ReadonlyKeyword": {
                    _ReadonlyKeyword(
                        $,
                        ($) => { temp.push(["ReadonlyKeyword", $]) },
                    )
                    break
                }
                case "StringKeyword": {
                    _StringKeyword(
                        $,
                        ($) => { temp.push(["StringKeyword", $]) },
                    )
                    break
                }
                case "FunctionType": {
                    _FunctionType(
                        $,
                        ($) => { temp.push(["FunctionType", $]) },
                    )
                    break
                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.push(["TypeReference", $]) },
                    )
                    break
                }
                case "QuestionToken": {
                    _QuestionToken(
                        $,
                        ($) => { temp.push(["QuestionToken", $]) },
                    )
                    break
                }
                case "BooleanKeyword": {
                    _BooleanKeyword(
                        $,
                        ($) => { temp.push(["BooleanKeyword", $]) },
                    )
                    break
                }
                case "ArrayType": {
                    _ArrayType(
                        $,
                        ($) => { temp.push(["ArrayType", $]) },
                    )
                    break
                }
                case "UnionType": {
                    _UnionType(
                        $,
                        ($) => { temp.push(["UnionType", $]) },
                    )
                    break
                }
                case "LiteralType": {
                    _LiteralType(
                        $,
                        ($) => { temp.push(["LiteralType", $]) },
                    )
                    break
                }
                case "TypeLiteral": {
                    _TypeLiteral(
                        $,
                        ($) => { temp.push(["TypeLiteral", $]) },
                    )
                    break
                }
                case "StringLiteral": {
                    _StringLiteral(
                        $,
                        ($) => { temp.push(["StringLiteral", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _StringKeyword(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TStringKeyword<Annotation>) => void,
    ) {}
    function _UnionType(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TUnionType<Annotation>) => void,
    ) {
        const temp: tapi.CUnionType<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "UndefinedKeyword": {
                    const callback = ($: tapi.TUndefinedKeyword<Annotation>) => {
                        temp.push(["UndefinedKeyword", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.push(["TypeReference", $]) },
                    )
                    break
                }
                case "TupleType": {
                    _TupleType(
                        $,
                        ($) => { temp.push(["TupleType", $]) },
                    )
                    break
                }
                case "LiteralType": {
                    _LiteralType(
                        $,
                        ($) => { temp.push(["LiteralType", $]) },
                    )
                    break
                }
                case "StringKeyword": {
                    _StringKeyword(
                        $,
                        ($) => { temp.push(["StringKeyword", $]) },
                    )
                    break
                }
                case "BooleanKeyword": {
                    _BooleanKeyword(
                        $,
                        ($) => { temp.push(["BooleanKeyword", $]) },
                    )
                    break
                }
                case "ArrayType": {
                    _ArrayType(
                        $,
                        ($) => { temp.push(["ArrayType", $]) },
                    )
                    break
                }
                case "NumberKeyword": {
                    _NumberKeyword(
                        $,
                        ($) => { temp.push(["NumberKeyword", $]) },
                    )
                    break
                }
                case "ParenthesizedType": {
                    const callback = ($: tapi.TParenthesizedType<Annotation>) => {
                        temp.push(["ParenthesizedType", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tapi.CParenthesizedType<Annotation>[] = []
                        const $parent = $
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "FunctionType": {
                                    _FunctionType(
                                        $,
                                        ($) => { temp.push(["FunctionType", $]) },
                                    )
                                    break
                                }
                                default: reportUnexpectedChild({ parent: $parent, child: $, })
                            }
                        })
                        callback({
                            annotation: $.annotation,
                            children: temp
                        })
                    })
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _ReadonlyKeyword(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TReadonlyKeyword<Annotation>) => void,
    ) {}
    function _FunctionDeclaration(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TFunctionDeclaration<Annotation>) => void,
    ) {
        const temp: tapi.CFunctionDeclaration<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "DeclareKeyword": {
                    _DeclareKeyword(
                        $,
                        ($) => { temp.push(["DeclareKeyword", $]) },
                    )
                    break
                }
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.push(["Identifier", $]) },
                    )
                    break
                }
                case "Parameter": {
                    _Parameter(
                        $,
                        ($) => { temp.push(["Parameter", $]) },
                    )
                    break
                }
                case "BooleanKeyword": {
                    _BooleanKeyword(
                        $,
                        ($) => { temp.push(["BooleanKeyword", $]) },
                    )
                    break
                }
                case "TypeParameter": {
                    _TypeParameter(
                        $,
                        ($) => { temp.push(["TypeParameter", $]) },
                    )
                    break
                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.push(["TypeReference", $]) },
                    )
                    break
                }
                case "Block": {
                    _Block(
                        $,
                        ($) => { temp.push(["Block", $]) },
                    )
                    break
                }
                case "ExportKeyword": {
                    _ExportKeyword(
                        $,
                        ($) => { temp.push(["ExportKeyword", $]) },
                    )
                    break
                }
                case "VoidKeyword": {
                    _VoidKeyword(
                        $,
                        ($) => { temp.push(["VoidKeyword", $]) },
                    )
                    break
                }
                case "UnionType": {
                    _UnionType(
                        $,
                        ($) => { temp.push(["UnionType", $]) },
                    )
                    break
                }
                case "StringKeyword": {
                    _StringKeyword(
                        $,
                        ($) => { temp.push(["StringKeyword", $]) },
                    )
                    break
                }
                case "ArrayType": {
                    _ArrayType(
                        $,
                        ($) => { temp.push(["ArrayType", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _DeclareKeyword(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TDeclareKeyword<Annotation>) => void,
    ) {}
    function _AnyKeyword(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TAnyKeyword<Annotation>) => void,
    ) {}
    function _QuestionToken(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TQuestionToken<Annotation>) => void,
    ) {}
    function _VariableStatement(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TVariableStatement<Annotation>) => void,
    ) {
        const temp: tapi.CVariableStatement<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "DeclareKeyword": {
                    _DeclareKeyword(
                        $,
                        ($) => { temp.push(["DeclareKeyword", $]) },
                    )
                    break
                }
                case "VariableDeclarationList": {
                    _VariableDeclarationList(
                        $,
                        ($) => { temp.push(["VariableDeclarationList", $]) },
                    )
                    break
                }
                case "ExportKeyword": {
                    _ExportKeyword(
                        $,
                        ($) => { temp.push(["ExportKeyword", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _VariableDeclarationList(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TVariableDeclarationList<Annotation>) => void,
    ) {
        const temp: tapi.CVariableDeclarationList<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "VariableDeclaration": {
                    _VariableDeclaration(
                        $,
                        ($) => { temp.push(["VariableDeclaration", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _VariableDeclaration(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TVariableDeclaration<Annotation>) => void,
    ) {
        const temp: tapi.CVariableDeclaration<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.push(["Identifier", $]) },
                    )
                    break
                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.push(["TypeReference", $]) },
                    )
                    break
                }
                case "NumericLiteral": {
                    _NumericLiteral(
                        $,
                        ($) => { temp.push(["NumericLiteral", $]) },
                    )
                    break
                }
                case "FalseKeyword": {
                    _FalseKeyword(
                        $,
                        ($) => { temp.push(["FalseKeyword", $]) },
                    )
                    break
                }
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.push(["CallExpression", $]) },
                    )
                    break
                }
                case "StringLiteral": {
                    _StringLiteral(
                        $,
                        ($) => { temp.push(["StringLiteral", $]) },
                    )
                    break
                }
                case "ArrayType": {
                    _ArrayType(
                        $,
                        ($) => { temp.push(["ArrayType", $]) },
                    )
                    break
                }
                case "ArrayLiteralExpression": {
                    _ArrayLiteralExpression(
                        $,
                        ($) => { temp.push(["ArrayLiteralExpression", $]) },
                    )
                    break
                }
                case "PropertyAccessExpression": {
                    _PropertyAccessExpression(
                        $,
                        ($) => { temp.push(["PropertyAccessExpression", $]) },
                    )
                    break
                }
                case "ElementAccessExpression": {
                    _ElementAccessExpression(
                        $,
                        ($) => { temp.push(["ElementAccessExpression", $]) },
                    )
                    break
                }
                case "ArrowFunction": {
                    _ArrowFunction(
                        $,
                        ($) => { temp.push(["ArrowFunction", $]) },
                    )
                    break
                }
                case "ObjectLiteralExpression": {
                    _ObjectLiteralExpression(
                        $,
                        ($) => { temp.push(["ObjectLiteralExpression", $]) },
                    )
                    break
                }
                case "PrefixUnaryExpression": {
                    _PrefixUnaryExpression(
                        $,
                        ($) => { temp.push(["PrefixUnaryExpression", $]) },
                    )
                    break
                }
                case "BinaryExpression": {
                    _BinaryExpression(
                        $,
                        ($) => { temp.push(["BinaryExpression", $]) },
                    )
                    break
                }
                case "ConditionalExpression": {
                    _ConditionalExpression(
                        $,
                        ($) => { temp.push(["ConditionalExpression", $]) },
                    )
                    break
                }
                case "NoSubstitutionTemplateLiteral": {
                    _NoSubstitutionTemplateLiteral(
                        $,
                        ($) => { temp.push(["NoSubstitutionTemplateLiteral", $]) },
                    )
                    break
                }
                case "ParenthesizedExpression": {
                    _ParenthesizedExpression(
                        $,
                        ($) => { temp.push(["ParenthesizedExpression", $]) },
                    )
                    break
                }
                case "NumberKeyword": {
                    _NumberKeyword(
                        $,
                        ($) => { temp.push(["NumberKeyword", $]) },
                    )
                    break
                }
                case "UnionType": {
                    _UnionType(
                        $,
                        ($) => { temp.push(["UnionType", $]) },
                    )
                    break
                }
                case "NullKeyword": {
                    _NullKeyword(
                        $,
                        ($) => { temp.push(["NullKeyword", $]) },
                    )
                    break
                }
                case "TypeLiteral": {
                    _TypeLiteral(
                        $,
                        ($) => { temp.push(["TypeLiteral", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _StringLiteral(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TStringLiteral<Annotation>) => void,
    ) {}
    function _Block(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TBlock<Annotation>) => void,
    ) {
        const temp: tapi.CBlock<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "ThrowStatement": {
                    const callback = ($: tapi.TThrowStatement<Annotation>) => {
                        temp.push(["ThrowStatement", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tapi.CThrowStatement<Annotation>[] = []
                        const $parent = $
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "NewExpression": {
                                    const callback = ($: tapi.TNewExpression<Annotation>) => {
                                        temp.push(["NewExpression", $])
                                    }
                                    pr.cc(null, (_) => {
                                        const temp: tapi.CNewExpression<Annotation>[] = []
                                        const $parent = $
                                        $.children.forEach(($) => {
                                            switch ($.kindName) {
                                                case "Identifier": {
                                                    _Identifier(
                                                        $,
                                                        ($) => { temp.push(["Identifier", $]) },
                                                    )
                                                    break
                                                }
                                                case "StringLiteral": {
                                                    _StringLiteral(
                                                        $,
                                                        ($) => { temp.push(["StringLiteral", $]) },
                                                    )
                                                    break
                                                }
                                                case "CallExpression": {
                                                    _CallExpression(
                                                        $,
                                                        ($) => { temp.push(["CallExpression", $]) },
                                                    )
                                                    break
                                                }
                                                case "TemplateExpression": {
                                                    _TemplateExpression(
                                                        $,
                                                        ($) => { temp.push(["TemplateExpression", $]) },
                                                    )
                                                    break
                                                }
                                                case "NoSubstitutionTemplateLiteral": {
                                                    _NoSubstitutionTemplateLiteral(
                                                        $,
                                                        ($) => { temp.push(["NoSubstitutionTemplateLiteral", $]) },
                                                    )
                                                    break
                                                }
                                                default: reportUnexpectedChild({ parent: $parent, child: $, })
                                            }
                                        })
                                        callback({
                                            annotation: $.annotation,
                                            children: temp
                                        })
                                    })
                                    break
                                }
                                default: reportUnexpectedChild({ parent: $parent, child: $, })
                            }
                        })
                        callback({
                            annotation: $.annotation,
                            children: temp
                        })
                    })
                    break
                }
                case "ReturnStatement": {
                    _ReturnStatement(
                        $,
                        ($) => { temp.push(["ReturnStatement", $]) },
                    )
                    break
                }
                case "VariableStatement": {
                    _VariableStatement(
                        $,
                        ($) => { temp.push(["VariableStatement", $]) },
                    )
                    break
                }
                case "FunctionDeclaration": {
                    _FunctionDeclaration(
                        $,
                        ($) => { temp.push(["FunctionDeclaration", $]) },
                    )
                    break
                }
                case "IfStatement": {
                    _IfStatement(
                        $,
                        ($) => { temp.push(["IfStatement", $]) },
                    )
                    break
                }
                case "ExpressionStatement": {
                    _ExpressionStatement(
                        $,
                        ($) => { temp.push(["ExpressionStatement", $]) },
                    )
                    break
                }
                case "SwitchStatement": {
                    const callback = ($: tapi.TSwitchStatement<Annotation>) => {
                        temp.push(["SwitchStatement", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tapi.CSwitchStatement<Annotation>[] = []
                        const $parent = $
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "ElementAccessExpression": {
                                    _ElementAccessExpression(
                                        $,
                                        ($) => { temp.push(["ElementAccessExpression", $]) },
                                    )
                                    break
                                }
                                case "CaseBlock": {
                                    const callback = ($: tapi.TCaseBlock<Annotation>) => {
                                        temp.push(["CaseBlock", $])
                                    }
                                    pr.cc(null, (_) => {
                                        const temp: tapi.CCaseBlock<Annotation>[] = []
                                        const $parent = $
                                        $.children.forEach(($) => {
                                            switch ($.kindName) {
                                                case "CaseClause": {
                                                    const callback = ($: tapi.TCaseClause<Annotation>) => {
                                                        temp.push(["CaseClause", $])
                                                    }
                                                    pr.cc(null, (_) => {
                                                        const temp: tapi.CCaseClause<Annotation>[] = []
                                                        const $parent = $
                                                        $.children.forEach(($) => {
                                                            switch ($.kindName) {
                                                                case "StringLiteral": {
                                                                    _StringLiteral(
                                                                        $,
                                                                        ($) => { temp.push(["StringLiteral", $]) },
                                                                    )
                                                                    break
                                                                }
                                                                case "ExpressionStatement": {
                                                                    _ExpressionStatement(
                                                                        $,
                                                                        ($) => { temp.push(["ExpressionStatement", $]) },
                                                                    )
                                                                    break
                                                                }
                                                                case "BreakStatement": {
                                                                    _BreakStatement(
                                                                        $,
                                                                        ($) => { temp.push(["BreakStatement", $]) },
                                                                    )
                                                                    break
                                                                }
                                                                case "Block": {
                                                                    _Block(
                                                                        $,
                                                                        ($) => { temp.push(["Block", $]) },
                                                                    )
                                                                    break
                                                                }
                                                                case "ReturnStatement": {
                                                                    _ReturnStatement(
                                                                        $,
                                                                        ($) => { temp.push(["ReturnStatement", $]) },
                                                                    )
                                                                    break
                                                                }
                                                                case "VariableStatement": {
                                                                    _VariableStatement(
                                                                        $,
                                                                        ($) => { temp.push(["VariableStatement", $]) },
                                                                    )
                                                                    break
                                                                }
                                                                case "IfStatement": {
                                                                    _IfStatement(
                                                                        $,
                                                                        ($) => { temp.push(["IfStatement", $]) },
                                                                    )
                                                                    break
                                                                }
                                                                case "PropertyAccessExpression": {
                                                                    _PropertyAccessExpression(
                                                                        $,
                                                                        ($) => { temp.push(["PropertyAccessExpression", $]) },
                                                                    )
                                                                    break
                                                                }
                                                                default: reportUnexpectedChild({ parent: $parent, child: $, })
                                                            }
                                                        })
                                                        callback({
                                                            annotation: $.annotation,
                                                            children: temp
                                                        })
                                                    })
                                                    break
                                                }
                                                case "DefaultClause": {
                                                    const callback = ($: tapi.TDefaultClause<Annotation>) => {
                                                        temp.push(["DefaultClause", $])
                                                    }
                                                    pr.cc(null, (_) => {
                                                        const temp: tapi.CDefaultClause<Annotation>[] = []
                                                        const $parent = $
                                                        $.children.forEach(($) => {
                                                            switch ($.kindName) {
                                                                case "ExpressionStatement": {
                                                                    _ExpressionStatement(
                                                                        $,
                                                                        ($) => { temp.push(["ExpressionStatement", $]) },
                                                                    )
                                                                    break
                                                                }
                                                                case "ReturnStatement": {
                                                                    _ReturnStatement(
                                                                        $,
                                                                        ($) => { temp.push(["ReturnStatement", $]) },
                                                                    )
                                                                    break
                                                                }
                                                                case "Block": {
                                                                    _Block(
                                                                        $,
                                                                        ($) => { temp.push(["Block", $]) },
                                                                    )
                                                                    break
                                                                }
                                                                default: reportUnexpectedChild({ parent: $parent, child: $, })
                                                            }
                                                        })
                                                        callback({
                                                            annotation: $.annotation,
                                                            children: temp
                                                        })
                                                    })
                                                    break
                                                }
                                                default: reportUnexpectedChild({ parent: $parent, child: $, })
                                            }
                                        })
                                        callback({
                                            annotation: $.annotation,
                                            children: temp
                                        })
                                    })
                                    break
                                }
                                case "Identifier": {
                                    _Identifier(
                                        $,
                                        ($) => { temp.push(["Identifier", $]) },
                                    )
                                    break
                                }
                                case "PropertyAccessExpression": {
                                    _PropertyAccessExpression(
                                        $,
                                        ($) => { temp.push(["PropertyAccessExpression", $]) },
                                    )
                                    break
                                }
                                default: reportUnexpectedChild({ parent: $parent, child: $, })
                            }
                        })
                        callback({
                            annotation: $.annotation,
                            children: temp
                        })
                    })
                    break
                }
                case "TryStatement": {
                    const callback = ($: tapi.TTryStatement<Annotation>) => {
                        temp.push(["TryStatement", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tapi.CTryStatement<Annotation>[] = []
                        const $parent = $
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "Block": {
                                    _Block(
                                        $,
                                        ($) => { temp.push(["Block", $]) },
                                    )
                                    break
                                }
                                case "CatchClause": {
                                    const callback = ($: tapi.TCatchClause<Annotation>) => {
                                        temp.push(["CatchClause", $])
                                    }
                                    pr.cc(null, (_) => {
                                        const temp: tapi.CCatchClause<Annotation>[] = []
                                        const $parent = $
                                        $.children.forEach(($) => {
                                            switch ($.kindName) {
                                                case "VariableDeclaration": {
                                                    _VariableDeclaration(
                                                        $,
                                                        ($) => { temp.push(["VariableDeclaration", $]) },
                                                    )
                                                    break
                                                }
                                                case "Block": {
                                                    _Block(
                                                        $,
                                                        ($) => { temp.push(["Block", $]) },
                                                    )
                                                    break
                                                }
                                                default: reportUnexpectedChild({ parent: $parent, child: $, })
                                            }
                                        })
                                        callback({
                                            annotation: $.annotation,
                                            children: temp
                                        })
                                    })
                                    break
                                }
                                default: reportUnexpectedChild({ parent: $parent, child: $, })
                            }
                        })
                        callback({
                            annotation: $.annotation,
                            children: temp
                        })
                    })
                    break
                }
                case "BreakStatement": {
                    _BreakStatement(
                        $,
                        ($) => { temp.push(["BreakStatement", $]) },
                    )
                    break
                }
                case "TypeAliasDeclaration": {
                    _TypeAliasDeclaration(
                        $,
                        ($) => { temp.push(["TypeAliasDeclaration", $]) },
                    )
                    break
                }
                case "ForStatement": {
                    const callback = ($: tapi.TForStatement<Annotation>) => {
                        temp.push(["ForStatement", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tapi.CForStatement<Annotation>[] = []
                        const $parent = $
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "VariableDeclarationList": {
                                    _VariableDeclarationList(
                                        $,
                                        ($) => { temp.push(["VariableDeclarationList", $]) },
                                    )
                                    break
                                }
                                case "BinaryExpression": {
                                    _BinaryExpression(
                                        $,
                                        ($) => { temp.push(["BinaryExpression", $]) },
                                    )
                                    break
                                }
                                case "Block": {
                                    _Block(
                                        $,
                                        ($) => { temp.push(["Block", $]) },
                                    )
                                    break
                                }
                                default: reportUnexpectedChild({ parent: $parent, child: $, })
                            }
                        })
                        callback({
                            annotation: $.annotation,
                            children: temp
                        })
                    })
                    break
                }
                case "WhileStatement": {
                    _WhileStatement(
                        $,
                        ($) => { temp.push(["WhileStatement", $]) },
                    )
                    break
                }
                case "LabeledStatement": {
                    const callback = ($: tapi.TLabeledStatement<Annotation>) => {
                        temp.push(["LabeledStatement", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tapi.CLabeledStatement<Annotation>[] = []
                        const $parent = $
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "Identifier": {
                                    _Identifier(
                                        $,
                                        ($) => { temp.push(["Identifier", $]) },
                                    )
                                    break
                                }
                                case "WhileStatement": {
                                    _WhileStatement(
                                        $,
                                        ($) => { temp.push(["WhileStatement", $]) },
                                    )
                                    break
                                }
                                default: reportUnexpectedChild({ parent: $parent, child: $, })
                            }
                        })
                        callback({
                            annotation: $.annotation,
                            children: temp
                        })
                    })
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _ReturnStatement(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TReturnStatement<Annotation>) => void,
    ) {
        const temp: tapi.CReturnStatement<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.push(["CallExpression", $]) },
                    )
                    break
                }
                case "ObjectLiteralExpression": {
                    _ObjectLiteralExpression(
                        $,
                        ($) => { temp.push(["ObjectLiteralExpression", $]) },
                    )
                    break
                }
                case "TemplateExpression": {
                    _TemplateExpression(
                        $,
                        ($) => { temp.push(["TemplateExpression", $]) },
                    )
                    break
                }
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.push(["Identifier", $]) },
                    )
                    break
                }
                case "ArrayLiteralExpression": {
                    _ArrayLiteralExpression(
                        $,
                        ($) => { temp.push(["ArrayLiteralExpression", $]) },
                    )
                    break
                }
                case "NullKeyword": {
                    _NullKeyword(
                        $,
                        ($) => { temp.push(["NullKeyword", $]) },
                    )
                    break
                }
                case "ArrowFunction": {
                    _ArrowFunction(
                        $,
                        ($) => { temp.push(["ArrowFunction", $]) },
                    )
                    break
                }
                case "PropertyAccessExpression": {
                    _PropertyAccessExpression(
                        $,
                        ($) => { temp.push(["PropertyAccessExpression", $]) },
                    )
                    break
                }
                case "BinaryExpression": {
                    _BinaryExpression(
                        $,
                        ($) => { temp.push(["BinaryExpression", $]) },
                    )
                    break
                }
                case "PrefixUnaryExpression": {
                    _PrefixUnaryExpression(
                        $,
                        ($) => { temp.push(["PrefixUnaryExpression", $]) },
                    )
                    break
                }
                case "ConditionalExpression": {
                    _ConditionalExpression(
                        $,
                        ($) => { temp.push(["ConditionalExpression", $]) },
                    )
                    break
                }
                case "ElementAccessExpression": {
                    _ElementAccessExpression(
                        $,
                        ($) => { temp.push(["ElementAccessExpression", $]) },
                    )
                    break
                }
                case "NoSubstitutionTemplateLiteral": {
                    _NoSubstitutionTemplateLiteral(
                        $,
                        ($) => { temp.push(["NoSubstitutionTemplateLiteral", $]) },
                    )
                    break
                }
                case "StringLiteral": {
                    _StringLiteral(
                        $,
                        ($) => { temp.push(["StringLiteral", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _CallExpression(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TCallExpression<Annotation>) => void,
    ) {
        const temp: tapi.CCallExpression<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.push(["Identifier", $]) },
                    )
                    break
                }
                case "PropertyAccessExpression": {
                    _PropertyAccessExpression(
                        $,
                        ($) => { temp.push(["PropertyAccessExpression", $]) },
                    )
                    break
                }
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.push(["CallExpression", $]) },
                    )
                    break
                }
                case "ArrowFunction": {
                    _ArrowFunction(
                        $,
                        ($) => { temp.push(["ArrowFunction", $]) },
                    )
                    break
                }
                case "ElementAccessExpression": {
                    _ElementAccessExpression(
                        $,
                        ($) => { temp.push(["ElementAccessExpression", $]) },
                    )
                    break
                }
                case "ArrayLiteralExpression": {
                    _ArrayLiteralExpression(
                        $,
                        ($) => { temp.push(["ArrayLiteralExpression", $]) },
                    )
                    break
                }
                case "NullKeyword": {
                    _NullKeyword(
                        $,
                        ($) => { temp.push(["NullKeyword", $]) },
                    )
                    break
                }
                case "ObjectLiteralExpression": {
                    _ObjectLiteralExpression(
                        $,
                        ($) => { temp.push(["ObjectLiteralExpression", $]) },
                    )
                    break
                }
                case "StringLiteral": {
                    _StringLiteral(
                        $,
                        ($) => { temp.push(["StringLiteral", $]) },
                    )
                    break
                }
                case "BinaryExpression": {
                    _BinaryExpression(
                        $,
                        ($) => { temp.push(["BinaryExpression", $]) },
                    )
                    break
                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.push(["TypeReference", $]) },
                    )
                    break
                }
                case "TemplateExpression": {
                    _TemplateExpression(
                        $,
                        ($) => { temp.push(["TemplateExpression", $]) },
                    )
                    break
                }
                case "ConditionalExpression": {
                    _ConditionalExpression(
                        $,
                        ($) => { temp.push(["ConditionalExpression", $]) },
                    )
                    break
                }
                case "NoSubstitutionTemplateLiteral": {
                    _NoSubstitutionTemplateLiteral(
                        $,
                        ($) => { temp.push(["NoSubstitutionTemplateLiteral", $]) },
                    )
                    break
                }
                case "ParenthesizedExpression": {
                    _ParenthesizedExpression(
                        $,
                        ($) => { temp.push(["ParenthesizedExpression", $]) },
                    )
                    break
                }
                case "NumericLiteral": {
                    _NumericLiteral(
                        $,
                        ($) => { temp.push(["NumericLiteral", $]) },
                    )
                    break
                }
                case "TrueKeyword": {
                    _TrueKeyword(
                        $,
                        ($) => { temp.push(["TrueKeyword", $]) },
                    )
                    break
                }
                case "FalseKeyword": {
                    _FalseKeyword(
                        $,
                        ($) => { temp.push(["FalseKeyword", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _ExportKeyword(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TExportKeyword<Annotation>) => void,
    ) {}
    function _NumericLiteral(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TNumericLiteral<Annotation>) => void,
    ) {}
    function _FalseKeyword(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TFalseKeyword<Annotation>) => void,
    ) {}
    function _IfStatement(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TIfStatement<Annotation>) => void,
    ) {
        const temp: tapi.CIfStatement<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "BinaryExpression": {
                    _BinaryExpression(
                        $,
                        ($) => { temp.push(["BinaryExpression", $]) },
                    )
                    break
                }
                case "Block": {
                    _Block(
                        $,
                        ($) => { temp.push(["Block", $]) },
                    )
                    break
                }
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.push(["Identifier", $]) },
                    )
                    break
                }
                case "PropertyAccessExpression": {
                    _PropertyAccessExpression(
                        $,
                        ($) => { temp.push(["PropertyAccessExpression", $]) },
                    )
                    break
                }
                case "PrefixUnaryExpression": {
                    _PrefixUnaryExpression(
                        $,
                        ($) => { temp.push(["PrefixUnaryExpression", $]) },
                    )
                    break
                }
                case "ReturnStatement": {
                    _ReturnStatement(
                        $,
                        ($) => { temp.push(["ReturnStatement", $]) },
                    )
                    break
                }
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.push(["CallExpression", $]) },
                    )
                    break
                }
                case "IfStatement": {
                    _IfStatement(
                        $,
                        ($) => { temp.push(["IfStatement", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _BinaryExpression(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TBinaryExpression<Annotation>) => void,
    ) {
        const temp: tapi.CBinaryExpression<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "BinaryExpression": {
                    _BinaryExpression(
                        $,
                        ($) => { temp.push(["BinaryExpression", $]) },
                    )
                    break
                }
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.push(["Identifier", $]) },
                    )
                    break
                }
                case "EqualsEqualsEqualsToken": {
                    const callback = ($: tapi.TEqualsEqualsEqualsToken<Annotation>) => {
                        temp.push(["EqualsEqualsEqualsToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "NumericLiteral": {
                    _NumericLiteral(
                        $,
                        ($) => { temp.push(["NumericLiteral", $]) },
                    )
                    break
                }
                case "AmpersandAmpersandToken": {
                    const callback = ($: tapi.TAmpersandAmpersandToken<Annotation>) => {
                        temp.push(["AmpersandAmpersandToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "PlusEqualsToken": {
                    const callback = ($: tapi.TPlusEqualsToken<Annotation>) => {
                        temp.push(["PlusEqualsToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "MinusEqualsToken": {
                    const callback = ($: tapi.TMinusEqualsToken<Annotation>) => {
                        temp.push(["MinusEqualsToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "EqualsToken": {
                    const callback = ($: tapi.TEqualsToken<Annotation>) => {
                        temp.push(["EqualsToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "TrueKeyword": {
                    _TrueKeyword(
                        $,
                        ($) => { temp.push(["TrueKeyword", $]) },
                    )
                    break
                }
                case "ElementAccessExpression": {
                    _ElementAccessExpression(
                        $,
                        ($) => { temp.push(["ElementAccessExpression", $]) },
                    )
                    break
                }
                case "ExclamationEqualsEqualsToken": {
                    const callback = ($: tapi.TExclamationEqualsEqualsToken<Annotation>) => {
                        temp.push(["ExclamationEqualsEqualsToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "StringLiteral": {
                    _StringLiteral(
                        $,
                        ($) => { temp.push(["StringLiteral", $]) },
                    )
                    break
                }
                case "PlusToken": {
                    const callback = ($: tapi.TPlusToken<Annotation>) => {
                        temp.push(["PlusToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "PropertyAccessExpression": {
                    _PropertyAccessExpression(
                        $,
                        ($) => { temp.push(["PropertyAccessExpression", $]) },
                    )
                    break
                }
                case "NullKeyword": {
                    _NullKeyword(
                        $,
                        ($) => { temp.push(["NullKeyword", $]) },
                    )
                    break
                }
                case "ParenthesizedExpression": {
                    _ParenthesizedExpression(
                        $,
                        ($) => { temp.push(["ParenthesizedExpression", $]) },
                    )
                    break
                }
                case "ObjectLiteralExpression": {
                    _ObjectLiteralExpression(
                        $,
                        ($) => { temp.push(["ObjectLiteralExpression", $]) },
                    )
                    break
                }
                case "MinusToken": {
                    const callback = ($: tapi.TMinusToken<Annotation>) => {
                        temp.push(["MinusToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "GreaterThanToken": {
                    const callback = ($: tapi.TGreaterThanToken<Annotation>) => {
                        temp.push(["GreaterThanToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.push(["CallExpression", $]) },
                    )
                    break
                }
                case "FalseKeyword": {
                    _FalseKeyword(
                        $,
                        ($) => { temp.push(["FalseKeyword", $]) },
                    )
                    break
                }
                case "LessThanToken": {
                    const callback = ($: tapi.TLessThanToken<Annotation>) => {
                        temp.push(["LessThanToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "BarBarToken": {
                    const callback = ($: tapi.TBarBarToken<Annotation>) => {
                        temp.push(["BarBarToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "ArrayLiteralExpression": {
                    _ArrayLiteralExpression(
                        $,
                        ($) => { temp.push(["ArrayLiteralExpression", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _ExpressionStatement(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TExpressionStatement<Annotation>) => void,
    ) {
        const temp: tapi.CExpressionStatement<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.push(["CallExpression", $]) },
                    )
                    break
                }
                case "BinaryExpression": {
                    _BinaryExpression(
                        $,
                        ($) => { temp.push(["BinaryExpression", $]) },
                    )
                    break
                }
                case "PostfixUnaryExpression": {
                    const callback = ($: tapi.TPostfixUnaryExpression<Annotation>) => {
                        temp.push(["PostfixUnaryExpression", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tapi.CPostfixUnaryExpression<Annotation>[] = []
                        const $parent = $
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "Identifier": {
                                    _Identifier(
                                        $,
                                        ($) => { temp.push(["Identifier", $]) },
                                    )
                                    break
                                }
                                case "PropertyAccessExpression": {
                                    _PropertyAccessExpression(
                                        $,
                                        ($) => { temp.push(["PropertyAccessExpression", $]) },
                                    )
                                    break
                                }
                                default: reportUnexpectedChild({ parent: $parent, child: $, })
                            }
                        })
                        callback({
                            annotation: $.annotation,
                            children: temp
                        })
                    })
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _ObjectLiteralExpression(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TObjectLiteralExpression<Annotation>) => void,
    ) {
        const temp: tapi.CObjectLiteralExpression<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "PropertyAssignment": {
                    const callback = ($: tapi.TPropertyAssignment<Annotation>) => {
                        temp.push(["PropertyAssignment", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tapi.CPropertyAssignment<Annotation>[] = []
                        const $parent = $
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "Identifier": {
                                    _Identifier(
                                        $,
                                        ($) => { temp.push(["Identifier", $]) },
                                    )
                                    break
                                }
                                case "ArrowFunction": {
                                    _ArrowFunction(
                                        $,
                                        ($) => { temp.push(["ArrowFunction", $]) },
                                    )
                                    break
                                }
                                case "PropertyAccessExpression": {
                                    _PropertyAccessExpression(
                                        $,
                                        ($) => { temp.push(["PropertyAccessExpression", $]) },
                                    )
                                    break
                                }
                                case "StringLiteral": {
                                    _StringLiteral(
                                        $,
                                        ($) => { temp.push(["StringLiteral", $]) },
                                    )
                                    break
                                }
                                case "ElementAccessExpression": {
                                    _ElementAccessExpression(
                                        $,
                                        ($) => { temp.push(["ElementAccessExpression", $]) },
                                    )
                                    break
                                }
                                case "ObjectLiteralExpression": {
                                    _ObjectLiteralExpression(
                                        $,
                                        ($) => { temp.push(["ObjectLiteralExpression", $]) },
                                    )
                                    break
                                }
                                case "CallExpression": {
                                    _CallExpression(
                                        $,
                                        ($) => { temp.push(["CallExpression", $]) },
                                    )
                                    break
                                }
                                case "NullKeyword": {
                                    _NullKeyword(
                                        $,
                                        ($) => { temp.push(["NullKeyword", $]) },
                                    )
                                    break
                                }
                                case "PrefixUnaryExpression": {
                                    _PrefixUnaryExpression(
                                        $,
                                        ($) => { temp.push(["PrefixUnaryExpression", $]) },
                                    )
                                    break
                                }
                                case "FalseKeyword": {
                                    _FalseKeyword(
                                        $,
                                        ($) => { temp.push(["FalseKeyword", $]) },
                                    )
                                    break
                                }
                                case "TemplateExpression": {
                                    _TemplateExpression(
                                        $,
                                        ($) => { temp.push(["TemplateExpression", $]) },
                                    )
                                    break
                                }
                                case "TrueKeyword": {
                                    _TrueKeyword(
                                        $,
                                        ($) => { temp.push(["TrueKeyword", $]) },
                                    )
                                    break
                                }
                                case "ConditionalExpression": {
                                    _ConditionalExpression(
                                        $,
                                        ($) => { temp.push(["ConditionalExpression", $]) },
                                    )
                                    break
                                }
                                case "ArrayLiteralExpression": {
                                    _ArrayLiteralExpression(
                                        $,
                                        ($) => { temp.push(["ArrayLiteralExpression", $]) },
                                    )
                                    break
                                }
                                case "NoSubstitutionTemplateLiteral": {
                                    _NoSubstitutionTemplateLiteral(
                                        $,
                                        ($) => { temp.push(["NoSubstitutionTemplateLiteral", $]) },
                                    )
                                    break
                                }
                                case "BinaryExpression": {
                                    _BinaryExpression(
                                        $,
                                        ($) => { temp.push(["BinaryExpression", $]) },
                                    )
                                    break
                                }
                                case "ParenthesizedExpression": {
                                    _ParenthesizedExpression(
                                        $,
                                        ($) => { temp.push(["ParenthesizedExpression", $]) },
                                    )
                                    break
                                }
                                case "NumericLiteral": {
                                    _NumericLiteral(
                                        $,
                                        ($) => { temp.push(["NumericLiteral", $]) },
                                    )
                                    break
                                }
                                default: reportUnexpectedChild({ parent: $parent, child: $, })
                            }
                        })
                        callback({
                            annotation: $.annotation,
                            children: temp
                        })
                    })
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _ArrowFunction(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TArrowFunction<Annotation>) => void,
    ) {
        const temp: tapi.CArrowFunction<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Parameter": {
                    _Parameter(
                        $,
                        ($) => { temp.push(["Parameter", $]) },
                    )
                    break
                }
                case "EqualsGreaterThanToken": {
                    const callback = ($: tapi.TEqualsGreaterThanToken<Annotation>) => {
                        temp.push(["EqualsGreaterThanToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "Block": {
                    _Block(
                        $,
                        ($) => { temp.push(["Block", $]) },
                    )
                    break
                }
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.push(["Identifier", $]) },
                    )
                    break
                }
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.push(["CallExpression", $]) },
                    )
                    break
                }
                case "BinaryExpression": {
                    _BinaryExpression(
                        $,
                        ($) => { temp.push(["BinaryExpression", $]) },
                    )
                    break
                }
                case "StringKeyword": {
                    _StringKeyword(
                        $,
                        ($) => { temp.push(["StringKeyword", $]) },
                    )
                    break
                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.push(["TypeReference", $]) },
                    )
                    break
                }
                case "VoidKeyword": {
                    _VoidKeyword(
                        $,
                        ($) => { temp.push(["VoidKeyword", $]) },
                    )
                    break
                }
                case "UnionType": {
                    _UnionType(
                        $,
                        ($) => { temp.push(["UnionType", $]) },
                    )
                    break
                }
                case "TemplateExpression": {
                    _TemplateExpression(
                        $,
                        ($) => { temp.push(["TemplateExpression", $]) },
                    )
                    break
                }
                case "PropertyAccessExpression": {
                    _PropertyAccessExpression(
                        $,
                        ($) => { temp.push(["PropertyAccessExpression", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _PropertyAccessExpression(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TPropertyAccessExpression<Annotation>) => void,
    ) {
        const temp: tapi.CPropertyAccessExpression<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.push(["Identifier", $]) },
                    )
                    break
                }
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.push(["CallExpression", $]) },
                    )
                    break
                }
                case "PropertyAccessExpression": {
                    _PropertyAccessExpression(
                        $,
                        ($) => { temp.push(["PropertyAccessExpression", $]) },
                    )
                    break
                }
                case "ElementAccessExpression": {
                    _ElementAccessExpression(
                        $,
                        ($) => { temp.push(["ElementAccessExpression", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _ElementAccessExpression(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TElementAccessExpression<Annotation>) => void,
    ) {
        const temp: tapi.CElementAccessExpression<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.push(["Identifier", $]) },
                    )
                    break
                }
                case "NumericLiteral": {
                    _NumericLiteral(
                        $,
                        ($) => { temp.push(["NumericLiteral", $]) },
                    )
                    break
                }
                case "PropertyAccessExpression": {
                    _PropertyAccessExpression(
                        $,
                        ($) => { temp.push(["PropertyAccessExpression", $]) },
                    )
                    break
                }
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.push(["CallExpression", $]) },
                    )
                    break
                }
                case "StringLiteral": {
                    _StringLiteral(
                        $,
                        ($) => { temp.push(["StringLiteral", $]) },
                    )
                    break
                }
                case "ElementAccessExpression": {
                    _ElementAccessExpression(
                        $,
                        ($) => { temp.push(["ElementAccessExpression", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _ArrayLiteralExpression(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TArrayLiteralExpression<Annotation>) => void,
    ) {
        const temp: tapi.CArrayLiteralExpression<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "StringLiteral": {
                    _StringLiteral(
                        $,
                        ($) => { temp.push(["StringLiteral", $]) },
                    )
                    break
                }
                case "ObjectLiteralExpression": {
                    _ObjectLiteralExpression(
                        $,
                        ($) => { temp.push(["ObjectLiteralExpression", $]) },
                    )
                    break
                }
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.push(["Identifier", $]) },
                    )
                    break
                }
                case "PropertyAccessExpression": {
                    _PropertyAccessExpression(
                        $,
                        ($) => { temp.push(["PropertyAccessExpression", $]) },
                    )
                    break
                }
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.push(["CallExpression", $]) },
                    )
                    break
                }
                case "BinaryExpression": {
                    _BinaryExpression(
                        $,
                        ($) => { temp.push(["BinaryExpression", $]) },
                    )
                    break
                }
                case "NullKeyword": {
                    _NullKeyword(
                        $,
                        ($) => { temp.push(["NullKeyword", $]) },
                    )
                    break
                }
                case "ConditionalExpression": {
                    _ConditionalExpression(
                        $,
                        ($) => { temp.push(["ConditionalExpression", $]) },
                    )
                    break
                }
                case "TemplateExpression": {
                    _TemplateExpression(
                        $,
                        ($) => { temp.push(["TemplateExpression", $]) },
                    )
                    break
                }
                case "ArrayLiteralExpression": {
                    _ArrayLiteralExpression(
                        $,
                        ($) => { temp.push(["ArrayLiteralExpression", $]) },
                    )
                    break
                }
                case "NumericLiteral": {
                    _NumericLiteral(
                        $,
                        ($) => { temp.push(["NumericLiteral", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _BreakStatement(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TBreakStatement<Annotation>) => void,
    ) {
        const temp: tapi.CBreakStatement<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.push(["Identifier", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _NullKeyword(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TNullKeyword<Annotation>) => void,
    ) {}
    function _TrueKeyword(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TTrueKeyword<Annotation>) => void,
    ) {}
    function _TypeAliasDeclaration(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TTypeAliasDeclaration<Annotation>) => void,
    ) {
        const temp: tapi.CTypeAliasDeclaration<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "ExportKeyword": {
                    _ExportKeyword(
                        $,
                        ($) => { temp.push(["ExportKeyword", $]) },
                    )
                    break
                }
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.push(["Identifier", $]) },
                    )
                    break
                }
                case "TypeLiteral": {
                    _TypeLiteral(
                        $,
                        ($) => { temp.push(["TypeLiteral", $]) },
                    )
                    break
                }
                case "TypeParameter": {
                    _TypeParameter(
                        $,
                        ($) => { temp.push(["TypeParameter", $]) },
                    )
                    break
                }
                case "TupleType": {
                    _TupleType(
                        $,
                        ($) => { temp.push(["TupleType", $]) },
                    )
                    break
                }
                case "UnionType": {
                    _UnionType(
                        $,
                        ($) => { temp.push(["UnionType", $]) },
                    )
                    break
                }
                case "ArrayType": {
                    _ArrayType(
                        $,
                        ($) => { temp.push(["ArrayType", $]) },
                    )
                    break
                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.push(["TypeReference", $]) },
                    )
                    break
                }
                case "FunctionType": {
                    _FunctionType(
                        $,
                        ($) => { temp.push(["FunctionType", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _TypeLiteral(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TTypeLiteral<Annotation>) => void,
    ) {
        const temp: tapi.CTypeLiteral<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "PropertySignature": {
                    _PropertySignature(
                        $,
                        ($) => { temp.push(["PropertySignature", $]) },
                    )
                    break
                }
                case "MethodSignature": {
                    _MethodSignature(
                        $,
                        ($) => { temp.push(["MethodSignature", $]) },
                    )
                    break
                }
                case "IndexSignature": {
                    const callback = ($: tapi.TIndexSignature<Annotation>) => {
                        temp.push(["IndexSignature", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _TemplateExpression(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TTemplateExpression<Annotation>) => void,
    ) {
        const temp: tapi.CTemplateExpression<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "TemplateHead": {
                    const callback = ($: tapi.TTemplateHead<Annotation>) => {
                        temp.push(["TemplateHead", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "TemplateSpan": {
                    const callback = ($: tapi.TTemplateSpan<Annotation>) => {
                        temp.push(["TemplateSpan", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tapi.CTemplateSpan<Annotation>[] = []
                        const $parent = $
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "PropertyAccessExpression": {
                                    _PropertyAccessExpression(
                                        $,
                                        ($) => { temp.push(["PropertyAccessExpression", $]) },
                                    )
                                    break
                                }
                                case "TemplateMiddle": {
                                    const callback = ($: tapi.TTemplateMiddle<Annotation>) => {
                                        temp.push(["TemplateMiddle", $])
                                    }
                                    pr.cc(null, (_) => {})
                                    break
                                }
                                case "TemplateTail": {
                                    const callback = ($: tapi.TTemplateTail<Annotation>) => {
                                        temp.push(["TemplateTail", $])
                                    }
                                    pr.cc(null, (_) => {})
                                    break
                                }
                                case "Identifier": {
                                    _Identifier(
                                        $,
                                        ($) => { temp.push(["Identifier", $]) },
                                    )
                                    break
                                }
                                case "CallExpression": {
                                    _CallExpression(
                                        $,
                                        ($) => { temp.push(["CallExpression", $]) },
                                    )
                                    break
                                }
                                case "ConditionalExpression": {
                                    _ConditionalExpression(
                                        $,
                                        ($) => { temp.push(["ConditionalExpression", $]) },
                                    )
                                    break
                                }
                                case "ElementAccessExpression": {
                                    _ElementAccessExpression(
                                        $,
                                        ($) => { temp.push(["ElementAccessExpression", $]) },
                                    )
                                    break
                                }
                                case "BinaryExpression": {
                                    _BinaryExpression(
                                        $,
                                        ($) => { temp.push(["BinaryExpression", $]) },
                                    )
                                    break
                                }
                                default: reportUnexpectedChild({ parent: $parent, child: $, })
                            }
                        })
                        callback({
                            annotation: $.annotation,
                            children: temp
                        })
                    })
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _PrefixUnaryExpression(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TPrefixUnaryExpression<Annotation>) => void,
    ) {
        const temp: tapi.CPrefixUnaryExpression<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.push(["Identifier", $]) },
                    )
                    break
                }
                case "PropertyAccessExpression": {
                    _PropertyAccessExpression(
                        $,
                        ($) => { temp.push(["PropertyAccessExpression", $]) },
                    )
                    break
                }
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.push(["CallExpression", $]) },
                    )
                    break
                }
                case "NumericLiteral": {
                    _NumericLiteral(
                        $,
                        ($) => { temp.push(["NumericLiteral", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _TupleType(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TTupleType<Annotation>) => void,
    ) {
        const temp: tapi.CTupleType<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "OptionalType": {
                    const callback = ($: tapi.TOptionalType<Annotation>) => {
                        temp.push(["OptionalType", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tapi.COptionalType<Annotation>[] = []
                        const $parent = $
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "NumberKeyword": {
                                    _NumberKeyword(
                                        $,
                                        ($) => { temp.push(["NumberKeyword", $]) },
                                    )
                                    break
                                }
                                case "TypeReference": {
                                    _TypeReference(
                                        $,
                                        ($) => { temp.push(["TypeReference", $]) },
                                    )
                                    break
                                }
                                default: reportUnexpectedChild({ parent: $parent, child: $, })
                            }
                        })
                        callback({
                            annotation: $.annotation,
                            children: temp
                        })
                    })
                    break
                }
                case "LiteralType": {
                    _LiteralType(
                        $,
                        ($) => { temp.push(["LiteralType", $]) },
                    )
                    break
                }
                case "StringKeyword": {
                    _StringKeyword(
                        $,
                        ($) => { temp.push(["StringKeyword", $]) },
                    )
                    break
                }
                case "UnionType": {
                    _UnionType(
                        $,
                        ($) => { temp.push(["UnionType", $]) },
                    )
                    break
                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.push(["TypeReference", $]) },
                    )
                    break
                }
                case "TypeLiteral": {
                    _TypeLiteral(
                        $,
                        ($) => { temp.push(["TypeLiteral", $]) },
                    )
                    break
                }
                case "ArrayType": {
                    _ArrayType(
                        $,
                        ($) => { temp.push(["ArrayType", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _LiteralType(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TLiteralType<Annotation>) => void,
    ) {
        const temp: tapi.CLiteralType<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "StringLiteral": {
                    _StringLiteral(
                        $,
                        ($) => { temp.push(["StringLiteral", $]) },
                    )
                    break
                }
                case "NullKeyword": {
                    _NullKeyword(
                        $,
                        ($) => { temp.push(["NullKeyword", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _ConditionalExpression(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TConditionalExpression<Annotation>) => void,
    ) {
        const temp: tapi.CConditionalExpression<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "BinaryExpression": {
                    _BinaryExpression(
                        $,
                        ($) => { temp.push(["BinaryExpression", $]) },
                    )
                    break
                }
                case "QuestionToken": {
                    _QuestionToken(
                        $,
                        ($) => { temp.push(["QuestionToken", $]) },
                    )
                    break
                }
                case "NullKeyword": {
                    _NullKeyword(
                        $,
                        ($) => { temp.push(["NullKeyword", $]) },
                    )
                    break
                }
                case "ColonToken": {
                    const callback = ($: tapi.TColonToken<Annotation>) => {
                        temp.push(["ColonToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "PropertyAccessExpression": {
                    _PropertyAccessExpression(
                        $,
                        ($) => { temp.push(["PropertyAccessExpression", $]) },
                    )
                    break
                }
                case "StringLiteral": {
                    _StringLiteral(
                        $,
                        ($) => { temp.push(["StringLiteral", $]) },
                    )
                    break
                }
                case "TemplateExpression": {
                    _TemplateExpression(
                        $,
                        ($) => { temp.push(["TemplateExpression", $]) },
                    )
                    break
                }
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.push(["CallExpression", $]) },
                    )
                    break
                }
                case "NoSubstitutionTemplateLiteral": {
                    _NoSubstitutionTemplateLiteral(
                        $,
                        ($) => { temp.push(["NoSubstitutionTemplateLiteral", $]) },
                    )
                    break
                }
                case "ConditionalExpression": {
                    _ConditionalExpression(
                        $,
                        ($) => { temp.push(["ConditionalExpression", $]) },
                    )
                    break
                }
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.push(["Identifier", $]) },
                    )
                    break
                }
                case "ObjectLiteralExpression": {
                    _ObjectLiteralExpression(
                        $,
                        ($) => { temp.push(["ObjectLiteralExpression", $]) },
                    )
                    break
                }
                case "ArrayLiteralExpression": {
                    _ArrayLiteralExpression(
                        $,
                        ($) => { temp.push(["ArrayLiteralExpression", $]) },
                    )
                    break
                }
                case "ElementAccessExpression": {
                    _ElementAccessExpression(
                        $,
                        ($) => { temp.push(["ElementAccessExpression", $]) },
                    )
                    break
                }
                case "ArrowFunction": {
                    _ArrowFunction(
                        $,
                        ($) => { temp.push(["ArrowFunction", $]) },
                    )
                    break
                }
                case "NumericLiteral": {
                    _NumericLiteral(
                        $,
                        ($) => { temp.push(["NumericLiteral", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _ParenthesizedExpression(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TParenthesizedExpression<Annotation>) => void,
    ) {
        const temp: tapi.CParenthesizedExpression<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "ConditionalExpression": {
                    _ConditionalExpression(
                        $,
                        ($) => { temp.push(["ConditionalExpression", $]) },
                    )
                    break
                }
                case "BinaryExpression": {
                    _BinaryExpression(
                        $,
                        ($) => { temp.push(["BinaryExpression", $]) },
                    )
                    break
                }
                case "ArrowFunction": {
                    _ArrowFunction(
                        $,
                        ($) => { temp.push(["ArrowFunction", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _NoSubstitutionTemplateLiteral(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TNoSubstitutionTemplateLiteral<Annotation>) => void,
    ) {}
    function _WhileStatement(
        $: uapi.Node<Annotation>,
        callback: ($: tapi.TWhileStatement<Annotation>) => void,
    ) {
        const temp: tapi.CWhileStatement<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "TrueKeyword": {
                    _TrueKeyword(
                        $,
                        ($) => { temp.push(["TrueKeyword", $]) },
                    )
                    break
                }
                case "Block": {
                    _Block(
                        $,
                        ($) => { temp.push(["Block", $]) },
                    )
                    break
                }
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    return _SourceFile($, callback)
}