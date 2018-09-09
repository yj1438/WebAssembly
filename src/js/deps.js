import memory from './memory';
import table from './table';

// wasm 运行环境依赖
export default {
  global: null,
  env: {
    memoryBase: 0,
    tableBase: 0,
    memory,
    table,
    STACKTOP: 4080,
    jsHellow() {
      console.log("Hello from JS!");
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
