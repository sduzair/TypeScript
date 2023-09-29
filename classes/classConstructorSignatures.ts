/**
 * @file Classes / Constructor Signatures
 * @description `InstanceType<>` utility type is used to get the instance type of a class constructor. `typeof Point` returns the constructor function type, but `InstanceType<typeof Point>` returns the instance type of the class.
 */

class Point {
    createdAt: number;
    x: number;
    y: number
    constructor(x: number, y: number) {
        this.createdAt = Date.now()
        this.x = x;
        this.y = y;
    }
}

type PointInstance = InstanceType<typeof Point>     // =>

function moveRight(point: PointInstance) {
    point.x += 5;
}

const point = new Point(3, 4);
moveRight(point);   // =>
point.x; // 8