function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

console.log("---------------------4 task------------------");
showMessage("Hello, how are you?");
console.log(calc(100, 100));
try {
  customError();
} catch (error) {
  console.log(error);
}
