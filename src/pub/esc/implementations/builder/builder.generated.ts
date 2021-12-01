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
                    _InterfaceDeclaration(
                        $,
                        ($) => { temp.push(["InterfaceDeclaration", $]) },
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
                case "VariableStatement": {
                    _VariableStatement(
                        $,
                        ($) => { temp.push(["VariableStatement", $]) },
                    )
                    break
                }
                case "EndOfFileToken": {
                    _EndOfFileToken(
                        $,
                        ($) => { temp.push(["EndOfFileToken", $]) },
                    )
                    break
                }
                case "ExportDeclaration": {
                    _ExportDeclaration(
                        $,
                        ($) => { temp.push(["ExportDeclaration", $]) },
                    )
                    break
                }
                case "ImportDeclaration": {
                    _ImportDeclaration(
                        $,
                        ($) => { temp.push(["ImportDeclaration", $]) },
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
                    _NeverKeyword(
                        $,
                        ($) => { temp.push(["NeverKeyword", $]) },
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
                    _QualifiedName(
                        $,
                        ($) => { temp.push(["QualifiedName", $]) },
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
                    _UndefinedKeyword(
                        $,
                        ($) => { temp.push(["UndefinedKeyword", $]) },
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
                    _ParenthesizedType(
                        $,
                        ($) => { temp.push(["ParenthesizedType", $]) },
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
                    _ThrowStatement(
                        $,
                        ($) => { temp.push(["ThrowStatement", $]) },
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
                    _SwitchStatement(
                        $,
                        ($) => { temp.push(["SwitchStatement", $]) },
                    )
                    break
                }
                case "TryStatement": {
                    _TryStatement(
                        $,
                        ($) => { temp.push(["TryStatement", $]) },
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
                case "TypeAliasDeclaration": {
                    _TypeAliasDeclaration(
                        $,
                        ($) => { temp.push(["TypeAliasDeclaration", $]) },
                    )
                    break
                }
                case "ForStatement": {
                    _ForStatement(
                        $,
                        ($) => { temp.push(["ForStatement", $]) },
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
                case "LabeledStatement": {
                    _LabeledStatement(
                        $,
                        ($) => { temp.push(["LabeledStatement", $]) },
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
                    _EqualsEqualsEqualsToken(
                        $,
                        ($) => { temp.push(["EqualsEqualsEqualsToken", $]) },
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
                case "AmpersandAmpersandToken": {
                    _AmpersandAmpersandToken(
                        $,
                        ($) => { temp.push(["AmpersandAmpersandToken", $]) },
                    )
                    break
                }
                case "PlusEqualsToken": {
                    _PlusEqualsToken(
                        $,
                        ($) => { temp.push(["PlusEqualsToken", $]) },
                    )
                    break
                }
                case "MinusEqualsToken": {
                    _MinusEqualsToken(
                        $,
                        ($) => { temp.push(["MinusEqualsToken", $]) },
                    )
                    break
                }
                case "EqualsToken": {
                    _EqualsToken(
                        $,
                        ($) => { temp.push(["EqualsToken", $]) },
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
                case "ElementAccessExpression": {
                    _ElementAccessExpression(
                        $,
                        ($) => { temp.push(["ElementAccessExpression", $]) },
                    )
                    break
                }
                case "ExclamationEqualsEqualsToken": {
                    _ExclamationEqualsEqualsToken(
                        $,
                        ($) => { temp.push(["ExclamationEqualsEqualsToken", $]) },
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
                case "PlusToken": {
                    _PlusToken(
                        $,
                        ($) => { temp.push(["PlusToken", $]) },
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
                    _MinusToken(
                        $,
                        ($) => { temp.push(["MinusToken", $]) },
                    )
                    break
                }
                case "GreaterThanToken": {
                    _GreaterThanToken(
                        $,
                        ($) => { temp.push(["GreaterThanToken", $]) },
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
                case "FalseKeyword": {
                    _FalseKeyword(
                        $,
                        ($) => { temp.push(["FalseKeyword", $]) },
                    )
                    break
                }
                case "LessThanToken": {
                    _LessThanToken(
                        $,
                        ($) => { temp.push(["LessThanToken", $]) },
                    )
                    break
                }
                case "BarBarToken": {
                    _BarBarToken(
                        $,
                        ($) => { temp.push(["BarBarToken", $]) },
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
                    _PostfixUnaryExpression(
                        $,
                        ($) => { temp.push(["PostfixUnaryExpression", $]) },
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
    function _ObjectLiteralExpression(
        $: uast.Node<Annotation>,
        callback: ($: tast.TObjectLiteralExpression<Annotation>) => void,
    ) {
        const temp: tast.CObjectLiteralExpression<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "PropertyAssignment": {
                    _PropertyAssignment(
                        $,
                        ($) => { temp.push(["PropertyAssignment", $]) },
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
                    _EqualsGreaterThanToken(
                        $,
                        ($) => { temp.push(["EqualsGreaterThanToken", $]) },
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
                    _IndexSignature(
                        $,
                        ($) => { temp.push(["IndexSignature", $]) },
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
    function _TemplateExpression(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTemplateExpression<Annotation>) => void,
    ) {
        const temp: tast.CTemplateExpression<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "TemplateHead": {
                    _TemplateHead(
                        $,
                        ($) => { temp.push(["TemplateHead", $]) },
                    )
                    break
                }
                case "TemplateSpan": {
                    _TemplateSpan(
                        $,
                        ($) => { temp.push(["TemplateSpan", $]) },
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
                    _OptionalType(
                        $,
                        ($) => { temp.push(["OptionalType", $]) },
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
                    _ColonToken(
                        $,
                        ($) => { temp.push(["ColonToken", $]) },
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
    function _InterfaceDeclaration(
        $: uast.Node<Annotation>,
        callback: ($: tast.TInterfaceDeclaration<Annotation>) => void,
    ) {
        const temp: tast.CInterfaceDeclaration<Annotation>[] = []
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
                case "TypeParameter": {
                    _TypeParameter(
                        $,
                        ($) => { temp.push(["TypeParameter", $]) },
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
                case "MethodSignature": {
                    _MethodSignature(
                        $,
                        ($) => { temp.push(["MethodSignature", $]) },
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
                case "MethodSignature": {
                    _MethodSignature(
                        $,
                        ($) => { temp.push(["MethodSignature", $]) },
                    )
                    break
                }
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
                case "MethodSignature": {
                    _MethodSignature(
                        $,
                        ($) => { temp.push(["MethodSignature", $]) },
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
                case "MethodSignature": {
                    _MethodSignature(
                        $,
                        ($) => { temp.push(["MethodSignature", $]) },
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
                    _IndexSignature(
                        $,
                        ($) => { temp.push(["IndexSignature", $]) },
                    )
                    break
                }
                case "ConstructSignature": {
                    _ConstructSignature(
                        $,
                        ($) => { temp.push(["ConstructSignature", $]) },
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
    function _QualifiedName(
        $: uast.Node<Annotation>,
        callback: ($: tast.TQualifiedName<Annotation>) => void,
    ) {
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
    function _UndefinedKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TUndefinedKeyword<Annotation>) => void,
    ) {}
    function _IndexSignature(
        $: uast.Node<Annotation>,
        callback: ($: tast.TIndexSignature<Annotation>) => void,
    ) {
        const temp: tast.CIndexSignature<Annotation>[] = []
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
    function _ConstructSignature(
        $: uast.Node<Annotation>,
        callback: ($: tast.TConstructSignature<Annotation>) => void,
    ) {
        const temp: tast.CConstructSignature<Annotation>[] = []
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
    function _EndOfFileToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TEndOfFileToken<Annotation>) => void,
    ) {}
    function _ExportDeclaration(
        $: uast.Node<Annotation>,
        callback: ($: tast.TExportDeclaration<Annotation>) => void,
    ) {
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
    }
    function _ImportDeclaration(
        $: uast.Node<Annotation>,
        callback: ($: tast.TImportDeclaration<Annotation>) => void,
    ) {
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
                case "ImportClause": {
                    _ImportClause(
                        $,
                        ($) => { temp.push(["ImportClause", $]) },
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
    function _ImportClause(
        $: uast.Node<Annotation>,
        callback: ($: tast.TImportClause<Annotation>) => void,
    ) {
        const temp: tast.CImportClause<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "NamespaceImport": {
                    _NamespaceImport(
                        $,
                        ($) => { temp.push(["NamespaceImport", $]) },
                    )
                    break
                }
                case "NamedImports": {
                    _NamedImports(
                        $,
                        ($) => { temp.push(["NamedImports", $]) },
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
    function _NamespaceImport(
        $: uast.Node<Annotation>,
        callback: ($: tast.TNamespaceImport<Annotation>) => void,
    ) {
        const temp: tast.CNamespaceImport<Annotation>[] = []
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
    function _NamedImports(
        $: uast.Node<Annotation>,
        callback: ($: tast.TNamedImports<Annotation>) => void,
    ) {
        const temp: tast.CNamedImports<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "ImportSpecifier": {
                    _ImportSpecifier(
                        $,
                        ($) => { temp.push(["ImportSpecifier", $]) },
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
    function _ImportSpecifier(
        $: uast.Node<Annotation>,
        callback: ($: tast.TImportSpecifier<Annotation>) => void,
    ) {
        const temp: tast.CImportSpecifier<Annotation>[] = []
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
    function _NeverKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TNeverKeyword<Annotation>) => void,
    ) {}
    function _ParenthesizedType(
        $: uast.Node<Annotation>,
        callback: ($: tast.TParenthesizedType<Annotation>) => void,
    ) {
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
    }
    function _ThrowStatement(
        $: uast.Node<Annotation>,
        callback: ($: tast.TThrowStatement<Annotation>) => void,
    ) {
        const temp: tast.CThrowStatement<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "NewExpression": {
                    _NewExpression(
                        $,
                        ($) => { temp.push(["NewExpression", $]) },
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
    function _NewExpression(
        $: uast.Node<Annotation>,
        callback: ($: tast.TNewExpression<Annotation>) => void,
    ) {
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
    }
    function _SwitchStatement(
        $: uast.Node<Annotation>,
        callback: ($: tast.TSwitchStatement<Annotation>) => void,
    ) {
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
                    _CaseBlock(
                        $,
                        ($) => { temp.push(["CaseBlock", $]) },
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
                default: reportUnexpectedChild({ parent: $parent, child: $, })
            }
        })
        callback({
            annotation: $.annotation,
            children: temp
        })
    }
    function _CaseBlock(
        $: uast.Node<Annotation>,
        callback: ($: tast.TCaseBlock<Annotation>) => void,
    ) {
        const temp: tast.CCaseBlock<Annotation>[] = []
        const $parent = $
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "CaseClause": {
                    _CaseClause(
                        $,
                        ($) => { temp.push(["CaseClause", $]) },
                    )
                    break
                }
                case "DefaultClause": {
                    _DefaultClause(
                        $,
                        ($) => { temp.push(["DefaultClause", $]) },
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
    function _CaseClause(
        $: uast.Node<Annotation>,
        callback: ($: tast.TCaseClause<Annotation>) => void,
    ) {
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
    }
    function _DefaultClause(
        $: uast.Node<Annotation>,
        callback: ($: tast.TDefaultClause<Annotation>) => void,
    ) {
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
    }
    function _TryStatement(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTryStatement<Annotation>) => void,
    ) {
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
                    _CatchClause(
                        $,
                        ($) => { temp.push(["CatchClause", $]) },
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
    function _CatchClause(
        $: uast.Node<Annotation>,
        callback: ($: tast.TCatchClause<Annotation>) => void,
    ) {
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
    }
    function _ForStatement(
        $: uast.Node<Annotation>,
        callback: ($: tast.TForStatement<Annotation>) => void,
    ) {
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
    }
    function _LabeledStatement(
        $: uast.Node<Annotation>,
        callback: ($: tast.TLabeledStatement<Annotation>) => void,
    ) {
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
    }
    function _EqualsEqualsEqualsToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TEqualsEqualsEqualsToken<Annotation>) => void,
    ) {}
    function _AmpersandAmpersandToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TAmpersandAmpersandToken<Annotation>) => void,
    ) {}
    function _PlusEqualsToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TPlusEqualsToken<Annotation>) => void,
    ) {}
    function _MinusEqualsToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TMinusEqualsToken<Annotation>) => void,
    ) {}
    function _EqualsToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TEqualsToken<Annotation>) => void,
    ) {}
    function _ExclamationEqualsEqualsToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TExclamationEqualsEqualsToken<Annotation>) => void,
    ) {}
    function _PlusToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TPlusToken<Annotation>) => void,
    ) {}
    function _MinusToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TMinusToken<Annotation>) => void,
    ) {}
    function _GreaterThanToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TGreaterThanToken<Annotation>) => void,
    ) {}
    function _LessThanToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TLessThanToken<Annotation>) => void,
    ) {}
    function _BarBarToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TBarBarToken<Annotation>) => void,
    ) {}
    function _PostfixUnaryExpression(
        $: uast.Node<Annotation>,
        callback: ($: tast.TPostfixUnaryExpression<Annotation>) => void,
    ) {
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
    }
    function _PropertyAssignment(
        $: uast.Node<Annotation>,
        callback: ($: tast.TPropertyAssignment<Annotation>) => void,
    ) {
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
    }
    function _EqualsGreaterThanToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TEqualsGreaterThanToken<Annotation>) => void,
    ) {}
    function _TemplateHead(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTemplateHead<Annotation>) => void,
    ) {}
    function _TemplateSpan(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTemplateSpan<Annotation>) => void,
    ) {
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
                    _TemplateMiddle(
                        $,
                        ($) => { temp.push(["TemplateMiddle", $]) },
                    )
                    break
                }
                case "TemplateTail": {
                    _TemplateTail(
                        $,
                        ($) => { temp.push(["TemplateTail", $]) },
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
    }
    function _TemplateMiddle(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTemplateMiddle<Annotation>) => void,
    ) {}
    function _TemplateTail(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTemplateTail<Annotation>) => void,
    ) {}
    function _OptionalType(
        $: uast.Node<Annotation>,
        callback: ($: tast.TOptionalType<Annotation>) => void,
    ) {
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
    }
    function _ColonToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TColonToken<Annotation>) => void,
    ) {}
    return _SourceFile($, callback)
}