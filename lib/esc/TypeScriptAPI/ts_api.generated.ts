import * as pr from "pareto-runtime"

export type CInterfaceDeclaration<Annotation> = number
export type TInterfaceDeclaration<Annotation> = number

export type CEndOfFileToken<Annotation> = number
export type TEndOfFileToken<Annotation> = number

export type CExportDeclaration<Annotation> =
    | ["StringLiteral", TStringLiteral<Annotation>]
export type TExportDeclaration<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CExportDeclaration<Annotation>>
}

export type CImportDeclaration<Annotation> =
    | ["StringLiteral", TStringLiteral<Annotation>]
export type TImportDeclaration<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CImportDeclaration<Annotation>>
}

export type CSourceFile<Annotation> =
    | ["InterfaceDeclaration", TInterfaceDeclaration<Annotation>]
    | ["FunctionDeclaration", TFunctionDeclaration<Annotation>]
    | ["VariableStatement", TVariableStatement<Annotation>]
    | ["EndOfFileToken", TEndOfFileToken<Annotation>]
    | ["ExportDeclaration", TExportDeclaration<Annotation>]
    | ["ImportDeclaration", TImportDeclaration<Annotation>]
    | ["TypeAliasDeclaration", TTypeAliasDeclaration<Annotation>]
    | ["ExpressionStatement", TExpressionStatement<Annotation>]
export type TSourceFile<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CSourceFile<Annotation>>
}

export type CIdentifier<Annotation> = number
export type TIdentifier<Annotation> = number

export type CTypeParameter<Annotation> =
    | ["Identifier", TIdentifier<Annotation>]
export type TTypeParameter<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CTypeParameter<Annotation>>
}

export type CMethodSignature<Annotation> =
    | ["Identifier", TIdentifier<Annotation>]
    | ["Parameter", TParameter<Annotation>]
    | ["VoidKeyword", TVoidKeyword<Annotation>]
    | ["TypeParameter", TTypeParameter<Annotation>]
    | ["ArrayType", TArrayType<Annotation>]
    | ["BooleanKeyword", TBooleanKeyword<Annotation>]
    | ["StringKeyword", TStringKeyword<Annotation>]
    | ["UnionType", TUnionType<Annotation>]
    | ["NumberKeyword", TNumberKeyword<Annotation>]
    | ["TypeReference", TTypeReference<Annotation>]
export type TMethodSignature<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CMethodSignature<Annotation>>
}

export type CNeverKeyword<Annotation> = number
export type TNeverKeyword<Annotation> = number

export type CParameter<Annotation> =
    | ["Identifier", TIdentifier<Annotation>]
    | ["TypeReference", TTypeReference<Annotation>]
    | ["FunctionType", TFunctionType<Annotation>]
    | ["NumberKeyword", TNumberKeyword<Annotation>]
    | ["StringKeyword", TStringKeyword<Annotation>]
    | ["ArrayType", TArrayType<Annotation>]
    | ["AnyKeyword", TAnyKeyword<Annotation>]
    | ["QuestionToken", TQuestionToken<Annotation>]
    | ["NeverKeyword", TNeverKeyword<Annotation>]
    | ["TypeLiteral", TTypeLiteral<Annotation>]
    | ["UnionType", TUnionType<Annotation>]
    | ["BooleanKeyword", TBooleanKeyword<Annotation>]
export type TParameter<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CParameter<Annotation>>
}

export type CQualifiedName<Annotation> =
    | ["Identifier", TIdentifier<Annotation>]
export type TQualifiedName<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CQualifiedName<Annotation>>
}

export type CTypeReference<Annotation> =
    | ["Identifier", TIdentifier<Annotation>]
    | ["TypeReference", TTypeReference<Annotation>]
    | ["QualifiedName", TQualifiedName<Annotation>]
    | ["StringKeyword", TStringKeyword<Annotation>]
    | ["LiteralType", TLiteralType<Annotation>]
    | ["TypeLiteral", TTypeLiteral<Annotation>]
