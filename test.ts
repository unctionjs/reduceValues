
import reduceValues from "./index.ts";

test(() => {
  expect(reduceValues(
    (accumulation) =>
      (current) =>
        `${accumulation}/${current}`
  )(
    "."
  )(
    ["a", "b", "c"]
  )).toBe("./a/b/c");
});

test(() => {
  expect(reduceValues(
    (accumulation) =>
      (current) =>
        `${accumulation}/${current}`
  )(
    "."
  )(
    {
      aaa: "a",
      bbb: "b",
      ccc: "c",
    }
  )).toBe("./a/b/c");
});

test(() => {
  expect(reduceValues(
    (accumulation) =>
      (current) =>
        `${accumulation}/${current}`
  )(
    "."
  )(
    new Map([["aaa", "a"], ["bbb", "b"], ["ccc", "c"]])
  )).toBe("./a/b/c");
});

test(() => {
  expect(reduceValues(
    (accumulation) =>
      (current) =>
        `${accumulation}/${current}`
  )(
    "."
  )(
    new Set(["a", "b", "c"])
  )).toBe("./a/b/c");
});
