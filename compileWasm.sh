#!/bin/bash

# use path to emsdk folder, relative to this directory
if [[ :$PATH: != *:"/emsdk":* ]]
then
  BASEDIR="./../emsdk"
  EMSDK_ENV=$(find "$BASEDIR" -type f -name "emsdk_env.sh")
  source "$EMSDK_ENV"
fi
# add exported C/C++ functions here
CPP_FUNCS="[
 '_grayScale',
 '_comic'
]" 

echo "compiling C++ to WASM ..."

# https://kripken.github.io/emscripten-site/docs/introducing_emscripten/index.html

emcc ./assembly/main.cpp -o ./out/web_c.js -lm -O2 \
-s WASM=1 \
-s BINARYEN_TRAP_MODE='allow' \
-s EXPORTED_FUNCTIONS="$CPP_FUNCS" \
-s ALLOW_MEMORY_GROWTH=1 \