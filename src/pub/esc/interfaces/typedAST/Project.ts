import * as pr from "pareto-runtime"
import { Root } from "../../typescriptAST/interface/ts_api.generated"

export type SourceFile<Annotation> = {
    path: string
    root: Root<Annotation>
}

export type Project<Annotation> = {
    sourceFiles: pr.IReadonlyArray<SourceFile<Annotation>>
}