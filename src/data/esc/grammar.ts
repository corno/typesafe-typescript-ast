import * as gramm from "../../generateCode/esc/interfaces/Grammar";

export const grammar: gramm.Grammar = {
    "tokenRules": {
        "SourceFile": ["bag", [
            ["global", "InterfaceDeclaration"],
            ["global", "FunctionDeclaration"],
            ["global", "VariableStatement"],
            ["global", "EndOfFileToken"],
            ["global", "ExportDeclaration"],
            ["global", "ImportDeclaration"],
            ["global", "TypeAliasDeclaration"],
            ["global", "ExpressionStatement"],
        ]],
        "Identifier": ["leaf", {}],
        "TypeParameter": ["bag", [
            ["global", "Identifier"],
        ]],
        "MethodSignature": ["bag", [
            ["global", "Identifier"],
            ["global", "Parameter"],
            ["global", "VoidKeyword"],
            ["global", "TypeParameter"],
            ["global", "ArrayType"],
            ["global", "BooleanKeyword"],
            ["global", "StringKeyword"],
            ["global", "UnionType"],
            ["global", "NumberKeyword"],
            ["global", "TypeReference"],
        ]],
        "Parameter": ["bag", [
            ["global", "Identifier"],
            ["global", "TypeReference"],
            ["global", "FunctionType"],
            ["global", "NumberKeyword"],
            ["global", "StringKeyword"],
            ["global", "ArrayType"],
            ["global", "AnyKeyword"],
            ["global", "QuestionToken"],
            ["global", "NeverKeyword"],
            ["global", "TypeLiteral"],
            ["global", "UnionType"],
            ["global", "BooleanKeyword"],
        ]],
        "TypeReference": ["bag", [
            ["global", "Identifier"],
            ["global", "TypeReference"],
            ["global", "QualifiedName"],
            ["global", "StringKeyword"],
            ["global", "LiteralType"],
            ["global", "TypeLiteral"],
        ]],
        "VoidKeyword": ["leaf", {}],
        "FunctionType": ["bag", [
            ["global", "Parameter"],
            ["global", "VoidKeyword"],
            ["global", "TypeReference"],
            ["global", "AnyKeyword"],
            ["global", "UnionType"],
            ["global", "BooleanKeyword"],
            ["global", "ArrayType"],
            ["global", "StringKeyword"],
        ]],
        "NumberKeyword": ["leaf", {}],
        "ArrayType": ["bag", [
            ["global", "TypeReference"],
            ["global", "StringKeyword"],
        ]],
        "BooleanKeyword": ["leaf", {}],
        "PropertySignature": ["bag", [
            ["global", "Identifier"],
            ["global", "NumberKeyword"],
            ["global", "ReadonlyKeyword"],
            ["global", "StringKeyword"],
            ["global", "FunctionType"],
            ["global", "TypeReference"],
            ["global", "QuestionToken"],
            ["global", "BooleanKeyword"],
            ["global", "ArrayType"],
            ["global", "UnionType"],
            ["global", "LiteralType"],
            ["global", "TypeLiteral"],
            ["global", "StringLiteral"],
        ]],
        "StringKeyword": ["leaf", {}],
        "UnionType": ["bag", [
            ["global", "UndefinedKeyword"],
            ["global", "TypeReference"],
            ["global", "TupleType"],
            ["global", "LiteralType"],
            ["global", "StringKeyword"],
            ["global", "BooleanKeyword"],
            ["global", "ArrayType"],
            ["global", "NumberKeyword"],
            ["global", "ParenthesizedType"],
        ]],
        "ReadonlyKeyword": ["leaf", {}],
        "FunctionDeclaration": ["bag", [
            ["global", "DeclareKeyword"],
            ["global", "Identifier"],
            ["global", "Parameter"],
            ["global", "BooleanKeyword"],
            ["global", "TypeParameter"],
            ["global", "TypeReference"],
            ["global", "Block"],
            ["global", "ExportKeyword"],
            ["global", "VoidKeyword"],
            ["global", "UnionType"],
            ["global", "StringKeyword"],
            ["global", "ArrayType"],
        ]],
        "DeclareKeyword": ["leaf", {}],
        "AnyKeyword": ["leaf", {}],
        "QuestionToken": ["leaf", {}],
        "VariableStatement": ["bag", [
            ["global", "DeclareKeyword"],
            ["global", "VariableDeclarationList"],
            ["global", "ExportKeyword"],
        ]],
        "VariableDeclarationList": ["bag", [
            ["global", "VariableDeclaration"],
        ]],
        "VariableDeclaration": ["bag", [
            ["global", "Identifier"],
            ["global", "TypeReference"],
            ["global", "NumericLiteral"],
            ["global", "FalseKeyword"],
            ["global", "CallExpression"],
            ["global", "StringLiteral"],
            ["global", "ArrayType"],
            ["global", "ArrayLiteralExpression"],
            ["global", "PropertyAccessExpression"],
            ["global", "ElementAccessExpression"],
            ["global", "ArrowFunction"],
            ["global", "ObjectLiteralExpression"],
            ["global", "PrefixUnaryExpression"],
            ["global", "BinaryExpression"],
            ["global", "ConditionalExpression"],
            ["global", "NoSubstitutionTemplateLiteral"],
            ["global", "ParenthesizedExpression"],
            ["global", "NumberKeyword"],
            ["global", "UnionType"],
            ["global", "NullKeyword"],
            ["global", "TypeLiteral"],
        ]],
        "StringLiteral": ["leaf", {}],
        "Block": ["bag", [
            ["global", "ThrowStatement"],
            ["global", "ReturnStatement"],
            ["global", "VariableStatement"],
            ["global", "FunctionDeclaration"],
            ["global", "IfStatement"],
            ["global", "ExpressionStatement"],
            ["global", "SwitchStatement"],
            ["global", "TryStatement"],
            ["global", "BreakStatement"],
            ["global", "TypeAliasDeclaration"],
            ["global", "ForStatement"],
            ["global", "WhileStatement"],
            ["global", "LabeledStatement"],
        ]],
        "ReturnStatement": ["bag", [
            ["global", "CallExpression"],
            ["global", "ObjectLiteralExpression"],
            ["global", "TemplateExpression"],
            ["global", "Identifier"],
            ["global", "ArrayLiteralExpression"],
            ["global", "NullKeyword"],
            ["global", "ArrowFunction"],
            ["global", "PropertyAccessExpression"],
            ["global", "BinaryExpression"],
            ["global", "PrefixUnaryExpression"],
            ["global", "ConditionalExpression"],
            ["global", "ElementAccessExpression"],
            ["global", "NoSubstitutionTemplateLiteral"],
            ["global", "StringLiteral"],
        ]],
        "CallExpression": ["bag", [
            ["global", "Identifier"],
            ["global", "PropertyAccessExpression"],
            ["global", "CallExpression"],
            ["global", "ArrowFunction"],
            ["global", "ElementAccessExpression"],
            ["global", "ArrayLiteralExpression"],
            ["global", "NullKeyword"],
            ["global", "ObjectLiteralExpression"],
            ["global", "StringLiteral"],
            ["global", "BinaryExpression"],
            ["global", "TypeReference"],
            ["global", "TemplateExpression"],
            ["global", "ConditionalExpression"],
            ["global", "NoSubstitutionTemplateLiteral"],
            ["global", "ParenthesizedExpression"],
            ["global", "NumericLiteral"],
            ["global", "TrueKeyword"],
            ["global", "FalseKeyword"],
        ]],
        "ExportKeyword": ["leaf", {}],
        "NumericLiteral": ["leaf", {}],
        "FalseKeyword": ["leaf", {}],
        "IfStatement": ["bag", [
            ["global", "BinaryExpression"],
            ["global", "Block"],
            ["global", "Identifier"],
            ["global", "PropertyAccessExpression"],
            ["global", "PrefixUnaryExpression"],
            ["global", "ReturnStatement"],
            ["global", "CallExpression"],
            ["global", "IfStatement"],
        ]],
        "BinaryExpression": ["bag", [
            ["global", "BinaryExpression"],
            ["global", "Identifier"],
            ["global", "EqualsEqualsEqualsToken"],
            ["global", "NumericLiteral"],
            ["global", "AmpersandAmpersandToken"],
            ["global", "PlusEqualsToken"],
            ["global", "MinusEqualsToken"],
            ["global", "EqualsToken"],
            ["global", "TrueKeyword"],
            ["global", "ElementAccessExpression"],
            ["global", "ExclamationEqualsEqualsToken"],
            ["global", "StringLiteral"],
            ["global", "PlusToken"],
            ["global", "PropertyAccessExpression"],
            ["global", "NullKeyword"],
            ["global", "ParenthesizedExpression"],
            ["global", "ObjectLiteralExpression"],
            ["global", "MinusToken"],
            ["global", "GreaterThanToken"],
            ["global", "CallExpression"],
            ["global", "FalseKeyword"],
            ["global", "LessThanToken"],
            ["global", "BarBarToken"],
            ["global", "ArrayLiteralExpression"],
        ]],
        "ExpressionStatement": ["bag", [
            ["global", "CallExpression"],
            ["global", "BinaryExpression"],
            ["global", "PostfixUnaryExpression"],
        ]],
        "ObjectLiteralExpression": ["bag", [
            ["global", "PropertyAssignment"],
        ]],
        "ArrowFunction": ["bag", [
            ["global", "Parameter"],
            ["global", "EqualsGreaterThanToken"],
            ["global", "Block"],
            ["global", "Identifier"],
            ["global", "CallExpression"],
            ["global", "BinaryExpression"],
            ["global", "StringKeyword"],
            ["global", "TypeReference"],
            ["global", "VoidKeyword"],
            ["global", "UnionType"],
            ["global", "TemplateExpression"],
            ["global", "PropertyAccessExpression"],
        ]],
        "PropertyAccessExpression": ["bag", [
            ["global", "Identifier"],
            ["global", "CallExpression"],
            ["global", "PropertyAccessExpression"],
            ["global", "ElementAccessExpression"],
        ]],
        "ElementAccessExpression": ["bag", [
            ["global", "Identifier"],
            ["global", "NumericLiteral"],
            ["global", "PropertyAccessExpression"],
            ["global", "CallExpression"],
            ["global", "StringLiteral"],
            ["global", "ElementAccessExpression"],
        ]],
        "ArrayLiteralExpression": ["bag", [
            ["global", "StringLiteral"],
            ["global", "ObjectLiteralExpression"],
            ["global", "Identifier"],
            ["global", "PropertyAccessExpression"],
            ["global", "CallExpression"],
            ["global", "BinaryExpression"],
            ["global", "NullKeyword"],
            ["global", "ConditionalExpression"],
            ["global", "TemplateExpression"],
            ["global", "ArrayLiteralExpression"],
            ["global", "NumericLiteral"],
        ]],
        "BreakStatement": ["bag", [
            ["global", "Identifier"],
        ]],
        "NullKeyword": ["leaf", {}],
        "TrueKeyword": ["leaf", {}],
        "TypeAliasDeclaration": ["bag", [
            ["global", "ExportKeyword"],
            ["global", "Identifier"],
            ["global", "TypeLiteral"],
            ["global", "TypeParameter"],
            ["global", "TupleType"],
            ["global", "UnionType"],
            ["global", "ArrayType"],
            ["global", "TypeReference"],
            ["global", "FunctionType"],
        ]],
        "TypeLiteral": ["bag", [
            ["global", "PropertySignature"],
            ["global", "MethodSignature"],
            ["global", "IndexSignature"],
        ]],
        "TemplateExpression": ["bag", [
            ["global", "TemplateHead"],
            ["global", "TemplateSpan"],
        ]],
        "PrefixUnaryExpression": ["bag", [
            ["global", "Identifier"],
            ["global", "PropertyAccessExpression"],
            ["global", "CallExpression"],
            ["global", "NumericLiteral"],
        ]],
        "TupleType": ["bag", [
            ["global", "OptionalType"],
            ["global", "LiteralType"],
            ["global", "StringKeyword"],
            ["global", "UnionType"],
            ["global", "TypeReference"],
            ["global", "TypeLiteral"],
            ["global", "ArrayType"],
        ]],
        "LiteralType": ["bag", [
            ["global", "StringLiteral"],
            ["global", "NullKeyword"],
        ]],
        "ConditionalExpression": ["bag", [
            ["global", "BinaryExpression"],
            ["global", "QuestionToken"],
            ["global", "NullKeyword"],
            ["global", "ColonToken"],
            ["global", "PropertyAccessExpression"],
            ["global", "StringLiteral"],
            ["global", "TemplateExpression"],
            ["global", "CallExpression"],
            ["global", "NoSubstitutionTemplateLiteral"],
            ["global", "ConditionalExpression"],
            ["global", "Identifier"],
            ["global", "ObjectLiteralExpression"],
            ["global", "ArrayLiteralExpression"],
            ["global", "ElementAccessExpression"],
            ["global", "ArrowFunction"],
            ["global", "NumericLiteral"],
        ]],
        "ParenthesizedExpression": ["bag", [
            ["global", "ConditionalExpression"],
            ["global", "BinaryExpression"],
            ["global", "ArrowFunction"],
        ]],
        "NoSubstitutionTemplateLiteral": ["leaf", {}],
        "WhileStatement": ["bag", [
            ["global", "TrueKeyword"],
            ["global", "Block"],
        ]],
        "InterfaceDeclaration": ["bag", [
            ["global", "Identifier"],
            ["global", "TypeParameter"],
            ["global", "MethodSignature"],
            ["global", "MethodSignature"],
            ["global", "MethodSignature"],
            ["global", "MethodSignature"],
            ["global", "PropertySignature"],
            ["global", "MethodSignature"],
            ["global", "MethodSignature"],
            ["global", "MethodSignature"],
            ["global", "MethodSignature"],
            ["global", "MethodSignature"],
            ["global", "IndexSignature"],
            ["global", "ConstructSignature"],
            ["global", "ExportKeyword"],
        ]],
        "QualifiedName": ["bag", [
            ["global", "Identifier"],
            ["global", "Identifier"],
        ]],
        "UndefinedKeyword": ["leaf", {}],
        "IndexSignature": ["bag", [
            ["global", "Parameter"],
            ["global", "TypeReference"],
        ]],
        "ConstructSignature": ["bag", [
            ["global", "Parameter"],
            ["global", "TypeReference"],
        ]],
        "EndOfFileToken": ["leaf", {}],
        "ExportDeclaration": ["bag", [
            ["global", "StringLiteral"],
        ]],
        "ImportDeclaration": ["bag", [
            ["global", "StringLiteral"],
            ["global", "ImportClause"],
        ]],
        "ImportClause": ["bag", [
            ["global", "NamespaceImport"],
            ["global", "NamedImports"],
        ]],
        "NamespaceImport": ["bag", [
            ["global", "Identifier"],
        ]],
        "NamedImports": ["bag", [
            ["global", "ImportSpecifier"],
        ]],
        "ImportSpecifier": ["bag", [
            ["global", "Identifier"],
        ]],
        "NeverKeyword": ["leaf", {}],
        "ParenthesizedType": ["bag", [
            ["global", "FunctionType"],
        ]],
        "ThrowStatement": ["bag", [
            ["global", "NewExpression"],
        ]],
        "NewExpression": ["bag", [
            ["global", "Identifier"],
            ["global", "StringLiteral"],
            ["global", "CallExpression"],
            ["global", "TemplateExpression"],
            ["global", "NoSubstitutionTemplateLiteral"],
        ]],
        "SwitchStatement": ["bag", [
            ["global", "ElementAccessExpression"],
            ["global", "CaseBlock"],
            ["global", "Identifier"],
            ["global", "PropertyAccessExpression"],
        ]],
        "CaseBlock": ["bag", [
            ["global", "CaseClause"],
            ["global", "DefaultClause"],
        ]],
        "CaseClause": ["bag", [
            ["global", "StringLiteral"],
            ["global", "ExpressionStatement"],
            ["global", "BreakStatement"],
            ["global", "Block"],
            ["global", "ReturnStatement"],
            ["global", "VariableStatement"],
            ["global", "IfStatement"],
            ["global", "PropertyAccessExpression"],
        ]],
        "DefaultClause": ["bag", [
            ["global", "ExpressionStatement"],
            ["global", "ReturnStatement"],
            ["global", "Block"],
        ]],
        "TryStatement": ["bag", [
            ["global", "Block"],
            ["global", "CatchClause"],
        ]],
        "CatchClause": ["bag", [
            ["global", "VariableDeclaration"],
            ["global", "Block"],
        ]],
        "ForStatement": ["bag", [
            ["global", "VariableDeclarationList"],
            ["global", "BinaryExpression"],
            ["global", "Block"],
        ]],
        "LabeledStatement": ["bag", [
            ["global", "Identifier"],
            ["global", "WhileStatement"],
        ]],
        "EqualsEqualsEqualsToken": ["leaf", {}],
        "AmpersandAmpersandToken": ["leaf", {}],
        "PlusEqualsToken": ["leaf", {}],
        "MinusEqualsToken": ["leaf", {}],
        "EqualsToken": ["leaf", {}],
        "ExclamationEqualsEqualsToken": ["leaf", {}],
        "PlusToken": ["leaf", {}],
        "MinusToken": ["leaf", {}],
        "GreaterThanToken": ["leaf", {}],
        "LessThanToken": ["leaf", {}],
        "BarBarToken": ["leaf", {}],
        "PostfixUnaryExpression": ["bag", [
            ["global", "Identifier"],
            ["global", "PropertyAccessExpression"],
        ]],
        "PropertyAssignment": ["bag", [
            ["global", "Identifier"],
            ["global", "ArrowFunction"],
            ["global", "PropertyAccessExpression"],
            ["global", "StringLiteral"],
            ["global", "ElementAccessExpression"],
            ["global", "ObjectLiteralExpression"],
            ["global", "CallExpression"],
            ["global", "NullKeyword"],
            ["global", "PrefixUnaryExpression"],
            ["global", "FalseKeyword"],
            ["global", "TemplateExpression"],
            ["global", "TrueKeyword"],
            ["global", "ConditionalExpression"],
            ["global", "ArrayLiteralExpression"],
            ["global", "NoSubstitutionTemplateLiteral"],
            ["global", "BinaryExpression"],
            ["global", "ParenthesizedExpression"],
            ["global", "NumericLiteral"],
        ]],
        "EqualsGreaterThanToken": ["leaf", {}],
        "TemplateHead": ["leaf", {}],
        "TemplateSpan": ["bag", [
            ["global", "PropertyAccessExpression"],
            ["global", "TemplateMiddle"],
            ["global", "TemplateTail"],
            ["global", "Identifier"],
            ["global", "CallExpression"],
            ["global", "ConditionalExpression"],
            ["global", "ElementAccessExpression"],
            ["global", "BinaryExpression"],
        ]],
        "TemplateMiddle": ["leaf", {}],
        "TemplateTail": ["leaf", {}],
        "OptionalType": ["bag", [
            ["global", "NumberKeyword"],
            ["global", "TypeReference"],
        ]],
        "ColonToken": ["leaf", {}],
    },
    "startRule": "SourceFile"
}