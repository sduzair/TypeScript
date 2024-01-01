const roles = ["user", "superadmin", "admin"] as const;

type RolesTuple = typeof roles;
//   ^?

type Roles = RolesTuple[number];
//   ^?