type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  console.log(initialValues);
}

console.log("---------------------4 task generics------------------");
createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
// createOrUpdateUser({
//   email: "user@mail.com",
//   age: "30",
// }); error
