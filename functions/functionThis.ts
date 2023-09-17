//? DECLARING THIS IN FUNCTIONS ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

// Example 1 - Object with a method that uses 'this'
interface User {
    id: number;
    admin: boolean;
    becomeAdminWithInference: (this: User) => void;
    becomeAdminWithoutInference: () => void;
}

const user: User = {
    id: 3,
    admin: false,
    becomeAdminWithInference() {
        this.admin = true;
    },
    becomeAdminWithoutInference() {
        this.admin = true;
    }
};

// Example 2 - 'this' on another Object that takes a callback function
interface Db {
    filterUsers(filter: (this: User) => boolean): User[];
}

declare const db: Db;

const admins = db.filterUsers(function () {
    return this.admin;
});