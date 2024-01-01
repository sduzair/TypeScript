type RoleAttributes = 
  | { role: 'admin', permissions: string[] }
  | { role: 'user', preferences: string[] }
  | { role: 'superuser', preferences: string[], permissions: string[] }

type ExtractAdmin<T> = T extends { role: "admin" } ? T : never;

type Admin = ExtractAdmin<RoleAttributes>;
//   ^?

type Admin2 = Extract<RoleAttributes, { role: 'admin' }>;
//   ^?
