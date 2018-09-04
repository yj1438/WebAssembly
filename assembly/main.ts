@external('env', 'jsHellow')
declare function jsHellow(): void;

declare namespace console {
  function logi(value: i32): void;
  function logf(value: f64): void;
}

jsHellow();

/**
 * test
 * @param x 
 * @param y 
 */
export function add(x: i32, y: i32): i32 {
  return x + y;
}

console.logi(add(1, 2));

// export function comic(pixelData:fd) {
//   const len = pixelData.length;
//   for (let i = 0; i < len; i = i + 4) {
//     const _pixel = pixelData.slice(i, i + 4);
//     const [r, g, b, a] = _pixel;
//     const R = (Math.abs(g - b + g + r) * r) / 256;
//     const G = (Math.abs(b - g + b + r) * r) / 256;
//     const B = (Math.abs(b - g + b + r) * g) / 256;
//     pixelData[i] = R;
//     pixelData[i + 1] = G;
//     pixelData[i + 2] = B;
//     pixelData[i + 3] = a;
//   }
//   return pixelData;
// }