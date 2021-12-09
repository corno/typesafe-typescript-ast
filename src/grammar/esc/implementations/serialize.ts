import * as pr from "pareto-runtime"
import * as newGrm from "../../../grammar/esc/interfaces"
import * as wapi from "../../../generateCode/esc/interfaces/WriteAPI"


export function serialize(
    grammar: newGrm.NewGrammar,
    $w: wapi.Block,
) {

    $w.line(($w) => {
        $w.snippet(`{`)
        $w.indent(($w) => {
            $w.line(($w) => {
                $w.snippet(`tokens: {`)
                $w.indent(($w) => {
                    let isFirst = true
                    newGrm.forEachEntry(
                        grammar.tokens,
                        ($, key) => {
                            $w.line(($w) => {
                                $w.snippet(`"${key}": `)
                                function doRule(
                                    $: newGrm.Rule,
                                    $w: wapi.Line,
                                ) {
                                    $w.snippet(`{`)
                                    $w.indent(($w) => {
                                        $w.line(($w) => {
                                            $w.snippet(`elements: [`)
                                            $w.indent(($w) => {
                                                $.symbols.forEach(($) => {
                                                    $w.line(($w) => {
                                                        $w.snippet(`{`)
                                                        $w.indent(($w) => {
                                                            $w.line(($w) => {
                                                                $w.snippet(`name: "${$.name}",`)
                                                            })
                                                            $w.line(($w) => {
                                                                $w.snippet(`type: `)
                                                                $w.snippet(`[`)
                                                                switch ($.type[0]) {
                                                                    case "token":
                                                                        pr.cc($.type[1], ($) => {
                                                                            $w.snippet(`"token", {`)
                                                                            $w.indent(($w) => {
                                                                                // $w.line(($w) => {
                                                                                //     $w.snippet(`optional: ${$.optional},`)
                                                                                // })
                                                                                $w.line(($w) => {
                                                                                    $w.snippet(`name: ${$.name}`)
                                                                                })
                                                                            })
                                                                            $w.snippet(`}`)
                                                                        })
                                                                        break
                                                                    case "choice":
                                                                        pr.cc($.type[1], ($) => {
                                                                            $w.snippet(`"choice", {`)
                                                                            $w.indent(($w) => {
                                                                                // $w.line(($w) => {
                                                                                //     $w.snippet(`optional: ${$.optional},`)
                                                                                // })
                                                                                $w.line(($w) => {
                                                                                    $w.snippet(`options: {`)
                                                                                    $w.indent(($w) => {
                                                                                        newGrm.forEachEntry($.options, ($, key) => {
                                                                                            $w.line(($w) => {
                                                                                                $w.snippet(`"${key}": {},`)
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                    $w.snippet(`}`)
                                                                                })
                                                                            })
                                                                            $w.snippet(`}`)
                                                                        })
                                                                        break
                                                                    case "array":
                                                                        pr.cc($.type[1], ($) => {
                                                                            $w.snippet(`"array", {`)
                                                                            $w.indent(($w) => {
                                                                                $w.line(($w) => {
                                                                                    $w.snippet(`type: `)
        
                                                                                    doRule(
                                                                                        $.rule,
                                                                                        $w,
                                                                                    )
                                                                                })
                                                                            })
                                                                            $w.snippet(`}`)
                                                                        })
                                                                        break
                                                                    default:
                                                                        pr.au($.type[0])
                                                                }
        
                                                                $w.snippet(`],`)
                                                            })
                                                        })
                                                        $w.snippet(`}`)
                                                        $w.snippet(`,`)
                                                    })
                                                })
                                            })
                                            $w.snippet(`]`)
                                        })
                                    })
                                    $w.snippet(`}`)
                                }
                                doRule(
                                    $,
                                    $w,
                                )
                                $w.snippet(`${isFirst ? "" : ","}`)
                                isFirst = false
                            })
                        }
                    )
                })
                $w.snippet(`},`)
            })
            $w.line(($w) => {
                $w.snippet(`startToken: "${grammar.startToken}"`)
            })
        })
        $w.snippet(`}`)
    })

}
