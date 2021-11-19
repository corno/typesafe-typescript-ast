import * as pr from "pareto-runtime"

const packageTemplatePath = "./_package.json"
const livePackagePath = "./package.json"
const targetPath = "./dist/pub/package.json"

function readFileSafe(
    $: {
        path: string,
        exit: boolean,
    },
    onSuccess: (data: string) => void,
    onError: (message: string) => void,
) {
    const $in = $
    pr.readFile(
        $.path,
        ($) => {
            switch ($[0]) {
                case "error":
                    pr.cc($[1], ($) => {
                        onError(`could not read '${$in.path}'`)
                        if ($in.exit) {
                            pr.processExit(1)
                        }
                    })
                    break
                case "success":
                    pr.cc($[1], ($) => {
                        onSuccess($.data)
                    })
                    break
                default:
                    pr.au($[0])
            }
        }
    )
}

function writeFileSafe(
    $: {
        path: string,
        data: string,
        exit: boolean,
    },
    onSuccess: () => void,
    onError: (message: string) => void,
) {
    const $in = $
    pr.writeFile(
        $.path,
        $.data,
        ($) => {
            switch ($[0]) {
                case "error":
                    pr.cc($[1], ($) => {
                        onError(`could not write '${$in.path}'`)
                        if ($in.exit) {
                            pr.processExit(1)
                        }
                    })
                    break
                case "success":
                    pr.cc($[1], () => {
                        onSuccess()
                    })
                    break
                default:
                    pr.au($[0])
            }
        }
    )
}

readFileSafe(
    {
        path: packageTemplatePath,
        exit: true,
    },
    ($) => {
        const packageTemplate: any = pr.JSONparse(
            $
        )
        readFileSafe(
            {
                path: livePackagePath,
                exit: true,
            },
            ($) => {
                const livePackage: any = pr.JSONparse(
                    $
                )
                packageTemplate["dependencies"] = livePackage.dependencies
                writeFileSafe(
                    {
                        path: targetPath,
                        data: pr.JSONstringify(packageTemplate),
                        exit: true,
                    },
                    () => {
                        // nothing to do
                    },
                    pr.logError,
                )
            },
            pr.logError,
        )
    },
    pr.logError,
)

pr.readFile(
    packageTemplatePath,
    ($) => {
        switch ($[0]) {
            case "error":
                pr.cc($[1], ($) => {
                    pr.logError(`could not read '${packageTemplatePath}'`)
                    pr.processExit(1)
                })
                break
            case "success":
                pr.cc($[1], ($) => {
                    $.data
                })
                break
            default:
                pr.au($[0])
        }
    }
)