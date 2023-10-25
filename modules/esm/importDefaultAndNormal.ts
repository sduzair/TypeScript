/**
 * @file Modules / ESM / Default Import and Normal Import
 */
import RandomNumberGenerator, {pi} from "./export";

pi; // 3.141592653589793

const rng = new RandomNumberGenerator();
rng.generate();