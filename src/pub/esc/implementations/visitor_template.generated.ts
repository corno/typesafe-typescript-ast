import * as pr from "pareto-runtime"
import * as api from "../interfaces/typedAST"

export function visit<Annotation>(
    $: api.TSourceFile<Annotation>,
    report: (annotation: Annotation) => void,
): void {
    function _SourceFile(
        $: api.TSourceFile<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "InterfaceDeclaration": {
                    pr.cc($[1], ($) => {
                        _InterfaceDeclaration($)
                    })
                    break
                }
                case "FunctionDeclaration": {
                    pr.cc($[1], ($) => {
                        _FunctionDeclaration($)
                    })
                    break
                }
                case "VariableStatement": {
                    pr.cc($[1], ($) => {
                        _VariableStatement($)
                    })
                    break
                }
                case "EndOfFileToken": {
                    pr.cc($[1], ($) => {
                        _EndOfFileToken($)
                    })
                    break
                }
                case "ExportDeclaration": {
                    pr.cc($[1], ($) => {
                        _ExportDeclaration($)
                    })
                    break
                }
                case "ImportDeclaration": {
                    pr.cc($[1], ($) => {
                        _ImportDeclaration($)
                    })
                    break
                }
                case "TypeAliasDeclaration": {
                    pr.cc($[1], ($) => {
                        _TypeAliasDeclaration($)
                    })
                    break
                }
                case "ExpressionStatement": {
                    pr.cc($[1], ($) => {
                        _ExpressionStatement($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _Identifier(
        $: api.TIdentifier<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _TypeParameter(
        $: api.TTypeParameter<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _MethodSignature(
        $: api.TMethodSignature<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "Parameter": {
                    pr.cc($[1], ($) => {
                        _Parameter($)
                    })
                    break
                }
                case "VoidKeyword": {
                    pr.cc($[1], ($) => {
                        _VoidKeyword($)
                    })
                    break
                }
                case "TypeParameter": {
                    pr.cc($[1], ($) => {
                        _TypeParameter($)
                    })
                    break
                }
                case "ArrayType": {
                    pr.cc($[1], ($) => {
                        _ArrayType($)
                    })
                    break
                }
                case "BooleanKeyword": {
                    pr.cc($[1], ($) => {
                        _BooleanKeyword($)
                    })
                    break
                }
                case "StringKeyword": {
                    pr.cc($[1], ($) => {
                        _StringKeyword($)
                    })
                    break
                }
                case "UnionType": {
                    pr.cc($[1], ($) => {
                        _UnionType($)
                    })
                    break
                }
                case "NumberKeyword": {
                    pr.cc($[1], ($) => {
                        _NumberKeyword($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _Parameter(
        $: api.TParameter<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "FunctionType": {
                    pr.cc($[1], ($) => {
                        _FunctionType($)
                    })
                    break
                }
                case "NumberKeyword": {
                    pr.cc($[1], ($) => {
                        _NumberKeyword($)
                    })
                    break
                }
                case "StringKeyword": {
                    pr.cc($[1], ($) => {
                        _StringKeyword($)
                    })
                    break
                }
                case "ArrayType": {
                    pr.cc($[1], ($) => {
                        _ArrayType($)
                    })
                    break
                }
                case "AnyKeyword": {
                    pr.cc($[1], ($) => {
                        _AnyKeyword($)
                    })
                    break
                }
                case "QuestionToken": {
                    pr.cc($[1], ($) => {
                        _QuestionToken($)
                    })
                    break
                }
                case "NeverKeyword": {
                    pr.cc($[1], ($) => {
                        _NeverKeyword($)
                    })
                    break
                }
                case "TypeLiteral": {
                    pr.cc($[1], ($) => {
                        _TypeLiteral($)
                    })
                    break
                }
                case "UnionType": {
                    pr.cc($[1], ($) => {
                        _UnionType($)
                    })
                    break
                }
                case "BooleanKeyword": {
                    pr.cc($[1], ($) => {
                        _BooleanKeyword($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _TypeReference(
        $: api.TTypeReference<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "QualifiedName": {
                    pr.cc($[1], ($) => {
                        _QualifiedName($)
                    })
                    break
                }
                case "StringKeyword": {
                    pr.cc($[1], ($) => {
                        _StringKeyword($)
                    })
                    break
                }
                case "LiteralType": {
                    pr.cc($[1], ($) => {
                        _LiteralType($)
                    })
                    break
                }
                case "TypeLiteral": {
                    pr.cc($[1], ($) => {
                        _TypeLiteral($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _VoidKeyword(
        $: api.TVoidKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _FunctionType(
        $: api.TFunctionType<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Parameter": {
                    pr.cc($[1], ($) => {
                        _Parameter($)
                    })
                    break
                }
                case "VoidKeyword": {
                    pr.cc($[1], ($) => {
                        _VoidKeyword($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "AnyKeyword": {
                    pr.cc($[1], ($) => {
                        _AnyKeyword($)
                    })
                    break
                }
                case "UnionType": {
                    pr.cc($[1], ($) => {
                        _UnionType($)
                    })
                    break
                }
                case "BooleanKeyword": {
                    pr.cc($[1], ($) => {
                        _BooleanKeyword($)
                    })
                    break
                }
                case "ArrayType": {
                    pr.cc($[1], ($) => {
                        _ArrayType($)
                    })
                    break
                }
                case "StringKeyword": {
                    pr.cc($[1], ($) => {
                        _StringKeyword($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _NumberKeyword(
        $: api.TNumberKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _ArrayType(
        $: api.TArrayType<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "StringKeyword": {
                    pr.cc($[1], ($) => {
                        _StringKeyword($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _BooleanKeyword(
        $: api.TBooleanKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _PropertySignature(
        $: api.TPropertySignature<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "NumberKeyword": {
                    pr.cc($[1], ($) => {
                        _NumberKeyword($)
                    })
                    break
                }
                case "ReadonlyKeyword": {
                    pr.cc($[1], ($) => {
                        _ReadonlyKeyword($)
                    })
                    break
                }
                case "StringKeyword": {
                    pr.cc($[1], ($) => {
                        _StringKeyword($)
                    })
                    break
                }
                case "FunctionType": {
                    pr.cc($[1], ($) => {
                        _FunctionType($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "QuestionToken": {
                    pr.cc($[1], ($) => {
                        _QuestionToken($)
                    })
                    break
                }
                case "BooleanKeyword": {
                    pr.cc($[1], ($) => {
                        _BooleanKeyword($)
                    })
                    break
                }
                case "ArrayType": {
                    pr.cc($[1], ($) => {
                        _ArrayType($)
                    })
                    break
                }
                case "UnionType": {
                    pr.cc($[1], ($) => {
                        _UnionType($)
                    })
                    break
                }
                case "LiteralType": {
                    pr.cc($[1], ($) => {
                        _LiteralType($)
                    })
                    break
                }
                case "TypeLiteral": {
                    pr.cc($[1], ($) => {
                        _TypeLiteral($)
                    })
                    break
                }
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _StringKeyword(
        $: api.TStringKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _UnionType(
        $: api.TUnionType<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "UndefinedKeyword": {
                    pr.cc($[1], ($) => {
                        _UndefinedKeyword($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "TupleType": {
                    pr.cc($[1], ($) => {
                        _TupleType($)
                    })
                    break
                }
                case "LiteralType": {
                    pr.cc($[1], ($) => {
                        _LiteralType($)
                    })
                    break
                }
                case "StringKeyword": {
                    pr.cc($[1], ($) => {
                        _StringKeyword($)
                    })
                    break
                }
                case "BooleanKeyword": {
                    pr.cc($[1], ($) => {
                        _BooleanKeyword($)
                    })
                    break
                }
                case "ArrayType": {
                    pr.cc($[1], ($) => {
                        _ArrayType($)
                    })
                    break
                }
                case "NumberKeyword": {
                    pr.cc($[1], ($) => {
                        _NumberKeyword($)
                    })
                    break
                }
                case "ParenthesizedType": {
                    pr.cc($[1], ($) => {
                        _ParenthesizedType($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ReadonlyKeyword(
        $: api.TReadonlyKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _FunctionDeclaration(
        $: api.TFunctionDeclaration<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "DeclareKeyword": {
                    pr.cc($[1], ($) => {
                        _DeclareKeyword($)
                    })
                    break
                }
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "Parameter": {
                    pr.cc($[1], ($) => {
                        _Parameter($)
                    })
                    break
                }
                case "BooleanKeyword": {
                    pr.cc($[1], ($) => {
                        _BooleanKeyword($)
                    })
                    break
                }
                case "TypeParameter": {
                    pr.cc($[1], ($) => {
                        _TypeParameter($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "Block": {
                    pr.cc($[1], ($) => {
                        _Block($)
                    })
                    break
                }
                case "ExportKeyword": {
                    pr.cc($[1], ($) => {
                        _ExportKeyword($)
                    })
                    break
                }
                case "VoidKeyword": {
                    pr.cc($[1], ($) => {
                        _VoidKeyword($)
                    })
                    break
                }
                case "UnionType": {
                    pr.cc($[1], ($) => {
                        _UnionType($)
                    })
                    break
                }
                case "StringKeyword": {
                    pr.cc($[1], ($) => {
                        _StringKeyword($)
                    })
                    break
                }
                case "ArrayType": {
                    pr.cc($[1], ($) => {
                        _ArrayType($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _DeclareKeyword(
        $: api.TDeclareKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _AnyKeyword(
        $: api.TAnyKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _QuestionToken(
        $: api.TQuestionToken<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _VariableStatement(
        $: api.TVariableStatement<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "DeclareKeyword": {
                    pr.cc($[1], ($) => {
                        _DeclareKeyword($)
                    })
                    break
                }
                case "VariableDeclarationList": {
                    pr.cc($[1], ($) => {
                        _VariableDeclarationList($)
                    })
                    break
                }
                case "ExportKeyword": {
                    pr.cc($[1], ($) => {
                        _ExportKeyword($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _VariableDeclarationList(
        $: api.TVariableDeclarationList<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "VariableDeclaration": {
                    pr.cc($[1], ($) => {
                        _VariableDeclaration($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _VariableDeclaration(
        $: api.TVariableDeclaration<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "NumericLiteral": {
                    pr.cc($[1], ($) => {
                        _NumericLiteral($)
                    })
                    break
                }
                case "FalseKeyword": {
                    pr.cc($[1], ($) => {
                        _FalseKeyword($)
                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                case "ArrayType": {
                    pr.cc($[1], ($) => {
                        _ArrayType($)
                    })
                    break
                }
                case "ArrayLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ArrayLiteralExpression($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                case "ElementAccessExpression": {
                    pr.cc($[1], ($) => {
                        _ElementAccessExpression($)
                    })
                    break
                }
                case "ArrowFunction": {
                    pr.cc($[1], ($) => {
                        _ArrowFunction($)
                    })
                    break
                }
                case "ObjectLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ObjectLiteralExpression($)
                    })
                    break
                }
                case "PrefixUnaryExpression": {
                    pr.cc($[1], ($) => {
                        _PrefixUnaryExpression($)
                    })
                    break
                }
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                case "ConditionalExpression": {
                    pr.cc($[1], ($) => {
                        _ConditionalExpression($)
                    })
                    break
                }
                case "NoSubstitutionTemplateLiteral": {
                    pr.cc($[1], ($) => {
                        _NoSubstitutionTemplateLiteral($)
                    })
                    break
                }
                case "ParenthesizedExpression": {
                    pr.cc($[1], ($) => {
                        _ParenthesizedExpression($)
                    })
                    break
                }
                case "NumberKeyword": {
                    pr.cc($[1], ($) => {
                        _NumberKeyword($)
                    })
                    break
                }
                case "UnionType": {
                    pr.cc($[1], ($) => {
                        _UnionType($)
                    })
                    break
                }
                case "NullKeyword": {
                    pr.cc($[1], ($) => {
                        _NullKeyword($)
                    })
                    break
                }
                case "TypeLiteral": {
                    pr.cc($[1], ($) => {
                        _TypeLiteral($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _StringLiteral(
        $: api.TStringLiteral<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _Block(
        $: api.TBlock<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "ThrowStatement": {
                    pr.cc($[1], ($) => {
                        _ThrowStatement($)
                    })
                    break
                }
                case "ReturnStatement": {
                    pr.cc($[1], ($) => {
                        _ReturnStatement($)
                    })
                    break
                }
                case "VariableStatement": {
                    pr.cc($[1], ($) => {
                        _VariableStatement($)
                    })
                    break
                }
                case "FunctionDeclaration": {
                    pr.cc($[1], ($) => {
                        _FunctionDeclaration($)
                    })
                    break
                }
                case "IfStatement": {
                    pr.cc($[1], ($) => {
                        _IfStatement($)
                    })
                    break
                }
                case "ExpressionStatement": {
                    pr.cc($[1], ($) => {
                        _ExpressionStatement($)
                    })
                    break
                }
                case "SwitchStatement": {
                    pr.cc($[1], ($) => {
                        _SwitchStatement($)
                    })
                    break
                }
                case "TryStatement": {
                    pr.cc($[1], ($) => {
                        _TryStatement($)
                    })
                    break
                }
                case "BreakStatement": {
                    pr.cc($[1], ($) => {
                        _BreakStatement($)
                    })
                    break
                }
                case "TypeAliasDeclaration": {
                    pr.cc($[1], ($) => {
                        _TypeAliasDeclaration($)
                    })
                    break
                }
                case "ForStatement": {
                    pr.cc($[1], ($) => {
                        _ForStatement($)
                    })
                    break
                }
                case "WhileStatement": {
                    pr.cc($[1], ($) => {
                        _WhileStatement($)
                    })
                    break
                }
                case "LabeledStatement": {
                    pr.cc($[1], ($) => {
                        _LabeledStatement($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ReturnStatement(
        $: api.TReturnStatement<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "ObjectLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ObjectLiteralExpression($)
                    })
                    break
                }
                case "TemplateExpression": {
                    pr.cc($[1], ($) => {
                        _TemplateExpression($)
                    })
                    break
                }
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "ArrayLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ArrayLiteralExpression($)
                    })
                    break
                }
                case "NullKeyword": {
                    pr.cc($[1], ($) => {
                        _NullKeyword($)
                    })
                    break
                }
                case "ArrowFunction": {
                    pr.cc($[1], ($) => {
                        _ArrowFunction($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                case "PrefixUnaryExpression": {
                    pr.cc($[1], ($) => {
                        _PrefixUnaryExpression($)
                    })
                    break
                }
                case "ConditionalExpression": {
                    pr.cc($[1], ($) => {
                        _ConditionalExpression($)
                    })
                    break
                }
                case "ElementAccessExpression": {
                    pr.cc($[1], ($) => {
                        _ElementAccessExpression($)
                    })
                    break
                }
                case "NoSubstitutionTemplateLiteral": {
                    pr.cc($[1], ($) => {
                        _NoSubstitutionTemplateLiteral($)
                    })
                    break
                }
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _CallExpression(
        $: api.TCallExpression<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "ArrowFunction": {
                    pr.cc($[1], ($) => {
                        _ArrowFunction($)
                    })
                    break
                }
                case "ElementAccessExpression": {
                    pr.cc($[1], ($) => {
                        _ElementAccessExpression($)
                    })
                    break
                }
                case "ArrayLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ArrayLiteralExpression($)
                    })
                    break
                }
                case "NullKeyword": {
                    pr.cc($[1], ($) => {
                        _NullKeyword($)
                    })
                    break
                }
                case "ObjectLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ObjectLiteralExpression($)
                    })
                    break
                }
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "TemplateExpression": {
                    pr.cc($[1], ($) => {
                        _TemplateExpression($)
                    })
                    break
                }
                case "ConditionalExpression": {
                    pr.cc($[1], ($) => {
                        _ConditionalExpression($)
                    })
                    break
                }
                case "NoSubstitutionTemplateLiteral": {
                    pr.cc($[1], ($) => {
                        _NoSubstitutionTemplateLiteral($)
                    })
                    break
                }
                case "ParenthesizedExpression": {
                    pr.cc($[1], ($) => {
                        _ParenthesizedExpression($)
                    })
                    break
                }
                case "NumericLiteral": {
                    pr.cc($[1], ($) => {
                        _NumericLiteral($)
                    })
                    break
                }
                case "TrueKeyword": {
                    pr.cc($[1], ($) => {
                        _TrueKeyword($)
                    })
                    break
                }
                case "FalseKeyword": {
                    pr.cc($[1], ($) => {
                        _FalseKeyword($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ExportKeyword(
        $: api.TExportKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _NumericLiteral(
        $: api.TNumericLiteral<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _FalseKeyword(
        $: api.TFalseKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _IfStatement(
        $: api.TIfStatement<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                case "Block": {
                    pr.cc($[1], ($) => {
                        _Block($)
                    })
                    break
                }
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                case "PrefixUnaryExpression": {
                    pr.cc($[1], ($) => {
                        _PrefixUnaryExpression($)
                    })
                    break
                }
                case "ReturnStatement": {
                    pr.cc($[1], ($) => {
                        _ReturnStatement($)
                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "IfStatement": {
                    pr.cc($[1], ($) => {
                        _IfStatement($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _BinaryExpression(
        $: api.TBinaryExpression<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "EqualsEqualsEqualsToken": {
                    pr.cc($[1], ($) => {
                        _EqualsEqualsEqualsToken($)
                    })
                    break
                }
                case "NumericLiteral": {
                    pr.cc($[1], ($) => {
                        _NumericLiteral($)
                    })
                    break
                }
                case "AmpersandAmpersandToken": {
                    pr.cc($[1], ($) => {
                        _AmpersandAmpersandToken($)
                    })
                    break
                }
                case "PlusEqualsToken": {
                    pr.cc($[1], ($) => {
                        _PlusEqualsToken($)
                    })
                    break
                }
                case "MinusEqualsToken": {
                    pr.cc($[1], ($) => {
                        _MinusEqualsToken($)
                    })
                    break
                }
                case "EqualsToken": {
                    pr.cc($[1], ($) => {
                        _EqualsToken($)
                    })
                    break
                }
                case "TrueKeyword": {
                    pr.cc($[1], ($) => {
                        _TrueKeyword($)
                    })
                    break
                }
                case "ElementAccessExpression": {
                    pr.cc($[1], ($) => {
                        _ElementAccessExpression($)
                    })
                    break
                }
                case "ExclamationEqualsEqualsToken": {
                    pr.cc($[1], ($) => {
                        _ExclamationEqualsEqualsToken($)
                    })
                    break
                }
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                case "PlusToken": {
                    pr.cc($[1], ($) => {
                        _PlusToken($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                case "NullKeyword": {
                    pr.cc($[1], ($) => {
                        _NullKeyword($)
                    })
                    break
                }
                case "ParenthesizedExpression": {
                    pr.cc($[1], ($) => {
                        _ParenthesizedExpression($)
                    })
                    break
                }
                case "ObjectLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ObjectLiteralExpression($)
                    })
                    break
                }
                case "MinusToken": {
                    pr.cc($[1], ($) => {
                        _MinusToken($)
                    })
                    break
                }
                case "GreaterThanToken": {
                    pr.cc($[1], ($) => {
                        _GreaterThanToken($)
                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "FalseKeyword": {
                    pr.cc($[1], ($) => {
                        _FalseKeyword($)
                    })
                    break
                }
                case "LessThanToken": {
                    pr.cc($[1], ($) => {
                        _LessThanToken($)
                    })
                    break
                }
                case "BarBarToken": {
                    pr.cc($[1], ($) => {
                        _BarBarToken($)
                    })
                    break
                }
                case "ArrayLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ArrayLiteralExpression($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ExpressionStatement(
        $: api.TExpressionStatement<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                case "PostfixUnaryExpression": {
                    pr.cc($[1], ($) => {
                        _PostfixUnaryExpression($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ObjectLiteralExpression(
        $: api.TObjectLiteralExpression<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "PropertyAssignment": {
                    pr.cc($[1], ($) => {
                        _PropertyAssignment($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ArrowFunction(
        $: api.TArrowFunction<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Parameter": {
                    pr.cc($[1], ($) => {
                        _Parameter($)
                    })
                    break
                }
                case "EqualsGreaterThanToken": {
                    pr.cc($[1], ($) => {
                        _EqualsGreaterThanToken($)
                    })
                    break
                }
                case "Block": {
                    pr.cc($[1], ($) => {
                        _Block($)
                    })
                    break
                }
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                case "StringKeyword": {
                    pr.cc($[1], ($) => {
                        _StringKeyword($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "VoidKeyword": {
                    pr.cc($[1], ($) => {
                        _VoidKeyword($)
                    })
                    break
                }
                case "UnionType": {
                    pr.cc($[1], ($) => {
                        _UnionType($)
                    })
                    break
                }
                case "TemplateExpression": {
                    pr.cc($[1], ($) => {
                        _TemplateExpression($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _PropertyAccessExpression(
        $: api.TPropertyAccessExpression<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                case "ElementAccessExpression": {
                    pr.cc($[1], ($) => {
                        _ElementAccessExpression($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ElementAccessExpression(
        $: api.TElementAccessExpression<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "NumericLiteral": {
                    pr.cc($[1], ($) => {
                        _NumericLiteral($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                case "ElementAccessExpression": {
                    pr.cc($[1], ($) => {
                        _ElementAccessExpression($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ArrayLiteralExpression(
        $: api.TArrayLiteralExpression<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                case "ObjectLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ObjectLiteralExpression($)
                    })
                    break
                }
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                case "NullKeyword": {
                    pr.cc($[1], ($) => {
                        _NullKeyword($)
                    })
                    break
                }
                case "ConditionalExpression": {
                    pr.cc($[1], ($) => {
                        _ConditionalExpression($)
                    })
                    break
                }
                case "TemplateExpression": {
                    pr.cc($[1], ($) => {
                        _TemplateExpression($)
                    })
                    break
                }
                case "ArrayLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ArrayLiteralExpression($)
                    })
                    break
                }
                case "NumericLiteral": {
                    pr.cc($[1], ($) => {
                        _NumericLiteral($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _BreakStatement(
        $: api.TBreakStatement<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _NullKeyword(
        $: api.TNullKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _TrueKeyword(
        $: api.TTrueKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _TypeAliasDeclaration(
        $: api.TTypeAliasDeclaration<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "ExportKeyword": {
                    pr.cc($[1], ($) => {
                        _ExportKeyword($)
                    })
                    break
                }
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "TypeLiteral": {
                    pr.cc($[1], ($) => {
                        _TypeLiteral($)
                    })
                    break
                }
                case "TypeParameter": {
                    pr.cc($[1], ($) => {
                        _TypeParameter($)
                    })
                    break
                }
                case "TupleType": {
                    pr.cc($[1], ($) => {
                        _TupleType($)
                    })
                    break
                }
                case "UnionType": {
                    pr.cc($[1], ($) => {
                        _UnionType($)
                    })
                    break
                }
                case "ArrayType": {
                    pr.cc($[1], ($) => {
                        _ArrayType($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "FunctionType": {
                    pr.cc($[1], ($) => {
                        _FunctionType($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _TypeLiteral(
        $: api.TTypeLiteral<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "PropertySignature": {
                    pr.cc($[1], ($) => {
                        _PropertySignature($)
                    })
                    break
                }
                case "MethodSignature": {
                    pr.cc($[1], ($) => {
                        _MethodSignature($)
                    })
                    break
                }
                case "IndexSignature": {
                    pr.cc($[1], ($) => {
                        _IndexSignature($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _TemplateExpression(
        $: api.TTemplateExpression<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "TemplateHead": {
                    pr.cc($[1], ($) => {
                        _TemplateHead($)
                    })
                    break
                }
                case "TemplateSpan": {
                    pr.cc($[1], ($) => {
                        _TemplateSpan($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _PrefixUnaryExpression(
        $: api.TPrefixUnaryExpression<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "NumericLiteral": {
                    pr.cc($[1], ($) => {
                        _NumericLiteral($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _TupleType(
        $: api.TTupleType<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "OptionalType": {
                    pr.cc($[1], ($) => {
                        _OptionalType($)
                    })
                    break
                }
                case "LiteralType": {
                    pr.cc($[1], ($) => {
                        _LiteralType($)
                    })
                    break
                }
                case "StringKeyword": {
                    pr.cc($[1], ($) => {
                        _StringKeyword($)
                    })
                    break
                }
                case "UnionType": {
                    pr.cc($[1], ($) => {
                        _UnionType($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "TypeLiteral": {
                    pr.cc($[1], ($) => {
                        _TypeLiteral($)
                    })
                    break
                }
                case "ArrayType": {
                    pr.cc($[1], ($) => {
                        _ArrayType($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _LiteralType(
        $: api.TLiteralType<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                case "NullKeyword": {
                    pr.cc($[1], ($) => {
                        _NullKeyword($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ConditionalExpression(
        $: api.TConditionalExpression<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                case "QuestionToken": {
                    pr.cc($[1], ($) => {
                        _QuestionToken($)
                    })
                    break
                }
                case "NullKeyword": {
                    pr.cc($[1], ($) => {
                        _NullKeyword($)
                    })
                    break
                }
                case "ColonToken": {
                    pr.cc($[1], ($) => {
                        _ColonToken($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                case "TemplateExpression": {
                    pr.cc($[1], ($) => {
                        _TemplateExpression($)
                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "NoSubstitutionTemplateLiteral": {
                    pr.cc($[1], ($) => {
                        _NoSubstitutionTemplateLiteral($)
                    })
                    break
                }
                case "ConditionalExpression": {
                    pr.cc($[1], ($) => {
                        _ConditionalExpression($)
                    })
                    break
                }
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "ObjectLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ObjectLiteralExpression($)
                    })
                    break
                }
                case "ArrayLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ArrayLiteralExpression($)
                    })
                    break
                }
                case "ElementAccessExpression": {
                    pr.cc($[1], ($) => {
                        _ElementAccessExpression($)
                    })
                    break
                }
                case "ArrowFunction": {
                    pr.cc($[1], ($) => {
                        _ArrowFunction($)
                    })
                    break
                }
                case "NumericLiteral": {
                    pr.cc($[1], ($) => {
                        _NumericLiteral($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ParenthesizedExpression(
        $: api.TParenthesizedExpression<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "ConditionalExpression": {
                    pr.cc($[1], ($) => {
                        _ConditionalExpression($)
                    })
                    break
                }
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                case "ArrowFunction": {
                    pr.cc($[1], ($) => {
                        _ArrowFunction($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _NoSubstitutionTemplateLiteral(
        $: api.TNoSubstitutionTemplateLiteral<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _WhileStatement(
        $: api.TWhileStatement<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "TrueKeyword": {
                    pr.cc($[1], ($) => {
                        _TrueKeyword($)
                    })
                    break
                }
                case "Block": {
                    pr.cc($[1], ($) => {
                        _Block($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _InterfaceDeclaration(
        $: api.TInterfaceDeclaration<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "TypeParameter": {
                    pr.cc($[1], ($) => {
                        _TypeParameter($)
                    })
                    break
                }
                case "MethodSignature": {
                    pr.cc($[1], ($) => {
                        _MethodSignature($)
                    })
                    break
                }
                case "MethodSignature": {
                    pr.cc($[1], ($) => {
                        _MethodSignature($)
                    })
                    break
                }
                case "MethodSignature": {
                    pr.cc($[1], ($) => {
                        _MethodSignature($)
                    })
                    break
                }
                case "MethodSignature": {
                    pr.cc($[1], ($) => {
                        _MethodSignature($)
                    })
                    break
                }
                case "PropertySignature": {
                    pr.cc($[1], ($) => {
                        _PropertySignature($)
                    })
                    break
                }
                case "MethodSignature": {
                    pr.cc($[1], ($) => {
                        _MethodSignature($)
                    })
                    break
                }
                case "MethodSignature": {
                    pr.cc($[1], ($) => {
                        _MethodSignature($)
                    })
                    break
                }
                case "MethodSignature": {
                    pr.cc($[1], ($) => {
                        _MethodSignature($)
                    })
                    break
                }
                case "MethodSignature": {
                    pr.cc($[1], ($) => {
                        _MethodSignature($)
                    })
                    break
                }
                case "MethodSignature": {
                    pr.cc($[1], ($) => {
                        _MethodSignature($)
                    })
                    break
                }
                case "IndexSignature": {
                    pr.cc($[1], ($) => {
                        _IndexSignature($)
                    })
                    break
                }
                case "ConstructSignature": {
                    pr.cc($[1], ($) => {
                        _ConstructSignature($)
                    })
                    break
                }
                case "ExportKeyword": {
                    pr.cc($[1], ($) => {
                        _ExportKeyword($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _QualifiedName(
        $: api.TQualifiedName<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _UndefinedKeyword(
        $: api.TUndefinedKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _IndexSignature(
        $: api.TIndexSignature<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Parameter": {
                    pr.cc($[1], ($) => {
                        _Parameter($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ConstructSignature(
        $: api.TConstructSignature<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Parameter": {
                    pr.cc($[1], ($) => {
                        _Parameter($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _EndOfFileToken(
        $: api.TEndOfFileToken<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _ExportDeclaration(
        $: api.TExportDeclaration<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ImportDeclaration(
        $: api.TImportDeclaration<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                case "ImportClause": {
                    pr.cc($[1], ($) => {
                        _ImportClause($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ImportClause(
        $: api.TImportClause<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "NamespaceImport": {
                    pr.cc($[1], ($) => {
                        _NamespaceImport($)
                    })
                    break
                }
                case "NamedImports": {
                    pr.cc($[1], ($) => {
                        _NamedImports($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _NamespaceImport(
        $: api.TNamespaceImport<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _NamedImports(
        $: api.TNamedImports<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "ImportSpecifier": {
                    pr.cc($[1], ($) => {
                        _ImportSpecifier($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ImportSpecifier(
        $: api.TImportSpecifier<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _NeverKeyword(
        $: api.TNeverKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _ParenthesizedType(
        $: api.TParenthesizedType<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "FunctionType": {
                    pr.cc($[1], ($) => {
                        _FunctionType($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ThrowStatement(
        $: api.TThrowStatement<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "NewExpression": {
                    pr.cc($[1], ($) => {
                        _NewExpression($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _NewExpression(
        $: api.TNewExpression<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "TemplateExpression": {
                    pr.cc($[1], ($) => {
                        _TemplateExpression($)
                    })
                    break
                }
                case "NoSubstitutionTemplateLiteral": {
                    pr.cc($[1], ($) => {
                        _NoSubstitutionTemplateLiteral($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _SwitchStatement(
        $: api.TSwitchStatement<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "ElementAccessExpression": {
                    pr.cc($[1], ($) => {
                        _ElementAccessExpression($)
                    })
                    break
                }
                case "CaseBlock": {
                    pr.cc($[1], ($) => {
                        _CaseBlock($)
                    })
                    break
                }
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _CaseBlock(
        $: api.TCaseBlock<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "CaseClause": {
                    pr.cc($[1], ($) => {
                        _CaseClause($)
                    })
                    break
                }
                case "DefaultClause": {
                    pr.cc($[1], ($) => {
                        _DefaultClause($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _CaseClause(
        $: api.TCaseClause<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                case "ExpressionStatement": {
                    pr.cc($[1], ($) => {
                        _ExpressionStatement($)
                    })
                    break
                }
                case "BreakStatement": {
                    pr.cc($[1], ($) => {
                        _BreakStatement($)
                    })
                    break
                }
                case "Block": {
                    pr.cc($[1], ($) => {
                        _Block($)
                    })
                    break
                }
                case "ReturnStatement": {
                    pr.cc($[1], ($) => {
                        _ReturnStatement($)
                    })
                    break
                }
                case "VariableStatement": {
                    pr.cc($[1], ($) => {
                        _VariableStatement($)
                    })
                    break
                }
                case "IfStatement": {
                    pr.cc($[1], ($) => {
                        _IfStatement($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _DefaultClause(
        $: api.TDefaultClause<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "ExpressionStatement": {
                    pr.cc($[1], ($) => {
                        _ExpressionStatement($)
                    })
                    break
                }
                case "ReturnStatement": {
                    pr.cc($[1], ($) => {
                        _ReturnStatement($)
                    })
                    break
                }
                case "Block": {
                    pr.cc($[1], ($) => {
                        _Block($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _TryStatement(
        $: api.TTryStatement<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Block": {
                    pr.cc($[1], ($) => {
                        _Block($)
                    })
                    break
                }
                case "CatchClause": {
                    pr.cc($[1], ($) => {
                        _CatchClause($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _CatchClause(
        $: api.TCatchClause<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "VariableDeclaration": {
                    pr.cc($[1], ($) => {
                        _VariableDeclaration($)
                    })
                    break
                }
                case "Block": {
                    pr.cc($[1], ($) => {
                        _Block($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ForStatement(
        $: api.TForStatement<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "VariableDeclarationList": {
                    pr.cc($[1], ($) => {
                        _VariableDeclarationList($)
                    })
                    break
                }
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                case "Block": {
                    pr.cc($[1], ($) => {
                        _Block($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _LabeledStatement(
        $: api.TLabeledStatement<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "WhileStatement": {
                    pr.cc($[1], ($) => {
                        _WhileStatement($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _EqualsEqualsEqualsToken(
        $: api.TEqualsEqualsEqualsToken<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _AmpersandAmpersandToken(
        $: api.TAmpersandAmpersandToken<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _PlusEqualsToken(
        $: api.TPlusEqualsToken<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _MinusEqualsToken(
        $: api.TMinusEqualsToken<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _EqualsToken(
        $: api.TEqualsToken<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _ExclamationEqualsEqualsToken(
        $: api.TExclamationEqualsEqualsToken<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _PlusToken(
        $: api.TPlusToken<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _MinusToken(
        $: api.TMinusToken<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _GreaterThanToken(
        $: api.TGreaterThanToken<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _LessThanToken(
        $: api.TLessThanToken<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _BarBarToken(
        $: api.TBarBarToken<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _PostfixUnaryExpression(
        $: api.TPostfixUnaryExpression<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _PropertyAssignment(
        $: api.TPropertyAssignment<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "ArrowFunction": {
                    pr.cc($[1], ($) => {
                        _ArrowFunction($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                case "ElementAccessExpression": {
                    pr.cc($[1], ($) => {
                        _ElementAccessExpression($)
                    })
                    break
                }
                case "ObjectLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ObjectLiteralExpression($)
                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "NullKeyword": {
                    pr.cc($[1], ($) => {
                        _NullKeyword($)
                    })
                    break
                }
                case "PrefixUnaryExpression": {
                    pr.cc($[1], ($) => {
                        _PrefixUnaryExpression($)
                    })
                    break
                }
                case "FalseKeyword": {
                    pr.cc($[1], ($) => {
                        _FalseKeyword($)
                    })
                    break
                }
                case "TemplateExpression": {
                    pr.cc($[1], ($) => {
                        _TemplateExpression($)
                    })
                    break
                }
                case "TrueKeyword": {
                    pr.cc($[1], ($) => {
                        _TrueKeyword($)
                    })
                    break
                }
                case "ConditionalExpression": {
                    pr.cc($[1], ($) => {
                        _ConditionalExpression($)
                    })
                    break
                }
                case "ArrayLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ArrayLiteralExpression($)
                    })
                    break
                }
                case "NoSubstitutionTemplateLiteral": {
                    pr.cc($[1], ($) => {
                        _NoSubstitutionTemplateLiteral($)
                    })
                    break
                }
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                case "ParenthesizedExpression": {
                    pr.cc($[1], ($) => {
                        _ParenthesizedExpression($)
                    })
                    break
                }
                case "NumericLiteral": {
                    pr.cc($[1], ($) => {
                        _NumericLiteral($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _EqualsGreaterThanToken(
        $: api.TEqualsGreaterThanToken<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _TemplateHead(
        $: api.TTemplateHead<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _TemplateSpan(
        $: api.TTemplateSpan<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                case "TemplateMiddle": {
                    pr.cc($[1], ($) => {
                        _TemplateMiddle($)
                    })
                    break
                }
                case "TemplateTail": {
                    pr.cc($[1], ($) => {
                        _TemplateTail($)
                    })
                    break
                }
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "ConditionalExpression": {
                    pr.cc($[1], ($) => {
                        _ConditionalExpression($)
                    })
                    break
                }
                case "ElementAccessExpression": {
                    pr.cc($[1], ($) => {
                        _ElementAccessExpression($)
                    })
                    break
                }
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _TemplateMiddle(
        $: api.TTemplateMiddle<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _TemplateTail(
        $: api.TTemplateTail<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _OptionalType(
        $: api.TOptionalType<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "NumberKeyword": {
                    pr.cc($[1], ($) => {
                        _NumberKeyword($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ColonToken(
        $: api.TColonToken<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    return _SourceFile($)
}