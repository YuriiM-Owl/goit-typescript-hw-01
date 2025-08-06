export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type RoleDescription = Record<UserRole, string>;

const roleDescription: RoleDescription = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
// const roleDescriptionWrongKey: RoleDescription = {
//   admin: "Admin User",
//   editor: "Editor User",
//   god: "Super User",
// }; error

console.log("---------------------5 task generics------------------");
console.log(roleDescription);
