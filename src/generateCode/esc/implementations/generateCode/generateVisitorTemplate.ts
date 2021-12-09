import * as pr from "pareto-runtime"

import * as g from "../../../../grammar/esc/interfaces"
import * as wapi from "../../interfaces/WriteAPI"

export function generateVisitorTemplate(
    grammar: g.NewGrammar,
    $w: wapi.Block,
) {

    $w.line(($w) => {
        $w.snippet(`import * as pr from "pareto-runtime"`)
    })
    $w.line(($w) => {
        $w.snippet(`import * as api from "../interfaces/typedAST"`)
    })
    $w.line(($w) => { })

    $w.line(($w) => {
        $w.snippet(`export function visit<Annotation>(`)
        $w.indent(($w) => {
            $w.line(($w) => {
                $w.snippet(`$: api.T${grammar.startToken}<Annotation>,`)
            })
            $w.line(($w) => {
                $w.snippet(`report: (annotation: Annotation) => void,`)
            })
        })
        $w.snippet(`): void {`)
        $w.indent(($w) => {

            g.forEachEntry(grammar.tokens, ($, key) => {
                $w.line(($w) => {

                    $w.snippet(`function _${key}(`)
                    $w.indent(($w) => {
                        $w.line(($w) => {
                            $w.snippet(`$: api.T${key}<Annotation>,`)
                        })
                    })
                    $w.snippet(`) {`)
                    $w.indent(($w) => {
                        function generateRule(
                            $key: string,
                            $: g.Rule,
                            $w: wapi.Block
                        ) {
                            $.symbols.forEach(($) => {
                                switch ($.type[0]) {
                                    case "array":
                                        pr.cc($.type[1], ($) => {
                                        })
                                        break
                                    case "token":
                                        pr.cc($.type[1], ($) => {
                                        })
                                        break
                                    case "choice":
                                        pr.cc($.type[1], ($) => {
                                        })
                                        break
                                    default:
                                        pr.au($.type[0])
                                }
                            })
                            // switch ($.type[0]) {
                            //     case "bag":
                            //         pr.cc($.type[1], ($) => {
                            //             $w.line(($w) => {
                            //                 $w.snippet(`report($.annotation)`)
                            //             })
                            //             $w.line(($w) => {
                            //                 $w.snippet(`$.children.forEach(($) => {`)
                            //                 $w.indent(($w) => {
                            //                     $w.line(($w) => {

                            //                         $w.snippet(`switch ($.type[0]) {`)
                            //                         $w.indent(($w) => {
                            //                             $.forEach(($) => {
                            //                                 $w.line(($w) => {
                            //                                     switch ($.type[0]) {
                            //                                         case "global":
                            //                                             pr.cc($.type[1], ($) => {
                            //                                                 $w.snippet(`case "${$}": {`)
                            //                                                 $w.indent(($w) => {
                            //                                                     $w.line(($w) => {
                            //                                                         $w.snippet(`pr.cc($.type[1], ($) => {`)
                            //                                                         $w.indent(($w) => {
                            //                                                             $w.line(($w) => {
                            //                                                                 $w.snippet(`_${$}($)`)
                            //                                                             })
                            //                                                         })
                            //                                                         $w.snippet(`})`)
                            //                                                     })
                            //                                                     $w.line(($w) => {
                            //                                                         $w.snippet(`break`)
                            //                                                     })
                            //                                                 })
                            //                                                 $w.snippet(`}`)
                            //                                             })
                            //                                             break
                            //                                         case "local":
                            //                                             pr.cc($.type[1], ($) => {
                            //                                                 $w.snippet(`case "${$.type[0]}": {`)
                            //                                                 $w.indent(($w) => {
                            //                                                     $w.line(($w) => {
                            //                                                         $w.snippet(`pr.cc($.type[1], ($) => {`)
                            //                                                         $w.indent(($w) => {
                            //                                                             generateRule(
                            //                                                                 $.type[0],
                            //                                                                 $.type[1],
                            //                                                                 $w,
                            //                                                             )
                            //                                                             $w.line(($w) => {
                            //                                                             })
                            //                                                         })
                            //                                                         $w.snippet(`})`)
                            //                                                     })
                            //                                                     $w.line(($w) => {
                            //                                                         $w.snippet(`break`)
                            //                                                     })
                            //                                                 })
                            //                                                 $w.snippet(`}`)
                            //                                             })
                            //                                             break
                            //                                         default:
                            //                                             pr.au($.type[0])
                            //                                     }
                            //                                 })
                            //                             })
                            //                             $w.line(($w) => {
                            //                                 $w.snippet(`default: pr.au($.type[0])`)
                            //                             })
                            //                         })
                            //                         $w.snippet(`}`)
                            //                     })
                            //                 })
                            //                 $w.snippet(`})`)
                            //             })
                            //         })
                            //         break
                            //     case "leaf":
                            //         pr.cc($.type[1], ($) => {
                            //             $w.line(($w) => {
                            //                 $w.snippet(`//report($.annotation)//LEAF`)
                            //             })
                            //             $w.line(($w) => {
                            //                 $w.snippet(`//FIXME`)
                            //             })
                            //         })
                            //         break
                            //     default:
                            //         pr.au($.type[0])
                            // }
                        }
                        generateRule(
                            key,
                            $,
                            $w,
                        )
                    })
                    $w.snippet(`}`)
                })
            })

            $w.line(($w) => {
                $w.snippet(`return _${grammar.startToken}($)`)
            })
        })
        $w.snippet(`}`)
    })
}
