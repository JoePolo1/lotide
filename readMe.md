# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @joepolo1/lotide`

**Require it:**

`const _ = require('@joepolo1/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual("Orange", "Orange")`: passes or fails assertation when run based on whether what is actually provided is exactly what is expected.
* `assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]))`: passes or fails assertation when run based on whether two provided arrays are exactly the same.
* `assertObjectsEqual(eqObjects(ab, abc), true)`: passes or fails assertation when run based on whether the contents of two provided arrays are exactly the same.
* `countLetters("Count these letters")`: counts the number of each individual letter occurring in a provided string
* `countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })`: returns true or false if the names or values provided are already in the object (in this case, firstNames has a list of names)
* `eqArrays([1, 2, 3], [1, 2, 3])`: returns true or false if two arrays match
* `eqObjects(obj1, obj2)`: returns true or false if two obejcts match
* `findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)`: returns the first key with a matching argument, in this case, Noma would be returned
* `findKeyByValue(bestTVShowsByGenre, "The Wire")`: finds the key of an object based on the value argument provided
* `head([1, 2, 3])`: returns the first element in an array (in this case, 1)
* `letterPositions("Your sentence parameter goes here")`: shows you the string index of each letter in a provided string argument. "Hello" returns the object { H: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }
* `map(words, word => word[0])`: returns an array of provided elements from an argued array, including only the letters provided in the second part of the argument parameters. for this example, words = ["ground", "control", "to", "major", "tom", "can", "you", "hear", "me"]; and this returns ['g', 'c', 't','m', 't','c','y', 'h', 'm'].
* `middle([17, 22, 43, 54, 75, 1])`: returns the middle element of an odd array or the middle two elements of an even numbered array
* `tail([1, 2, 3])`: provides every element in an array after the first (returns [2, 3])
* `takeUntil(arr, x => x === "string!")`: provides every element in an array as a new array, up until a stopping condition is met (in this example the stopping condition is the first time the word "string!" shows up in the provided array parameter argument).
* `without(Source, itemsToRemove)`: removes an element from an array and returns the other elements