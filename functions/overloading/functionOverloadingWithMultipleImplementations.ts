//? NO FUNCTION OVERLOADING WITH MULTIPLE IMPLEMENTATIONS ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

function logDate(timestamp: number): Date {
    console.log(new Date(timestamp));
    return new Date(timestamp);
}

function logDate(m: number, d: number, y: number): Date {
    console.log(new Date(y, m, d));
    return new Date(y, m, d);
}

function logDate(string: string): Date {
    console.log(new Date(string));
    return new Date(string);
}
