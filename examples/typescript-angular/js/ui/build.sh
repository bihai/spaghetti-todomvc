#!/bin/bash -ex
rm -rf build
spaghetti generate headers --definition Ui.module --dependency-path ../storage/build/bundle --language typescript --output build/headers
tsc --sourcemap --out build/ui.js _all.ts
spaghetti bundle --dependency-path ../storage/build/bundle --definition Ui.module --language typescript --source build/ui.js --output build/bundle
