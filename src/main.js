import deps from './js/deps';

WebAssembly.instantiateStreaming(fetch("../out/main.wasm"), deps)
  .then(result => {
    const asmModule = result.instance.exports;
    console.log(asmModule);
    const res = asmModule.add(19, 23);
    console.log(res);
  }).catch(console.error);
