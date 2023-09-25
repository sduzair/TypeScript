/**
 * @file Type Manipulation / Mapped Types
 * @desc Mapped types allow you to create new types from existing types. Mapped types are built on the syntax for index signatures, which are used to declare the types of properties that are not known ahead of time. Mapping modifiers can be applied to three different types of mapped types: readonly, optional, and nullable.
 */

// Example 1 - Index Signature
interface Features {
    darkMode: () => void;
    newUserProfile: () => void;
}

type OptionsFlags<T> = {
    [U in keyof T]: boolean;
};

/**
 * type FeaturesOptions = {
 *     darkMode: boolean;
 *     newUserProfile: boolean;
 * }
 */
type FeaturesOptions = OptionsFlags<Features>;

// Example 2 - Removes the readonly modifier
type CreateMutable<T> = {
    -readonly [U in keyof T]: T[U];
};

interface LockedAccount {
    readonly id: string;
    readonly name: string;
}

/**
 * type UnlockedAccount = {
 *     id: string;
 *     name: string;
 * }
 */
type UnlockedAccount = CreateMutable<LockedAccount>;

// Example 3 - Removes the optional modifier
type Concrete<T> = {
    [U in keyof T]-?: T[U];
};

interface Config {
    title?: string;
    body?: string;
}

/**
 * type RequiredConfig = {
 *     title: string;
 *     body: string;
 * }
 */
type RequiredConfig = Concrete<Config>;

// Example 4 - Makes all properties non-nullable
type NonNullableProps<T> = { [U in keyof T]: T[U] & {} };
// type NonNullableProps<T> = { [U in keyof T]: NonNullable<T[U]> };    // Equivalent

interface DBPropsNullable {
    id: number;
    address: {
        street: string;
        city: string;
        state: string;
    } | null;
}

/**
 * type DBProps = {
 *     id: number;
 *     address: {
 *         street: string;
 *         city: string;
 *         state: string;
 *     };
 * }
 */
type DBProps = NonNullableProps<DBPropsNullable>;
