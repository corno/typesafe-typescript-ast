import * as pr from "pareto-runtime"
import * as tast from "../interfaces/typedAST"

export function visit<Annotation>(
    $: tast.TSourceFile<Annotation>,
    report: (annotation: Annotation) => void,
): void {
    function _SourceFile(
        $: tast.TSourceFile<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "InterfaceDeclaration": {
                    pr.cc($[1], ($) => {
                        //report($.annotation)//LEAF
                        //FIXME

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
                        //report($.annotation)//LEAF
                        //FIXME

                    })
                    break
                }
                case "ExportDeclaration": {
                    pr.cc($[1], ($) => {
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

                    })
                    break
                }
                case "ImportDeclaration": {
                    pr.cc($[1], ($) => {
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
        $: tast.TIdentifier<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _TypeParameter(
        $: tast.TTypeParameter<Annotation>,
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
        $: tast.TMethodSignature<Annotation>,
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
        $: tast.TParameter<Annotation>,
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
                        //report($.annotation)//LEAF
                        //FIXME

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
        $: tast.TTypeReference<Annotation>,
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
        $: tast.TVoidKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _FunctionType(
        $: tast.TFunctionType<Annotation>,
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
        $: tast.TNumberKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _ArrayType(
        $: tast.TArrayType<Annotation>,
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
        $: tast.TBooleanKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _PropertySignature(
        $: tast.TPropertySignature<Annotation>,
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
        $: tast.TStringKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _UnionType(
        $: tast.TUnionType<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "UndefinedKeyword": {
                    pr.cc($[1], ($) => {
                        //report($.annotation)//LEAF
                        //FIXME

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

                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ReadonlyKeyword(
        $: tast.TReadonlyKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _FunctionDeclaration(
        $: tast.TFunctionDeclaration<Annotation>,
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
        $: tast.TDeclareKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _AnyKeyword(
        $: tast.TAnyKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _QuestionToken(
        $: tast.TQuestionToken<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _VariableStatement(
        $: tast.TVariableStatement<Annotation>,
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
        $: tast.TVariableDeclarationList<Annotation>,
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
        $: tast.TVariableDeclaration<Annotation>,
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
        $: tast.TStringLiteral<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _Block(
        $: tast.TBlock<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "ThrowStatement": {
                    pr.cc($[1], ($) => {
                        report($.annotation)
                        $.children.forEach(($) => {
                            switch ($[0]) {
                                case "NewExpression": {
                                    pr.cc($[1], ($) => {
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

                                    })
                                    break
                                }
                                default: pr.au($[0])
                            }
                        })

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
                                        report($.annotation)
                                        $.children.forEach(($) => {
                                            switch ($[0]) {
                                                case "CaseClause": {
                                                    pr.cc($[1], ($) => {
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

                                                    })
                                                    break
                                                }
                                                case "DefaultClause": {
                                                    pr.cc($[1], ($) => {
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

                                                    })
                                                    break
                                                }
                                                default: pr.au($[0])
                                            }
                                        })

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

                    })
                    break
                }
                case "TryStatement": {
                    pr.cc($[1], ($) => {
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

                                    })
                                    break
                                }
                                default: pr.au($[0])
                            }
                        })

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

                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ReturnStatement(
        $: tast.TReturnStatement<Annotation>,
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
        $: tast.TCallExpression<Annotation>,
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
        $: tast.TExportKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _NumericLiteral(
        $: tast.TNumericLiteral<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _FalseKeyword(
        $: tast.TFalseKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _IfStatement(
        $: tast.TIfStatement<Annotation>,
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
        $: tast.TBinaryExpression<Annotation>,
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
                        //report($.annotation)//LEAF
                        //FIXME

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
                        //report($.annotation)//LEAF
                        //FIXME

                    })
                    break
                }
                case "PlusEqualsToken": {
                    pr.cc($[1], ($) => {
                        //report($.annotation)//LEAF
                        //FIXME

                    })
                    break
                }
                case "MinusEqualsToken": {
                    pr.cc($[1], ($) => {
                        //report($.annotation)//LEAF
                        //FIXME

                    })
                    break
                }
                case "EqualsToken": {
                    pr.cc($[1], ($) => {
                        //report($.annotation)//LEAF
                        //FIXME

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
                        //report($.annotation)//LEAF
                        //FIXME

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
                        //report($.annotation)//LEAF
                        //FIXME

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
                        //report($.annotation)//LEAF
                        //FIXME

                    })
                    break
                }
                case "GreaterThanToken": {
                    pr.cc($[1], ($) => {
                        //report($.annotation)//LEAF
                        //FIXME

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
                        //report($.annotation)//LEAF
                        //FIXME

                    })
                    break
                }
                case "BarBarToken": {
                    pr.cc($[1], ($) => {
                        //report($.annotation)//LEAF
                        //FIXME

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
        $: tast.TExpressionStatement<Annotation>,
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

                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ObjectLiteralExpression(
        $: tast.TObjectLiteralExpression<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "PropertyAssignment": {
                    pr.cc($[1], ($) => {
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

                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ArrowFunction(
        $: tast.TArrowFunction<Annotation>,
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
                        //report($.annotation)//LEAF
                        //FIXME

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
        $: tast.TPropertyAccessExpression<Annotation>,
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
        $: tast.TElementAccessExpression<Annotation>,
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
        $: tast.TArrayLiteralExpression<Annotation>,
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
        $: tast.TBreakStatement<Annotation>,
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
        $: tast.TNullKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _TrueKeyword(
        $: tast.TTrueKeyword<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _TypeAliasDeclaration(
        $: tast.TTypeAliasDeclaration<Annotation>,
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
        $: tast.TTypeLiteral<Annotation>,
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
                        //report($.annotation)//LEAF
                        //FIXME

                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _TemplateExpression(
        $: tast.TTemplateExpression<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "TemplateHead": {
                    pr.cc($[1], ($) => {
                        //report($.annotation)//LEAF
                        //FIXME

                    })
                    break
                }
                case "TemplateSpan": {
                    pr.cc($[1], ($) => {
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
                                        //report($.annotation)//LEAF
                                        //FIXME

                                    })
                                    break
                                }
                                case "TemplateTail": {
                                    pr.cc($[1], ($) => {
                                        //report($.annotation)//LEAF
                                        //FIXME

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

                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _PrefixUnaryExpression(
        $: tast.TPrefixUnaryExpression<Annotation>,
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
        $: tast.TTupleType<Annotation>,
    ) {
        report($.annotation)
        $.children.forEach(($) => {
            switch ($[0]) {
                case "OptionalType": {
                    pr.cc($[1], ($) => {
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
        $: tast.TLiteralType<Annotation>,
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
        $: tast.TConditionalExpression<Annotation>,
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
                        //report($.annotation)//LEAF
                        //FIXME

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
        $: tast.TParenthesizedExpression<Annotation>,
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
        $: tast.TNoSubstitutionTemplateLiteral<Annotation>,
    ) {
        //report($.annotation)//LEAF
        //FIXME
    }
    function _WhileStatement(
        $: tast.TWhileStatement<Annotation>,
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
    return _SourceFile($)
}