export type TTypeReference<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CTypeReference<Annotation>>
}

export type CVoidKeyword<Annotation> = number
export type TVoidKeyword<Annotation> = number

export type CFunctionType<Annotation> =
    | ["Parameter", TParameter<Annotation>]
    | ["VoidKeyword", TVoidKeyword<Annotation>]
    | ["TypeReference", TTypeReference<Annotation>]
    | ["AnyKeyword", TAnyKeyword<Annotation>]
    | ["UnionType", TUnionType<Annotation>]
    | ["BooleanKeyword", TBooleanKeyword<Annotation>]
    | ["ArrayType", TArrayType<Annotation>]
    | ["StringKeyword", TStringKeyword<Annotation>]
export type TFunctionType<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CFunctionType<Annotation>>
}

export type CNumberKeyword<Annotation> = number
export type TNumberKeyword<Annotation> = number

export type CArrayType<Annotation> =
    | ["TypeReference", TTypeReference<Annotation>]
    | ["StringKeyword", TStringKeyword<Annotation>]
export type TArrayType<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CArrayType<Annotation>>
}

export type CBooleanKeyword<Annotation> = number
export type TBooleanKeyword<Annotation> = number

export type CPropertySignature<Annotation> =
    | ["Identifier", TIdentifier<Annotation>]
    | ["NumberKeyword", TNumberKeyword<Annotation>]
    | ["ReadonlyKeyword", TReadonlyKeyword<Annotation>]
    | ["StringKeyword", TStringKeyword<Annotation>]
    | ["FunctionType", TFunctionType<Annotation>]
    | ["TypeReference", TTypeReference<Annotation>]
    | ["QuestionToken", TQuestionToken<Annotation>]
    | ["BooleanKeyword", TBooleanKeyword<Annotation>]
    | ["ArrayType", TArrayType<Annotation>]
    | ["UnionType", TUnionType<Annotation>]
    | ["LiteralType", TLiteralType<Annotation>]
    | ["TypeLiteral", TTypeLiteral<Annotation>]
    | ["StringLiteral", TStringLiteral<Annotation>]
export type TPropertySignature<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CPropertySignature<Annotation>>
}

export type CStringKeyword<Annotation> = number
export type TStringKeyword<Annotation> = number

export type CUndefinedKeyword<Annotation> = number
export type TUndefinedKeyword<Annotation> = number

export type CParenthesizedType<Annotation> =
    | ["FunctionType", TFunctionType<Annotation>]
export type TParenthesizedType<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CParenthesizedType<Annotation>>
}

export type CUnionType<Annotation> =
    | ["UndefinedKeyword", TUndefinedKeyword<Annotation>]
    | ["TypeReference", TTypeReference<Annotation>]
    | ["TupleType", TTupleType<Annotation>]
    | ["LiteralType", TLiteralType<Annotation>]
    | ["StringKeyword", TStringKeyword<Annotation>]
    | ["BooleanKeyword", TBooleanKeyword<Annotation>]
    | ["ArrayType", TArrayType<Annotation>]
    | ["NumberKeyword", TNumberKeyword<Annotation>]
    | ["ParenthesizedType", TParenthesizedType<Annotation>]
export type TUnionType<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CUnionType<Annotation>>
}

export type CReadonlyKeyword<Annotation> = number
export type TReadonlyKeyword<Annotation> = number

export type CFunctionDeclaration<Annotation> =
    | ["DeclareKeyword", TDeclareKeyword<Annotation>]
    | ["Identifier", TIdentifier<Annotation>]
    | ["Parameter", TParameter<Annotation>]
    | ["BooleanKeyword", TBooleanKeyword<Annotation>]
    | ["TypeParameter", TTypeParameter<Annotation>]
    | ["TypeReference", TTypeReference<Annotation>]
    | ["Block", TBlock<Annotation>]
    | ["ExportKeyword", TExportKeyword<Annotation>]
    | ["VoidKeyword", TVoidKeyword<Annotation>]
    | ["UnionType", TUnionType<Annotation>]
    | ["StringKeyword", TStringKeyword<Annotation>]
    | ["ArrayType", TArrayType<Annotation>]
