#!/usr/bin/env bash

echo $1

rm -rf $1/dist && \
tsc --project $1
