set CPP_FUNCS=[^
'_grayScale', ^
'_comic']

emcc ./cpp/web.cpp -o ./out/web_c.js -lm -O2^
 -s WASM=1^
 -s BINARYEN_TRAP_MODE='allow'^
 -s EXPORTED_FUNCTIONS="%CPP_FUNCS%"^
 -s ALLOW_MEMORY_GROWTH=1
