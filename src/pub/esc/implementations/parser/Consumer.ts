export type Node<Annotation> = {
        kindName: string
        annotation: Annotation
}

export type Consumer<Annotation> = {
    onNode: ($: Node<Annotation>) => Consumer<Annotation>,
    onEnd: () => void,
}

export function createDummyConsumer<Annotation>(): Consumer<Annotation> {
    return {
        onEnd: () => {

        },
        onNode: () => {
            return createDummyConsumer()
        }
    }
}