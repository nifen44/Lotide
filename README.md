# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nifen44/lotide`

**Require it:**

`const _ = require('@nifen44/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: return the head part from an array
* `tail(...)`: return the tail part from an array
* `middle(...)`: return the middle part from an array
* `assertEqual(...)`: compare two valuable
* `eqArrays(...)`: compare two arrays
* `assertArraysEqual(...)`: compare two arrays and print the result