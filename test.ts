
import reduceValues from "./index";

test("works", () => {
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

test("works", () => {
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

test("works", () => {
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

test("works", () => {
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
