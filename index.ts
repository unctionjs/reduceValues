import reduceWithValueKey from "@unction/reducewithvaluekey";
export default function reduceValues (unction) {
  return reduceWithValueKey((accumulated) => (value) => () => unction(accumulated)(value));
}
