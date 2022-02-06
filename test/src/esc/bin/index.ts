#!/usr/bin/env node

import { testTypedProjectLoading } from "../implementation/testTypedProjectLoading";

import * as pr from "pareto-runtime"

pr.runProgram(
    (dataDir) => {

        function x() {


            if (dataDir === undefined) {
                throw new Error("missing dataDir path")
            }

            //a bit ugly, I want to test the pub dir
            const tsconfigPath = pr.join([dataDir, "../../pub/tsconfig.json"])

            testTypedProjectLoading(
                tsconfigPath
            )
        }

        x()
    }
)
