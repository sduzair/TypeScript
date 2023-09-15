function getVals(obj: unknown) {
    const toPrint: any = [];
    assert(typeof obj === "object" && obj, `${obj} is not an non null object`);
    for (let prop of Object.keys(obj)) {
        // toPrint.push(obj[prop]);
        toPrint.push(obj[prop as keyof typeof obj]);
    }
    return toPrint;
}

let obj: any = { a: 1, b: 2, c: 3 };
// let obj: any = "asdf";   //! Error
// let obj: any = null;  //! Error
// let obj: any = {};

for (let prop of getVals(obj)) {
    console.log(prop);
}






function assert(condition: any, msg?: string): asserts condition {
    if (!condition) {
        throw new Error(msg);
    }
}