export type TFunctionDeclaration<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CFunctionDeclaration<Annotation>>
}

export type CDeclareKeyword<Annotation> = number
export type TDeclareKeyword<Annotation> = number

export type CAnyKeyword<Annotation> = number
export type TAnyKeyword<Annotation> = number

export type CQuestionToken<Annotation> = number
export type TQuestionToken<Annotation> = number

export type CVariableStatement<Annotation> =
    | ["DeclareKeyword", TDeclareKeyword<Annotation>]
    | ["VariableDeclarationList", TVariableDeclarationList<Annotation>]
    | ["ExportKeyword", TExportKeyword<Annotation>]
export type TVariableStatement<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CVariableStatement<Annotation>>
}

export type CVariableDeclarationList<Annotation> =
    | ["VariableDeclaration", TVariableDeclaration<Annotation>]
export type TVariableDeclarationList<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CVariableDeclarationList<Annotation>>
}

export type CVariableDeclaration<Annotation> =
    | ["Identifier", TIdentifier<Annotation>]
    | ["TypeReference", TTypeReference<Annotation>]
    | ["NumericLiteral", TNumericLiteral<Annotation>]
    | ["FalseKeyword", TFalseKeyword<Annotation>]
    | ["CallExpression", TCallExpression<Annotation>]
    | ["StringLiteral", TStringLiteral<Annotation>]
    | ["ArrayType", TArrayType<Annotation>]
    | ["ArrayLiteralExpression", TArrayLiteralExpression<Annotation>]
    | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
    | ["ElementAccessExpression", TElementAccessExpression<Annotation>]
    | ["ArrowFunction", TArrowFunction<Annotation>]
    | ["ObjectLiteralExpression", TObjectLiteralExpression<Annotation>]
    | ["PrefixUnaryExpression", TPrefixUnaryExpression<Annotation>]
    | ["BinaryExpression", TBinaryExpression<Annotation>]
    | ["ConditionalExpression", TConditionalExpression<Annotation>]
    | ["NoSubstitutionTemplateLiteral", TNoSubstitutionTemplateLiteral<Annotation>]
    | ["ParenthesizedExpression", TParenthesizedExpression<Annotation>]
    | ["NumberKeyword", TNumberKeyword<Annotation>]
    | ["UnionType", TUnionType<Annotation>]
    | ["NullKeyword", TNullKeyword<Annotation>]
    | ["TypeLiteral", TTypeLiteral<Annotation>]
export type TVariableDeclaration<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CVariableDeclaration<Annotation>>
}

export type CStringLiteral<Annotation> = number
export type TStringLiteral<Annotation> = number

export type CNewExpression<Annotation> =
    | ["Identifier", TIdentifier<Annotation>]
    | ["StringLiteral", TStringLiteral<Annotation>]
    | ["CallExpression", TCallExpression<Annotation>]
    | ["TemplateExpression", TTemplateExpression<Annotation>]
    | ["NoSubstitutionTemplateLiteral", TNoSubstitutionTemplateLiteral<Annotation>]
export type TNewExpression<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CNewExpression<Annotation>>
}

export type CThrowStatement<Annotation> =
    | ["NewExpression", TNewExpression<Annotation>]
export type TThrowStatement<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CThrowStatement<Annotation>>
}

export type CCaseClause<Annotation> =
    | ["StringLiteral", TStringLiteral<Annotation>]
    | ["ExpressionStatement", TExpressionStatement<Annotation>]
    | ["BreakStatement", TBreakStatement<Annotation>]
    | ["Block", TBlock<Annotation>]
    | ["ReturnStatement", TReturnStatement<Annotation>]
    | ["VariableStatement", TVariableStatement<Annotation>]
    | ["IfStatement", TIfStatement<Annotation>]
    | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
export type TCaseClause<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CCaseClause<Annotation>>
}

