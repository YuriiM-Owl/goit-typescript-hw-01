type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

const params: Params = {
  email: "123@mail.com",
  firstName: "Ferdinand",
  lastName: "Wick",
  phone: "937-99-92",
};
// const paramsWithErrors: Params = {
//   email: "123@mail.com",
//   firstName: "Ferdinand",
//   lastName: "Wick",
//   phone: "937-99-92",
//   errors: {},
// }; error

console.log("---------------------6 task generics------------------");
console.log(params);
