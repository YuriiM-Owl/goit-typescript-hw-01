function merge<A extends object, B extends object>(objA: A, objB: B): A & B {
  return Object.assign(objA, objB);
}

console.log("---------------------3 task generics------------------");
console.log(merge({ name: "Carl" }, { age: 20 }));
// console.log(merge({ name: "Carl" }, 20)); //error
