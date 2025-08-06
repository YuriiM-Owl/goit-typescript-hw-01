let stringOrNumber: string | number;
let enabledOrDisabled: "enable" | "disable";

console.log("---------------------3 task------------------");
console.log((stringOrNumber = "hello"));
console.log((stringOrNumber = 100));
// console.log(stringOrNumber = {}); //error

console.log((enabledOrDisabled = "disable"));
console.log((enabledOrDisabled = "enable"));
// console.log(enabledOrDisabled = "hello") // error
