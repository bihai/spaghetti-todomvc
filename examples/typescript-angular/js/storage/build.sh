#!/bin/bash -ex
echo "Building storage..."
rm -rf build
spaghetti generate headers --definition Storage.module --language typescript --output build/headers
tsc --sourcemap --out build/storage.js _all.ts
spaghetti bundle --definition Storage.module --language typescript --source build/storage.js --output build/bundle