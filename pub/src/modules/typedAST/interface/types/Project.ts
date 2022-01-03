import * as pr from "pareto-runtime"
import { Root } from "../../../typescriptAST"

export type SourceFile<Annotation> = {
    readonly "path": string
    readonly "root": Root<Annotation>
}

export type Project<Annotation> = {
    readonly "sourceFiles": pr.IReadonlyArray<SourceFile<Annotation>>
}