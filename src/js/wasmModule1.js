import deps from './deps';

const instantModule = WebAssembly.instantiateStreaming(fetch("../out/main.wasm"), deps);
const AssemblyModule = instantModule.then(result => {
  return result.instance.exports;
});

export default AssemblyModule;
