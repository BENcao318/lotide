# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ben318/lotide`

**Require it:**

`const _ = require('@ben318/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Compare two arrays in the arguments and console.log the result
* `assertEqual(actual, expected)`: Compare the two arguments with each other and log the result
* `assertObjectsEqual(obj1, obj2)`: Compare the two object arguments with each other and log the result
* `countLetters(string)`: Count the number of letters  inside the string argument and return the result
* `countOnly(allItems, itemsToCount)`: Count the number of items in the array argument based on the itemsToCount(object), then return the result as an object
* `eqArrays(arr1, arr2)`: Compare the two array arguments with each other and return the result
* `eqObjects(obj1, obj2)`: Compare the two object arguments with each other and return the result
* `findKey(object, callbac)`: Find the key in the object argument that satisfies the condition provided by the callback function and return the result
* `findKeyByValue(obj, keyValue)`: Find the key from the object argument that is matching the keyValue argument and return the result
* `flatten(nestedArray)`: Flatten the nestedArray argument to 1D-array and return the result
* `head(arr)`: Find the first element in the array argument and return the result
* `letterPositions(sentence)`: Index all the letter positions in the provided sentence argument and return the result as an object
* `map(array, callback)`: Create a new array based on the array argument and the conditions from the callback function and return the result
* `middle(arr)`: Find the middle element in the array argument and return the result
* `without(sourceArr, itemsToRemoveArr)`: Remove the requested item from the sourceArr and return the new array 