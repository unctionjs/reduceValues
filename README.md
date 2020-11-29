# @unction/reduceValues

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> ReducerFunctionType<A, B | C, D> => C => Array<A> | Set<A> | RecordType<unknown, A> | string => D

Reduce over a iterable's values.

``` javascript
reduceValues(
  (accumulation) => (current) => `${accumulation}/${current}`
)(
  "~"
)(
  ["Users", "krainboltgreene", "Code"]
)
```

Which will return:

``` javascript
"~/Users/krainboltgreene/Code"
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/reduceValues.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/reduceValues.svg?maxAge=2592000&style=flat-square
