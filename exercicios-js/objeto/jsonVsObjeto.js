const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  }
}; // FORMATO DE OBJETO

console.log(JSON.stringify(obj));

// console.log(JSON.parse("{a:1, b:2, c:3}"));
// console.log(JSON.parse("{'a':1, 'b':1, 'c':3, }"));
console.log(JSON.parse('{"a":1, "b":2, "c":3 }')); // FORMATO VALIDO DE JSON
console.log(JSON.parse('{ "a":1.7, "b":"string", "c":true, "d":{}, "e":[] }'));
