//? FUNCTION RETURN TYPES ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

type roles = "admin" | "editor" | "viewer";

// No return type
function getRolePermissions<T extends roles>(role: T) {
  switch (role) {
    case "admin":
      return {
        type: "admin" as const,
        read: true,
        write: true,
        delete: true,
        purge: true,
      };
    case "editor":
      return {
        type: "editor" as const,
        read: true,
        write: true,
        delete: false,
      };
    case "viewer":
      return {
        type: "viewer" as const,
        read: true,
        write: false,
        delete: false,
        viewerTask: () => console.log("Viewer performing task"),
      };
    default:
      const _exhaustiveCheck: never = role;
      throw new Error(`Unknown role: ${role}`);
  }
}

const perms = getRolePermissions("admin");
if (perms.type !== "admin") throw new Error("Expected admin");
///@ts-expect-error Type is narrowed to "admin" so `viewerTask` callback is not available and gives a static type checking error
perms.viewerTask();
// ^?

// Merits
// - No need to specify return type
// - No need to cast return type instead discriminated union is used to narrow the type

// Demerits
// - No limitation on what the return type is within the function
// - Possible to return a different type than expected and get static type checking errors in layers above
// - All members of the discriminated union returned have all the properties of all the members of the discriminated union as optional or required, even after narrowing the type

// Using return type
interface RolePermissions {
  read: boolean;
  write: boolean;
  delete: boolean;
}

interface TRolePermissions<T extends roles> extends RolePermissions {
  type: T;
}

/**
 * This function takes a role literal and returns an object with the role's permissions in an object.
 */
function getRolePermissionsWithReturnType<T extends roles>(
  role: T
): RolePermissions {
  switch (role) {
    case "admin":
      const permsAdmin: TRolePermissions<"admin"> = {
        type: "admin",
        read: true,
        write: true,
        delete: true,
      };
      return permsAdmin;
    case "editor":
      const permsEditor: TRolePermissions<"editor"> = {
        type: "editor",
        read: true,
        write: true,
        delete: false,
      };
      return permsEditor;
    case "viewer":
      const permsViewer: TRolePermissions<"viewer"> = {
        type: "viewer",
        read: true,
        write: false,
        delete: false,
      };
      return permsViewer;
    default:
      const _exhaustiveCheck: never = role;
      throw new Error(`Unknown role: ${role}`);
  }
}

const permsWithReturnType = getRolePermissionsWithReturnType<"admin">(
  "admin"
) as TRolePermissions<"admin">;
//    ^?

// Merits
// - Guidance on what the return type is
// - What is returned has to match the return type shape or get static type checking errors within the function
// - Conforms to the principle of Intention Revealing Interfaces by specifying the return type
// - Only the members of the return common to all possible return types are available (represented by the return type) initially, before casting the type

// Demerits
// - Need to specify return type
// - Need to cast return type to get access to all members of the return type (use of `as` keyword)
