# JavaScript NaN Comparison Issue

This repository demonstrates a common but easily overlooked error in JavaScript related to comparing NaN (Not a Number) values.

## The Problem

In JavaScript, NaN is a special numeric value that represents an undefined or unrepresentable numerical result.  The unexpected behavior arises when comparing NaN using the equality operators (`==` and `===`).  Crucially, `NaN === NaN` evaluates to `false`.

This behavior can lead to subtle and hard-to-debug errors in code where you expect NaN values to compare equally.

## The Solution

To reliably check for NaN, you should use the `isNaN()` function provided by JavaScript.  This function explicitly checks if a value is NaN.

The solution file (`bugSolution.js`) shows how to use `isNaN()` to correctly handle NaN comparisons. 

## Usage

1. Clone this repository.
2. Run the buggy code (`bug.js`) to observe the incorrect behavior.
3. Run the solution code (`bugSolution.js`) to see the corrected implementation using `isNaN()`.