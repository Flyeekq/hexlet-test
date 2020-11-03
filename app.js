const _ = require("lodash");
const CRC32 = require("crc-32");

export function make() {
  const internal = [];
  return internal;
}

export function set(map, key, value = null) {
  const hash = CRC32.str("key");
  const index = Math.abs(hash) % 1000;
  map[index] = [key, value];
}

export function get(map, key, default_value = null) {
  const hash = CRC32.str("key");
  const index = Math.abs(hash % 1000);
  return map.includes(map[index]) ? map[index][1] : default_value;
  //return map[index][1]; // ['key', 'value']
}

let map = make();

let result = get(map, "key");
console.log(result); // => null

result = get(map, "key", "default_value");
console.log(result); // => "default_value"

set(map, "key2", "value2");
result = get(map, "key2");
console.log(result); // => "value2"
