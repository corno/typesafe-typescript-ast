import * as pr from "pareto-runtime"

import * as g from "../../../../grammar/esc/interfaces"
import * as wapi from "../../interfaces/WriteAPI"

export function generateAPI(
    grammar: g.NewGrammar,
    $w: wapi.Block
    ) {
    $w.line(($w) => {
        $w.snippet(`import * as pr from "pareto-runtime"`)
    })
    g.forEachEntry(grammar.tokens, ($, key) => {
        function generateRule(
            $: g.Rule,
            $w: wapi.Line,
        ) {

            $w.snippet(`{`)
            $w.indent(($w) => {
                $.symbols.forEach(($) => {
                    $w.line(($w) => {
                        $w.snippet(`readonly _${$.name}: `)
                        switch ($.type[0]) {
                            case "array":
                                pr.cc($.type[1], ($) => {
                                    generateRule(
                                        $.rule,
                                        $w,
                                    )
                                    $w.snippet(`[]`)
                                })
                                break
                            case "token":
                                pr.cc($.type[1], ($) => {
                                    // if ($.optional) {
                                    //     $w.snippet(`| null`)
                                    // }
                                    $w.snippet(`T${$.name}<Annotation>`)
                                })
                                break
                            case "choice":
                                pr.cc($.type[1], ($) => {
                                    // if ($.optional) {
                                    //     $w.snippet(`| null`)
                                    // }
                                    $w.indent(($w) => {
                                        pr.Objectkeys($.options).forEach((key) => {
                                            $w.line(($w) => {
                                                $w.snippet(`| ["${key}", `)
                                                generateRule(
                                                    $.options[key],
                                                    $w,
                                                )
                                                $w.snippet(`]`)
                                            })
                                        })
                                    })
                                })
                                break
                            default:
                                pr.au($.type[0])
                        }
                    })

                })
                // $w.line(($w) => {
                //     $w.snippet(`readonly children: pr.IReadonlyArray<C${$k}<Annotation>>`)
                // })
            })
            $w.snippet(`}`)
        }


        $w.line(($w) => {
            $w.snippet(``)
        })
        $w.line(($w) => {
            $w.snippet(`export type T${key}<Annotation> = `)
            generateRule(
                $,
                $w,
            )
            // switch ($.type[0]) {
            //     case "bag":
            //         pr.cc($.type[1], ($) => {
            //             $w.indent(($w) => {
            //                 $.forEach(($) => {
            //                     $w.line(($w) => {
            //                         switch ($.type[0]) {
            //                             case "global":
            //                                 pr.cc($.type[1], ($) => {
            //                                     $w.snippet(`| ["${$}", T${$}<Annotation>]`)
            //                                 })
            //                                 break
            //                             case "local":
            //                                 pr.cc($.type[1], ($) => {
            //                                     $w.snippet(`| ["${$.type[0]}", T${$.type[0]}<Annotation>]`)
            //                                 })
            //                                 break
            //                             default:
            //                                 pr.au($.type[0])
            //                         }
            //                     })
            //                 })
            //             })
            //         })
            //         break
            //     case "leaf":
            //         pr.cc($.type[1], ($) => {
            //             $w.snippet(`number`)
            //         })
            //         break
            //     default:
            //         pr.au($.type[0])
            // }

        })
        // $w.line(($w) => {
        //     $w.snippet(`export type T${$k}<Annotation> = `)
        //     switch ($.type[0]) {
        //         case "bag":
        //             pr.cc($.type[1], ($) => {
        //                 $w.snippet(`{`)
        //                 $w.indent(($w) => {
        //                     $w.line(($w) => {
        //                         $w.snippet(`readonly annotation: Annotation`)
        //                     })
        //                     $w.line(($w) => {
        //                         $w.snippet(`readonly children: pr.IReadonlyArray<C${$k}<Annotation>>`)
        //                     })
        //                 })
        //                 $w.snippet(`}`)
        //             })
        //             break
        //         case "leaf":
        //             pr.cc($.type[1], ($) => {
        //                 $w.snippet(`number`)
        //             })
        //             break
        //         default:
        //             pr.au($.type[0])
        //     }

        // })
    })

    $w.line(($w) => {
        $w.snippet(`export type Root<Annotation> = T${grammar.startToken}<Annotation>`)
    })

}