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