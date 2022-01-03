#!/usr/bin/env node

import { testTypedProjectLoading } from "../implementation/testTypedProjectLoading";

import * as pr from "pareto-runtime"

function x() {

    //const [, , tsconfigPath] = pr.getProcessArguments()
    //
    // if (tsconfigPath === undefined) {
    //     throw new Error("missing tsconfig path")
    // }

    const tsconfigPath = "./pub/tsconfig.json"

    testTypedProjectLoading(
        tsconfigPath
    )
}

x()