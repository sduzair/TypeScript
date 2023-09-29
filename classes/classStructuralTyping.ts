/**
 * @file Classes / Structural Typing
 * @description In most cases, classes are compared structurally, which means that two classes are considered equal if their members are equal.
 */

// Example 1
class Point {
  x: number;
  y: number;
}

class Point3D {
  x: number;
  y: number;
  z: number;
}

/**
 * This is valid even though Point3D does not inherit from Point.
 */
const point: Point = new Point3D();