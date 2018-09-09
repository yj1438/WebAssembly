import wasmModules from './js/wasmModule1';
import memory from './js/memory';

wasmModules.then(asmModule => {
  // 你可以直接把 wasm 文件作为 import 对象引入
  console.log(asmModule);
  console.log(memory);
  const res = asmModule.add(19, 23);
  console.log(res);
}).catch(console.error);
