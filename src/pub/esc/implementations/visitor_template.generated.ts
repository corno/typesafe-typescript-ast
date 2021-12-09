import * as pr from "pareto-runtime"
import * as api from "../interfaces/typedAST"

export function visit<Annotation>(
    $: api.TSourceFile<Annotation>,
    report: (annotation: Annotation) => void,
): void {
    function _Block(
        $: api.TBlock<Annotation>,
    ) {}
    function _EndOfFileToken(
        $: api.TEndOfFileToken<Annotation>,
    ) {}
    function _ExportDeclaration(
        $: api.TExportDeclaration<Annotation>,
    ) {}
    function _ExpressionStatement(
        $: api.TExpressionStatement<Annotation>,
    ) {}
    function _FunctionDeclaration(
        $: api.TFunctionDeclaration<Annotation>,
    ) {}
    function _Identifier(
        $: api.TIdentifier<Annotation>,
    ) {}
    function _ImportClause(
        $: api.TImportClause<Annotation>,
    ) {}
    function _ImportDeclaration(
        $: api.TImportDeclaration<Annotation>,
    ) {}
    function _InterfaceDeclaration(
        $: api.TInterfaceDeclaration<Annotation>,
    ) {}
    function _ImportSpecifier(
        $: api.TImportSpecifier<Annotation>,
    ) {}
    function _NamespaceImport(
        $: api.TNamespaceImport<Annotation>,
    ) {}
    function _NamedImports(
        $: api.TNamedImports<Annotation>,
    ) {}
    function _Parameter(
        $: api.TParameter<Annotation>,
    ) {}
    function _SourceFile(
        $: api.TSourceFile<Annotation>,
    ) {}
    function _StringLiteral(
        $: api.TStringLiteral<Annotation>,
    ) {}
    function _TypeAliasDeclaration(
        $: api.TTypeAliasDeclaration<Annotation>,
    ) {}
    function _VariableStatement(
        $: api.TVariableStatement<Annotation>,
    ) {}
    return _SourceFile($)
}