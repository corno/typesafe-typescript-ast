import { Node } from "ts-morph";
import { loadTypedProject } from "./parser/loadTypedProject";


function getLineInfo(
    $: Node,
) {
    const lp = $.getSourceFile().getLineAndColumnAtPos($.getStart())
    return `[${lp.line}, ${lp.column}]`
}

export function testTypedProjectLoading(
    tsconfigPath: string
) {
    loadTypedProject<Node>({
        tsconfigPath: tsconfigPath,
        callback: ($) => {
            $.sourceFiles.forEach(($) => {
                //$.root.
                console.log("!!!!!!")
            })
        },
        createAnnotation: ($) => {
            return $
        },
        reportUnexpectedChild: ($) => {
            console.log(`unexpected child '${$.child.getKindName()}' under parent  '${$.parentKindName}' @ ${$.path}${getLineInfo($.child)}`)
        },
        reportMissingSymbol: ($) => {
            console.log(`missing symbol '${$.symbolName}' under parent '${$.parentKindName}' @ ${$.path}${$.parentAnnotation === null ? "" : getLineInfo($.parentAnnotation)}`)
        }
    })
}