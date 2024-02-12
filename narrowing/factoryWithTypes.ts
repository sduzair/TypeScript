
// type Shapes = Cube | Cuboid | Cylinder;

// interface Cube {
//     kind: "cube";
//     sideLength: number;
// }

// interface Cuboid {
//     kind: "cuboid";
//     sideLength: number;
//     height: number;
// }

// interface Cylinder {
//     kind: "cylinder";
//     radius: number;
//     height: number;
// }

// function shapeVolumeFactory(kind: Shapes["kind"]) {
//     if (kind === "cube") {
//         return (sideLength: Cube["sideLength"]) => sideLength ** 3;
//     } else if (kind === "cuboid") {
//         return (sideLength: Cuboid["sideLength"], height: Cuboid["height"]) => sideLength ** 2 * height;
//     } else if (kind === "cylinder") {
//         return (radius: Cylinder["radius"], height: Cylinder["height"]) => Math.PI * radius ** 2 * height;
//     } else {
//         const _exhaustiveCheck: never = kind;
//         return _exhaustiveCheck;
//     }
// }

// const calcCubeVolume = shapeVolumeFactory("cube");

// //@ts-expect-error
// console.log(calcCubeVolume(2));

// // My Solution - Generics

// type VolumeFunction<T extends Shapes["kind"]> = | 
//     T extends "cube" ? (sideLength: Cube["sideLength"]) => number :
//     T extends "cuboid" ? (sideLength: Cuboid["sideLength"], height: Cuboid["height"]) => number :
//     T extends "cylinder" ? (radius: Cylinder["radius"], height: Cylinder["height"]) => number :
//     never;

// function shapeVolumeFactorySolution<T extends Shapes["kind"]>(kind: T): VolumeFunction<T> {
//     if (kind === "cube") {
//         const cubeVolume = (sideLength: Cube["sideLength"]) => sideLength ** 3;
//         return cubeVolume as VolumeFunction<T>;
//     } else if (kind === "cuboid") {
//         const cuboidVolume = (sideLength: Cuboid["sideLength"], height: Cuboid["height"]) => sideLength ** 2 * height;  
//         return cuboidVolume as VolumeFunction<T>;
//     } else if (kind === "cylinder") {
//         const cylinderVolume = (radius: Cylinder["radius"], height: Cylinder["height"]) => Math.PI * radius ** 2 * height;
//         return cylinderVolume as VolumeFunction<T>;
//     } else {
//         const _exhaustiveCheck: never = kind;
//         return _exhaustiveCheck;
//     }
// }

// const calcCubeVolumeFix1 = shapeVolumeFactorySolution<"cube">("cube");

// // Problem with My Solution: Maintaining types
// // Let's say I want to modify the cylinder volume function to accept a third parameter, "pi"

// function shapeVolumeFactorySolutionProblem<T extends Shapes["kind"]>(kind: T): VolumeFunction<T> {
//     if (kind === "cube") {
//         const cubeVolume = (sideLength: Cube["sideLength"]) => sideLength ** 3;
//         return cubeVolume as VolumeFunction<T>;
//     } else if (kind === "cuboid") {
//         const cuboidVolume = (sideLength: Cuboid["sideLength"], height: Cuboid["height"]) => sideLength ** 2 * height;  
//         return cuboidVolume as VolumeFunction<T>;
//     } else if (kind === "cylinder") {
//         const cylinderVolume = (radius: Cylinder["radius"], height: Cylinder["height"], pi: number) => pi * radius ** 2 * height;
//         return cylinderVolume as VolumeFunction<T>;
//     } else {
//         const _exhaustiveCheck: never = kind;
//         return _exhaustiveCheck;
//     }
// }

// // 1. The type VolumeFunction<"cylinder"> is also has to be updated to reflect the new function signature
// // 2. Static analysis does not warn me that I am missing the "pi" parameter when I call calcCylinerVolumeSolutionProblem
// const calcCylinerVolumeSolutionProblem = shapeVolumeFactorySolutionProblem<"cylinder">("cylinder");
// //    ^?

// // Ideal Solution:
// // 1. Consistent return function signature does not have to be maintained in logic and in types.
// // 2. Static analysis warns me that I am missing the "pi" parameter when I call calcCylinerVolumeSolutionProblem

// Dynamic shape

interface Shape {
    shape: "cube" | "cuboid" | "cylinder";
    volumeCalc: (...args: any[]) => number;
}

interface Cube extends Shape {
    shape: "cube";
    volumeCalc: (sideLength: number) => number;
}

interface Cuboid extends Shape {
    shape: "cuboid";
    volumeCalc: (sideLength: number, height: number) => number;
}

interface Cylinder extends Shape {
    shape: "cylinder";
    volumeCalc: (radius: number, height: number, pi: number) => number;
}

function shapeVolumeFactoryDynamic(shape: Shape["shape"]): Shape {
    if (shape === "cube") {
        const cube: Cube = {
            shape: "cube",
            volumeCalc: (sideLength: number) => sideLength ** 3,
        };
        return cube;
    } else if (shape === "cuboid") {
        const cuboid: Cuboid = {
            shape: "cuboid",
            volumeCalc: (sideLength: number, height: number) => sideLength ** 2 * height,
        };
        return cuboid;
    } else if (shape === "cylinder") {
        const cylinder: Cylinder = {
            shape: "cylinder",
            volumeCalc: (radius: number, height: number, pi: number) => pi * radius ** 2 * height,
        };
        return cylinder;
    } else {
        const _exhaustiveCheck: never = shape;
        return _exhaustiveCheck;
    }
}

declare const shape: Shape["shape"];

const shapeVolume = shapeVolumeFactoryDynamic(shape);

let volume: number;
if (shapeVolume.shape === "cube") {
    // get dimensions from user input
    volume = shapeVolume.volumeCalc(2);
} else if (shapeVolume.shape === "cuboid") {
    // get dimensions from user input
    volume = shapeVolume.volumeCalc(2, 3);
} else if (shapeVolume.shape === "cylinder") {
    // get dimensions from user input
    volume = shapeVolume.volumeCalc(2, 3, Math.PI);
}