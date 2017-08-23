/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import reduceValues from "./source"

test(({equal, end}) => {
  equal(
    reduceValues(
      (accumulation) =>
        (current) =>
          `${accumulation}/${current}`
    )(
      "."
    )(
      ["a", "b", "c"]
    ),
    "./a/b/c"
  )

  end()
})

test(({equal, end}) => {
  equal(
    reduceValues(
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
    ),
    "./a/b/c"
  )

  end()
})

test(({equal, end}) => {
  equal(
    reduceValues(
      (accumulation) =>
        (current) =>
          `${accumulation}/${current}`
    )(
      "."
    )(
      new Map([["aaa", "a"], ["bbb", "b"], ["ccc", "c"]])
    ),
    "./a/b/c"
  )

  end()
})

test(({equal, end}) => {
  equal(
    reduceValues(
      (accumulation) =>
        (current) =>
          `${accumulation}/${current}`
    )(
      "."
    )(
      new Set(["a", "b", "c"])
    ),
    "./a/b/c"
  )

  end()
})
