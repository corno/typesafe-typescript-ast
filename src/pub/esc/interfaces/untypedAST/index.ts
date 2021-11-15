import * as pr from "pareto-runtime"

export type Node<Annotation> = {
    readonly kindName: string
    readonly children: pr.IReadonlyArray<Node<Annotation>>
    readonly annotation: Annotation
}

export type SourceFile<Annotation> = {
    readonly path: string
    readonly node: Node<Annotation>
}

export type Project<Annotation> = {
    readonly path: string
    readonly sourceFiles: pr.IReadonlyArray<SourceFile<Annotation>>
}