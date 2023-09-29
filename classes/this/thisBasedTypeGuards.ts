/**
 * @file Classes / this / `this` based type guards
 * @description You can use `this is Type` in the return position for methods in classes and interfaces. When mixed with a type narrowing (e.g. if statements) the type of the target object would be narrowed to the specified Type.
 */

class FileSystemObject {
    isFile(): this is FileRep {
        return this instanceof FileRep;
    }
    isDirectory(): this is Directory {
        return this instanceof Directory;
    }
    isNetworked(): this is Networked {
        return this.networked;
    }
    constructor(public path: string, private networked: boolean) { }
}

class FileRep extends FileSystemObject {
    constructor(path: string, public content: string) {
        super(path, false);
    }
}

class Directory extends FileSystemObject {
    children: FileSystemObject[];
}

interface Networked {
    host: string;
}

const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");

if (fso.isFile()) {
    fso.content;
} else if (fso.isDirectory()) {
    fso.children;
} else if (fso.isNetworked()) {
    fso.host;
}

if (fso instanceof FileRep) {
    fso.content;
} else if (fso instanceof Directory) {
    fso.children;
} else if ("host" in fso) {
    fso.host;
}