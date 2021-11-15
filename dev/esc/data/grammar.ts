import * as gramm from "../interfaces/Grammar";

export const grammar: gramm.Grammar = {
    startRule: "SourceFile",
    "tokenRules": {
        "SourceFile": ["bag", [
            ["local", ["InterfaceDeclaration", ["leaf", [

                // "Identifier",
                // "TypeParameter",
                // "MethodSignature",
                // "PropertySignature",
                // "IndexSignature",
                // "ConstructSignature",
                // "ExportKeyword"

            ]]]],
            ["global", "FunctionDeclaration"],
            ["global", "VariableStatement"],
            ["local", ["EndOfFileToken", ["leaf", {}]]],
            ["local", ["ExportDeclaration", ["bag", [
                ["global", "StringLiteral"]
            ]]]],
            ["local", ["ImportDeclaration", ["bag", [
                ["global", "StringLiteral"]
            ]]]],
            ["global", "TypeAliasDeclaration"],
            ["global", "ExpressionStatement"],


            //   "ImportDeclaration": [
            //     "ImportClause",
            //     "StringLiteral"
            // ],
            // "ImportClause": [
            //     "NamespaceImport",
            //     "NamedImports"
            // ],
            // "NamespaceImport": [
            //     "Identifier"
            // ],
            // "NamedImports": [
            //     "ImportSpecifier"
            // ],
            // "ImportSpecifier": [
            //     "Identifier"
            // ],

        ]],
        "Identifier": ["leaf", {}],
        "TypeParameter": ["bag", [
            ["global", "Identifier"]
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
            ["global", "TypeReference"]
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
            ["local", ["NeverKeyword", ["leaf", {}]]],
            ["global", "TypeLiteral"],
            ["global", "UnionType"],
            ["global", "BooleanKeyword"]
        ]],
        "TypeReference": ["bag", [
            ["global", "Identifier"],
            ["global", "TypeReference"],
            ["local", ["QualifiedName", ["bag", [
                ["global", "Identifier"]
            ]]]],
            ["global", "StringKeyword"],
            ["global", "LiteralType"],
            ["global", "TypeLiteral"]
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
            ["global", "StringKeyword"]
        ]],
        "NumberKeyword": ["leaf", {}],
        "ArrayType": ["bag", [
            ["global", "TypeReference"],
            ["global", "StringKeyword"]
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
            ["global", "StringLiteral"]
        ]],
        "StringKeyword": ["leaf", {}],
        "UnionType": ["bag", [
            ["local", ["UndefinedKeyword", ["leaf", {}]]
            ],
            ["global", "TypeReference"],
            ["global", "TupleType"],
            ["global", "LiteralType"],
            ["global", "StringKeyword"],
            ["global", "BooleanKeyword"],
            ["global", "ArrayType"],
            ["global", "NumberKeyword"],
            ["local", ["ParenthesizedType", ["bag", [
                ["global", "FunctionType"]
            ]]]]
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
            ["global", "ArrayType"]
        ]],
        "DeclareKeyword": ["leaf", {}],
        "AnyKeyword": ["leaf", {}],
        "QuestionToken": ["leaf", {}],
        "VariableStatement": ["bag", [
            ["global", "DeclareKeyword"],
            ["global", "VariableDeclarationList"],
            ["global", "ExportKeyword"]
        ]],
        "VariableDeclarationList": ["bag", [
            ["global", "VariableDeclaration"]
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
            ["global", "TypeLiteral"]
        ]],
        "StringLiteral": ["leaf", {}],
        "Block": ["bag", [
            ["local", ["ThrowStatement", ["bag", [
                ["local", ["NewExpression", ["bag", [
                    ["global", "Identifier"],
                    ["global", "StringLiteral"],
                    ["global", "CallExpression"],
                    ["global", "TemplateExpression"],
                    ["global", "NoSubstitutionTemplateLiteral"]
                ]]]]
            ]]]],
            ["global", "ReturnStatement"],
            ["global", "VariableStatement"],
            ["global", "FunctionDeclaration"],
            ["global", "IfStatement"],
            ["global", "ExpressionStatement"],
            ["local", ["SwitchStatement", ["bag", [
                ["global", "ElementAccessExpression"],
                ["local", ["CaseBlock", ["bag", [
                    ["local", ["CaseClause", ["bag", [
                        ["global", "StringLiteral"],
                        ["global", "ExpressionStatement"],
                        ["global", "BreakStatement"],
                        ["global", "Block"],
                        ["global", "ReturnStatement"],
                        ["global", "VariableStatement"],
                        ["global", "IfStatement"],
                        ["global", "PropertyAccessExpression"]
                    ]]]],
                    ["local", ["DefaultClause", ["bag", [
                        ["global", "ExpressionStatement"],
                        ["global", "ReturnStatement"],
                        ["global", "Block"]
                    ]]]]
                ]]]],
                ["global", "Identifier"],
                ["global", "PropertyAccessExpression"]
            ]]]],
            ["local", ["TryStatement", ["bag", [
                ["global", "Block"],
                ["local", ["CatchClause", ["bag", [
                    ["global", "VariableDeclaration"],
                    ["global", "Block"]
                ]]]]
            ]]]],
            ["global", "BreakStatement"],
            ["global", "TypeAliasDeclaration"],
            ["local", ["ForStatement", ["bag", [
                ["global", "VariableDeclarationList"],
                ["global", "BinaryExpression"],
                ["global", "Block"]
            ]]]],
            ["global", "WhileStatement"],
            ["local", ["LabeledStatement", ["bag", [
                ["global", "Identifier"],
                ["global", "WhileStatement"]
            ]]]]
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
            ["global", "StringLiteral"]
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
            ["global", "FalseKeyword"]
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
            ["global", "IfStatement"]
        ]],
        "BinaryExpression": ["bag", [
            ["global", "BinaryExpression"],
            ["global", "Identifier"],
            ["local", ["EqualsEqualsEqualsToken", ["leaf", {}]]],
            ["global", "NumericLiteral"],
            ["local", ["AmpersandAmpersandToken", ["leaf", {}]]],
            ["local", ["PlusEqualsToken", ["leaf", {}]]],
            ["local", ["MinusEqualsToken", ["leaf", {}]]],
            ["local", ["EqualsToken", ["leaf", {}]]],
            ["global", "TrueKeyword"],
            ["global", "ElementAccessExpression"],
            ["local", ["ExclamationEqualsEqualsToken", ["leaf", {}]]],
            ["global", "StringLiteral"],
            ["local", ["PlusToken", ["leaf", {}]]],
            ["global", "PropertyAccessExpression"],
            ["global", "NullKeyword"],
            ["global", "ParenthesizedExpression"],
            ["global", "ObjectLiteralExpression"],
            ["local", ["MinusToken", ["leaf", {}]]],
            ["local", ["GreaterThanToken", ["leaf", {}]]],
            ["global", "CallExpression"],
            ["global", "FalseKeyword"],
            ["local", ["LessThanToken", ["leaf", {}]]],
            ["local", ["BarBarToken", ["leaf", {}]]],
            ["global", "ArrayLiteralExpression"]
        ]],
        "ExpressionStatement": ["bag", [
            ["global", "CallExpression"],
            ["global", "BinaryExpression"],
            ["local", ["PostfixUnaryExpression", ["bag", [
                ["global", "Identifier"],
                ["global", "PropertyAccessExpression"]
            ]]]]
        ]],
        "ObjectLiteralExpression": ["bag", [
            ["local", ["PropertyAssignment", ["bag", [
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
                ["global", "NumericLiteral"]
            ]]]]
        ]],
        "ArrowFunction": ["bag", [
            ["global", "Parameter"],
            ["local", ["EqualsGreaterThanToken", ["leaf", {}]]],
            ["global", "Block"],
            ["global", "Identifier"],
            ["global", "CallExpression"],
            ["global", "BinaryExpression"],
            ["global", "StringKeyword"],
            ["global", "TypeReference"],
            ["global", "VoidKeyword"],
            ["global", "UnionType"],
            ["global", "TemplateExpression"],
            ["global", "PropertyAccessExpression"]
        ]],
        "PropertyAccessExpression": ["bag", [
            ["global", "Identifier"],
            ["global", "CallExpression"],
            ["global", "PropertyAccessExpression"],
            ["global", "ElementAccessExpression"]
        ]],
        "ElementAccessExpression": ["bag", [
            ["global", "Identifier"],
            ["global", "NumericLiteral"],
            ["global", "PropertyAccessExpression"],
            ["global", "CallExpression"],
            ["global", "StringLiteral"],
            ["global", "ElementAccessExpression"]
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
            ["global", "NumericLiteral"]
        ]],
        "BreakStatement": ["bag", [
            ["global", "Identifier"]
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
            ["global", "FunctionType"]
        ]],
        "TypeLiteral": ["bag", [
            ["global", "PropertySignature"],
            ["global", "MethodSignature"],
            ["local", ["IndexSignature", ["leaf", {}]]],
        ]],
        "TemplateExpression": ["bag", [
            ["local", ["TemplateHead", ["leaf", {}]]],
            ["local", ["TemplateSpan", ["bag", [
                ["global", "PropertyAccessExpression"],
                ["local", ["TemplateMiddle", ["leaf", {}]]],
                ["local", ["TemplateTail", ["leaf", {}]]],
                ["global", "Identifier"],
                ["global", "CallExpression"],
                ["global", "ConditionalExpression"],
                ["global", "ElementAccessExpression"],
                ["global", "BinaryExpression"]
            ]]]]
        ]],
        "PrefixUnaryExpression": ["bag", [
            ["global", "Identifier"],
            ["global", "PropertyAccessExpression"],
            ["global", "CallExpression"],
            ["global", "NumericLiteral"]
        ]],
        "TupleType": ["bag", [
            ["local", ["OptionalType", ["bag", [
                ["global", "NumberKeyword"],
                ["global", "TypeReference"]
            ]]]],
            ["global", "LiteralType"],
            ["global", "StringKeyword"],
            ["global", "UnionType"],
            ["global", "TypeReference"],
            ["global", "TypeLiteral"],
            ["global", "ArrayType"]
        ]],
        "LiteralType": ["bag", [
            ["global", "StringLiteral"],
            ["global", "NullKeyword"]
        ]],
        "ConditionalExpression": ["bag", [
            ["global", "BinaryExpression"],
            ["global", "QuestionToken"],
            ["global", "NullKeyword"],
            ["local", ["ColonToken", ["leaf", {}]]],
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
            ["global", "NumericLiteral"]
        ]],
        "ParenthesizedExpression": ["bag", [
            ["global", "ConditionalExpression"],
            ["global", "BinaryExpression"],
            ["global", "ArrowFunction"]
        ]],
        "NoSubstitutionTemplateLiteral": ["leaf", {}],
        "WhileStatement": ["bag", [
            ["global", "TrueKeyword"],
            ["global", "Block"]
        ]]
    }
}
