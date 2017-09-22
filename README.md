# reduce-merge-reducers

[![build status](https://img.shields.io/travis/lutangar/reduce-merge-reducers/master.svg?style=flat-square)](https://travis-ci.org/lutangar/reduce-merge-reducers)
[![npm version](https://img.shields.io/npm/v/reduce-merge-reducers.svg?style=flat-square)](https://www.npmjs.com/package/reduce-merge-reducers)

Reduce multiple reducers into a single reducer from left to right and merge their initial states.
> :warning: in order to avoid *unexpected* results one should use plain objects as initial states

```
npm install --save reduce-merge-reducers
```

## Example

```js
const reducer = reduceMergeReducers(
  (state = { C: 3 }) => state,
  (state = { D: 5 }) => state,
);

expect(reducer(undefined)).to.deep.equal({ C: 3, D: 5 });
```

## Why?

This package is a variant of [reduce-reducers](https://github.com/acdlite/reduce-reducers) supporting initial state.
The implementation is based on [naorye](https://github.com/naorye) suggestion regarding the following issue https://github.com/acdlite/reduce-reducers/issues/9
