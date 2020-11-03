const _ = require("lodash");
const CRC32 = require("crc-32");

let internal = [];

function make() {
  return internal;
}

function set(map, key, value = null) {
  const hash = CRC32.str(key);
  const index = Math.abs(hash) % 1000;
  collisioned =
    map[index] !== undefined ? isCollision(map[index], value) : false;
  completedSet = map[index] !== undefined && collisioned ? false : true;
  completedSet == true ? (map[index] = [key, value]) : map[index];
  return completedSet;
}

function get(map, key, default_value = null) {
  const hash = CRC32.str(key);
  const index = Math.abs(hash % 1000);
  return map[index] !== undefined ? map[index][1] : default_value;
}

function isCollision(map, value) {
  return map[1] === value ? true : false;
}
let map = make();

// let result = get(map, "key");
// console.log(result); // => null
set(map, "key2", "value2");
set(map, "key2", "another value");

console.log(get(map, "key2"));
// result = get(map, "key", "default_value");
// console.log(result); // => "default_value"

// console.log(get(map, "key"));
// console.log(get(map, "key", "value"));
//expect(result2).toBe("value");

// set(map, "key2", "another value");
//Console.log(get(map, "key2"));
// set(map, "key2", "value");
//Console.log(get(map, "key2"));

set(map, "aaaaa0.462031558722291", "vvv");
set(map, "aaaaa0.0585754039730588", "boom!");
// set(map, "key2", "value2");
// result = get(map, "key2");
// console.log(result); // => "value2"
