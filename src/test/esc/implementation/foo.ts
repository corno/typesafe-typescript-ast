import { FOO } from "../../../pub/esc/implementations/visitor_template.generated"
import { Node } from "ts-morph";

export function createFoo(
    write: (str: string) => void
): FOO<Node> {
    return {
        "AnyKeyword": ($) => { write("any") },
        "ArrayLiteralExpression": {
            begin: ($) => { write("ArrayLiteralExpression begin") },
            end: ($) => { write("ArrayLiteralExpression end") },
        },
        "ArrayType": {
            begin: ($) => { write("ArrayType begin") },
            end: ($) => { write("ArrayType end") },
        },
        "ArrowFunction": {
            begin: ($) => { write("ArrowFunction begin") },
            end: ($) => { write("ArrowFunction end") },
        },
        "BinaryExpression": {
            begin: ($) => { write("BinaryExpression begin") },
            end: ($) => { write("BinaryExpression end") },
        },
        "AmpersandAmpersandToken": ($) => { write("AmpersandAmpersandToken") },
        "BarBarToken": ($) => { write("BarBarToken") },
        "BreakStatement": {
            begin: ($) => { write("BreakStatement begin") },
            end: ($) => { write("BreakStatement end") },
        },
        "EqualsEqualsEqualsToken": ($) => { write("EqualsEqualsEqualsToken") },
        "EqualsToken": ($) => { write("EqualsToken") },
        "ExclamationEqualsEqualsToken": ($) => { write("ExclamationEqualsEqualsToken") },
        "GreaterThanToken": ($) => { write("GreaterThanToken") },
        "LessThanToken": ($) => { write("LessThanToken") },
        "MinusToken": ($) => { write("MinusToken") },
        "MinusEqualsToken": ($) => { write("MinusEqualsToken") },
        "PlusToken": ($) => { write("PlusToken") },
        "PlusEqualsToken": ($) => { write("PlusEqualsToken") },
        "BooleanKeyword": ($) => { write("BooleanKeyword") },
        "Block": {
            begin: ($) => { write("Block begin") },
            end: ($) => { write("Block end") },
        },
        "CallExpression": {
            begin: ($) => { write("CallExpression begin") },
            end: ($) => { write("CallExpression end") },
        },
        "CaseBlock": {
            begin: ($) => { write("CaseBlock begin") },
            end: ($) => { write("CaseBlock end") },
        },
        "CaseClause": {
            begin: ($) => { write("CaseClause begin") },
            end: ($) => { write("CaseClause end") },
        },
        "CatchClause": {
            begin: ($) => { write("CatchClause begin") },
            end: ($) => { write("CatchClause end") },
        },
        "ColonToken": ($) => { write("ColonToken") },
        "ConditionalExpression": {
            begin: ($) => { write("ConditionalExpression begin") },
            end: ($) => { write("ConditionalExpression end") },
        },
        "ConstructSignature": {
            begin: ($) => { write("ConstructSignature begin") },
            end: ($) => { write("ConstructSignature end") },
        },
        "DeclareKeyword": ($) => { write("DeclareKeyword") },
        "DefaultClause": {
            begin: ($) => { write("DefaultClause begin") },
            end: ($) => { write("DefaultClause end") },
        },
        "ElementAccessExpression": {
            begin: ($) => { write("ElementAccessExpression begin") },
            end: ($) => { write("ElementAccessExpression end") },
        },
        "EndOfFileToken": ($) => { write("EndOfFileToken") },
        "EqualsGreaterThanToken": ($) => { write("EqualsGreaterThanToken") },
        "ExportDeclaration": {
            begin: ($) => { write("ExportDeclaration begin") },
            end: ($) => { write("ExportDeclaration end") },
        },
        "ExportKeyword": ($) => { write("ExportKeyword") },
        "ExpressionStatement": {
            begin: ($) => { write("ExpressionStatement begin") },
            end: ($) => { write("ExpressionStatement end") },
        },
        "FalseKeyword": ($) => { write("FalseKeyword") },
        "ForStatement": {
            begin: ($) => { write("ForStatement begin") },
            end: ($) => { write("ForStatement end") },
        },
        "FunctionDeclaration": {
            begin: ($) => { write("FunctionDeclaration begin") },
            end: ($) => { write("FunctionDeclaration end") },
        },
        "Identifier": ($) => { write("Identifier") },
        "IfStatement": {
            begin: ($) => { write("IfStatement begin") },
            end: ($) => { write("IfStatement end") },
        },
        "FunctionType": {
            begin: ($) => { write("FunctionType begin") },
            end: ($) => { write("FunctionType end") },
        },
        "ImportClause": {
            begin: ($) => { write("ImportClause begin") },
            end: ($) => { write("ImportClause end") },
        },
        "ImportDeclaration": {
            begin: ($) => { write("ImportDeclaration begin") },
            end: ($) => { write("ImportDeclaration end") },
        },
        "IndexSignature": {
            begin: ($) => { write("IndexSignature begin") },
            end: ($) => { write("IndexSignature end") },
        },
        "InterfaceDeclaration": {
            begin: ($) => { write("InterfaceDeclaration begin") },
            end: ($) => { write("InterfaceDeclaration end") },
        },
        "ImportSpecifier": {
            begin: ($) => { write("ImportSpecifier begin") },
            end: ($) => { write("ImportSpecifier end") },
        },
        "LabeledStatement": {
            begin: ($) => { write("LabeledStatement begin") },
            end: ($) => { write("LabeledStatement end") },
        },
        "LiteralType": {
            begin: ($) => { write("LiteralType begin") },
            end: ($) => { write("LiteralType end") },
        },
        "MethodSignature": {
            begin: ($) => { write("MethodSignature begin") },
            end: ($) => { write("MethodSignature end") },
        },
        "NamespaceImport": {
            begin: ($) => { write("NamespaceImport begin") },
            end: ($) => { write("NamespaceImport end") },
        },
        "NamedImports": {
            begin: ($) => { write("NamedImports begin") },
            end: ($) => { write("NamedImports end") },
        },
        "NeverKeyword": ($) => { write("NeverKeyword") },
        "NumberKeyword": ($) => { write("NumberKeyword") },
        "NumericLiteral": ($) => { write("NumericLiteral") },
        "NewExpression": {
            begin: ($) => { write("NewExpression begin") },
            end: ($) => { write("NewExpression end") },
        },
        "NullKeyword": ($) => { write("NullKeyword") },
        "NoSubstitutionTemplateLiteral": ($) => { write("NoSubstitutionTemplateLiteral") },
        "ObjectLiteralExpression": {
            begin: ($) => { write("ObjectLiteralExpression begin") },
            end: ($) => { write("ObjectLiteralExpression end") },
        },
        "OptionalType": {
            begin: ($) => { write("OptionalType begin") },
            end: ($) => { write("OptionalType end") },
        },
        "Parameter": {
            begin: ($) => { write("Parameter begin") },
            end: ($) => { write("Parameter end") },
        },
        "ParenthesizedExpression": {
            begin: ($) => { write("ParenthesizedExpression begin") },
            end: ($) => { write("ParenthesizedExpression end") },
        },
        "ParenthesizedType": {
            begin: ($) => { write("ParenthesizedType begin") },
            end: ($) => { write("ParenthesizedType end") },
        },
        "PostfixUnaryExpression": {
            begin: ($) => { write("PostfixUnaryExpression begin") },
            end: ($) => { write("PostfixUnaryExpression end") },
        },
        "PrefixUnaryExpression": {
            begin: ($) => { write("PrefixUnaryExpression begin") },
            end: ($) => { write("PrefixUnaryExpression end") },
        },
        "PropertyAccessExpression": {
            begin: ($) => { write("PropertyAccessExpression begin") },
            end: ($) => { write("PropertyAccessExpression end") },
        },
        "PropertyAssignment": {
            begin: ($) => { write("PropertyAssignment begin") },
            end: ($) => { write("PropertyAssignment end") },
        },
        "PropertySignature": {
            begin: ($) => { write("PropertySignature begin") },
            end: ($) => { write("PropertySignature end") },
        },
        "QualifiedName": {
            begin: ($) => { write("QualifiedName begin") },
            end: ($) => { write("QualifiedName end") },
        },
        "QuestionToken": ($) => { write("QuestionToken") },
        "ReadonlyKeyword": ($) => { write("ReadonlyKeyword") },
        "ReturnStatement": {
            begin: ($) => { write("ReturnStatement begin") },
            end: ($) => { write("ReturnStatement end") },
        },
        "SourceFile": {
            begin: ($) => { write("SourceFile begin") },
            end: ($) => { write("SourceFile end") },
        },
        "StringKeyword": ($) => { write("StringKeyword") },
        "StringLiteral": ($) => { write("StringLiteral") },
        "SwitchStatement": {
            begin: ($) => { write("SwitchStatement begin") },
            end: ($) => { write("SwitchStatement end") },
        },
        "TemplateExpression": {
            begin: ($) => { write("TemplateExpression begin") },
            end: ($) => { write("TemplateExpression end") },
        },
        "TemplateHead": ($) => { write("TemplateHead") },
        "TemplateMiddle": ($) => { write("TemplateMiddle") },
        "TemplateSpan": {
            begin: ($) => { write("TemplateSpan begin") },
            end: ($) => { write("TemplateSpan end") },
        },
        "TemplateTail": ($) => { write("TemplateTail") },
        "ThrowStatement": {
            begin: ($) => { write("ThrowStatement begin") },
            end: ($) => { write("ThrowStatement end") },
        },
        "TrueKeyword": ($) => { write("TrueKeyword") },
        "TryStatement": {
            begin: ($) => { write("TryStatement begin") },
            end: ($) => { write("TryStatement end") },
        },
        "TupleType": {
            begin: ($) => { write("TupleType begin") },
            end: ($) => { write("TupleType end") },
        },
        "TypeAliasDeclaration": {
            begin: ($) => { write("TypeAliasDeclaration begin") },
            end: ($) => { write("TypeAliasDeclaration end") },
        },
        "TypeLiteral": {
            begin: ($) => { write("TypeLiteral begin") },
            end: ($) => { write("TypeLiteral end") },
        },
        "TypeParameter": {
            begin: ($) => { write("TypeParameter begin") },
            end: ($) => { write("TypeParameter end") },
        },
        "TypeReference": {
            begin: ($) => { write("TypeReference begin") },
            end: ($) => { write("TypeReference end") },
        },
        "UndefinedKeyword": ($) => { write("UndefinedKeyword") },
        "UnionType": {
            begin: ($) => { write("UnionType begin") },
            end: ($) => { write("UnionType end") },
        },
        "VariableDeclaration": {
            begin: ($) => { write("VariableDeclaration begin") },
            end: ($) => { write("VariableDeclaration end") },
        },
        "VariableDeclarationList": {
            begin: ($) => { write("VariableDeclarationList begin") },
            end: ($) => { write("VariableDeclarationList end") },
        },
        "VariableStatement": {
            begin: ($) => { write("VariableStatement begin") },
            end: ($) => { write("VariableStatement end") },
        },
        "VoidKeyword": ($) => { write("VoidKeyword") },
        "WhileStatement": {
            begin: ($) => { write("WhileStatement begin") },
            end: ($) => { write("WhileStatement end") },
        },
    }
}