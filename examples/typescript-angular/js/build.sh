#!/bin/bash -ex
rm -rf build/
cd storage
./build.sh
cd ../
cd ui
./build.sh
cd ../
spaghetti package --wrapper requirejs --dependency-path storage/build/bundle:ui/build/bundle --execute --main todos.ui --output build/app

mkdir build/webapp
cp -r build/app/* build/webapp
cp -r ../bower_components build/webapp/bower_components
cp ../index.html build/webapp