export type CDefaultClause<Annotation> =
    | ["ExpressionStatement", TExpressionStatement<Annotation>]
    | ["ReturnStatement", TReturnStatement<Annotation>]
    | ["Block", TBlock<Annotation>]
export type TDefaultClause<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CDefaultClause<Annotation>>
}

export type CCaseBlock<Annotation> =
    | ["CaseClause", TCaseClause<Annotation>]
    | ["DefaultClause", TDefaultClause<Annotation>]
export type TCaseBlock<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CCaseBlock<Annotation>>
}

export type CSwitchStatement<Annotation> =
    | ["ElementAccessExpression", TElementAccessExpression<Annotation>]
    | ["CaseBlock", TCaseBlock<Annotation>]
    | ["Identifier", TIdentifier<Annotation>]
    | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
export type TSwitchStatement<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CSwitchStatement<Annotation>>
}

export type CCatchClause<Annotation> =
    | ["VariableDeclaration", TVariableDeclaration<Annotation>]
    | ["Block", TBlock<Annotation>]
export type TCatchClause<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CCatchClause<Annotation>>
}

export type CTryStatement<Annotation> =
    | ["Block", TBlock<Annotation>]
    | ["CatchClause", TCatchClause<Annotation>]
export type TTryStatement<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CTryStatement<Annotation>>
}

export type CForStatement<Annotation> =
    | ["VariableDeclarationList", TVariableDeclarationList<Annotation>]
    | ["BinaryExpression", TBinaryExpression<Annotation>]
    | ["Block", TBlock<Annotation>]
export type TForStatement<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CForStatement<Annotation>>
}

export type CLabeledStatement<Annotation> =
    | ["Identifier", TIdentifier<Annotation>]
    | ["WhileStatement", TWhileStatement<Annotation>]
export type TLabeledStatement<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CLabeledStatement<Annotation>>
}

export type CBlock<Annotation> =
    | ["ThrowStatement", TThrowStatement<Annotation>]
    | ["ReturnStatement", TReturnStatement<Annotation>]
    | ["VariableStatement", TVariableStatement<Annotation>]
    | ["FunctionDeclaration", TFunctionDeclaration<Annotation>]
    | ["IfStatement", TIfStatement<Annotation>]
    | ["ExpressionStatement", TExpressionStatement<Annotation>]
    | ["SwitchStatement", TSwitchStatement<Annotation>]
    | ["TryStatement", TTryStatement<Annotation>]
    | ["BreakStatement", TBreakStatement<Annotation>]
    | ["TypeAliasDeclaration", TTypeAliasDeclaration<Annotation>]
    | ["ForStatement", TForStatement<Annotation>]
    | ["WhileStatement", TWhileStatement<Annotation>]
    | ["LabeledStatement", TLabeledStatement<Annotation>]
export type TBlock<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CBlock<Annotation>>
}

export type CReturnStatement<Annotation> =
    | ["CallExpression", TCallExpression<Annotation>]
    | ["ObjectLiteralExpression", TObjectLiteralExpression<Annotation>]
    | ["TemplateExpression", TTemplateExpression<Annotation>]
    | ["Identifier", TIdentifier<Annotation>]
    | ["ArrayLiteralExpression", TArrayLiteralExpression<Annotation>]
    | ["NullKeyword", TNullKeyword<Annotation>]
    | ["ArrowFunction", TArrowFunction<Annotation>]
    | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
    | ["BinaryExpression", TBinaryExpression<Annotation>]
    | ["PrefixUnaryExpression", TPrefixUnaryExpression<Annotation>]
    | ["ConditionalExpression", TConditionalExpression<Annotation>]
    | ["ElementAccessExpression", TElementAccessExpression<Annotation>]
    | ["NoSubstitutionTemplateLiteral", TNoSubstitutionTemplateLiteral<Annotation>]
    | ["StringLiteral", TStringLiteral<Annotation>]
export type TReturnStatement<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CReturnStatement<Annotation>>
}

