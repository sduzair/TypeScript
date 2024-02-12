/**
 * @description Simple factory pattern with classes
 */

abstract class Shape {
  abstract readonly kind: "cube" | "sphere" | "cylinder";
  abstract readonly VERTICES: number;
  abstract getVolume(): number;
  abstract getVertices(): number;
}

class Cube extends Shape {
  readonly kind: "cube";
  readonly VERTICES = 4;

  constructor(public readonly side: number) {
    super();
  }

  getVolume(): number {
    return this.side ** 3;
  }

  getVertices(): number {
    return this.VERTICES;
  }
}

class Sphere extends Shape {
  readonly kind: "sphere";
  readonly VERTICES = Infinity;

  constructor(public readonly radius: number) {
    super();
  }

  getVolume(): number {
    return (4 / 3) * Math.PI * this.radius ** 3;
  }

  getVertices(): number {
    return this.VERTICES;
  }
}

class Cylinder extends Shape {
  readonly kind: "cylinder";
  readonly VERTICES = Infinity;

  constructor(public readonly radius: number, public readonly height: number) {
    super();
  }

  getVolume(): number {
    return Math.PI * this.radius ** 2 * this.height;
  }

  getVertices(): number {
    return this.VERTICES;
  }
}

class ShapeFactory {
  // create a generic shape with constructor arguments
  static create(shape: new (...args: any[]) => Shape, ...args: ConstructorParameters<typeof shape>): Shape {
    return new shape(...args);
  }
}

declare const shape: Shape["kind"];

if (shape === "cube") {
  const cube = ShapeFactory.create(Cube, 234, 342);
  console.log(cube.getVolume());
  console.log(cube.getVertices());
}