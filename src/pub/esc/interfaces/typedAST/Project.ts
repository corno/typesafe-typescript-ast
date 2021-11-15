import * as pr from "pareto-runtime"
import { TSourceFile } from "./ts_api.generated"

export type SourceFile<Annotation> = {
    root: TSourceFile<Annotation>
}

export type Project<Annotation> = {
    sourceFiles: pr.IReadonlyArray<SourceFile<Annotation>>
}