export type CCallExpression<Annotation> =
    | ["Identifier", TIdentifier<Annotation>]
    | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
    | ["CallExpression", TCallExpression<Annotation>]
    | ["ArrowFunction", TArrowFunction<Annotation>]
    | ["ElementAccessExpression", TElementAccessExpression<Annotation>]
    | ["ArrayLiteralExpression", TArrayLiteralExpression<Annotation>]
    | ["NullKeyword", TNullKeyword<Annotation>]
    | ["ObjectLiteralExpression", TObjectLiteralExpression<Annotation>]
    | ["StringLiteral", TStringLiteral<Annotation>]
    | ["BinaryExpression", TBinaryExpression<Annotation>]
    | ["TypeReference", TTypeReference<Annotation>]
    | ["TemplateExpression", TTemplateExpression<Annotation>]
    | ["ConditionalExpression", TConditionalExpression<Annotation>]
    | ["NoSubstitutionTemplateLiteral", TNoSubstitutionTemplateLiteral<Annotation>]
    | ["ParenthesizedExpression", TParenthesizedExpression<Annotation>]
    | ["NumericLiteral", TNumericLiteral<Annotation>]
    | ["TrueKeyword", TTrueKeyword<Annotation>]
    | ["FalseKeyword", TFalseKeyword<Annotation>]
export type TCallExpression<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CCallExpression<Annotation>>
}

export type CExportKeyword<Annotation> = number
export type TExportKeyword<Annotation> = number

export type CNumericLiteral<Annotation> = number
export type TNumericLiteral<Annotation> = number

export type CFalseKeyword<Annotation> = number
export type TFalseKeyword<Annotation> = number

export type CIfStatement<Annotation> =
    | ["BinaryExpression", TBinaryExpression<Annotation>]
    | ["Block", TBlock<Annotation>]
    | ["Identifier", TIdentifier<Annotation>]
    | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
    | ["PrefixUnaryExpression", TPrefixUnaryExpression<Annotation>]
    | ["ReturnStatement", TReturnStatement<Annotation>]
    | ["CallExpression", TCallExpression<Annotation>]
    | ["IfStatement", TIfStatement<Annotation>]
export type TIfStatement<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CIfStatement<Annotation>>
}

export type CEqualsEqualsEqualsToken<Annotation> = number
export type TEqualsEqualsEqualsToken<Annotation> = number

export type CAmpersandAmpersandToken<Annotation> = number
export type TAmpersandAmpersandToken<Annotation> = number

export type CPlusEqualsToken<Annotation> = number
export type TPlusEqualsToken<Annotation> = number

export type CMinusEqualsToken<Annotation> = number
export type TMinusEqualsToken<Annotation> = number

export type CEqualsToken<Annotation> = number
export type TEqualsToken<Annotation> = number

export type CExclamationEqualsEqualsToken<Annotation> = number
export type TExclamationEqualsEqualsToken<Annotation> = number

export type CPlusToken<Annotation> = number
export type TPlusToken<Annotation> = number

export type CMinusToken<Annotation> = number
export type TMinusToken<Annotation> = number

export type CGreaterThanToken<Annotation> = number
export type TGreaterThanToken<Annotation> = number

export type CLessThanToken<Annotation> = number
export type TLessThanToken<Annotation> = number

export type CBarBarToken<Annotation> = number
export type TBarBarToken<Annotation> = number

