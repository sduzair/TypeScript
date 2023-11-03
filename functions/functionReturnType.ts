/**
 * @description Function return types can be specified explicitly or inferred. The example here show the difference between three ways of specifying function return types namely: no return type, return type and discriminated union return type.
 */

type roles = "admin" | "editor" | "viewer";

// EXAMPLE 1: NO RETURN TYPE
/**
 * This function takes a role literal and returns an object with the role's permissions and metadata in an object.
 */
function getRolePermissions(role: roles) {
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
        viewerReads: 34,
      };
    default:
      const _exhaustiveCheck: never = role;
      throw new Error(`Unknown role: ${role}`);
  }
}

const perms = getRolePermissions("admin");

if (perms.type !== "admin") throw new Error("Expected admin");
perms.viewerReads; // Valid, Type of `perms`: const perms: { type: "admin"; read: boolean; write: boolean; delete: boolean; purge: boolean; viewerReads?: undefined; }

// Merits
// - No need to specify return type
// - No need to cast return type with `as`, instead discriminated union is used to narrow the type

// Demerits
// - No defined contract, not an Intention Revealing Interface
// - No limitation on what the return type is within the function
// - Possible to return a different type than expected and propagate static type checking errors in layers above
// - All members of the discriminated union returned have all the properties of all the members of the discriminated union as optional or required, even after narrowing the type. Example: `viewerReads` is available on `perms` even though we narrowed the type to `admin`

// EXAMPLE 2: USING RETURN TYPE
interface RolePermissions {
  type: roles;
  read: boolean;
  write: boolean;
  delete: boolean;
}

interface AdminRolePermissions extends RolePermissions {
  type: "admin";
  purge: boolean;
}

interface EditorRolePermissions extends RolePermissions {
  type: "editor";
}

interface ViewerRolePermissions extends RolePermissions {
  type: "viewer";
  viewerReads: number;
}

function getRolePermissionsWithReturnType(role: roles): RolePermissions {
  switch (role) {
    case "admin":
      const permsAdmin: AdminRolePermissions = {
        type: "admin",
        read: true,
        write: true,
        delete: true,
        purge: true,
      };
      return permsAdmin;
    case "editor":
      const permsEditor: EditorRolePermissions = {
        type: role,
        read: true,
        write: true,
        delete: false,
      };
      return permsEditor;
    case "viewer":
      //! The appropriate return type is `ViewerRolePermissions` but we are returning `TRolePermissions` instead to demonstrate problems with casting (`as` keyword)
      const permsViewer: RolePermissions = {
        type: role,
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

const viewerPerms = getRolePermissionsWithReturnType(
  "viewer"
) as ViewerRolePermissions;
viewerPerms.viewerReads; // Valid TypeScript though `viewerReads` is not available

// Merits
// - Guidance on what the return type is
// - What is returned has to match the return type shape or get static type checking errors within the function
// - Conforms to the principle of Intention Revealing Interfaces by specifying the return type

// Demerits
// - Need to cast return type to get access to all members of the return type (use of `as` keyword)
//  - Casting behaves normally for nominal typing languages like Java, C# etc. but not for typescript
//  - Casting may be incorrect as is the case here and this is not revealed in runtime as typchecking is not possible for non primitive typescript types in runtime

// EXAMPLE 3: USING DISCRIMINATED UNION RETURN TYPE
function getRolePermissionsWithDiscriminatedUnionReturnType<T extends roles>(
  role: T
): AdminRolePermissions | EditorRolePermissions | ViewerRolePermissions {
  switch (role) {
    case "admin":
      return {
        type: "admin",
        read: true,
        write: true,
        delete: true,
        purge: true,
      };
    case "editor":
      return {
        type: "editor",
        read: true,
        write: true,
        delete: false,
      };
    case "viewer":
      return {
        type: "viewer",
        read: true,
        write: false,
        delete: false,
        viewerReads: 34,
      };
    default:
      const _exhaustiveCheck: never = role;
      throw new Error(`Unknown role: ${role}`);
  }
}

const permsWithDiscriminatedUnionReturnType =
  getRolePermissionsWithDiscriminatedUnionReturnType("admin");

if (permsWithDiscriminatedUnionReturnType.type !== "admin") throw new Error();
///@ts-expect-error
permsWithDiscriminatedUnionReturnType.viewerReads; // Type is narrowed to "admin" so `viewerReads` property is not available and gives a static type checking error
