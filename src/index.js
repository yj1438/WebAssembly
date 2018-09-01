const asmPromise = require("../assembly/main.ts");
import deps from './js/deps';

asmPromise(deps)
  .then(asmModule => {
    // 你可以直接把 wasm 文件作为 import 对象引入
    console.log(asmModule);
    const res = asmModule.add(19, 23);
    console.log(res);
  }).catch(console.error);