export type CBinaryExpression<Annotation> =
    | ["BinaryExpression", TBinaryExpression<Annotation>]
    | ["Identifier", TIdentifier<Annotation>]
    | ["EqualsEqualsEqualsToken", TEqualsEqualsEqualsToken<Annotation>]
    | ["NumericLiteral", TNumericLiteral<Annotation>]
    | ["AmpersandAmpersandToken", TAmpersandAmpersandToken<Annotation>]
    | ["PlusEqualsToken", TPlusEqualsToken<Annotation>]
    | ["MinusEqualsToken", TMinusEqualsToken<Annotation>]
    | ["EqualsToken", TEqualsToken<Annotation>]
    | ["TrueKeyword", TTrueKeyword<Annotation>]
    | ["ElementAccessExpression", TElementAccessExpression<Annotation>]
    | ["ExclamationEqualsEqualsToken", TExclamationEqualsEqualsToken<Annotation>]
    | ["StringLiteral", TStringLiteral<Annotation>]
    | ["PlusToken", TPlusToken<Annotation>]
    | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
    | ["NullKeyword", TNullKeyword<Annotation>]
    | ["ParenthesizedExpression", TParenthesizedExpression<Annotation>]
    | ["ObjectLiteralExpression", TObjectLiteralExpression<Annotation>]
    | ["MinusToken", TMinusToken<Annotation>]
    | ["GreaterThanToken", TGreaterThanToken<Annotation>]
    | ["CallExpression", TCallExpression<Annotation>]
    | ["FalseKeyword", TFalseKeyword<Annotation>]
    | ["LessThanToken", TLessThanToken<Annotation>]
    | ["BarBarToken", TBarBarToken<Annotation>]
    | ["ArrayLiteralExpression", TArrayLiteralExpression<Annotation>]
export type TBinaryExpression<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CBinaryExpression<Annotation>>
}

export type CPostfixUnaryExpression<Annotation> =
    | ["Identifier", TIdentifier<Annotation>]
    | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
export type TPostfixUnaryExpression<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CPostfixUnaryExpression<Annotation>>
}

export type CExpressionStatement<Annotation> =
    | ["CallExpression", TCallExpression<Annotation>]
    | ["BinaryExpression", TBinaryExpression<Annotation>]
    | ["PostfixUnaryExpression", TPostfixUnaryExpression<Annotation>]
export type TExpressionStatement<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CExpressionStatement<Annotation>>
}

export type CPropertyAssignment<Annotation> =
    | ["Identifier", TIdentifier<Annotation>]
    | ["ArrowFunction", TArrowFunction<Annotation>]
    | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
    | ["StringLiteral", TStringLiteral<Annotation>]
    | ["ElementAccessExpression", TElementAccessExpression<Annotation>]
    | ["ObjectLiteralExpression", TObjectLiteralExpression<Annotation>]
    | ["CallExpression", TCallExpression<Annotation>]
    | ["NullKeyword", TNullKeyword<Annotation>]
    | ["PrefixUnaryExpression", TPrefixUnaryExpression<Annotation>]
    | ["FalseKeyword", TFalseKeyword<Annotation>]
    | ["TemplateExpression", TTemplateExpression<Annotation>]
    | ["TrueKeyword", TTrueKeyword<Annotation>]
    | ["ConditionalExpression", TConditionalExpression<Annotation>]
    | ["ArrayLiteralExpression", TArrayLiteralExpression<Annotation>]
    | ["NoSubstitutionTemplateLiteral", TNoSubstitutionTemplateLiteral<Annotation>]
    | ["BinaryExpression", TBinaryExpression<Annotation>]
    | ["ParenthesizedExpression", TParenthesizedExpression<Annotation>]
    | ["NumericLiteral", TNumericLiteral<Annotation>]
export type TPropertyAssignment<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CPropertyAssignment<Annotation>>
}

export type CObjectLiteralExpression<Annotation> =
    | ["PropertyAssignment", TPropertyAssignment<Annotation>]
export type TObjectLiteralExpression<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CObjectLiteralExpression<Annotation>>
}

export type CEqualsGreaterThanToken<Annotation> = number
export type TEqualsGreaterThanToken<Annotation> = number

export type CArrowFunction<Annotation> =
    | ["Parameter", TParameter<Annotation>]
    | ["EqualsGreaterThanToken", TEqualsGreaterThanToken<Annotation>]
    | ["Block", TBlock<Annotation>]
    | ["Identifier", TIdentifier<Annotation>]
    | ["CallExpression", TCallExpression<Annotation>]
    | ["BinaryExpression", TBinaryExpression<Annotation>]
    | ["StringKeyword", TStringKeyword<Annotation>]
    | ["TypeReference", TTypeReference<Annotation>]
    | ["VoidKeyword", TVoidKeyword<Annotation>]
    | ["UnionType", TUnionType<Annotation>]
    | ["TemplateExpression", TTemplateExpression<Annotation>]
    | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
