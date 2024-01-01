/**
 * Type Casting
 * @desc Type Casting is a way to tell the compiler “trust me, I know what I’m doing.” A type can be casted to subtype and vice versa.
 */

interface Prop {
  prop: string;
}

interface PropSpecial extends Prop {
  special: string;
}

function castToPropSpecial(x: Prop) {
  x as PropSpecial; //valid
}

function castToProp(x: PropSpecial) {
  x as Prop; //valid
}