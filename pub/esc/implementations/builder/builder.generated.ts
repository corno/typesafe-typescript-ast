import * as pr from "pareto-runtime"
import * as uast from "../../interfaces/untypedAST"
import * as tast from "../../interfaces/typedAST"

export class UnrecognizedNodeError extends Error {
    constructor(message: string) { super(message); Object.setPrototypeOf(this, UnrecognizedNodeError.prototype); }
}

export function build<Annotation>(
    $: uast.Node<Annotation>,
    callback: ($: tast.TSourceFile<Annotation>) => void,
    reportUnexpectedChild: ($: { parent: uast.Node<Annotation>, child: uast.Node<Annotation>, }) => void,
): void {
    function _SourceFile(
        $: uast.Node<Annotation>,
        callback: ($: tast.TSourceFile<Annotation>) => void,
    ) {
        const temp: tast.CSourceFile<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "InterfaceDeclaration": {
                    const callback = ($: tast.TInterfaceDeclaration<Annotation>) => {
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
                    const callback = ($: tast.TEndOfFileToken<Annotation>) => {
                        temp.push(["EndOfFileToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "ExportDeclaration": {
                    const callback = ($: tast.TExportDeclaration<Annotation>) => {
                        temp.push(["ExportDeclaration", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tast.CExportDeclaration<Annotation>[] = []
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
                    const callback = ($: tast.TImportDeclaration<Annotation>) => {
                        temp.push(["ImportDeclaration", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tast.CImportDeclaration<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TIdentifier<Annotation>) => void,
    ) {}
    function _TypeParameter(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTypeParameter<Annotation>) => void,
    ) {
        const temp: tast.CTypeParameter<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TMethodSignature<Annotation>) => void,
    ) {
        const temp: tast.CMethodSignature<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TParameter<Annotation>) => void,
    ) {
        const temp: tast.CParameter<Annotation>[] = []
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
                    const callback = ($: tast.TNeverKeyword<Annotation>) => {
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TTypeReference<Annotation>) => void,
    ) {
        const temp: tast.CTypeReference<Annotation>[] = []
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
                    const callback = ($: tast.TQualifiedName<Annotation>) => {
                        temp.push(["QualifiedName", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tast.CQualifiedName<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TVoidKeyword<Annotation>) => void,
    ) {}
    function _FunctionType(
        $: uast.Node<Annotation>,
        callback: ($: tast.TFunctionType<Annotation>) => void,
    ) {
        const temp: tast.CFunctionType<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TNumberKeyword<Annotation>) => void,
    ) {}
    function _ArrayType(
        $: uast.Node<Annotation>,
        callback: ($: tast.TArrayType<Annotation>) => void,
    ) {
        const temp: tast.CArrayType<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TBooleanKeyword<Annotation>) => void,
    ) {}
    function _PropertySignature(
        $: uast.Node<Annotation>,
        callback: ($: tast.TPropertySignature<Annotation>) => void,
    ) {
        const temp: tast.CPropertySignature<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TStringKeyword<Annotation>) => void,
    ) {}
    function _UnionType(
        $: uast.Node<Annotation>,
        callback: ($: tast.TUnionType<Annotation>) => void,
    ) {
        const temp: tast.CUnionType<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "UndefinedKeyword": {
                    const callback = ($: tast.TUndefinedKeyword<Annotation>) => {
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
                    const callback = ($: tast.TParenthesizedType<Annotation>) => {
                        temp.push(["ParenthesizedType", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tast.CParenthesizedType<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TReadonlyKeyword<Annotation>) => void,
    ) {}
    function _FunctionDeclaration(
        $: uast.Node<Annotation>,
        callback: ($: tast.TFunctionDeclaration<Annotation>) => void,
    ) {
        const temp: tast.CFunctionDeclaration<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TDeclareKeyword<Annotation>) => void,
    ) {}
    function _AnyKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TAnyKeyword<Annotation>) => void,
    ) {}
    function _QuestionToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TQuestionToken<Annotation>) => void,
    ) {}
    function _VariableStatement(
        $: uast.Node<Annotation>,
        callback: ($: tast.TVariableStatement<Annotation>) => void,
    ) {
        const temp: tast.CVariableStatement<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TVariableDeclarationList<Annotation>) => void,
    ) {
        const temp: tast.CVariableDeclarationList<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TVariableDeclaration<Annotation>) => void,
    ) {
        const temp: tast.CVariableDeclaration<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TStringLiteral<Annotation>) => void,
    ) {}
    function _Block(
        $: uast.Node<Annotation>,
        callback: ($: tast.TBlock<Annotation>) => void,
    ) {
        const temp: tast.CBlock<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "ThrowStatement": {
                    const callback = ($: tast.TThrowStatement<Annotation>) => {
                        temp.push(["ThrowStatement", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tast.CThrowStatement<Annotation>[] = []
                        const $parent = $
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "NewExpression": {
                                    const callback = ($: tast.TNewExpression<Annotation>) => {
                                        temp.push(["NewExpression", $])
                                    }
                                    pr.cc(null, (_) => {
                                        const temp: tast.CNewExpression<Annotation>[] = []
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
                    const callback = ($: tast.TSwitchStatement<Annotation>) => {
                        temp.push(["SwitchStatement", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tast.CSwitchStatement<Annotation>[] = []
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
                                    const callback = ($: tast.TCaseBlock<Annotation>) => {
                                        temp.push(["CaseBlock", $])
                                    }
                                    pr.cc(null, (_) => {
                                        const temp: tast.CCaseBlock<Annotation>[] = []
                                        const $parent = $
                                        $.children.forEach(($) => {
                                            switch ($.kindName) {
                                                case "CaseClause": {
                                                    const callback = ($: tast.TCaseClause<Annotation>) => {
                                                        temp.push(["CaseClause", $])
                                                    }
                                                    pr.cc(null, (_) => {
                                                        const temp: tast.CCaseClause<Annotation>[] = []
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
                                                    const callback = ($: tast.TDefaultClause<Annotation>) => {
                                                        temp.push(["DefaultClause", $])
                                                    }
                                                    pr.cc(null, (_) => {
                                                        const temp: tast.CDefaultClause<Annotation>[] = []
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
                    const callback = ($: tast.TTryStatement<Annotation>) => {
                        temp.push(["TryStatement", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tast.CTryStatement<Annotation>[] = []
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
                                    const callback = ($: tast.TCatchClause<Annotation>) => {
                                        temp.push(["CatchClause", $])
                                    }
                                    pr.cc(null, (_) => {
                                        const temp: tast.CCatchClause<Annotation>[] = []
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
                    const callback = ($: tast.TForStatement<Annotation>) => {
                        temp.push(["ForStatement", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tast.CForStatement<Annotation>[] = []
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
                    const callback = ($: tast.TLabeledStatement<Annotation>) => {
                        temp.push(["LabeledStatement", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tast.CLabeledStatement<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TReturnStatement<Annotation>) => void,
    ) {
        const temp: tast.CReturnStatement<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TCallExpression<Annotation>) => void,
    ) {
        const temp: tast.CCallExpression<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TExportKeyword<Annotation>) => void,
    ) {}
    function _NumericLiteral(
        $: uast.Node<Annotation>,
        callback: ($: tast.TNumericLiteral<Annotation>) => void,
    ) {}
    function _FalseKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TFalseKeyword<Annotation>) => void,
    ) {}
    function _IfStatement(
        $: uast.Node<Annotation>,
        callback: ($: tast.TIfStatement<Annotation>) => void,
    ) {
        const temp: tast.CIfStatement<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TBinaryExpression<Annotation>) => void,
    ) {
        const temp: tast.CBinaryExpression<Annotation>[] = []
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
                    const callback = ($: tast.TEqualsEqualsEqualsToken<Annotation>) => {
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
                    const callback = ($: tast.TAmpersandAmpersandToken<Annotation>) => {
                        temp.push(["AmpersandAmpersandToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "PlusEqualsToken": {
                    const callback = ($: tast.TPlusEqualsToken<Annotation>) => {
                        temp.push(["PlusEqualsToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "MinusEqualsToken": {
                    const callback = ($: tast.TMinusEqualsToken<Annotation>) => {
                        temp.push(["MinusEqualsToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "EqualsToken": {
                    const callback = ($: tast.TEqualsToken<Annotation>) => {
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
                    const callback = ($: tast.TExclamationEqualsEqualsToken<Annotation>) => {
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
                    const callback = ($: tast.TPlusToken<Annotation>) => {
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
                    const callback = ($: tast.TMinusToken<Annotation>) => {
                        temp.push(["MinusToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "GreaterThanToken": {
                    const callback = ($: tast.TGreaterThanToken<Annotation>) => {
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
                    const callback = ($: tast.TLessThanToken<Annotation>) => {
                        temp.push(["LessThanToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "BarBarToken": {
                    const callback = ($: tast.TBarBarToken<Annotation>) => {
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TExpressionStatement<Annotation>) => void,
    ) {
        const temp: tast.CExpressionStatement<Annotation>[] = []
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
                    const callback = ($: tast.TPostfixUnaryExpression<Annotation>) => {
                        temp.push(["PostfixUnaryExpression", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tast.CPostfixUnaryExpression<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TObjectLiteralExpression<Annotation>) => void,
    ) {
        const temp: tast.CObjectLiteralExpression<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "PropertyAssignment": {
                    const callback = ($: tast.TPropertyAssignment<Annotation>) => {
                        temp.push(["PropertyAssignment", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tast.CPropertyAssignment<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TArrowFunction<Annotation>) => void,
    ) {
        const temp: tast.CArrowFunction<Annotation>[] = []
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
                    const callback = ($: tast.TEqualsGreaterThanToken<Annotation>) => {
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TPropertyAccessExpression<Annotation>) => void,
    ) {
        const temp: tast.CPropertyAccessExpression<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TElementAccessExpression<Annotation>) => void,
    ) {
        const temp: tast.CElementAccessExpression<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TArrayLiteralExpression<Annotation>) => void,
    ) {
        const temp: tast.CArrayLiteralExpression<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TBreakStatement<Annotation>) => void,
    ) {
        const temp: tast.CBreakStatement<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TNullKeyword<Annotation>) => void,
    ) {}
    function _TrueKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTrueKeyword<Annotation>) => void,
    ) {}
    function _TypeAliasDeclaration(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTypeAliasDeclaration<Annotation>) => void,
    ) {
        const temp: tast.CTypeAliasDeclaration<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TTypeLiteral<Annotation>) => void,
    ) {
        const temp: tast.CTypeLiteral<Annotation>[] = []
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
                    const callback = ($: tast.TIndexSignature<Annotation>) => {
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TTemplateExpression<Annotation>) => void,
    ) {
        const temp: tast.CTemplateExpression<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "TemplateHead": {
                    const callback = ($: tast.TTemplateHead<Annotation>) => {
                        temp.push(["TemplateHead", $])
                    }
                    pr.cc(null, (_) => {})
                    break
                }
                case "TemplateSpan": {
                    const callback = ($: tast.TTemplateSpan<Annotation>) => {
                        temp.push(["TemplateSpan", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tast.CTemplateSpan<Annotation>[] = []
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
                                    const callback = ($: tast.TTemplateMiddle<Annotation>) => {
                                        temp.push(["TemplateMiddle", $])
                                    }
                                    pr.cc(null, (_) => {})
                                    break
                                }
                                case "TemplateTail": {
                                    const callback = ($: tast.TTemplateTail<Annotation>) => {
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TPrefixUnaryExpression<Annotation>) => void,
    ) {
        const temp: tast.CPrefixUnaryExpression<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TTupleType<Annotation>) => void,
    ) {
        const temp: tast.CTupleType<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "OptionalType": {
                    const callback = ($: tast.TOptionalType<Annotation>) => {
                        temp.push(["OptionalType", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: tast.COptionalType<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TLiteralType<Annotation>) => void,
    ) {
        const temp: tast.CLiteralType<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TConditionalExpression<Annotation>) => void,
    ) {
        const temp: tast.CConditionalExpression<Annotation>[] = []
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
                    const callback = ($: tast.TColonToken<Annotation>) => {
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TParenthesizedExpression<Annotation>) => void,
    ) {
        const temp: tast.CParenthesizedExpression<Annotation>[] = []
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
        $: uast.Node<Annotation>,
        callback: ($: tast.TNoSubstitutionTemplateLiteral<Annotation>) => void,
    ) {}
    function _WhileStatement(
        $: uast.Node<Annotation>,
        callback: ($: tast.TWhileStatement<Annotation>) => void,
    ) {
        const temp: tast.CWhileStatement<Annotation>[] = []
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