export type TArrowFunction<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CArrowFunction<Annotation>>
}

export type CPropertyAccessExpression<Annotation> =
    | ["Identifier", TIdentifier<Annotation>]
    | ["CallExpression", TCallExpression<Annotation>]
    | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
    | ["ElementAccessExpression", TElementAccessExpression<Annotation>]
export type TPropertyAccessExpression<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CPropertyAccessExpression<Annotation>>
}

export type CElementAccessExpression<Annotation> =
    | ["Identifier", TIdentifier<Annotation>]
    | ["NumericLiteral", TNumericLiteral<Annotation>]
    | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
    | ["CallExpression", TCallExpression<Annotation>]
    | ["StringLiteral", TStringLiteral<Annotation>]
    | ["ElementAccessExpression", TElementAccessExpression<Annotation>]
export type TElementAccessExpression<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CElementAccessExpression<Annotation>>
}

export type CArrayLiteralExpression<Annotation> =
    | ["StringLiteral", TStringLiteral<Annotation>]
    | ["ObjectLiteralExpression", TObjectLiteralExpression<Annotation>]
    | ["Identifier", TIdentifier<Annotation>]
    | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
    | ["CallExpression", TCallExpression<Annotation>]
    | ["BinaryExpression", TBinaryExpression<Annotation>]
    | ["NullKeyword", TNullKeyword<Annotation>]
    | ["ConditionalExpression", TConditionalExpression<Annotation>]
    | ["TemplateExpression", TTemplateExpression<Annotation>]
    | ["ArrayLiteralExpression", TArrayLiteralExpression<Annotation>]
    | ["NumericLiteral", TNumericLiteral<Annotation>]
export type TArrayLiteralExpression<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CArrayLiteralExpression<Annotation>>
}

export type CBreakStatement<Annotation> =
    | ["Identifier", TIdentifier<Annotation>]
export type TBreakStatement<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CBreakStatement<Annotation>>
}

export type CNullKeyword<Annotation> = number
export type TNullKeyword<Annotation> = number

export type CTrueKeyword<Annotation> = number
export type TTrueKeyword<Annotation> = number

export type CTypeAliasDeclaration<Annotation> =
    | ["ExportKeyword", TExportKeyword<Annotation>]
    | ["Identifier", TIdentifier<Annotation>]
    | ["TypeLiteral", TTypeLiteral<Annotation>]
    | ["TypeParameter", TTypeParameter<Annotation>]
    | ["TupleType", TTupleType<Annotation>]
    | ["UnionType", TUnionType<Annotation>]
    | ["ArrayType", TArrayType<Annotation>]
    | ["TypeReference", TTypeReference<Annotation>]
    | ["FunctionType", TFunctionType<Annotation>]
export type TTypeAliasDeclaration<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CTypeAliasDeclaration<Annotation>>
}

export type CIndexSignature<Annotation> = number
export type TIndexSignature<Annotation> = number

export type CTypeLiteral<Annotation> =
    | ["PropertySignature", TPropertySignature<Annotation>]
    | ["MethodSignature", TMethodSignature<Annotation>]
    | ["IndexSignature", TIndexSignature<Annotation>]
export type TTypeLiteral<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CTypeLiteral<Annotation>>
}

export type CTemplateHead<Annotation> = number
export type TTemplateHead<Annotation> = number

export type CTemplateMiddle<Annotation> = number
export type TTemplateMiddle<Annotation> = number

export type CTemplateTail<Annotation> = number
export type TTemplateTail<Annotation> = number

export type CTemplateSpan<Annotation> =
    | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
    | ["TemplateMiddle", TTemplateMiddle<Annotation>]
    | ["TemplateTail", TTemplateTail<Annotation>]
    | ["Identifier", TIdentifier<Annotation>]
    | ["CallExpression", TCallExpression<Annotation>]
    | ["ConditionalExpression", TConditionalExpression<Annotation>]
    | ["ElementAccessExpression", TElementAccessExpression<Annotation>]
    | ["BinaryExpression", TBinaryExpression<Annotation>]
