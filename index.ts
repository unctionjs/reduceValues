import reduceWithValueKey from "@unction/reducewithvaluekey";
import {ReducerFunctionType} from "./types";

export default function reduceValues<A, B, C, D> (unction: ReducerFunctionType<A, B | C, D>) {
  return reduceWithValueKey((accumulated: A) => (value: B | C) => () => unction(accumulated)(value));
}
