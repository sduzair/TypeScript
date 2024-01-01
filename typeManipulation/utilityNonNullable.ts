type User = string | undefined | null;

type ConcreteUser = User & string;
//   ^?

type ConcreteUser2 = User extends null ? never : string;
//   ^?

type ConcreteUser3 = NonNullable<User>;
//   ^?
