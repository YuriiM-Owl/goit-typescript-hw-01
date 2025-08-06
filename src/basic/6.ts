type User = {
  name: string;
  age: number;
  email: string;
  address?: {
    city: string;
    country: string;
  };
};

const mango: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: User = {
  name: "Poly",
  age: 35,
  email: "johnathan@example.com",
};

console.log("---------------------6 task------------------");
console.log(mango);
console.log(poly);
