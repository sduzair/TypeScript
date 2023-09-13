interface Type1 {
    x: string,
    y: string,
}

interface Type2 {
    x: string,
    y: string,
    z: string,
}

const obj2: Type2 = {
    x: "asf",
    y: "asfd",
    z: "asdf",
}

function TakesType1(param: Type1): void {
    console.log("Hello World!");
}

TakesType1(obj2);