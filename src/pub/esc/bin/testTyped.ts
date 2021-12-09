#!/usr/bin/env node

import { testTypedProjectLoading } from "../implementations/testTypedProjectLoading";

const [, , tsconfigPath] = process.argv

if (tsconfigPath === undefined) {
    throw new Error("missing tsconfig path")
}

testTypedProjectLoading(
    tsconfigPath
)