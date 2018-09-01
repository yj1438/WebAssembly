// wasm 运行环境依赖
export default {
  global: {},
  env: {
    memoryBase: 0,
    tableBase: 0,
    memory: new WebAssembly.Memory({
        initial: 256,
        maximum: 512,
    }),
    table: new WebAssembly.Table({
        initial: 0,
        maximum: 0,
        element: 'anyfunc',
    }),
    sayHello: function() {
      console.log("Hello from WebAssembly!");
    },
    abort(msg, file, line, column) {
      console.error("abort called at main.ts:" + line + ":" + column);
    }
  },
  console: {
    logi(value) { console.log('logi: ' + value); },
    logf(value) { console.log('logf: ' + value); }
  }
};