export type TTemplateSpan<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CTemplateSpan<Annotation>>
}

export type CTemplateExpression<Annotation> =
    | ["TemplateHead", TTemplateHead<Annotation>]
    | ["TemplateSpan", TTemplateSpan<Annotation>]
export type TTemplateExpression<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CTemplateExpression<Annotation>>
}

export type CPrefixUnaryExpression<Annotation> =
    | ["Identifier", TIdentifier<Annotation>]
    | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
    | ["CallExpression", TCallExpression<Annotation>]
    | ["NumericLiteral", TNumericLiteral<Annotation>]
export type TPrefixUnaryExpression<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CPrefixUnaryExpression<Annotation>>
}

export type COptionalType<Annotation> =
    | ["NumberKeyword", TNumberKeyword<Annotation>]
    | ["TypeReference", TTypeReference<Annotation>]
export type TOptionalType<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<COptionalType<Annotation>>
}

export type CTupleType<Annotation> =
    | ["OptionalType", TOptionalType<Annotation>]
    | ["LiteralType", TLiteralType<Annotation>]
    | ["StringKeyword", TStringKeyword<Annotation>]
    | ["UnionType", TUnionType<Annotation>]
    | ["TypeReference", TTypeReference<Annotation>]
    | ["TypeLiteral", TTypeLiteral<Annotation>]
    | ["ArrayType", TArrayType<Annotation>]
export type TTupleType<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CTupleType<Annotation>>
}

export type CLiteralType<Annotation> =
    | ["StringLiteral", TStringLiteral<Annotation>]
    | ["NullKeyword", TNullKeyword<Annotation>]
export type TLiteralType<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CLiteralType<Annotation>>
}

export type CColonToken<Annotation> = number
export type TColonToken<Annotation> = number

export type CConditionalExpression<Annotation> =
    | ["BinaryExpression", TBinaryExpression<Annotation>]
    | ["QuestionToken", TQuestionToken<Annotation>]
    | ["NullKeyword", TNullKeyword<Annotation>]
    | ["ColonToken", TColonToken<Annotation>]
    | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
    | ["StringLiteral", TStringLiteral<Annotation>]
    | ["TemplateExpression", TTemplateExpression<Annotation>]
    | ["CallExpression", TCallExpression<Annotation>]
    | ["NoSubstitutionTemplateLiteral", TNoSubstitutionTemplateLiteral<Annotation>]
    | ["ConditionalExpression", TConditionalExpression<Annotation>]
    | ["Identifier", TIdentifier<Annotation>]
    | ["ObjectLiteralExpression", TObjectLiteralExpression<Annotation>]
    | ["ArrayLiteralExpression", TArrayLiteralExpression<Annotation>]
    | ["ElementAccessExpression", TElementAccessExpression<Annotation>]
    | ["ArrowFunction", TArrowFunction<Annotation>]
    | ["NumericLiteral", TNumericLiteral<Annotation>]
export type TConditionalExpression<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CConditionalExpression<Annotation>>
}

export type CParenthesizedExpression<Annotation> =
    | ["ConditionalExpression", TConditionalExpression<Annotation>]
    | ["BinaryExpression", TBinaryExpression<Annotation>]
    | ["ArrowFunction", TArrowFunction<Annotation>]
export type TParenthesizedExpression<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CParenthesizedExpression<Annotation>>
}

export type CNoSubstitutionTemplateLiteral<Annotation> = number
export type TNoSubstitutionTemplateLiteral<Annotation> = number

export type CWhileStatement<Annotation> =
    | ["TrueKeyword", TTrueKeyword<Annotation>]
    | ["Block", TBlock<Annotation>]
export type TWhileStatement<Annotation> = {
    readonly annotation: Annotation
    readonly children: pr.IReadonlyArray<CWhileStatement<Annotation>>
}
export type Root<Annotation> = TSourceFile<Annotation>