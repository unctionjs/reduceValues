/* eslint-disable flowtype/require-return-type */
import {test} from "tap"

import reduceValues from "./index"

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
