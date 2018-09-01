import asmPromise from "../assembly/index.ts";
asmPromise.then(function(asmModule){
  // 你可以直接把 wasm 文件作为 import 对象引入
  console.log(asmModule);
  asmModule.init();
  console.log(asmModule.step());
})