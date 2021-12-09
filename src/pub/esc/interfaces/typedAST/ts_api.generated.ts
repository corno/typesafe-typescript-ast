import * as pr from "pareto-runtime"

export type TBlock<Annotation> = {}

export type TEndOfFileToken<Annotation> = {}

export type TExportDeclaration<Annotation> = {}

export type TExpressionStatement<Annotation> = {}

export type TFunctionDeclaration<Annotation> = {
    readonly _name: TIdentifier<Annotation>
    readonly _block: TBlock<Annotation>
}

export type TIdentifier<Annotation> = {}

export type TImportClause<Annotation> = {
    readonly _type:
        | ["NamespaceImport", {
            readonly _A: TNamespaceImport<Annotation>
        }]
        | ["NamedImports", {
            readonly _A: TNamedImports<Annotation>
        }]
}

export type TImportDeclaration<Annotation> = {
    readonly _type:
        | ["ExportDeclaration", {
            readonly _A: TImportClause<Annotation>
        }]
    readonly _file: TStringLiteral<Annotation>
}

export type TInterfaceDeclaration<Annotation> = {}

export type TImportSpecifier<Annotation> = {}

export type TNamespaceImport<Annotation> = {
    readonly _name: TIdentifier<Annotation>
}

export type TNamedImports<Annotation> = {
    readonly _A: TImportSpecifier<Annotation>
}

export type TParameter<Annotation> = {}

export type TSourceFile<Annotation> = {
    readonly _globals: {
        readonly _type:
            | ["ExportDeclaration", {
                readonly _A: TExportDeclaration<Annotation>
            }]
            | ["ExpressionStatement", {
                readonly _A: TExpressionStatement<Annotation>
            }]
            | ["FunctionDeclaration", {
                readonly _A: TFunctionDeclaration<Annotation>
            }]
            | ["ImportDeclaration", {
                readonly _A: TImportDeclaration<Annotation>
            }]
            | ["InterfaceDeclaration", {
                readonly _A: TInterfaceDeclaration<Annotation>
            }]
            | ["TypeAliasDeclaration", {
                readonly _A: TTypeAliasDeclaration<Annotation>
            }]
            | ["VariableStatement", {
                readonly _A: TVariableStatement<Annotation>
            }]
    }[]
    readonly _EndOfFileToken: TEndOfFileToken<Annotation>
}

export type TStringLiteral<Annotation> = {}

export type TTypeAliasDeclaration<Annotation> = {}

export type TVariableStatement<Annotation> = {}
export type Root<Annotation> = TSourceFile<Annotation>