import { NewGrammar } from "../../../grammar/esc/interfaces"

export const newGrammar: NewGrammar = {
    tokens: {
        Block: {
            symbols: [
                // {
                //     name: "statements",
                //     type: ["array", {
                //         rule: {
                //             symbols: [
                //                 {
                //                     name: "type",
                //                     type: ["choice", {
                //                         options: {

                //                         }
                //                     }]
                //                 }
                //             ]
                //         }
                //     }]
                // }
            ]
        },
        EndOfFileToken: {
            symbols: []
        },
        ExportDeclaration: {
            symbols: []
        },
        ExpressionStatement: {
            symbols: []
        },
        FunctionDeclaration: {
            symbols: [
                {
                    name: "name",
                    type: [
                        "token",
                        {
                            name: "Identifier"
                        }
                    ]
                },
                // {
                //     name: "parameters",
                //     type: ["array", {
                //         rule: {
                //             symbols: [
                //                 {
                //                     name: "parameter",
                //                     type: [
                //                         "token",
                //                         {
                //                             name: "Parameter"
                //                         }
                //                     ]
                //                 },
                //             ]
                //         }
                //     }],
                // },
                {
                    name: "block",
                    type: [
                        "token",
                        {
                            name: "Block"
                        }
                    ]
                },
            ]
        },
        Identifier: {
            symbols: []
        },
        ImportClause: {
            symbols: [
                {
                    name: "type",
                    type: [
                        "choice",
                        {
                            options: {
                                NamespaceImport: {
                                    symbols: [
                                        {
                                            name: "A",
                                            type: [
                                                "token",
                                                {
                                                    name: "NamespaceImport"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                NamedImports: {
                                    symbols: [
                                        {
                                            name: "A",
                                            type: [
                                                "token",
                                                {
                                                    name: "NamedImports"
                                                }
                                            ]
                                        }
                                    ]
                                },
                            }
                        }
                    ]
                },
            ]
        },
        ImportDeclaration: {
            symbols: [
                {
                    name: "type",
                    type: [
                        "choice",
                        {
                            options: {
                                ExportDeclaration: {
                                    symbols: [
                                        {
                                            name: "A",
                                            type: [
                                                "token",
                                                {
                                                    name: "ImportClause"
                                                }
                                            ]
                                        }
                                    ]
                                },
                            }
                        }
                    ]
                },
                {
                    name: "file",
                    type: [
                        "token",
                        {
                            name: "StringLiteral"
                        }
                    ]
                }
            ]
        },
        InterfaceDeclaration: {
            symbols: []
        },
        ImportSpecifier: {
            symbols: []
        },
        NamespaceImport: {
            symbols: [
                {
                    name: "name",
                    type: [
                        "token",
                        {
                            name: "Identifier"
                        }
                    ]
                }
            ]
        },
        NamedImports: {
            symbols: [
                {
                    name: "A",
                    type: [
                        "token",
                        {
                            name: "ImportSpecifier"
                        }
                    ]
                }

            ]
        },
        Parameter: {
            symbols: []
        },
        SourceFile: {
            symbols: [
                {
                    name: "globals",
                    type: [
                        "array",
                        {
                            rule: {
                                symbols: [
                                    {
                                        name: "type",
                                        type: [
                                            "choice",
                                            {
                                                options: {
                                                    ExportDeclaration: {
                                                        symbols: [
                                                            {
                                                                name: "A",
                                                                type: [
                                                                    "token",
                                                                    {
                                                                        name: "ExportDeclaration"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    ExpressionStatement: {
                                                        symbols: [
                                                            {
                                                                name: "A",
                                                                type: [
                                                                    "token",
                                                                    {
                                                                        name: "ExpressionStatement"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    FunctionDeclaration: {
                                                        symbols: [
                                                            {
                                                                name: "A",
                                                                type: [
                                                                    "token",
                                                                    {
                                                                        name: "FunctionDeclaration"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    ImportDeclaration: {
                                                        symbols: [
                                                            {
                                                                name: "A",
                                                                type: [
                                                                    "token",
                                                                    {
                                                                        name: "ImportDeclaration"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    InterfaceDeclaration: {
                                                        symbols: [
                                                            {
                                                                name: "A",
                                                                type: [
                                                                    "token",
                                                                    {
                                                                        name: "InterfaceDeclaration"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    TypeAliasDeclaration: {
                                                        symbols: [
                                                            {
                                                                name: "A",
                                                                type: [
                                                                    "token",
                                                                    {
                                                                        name: "TypeAliasDeclaration"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    VariableStatement: {
                                                        symbols: [
                                                            {
                                                                name: "A",
                                                                type: [
                                                                    "token",
                                                                    {
                                                                        name: "VariableStatement"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    name: "EndOfFileToken",
                    type: [
                        "token",
                        {
                            name: "EndOfFileToken"
                        }
                    ]
                }
            ]
        },
        StringLiteral: {
            symbols: []
        },
        TypeAliasDeclaration: {
            symbols: []
        },
        VariableStatement: {
            symbols: []
        }
    },
    startToken: "SourceFile"
}