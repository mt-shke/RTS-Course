# Typescript Course

```js
// TS => Writing Js with extra doc
// No effect on code execution

// Catch errros during development
// Only active during development
// Type annotations
// No performance optimization

// Ts code > Ts compiler > Old Js
```

<details>
<summary>Main Commands</summary>

```js
// tsc --help

// 1- tsc index.ts => compile index.ts code to a new index.js file
// 2- node index.js => run index.js code

// ts-node => compile ts code and run = (step 1 & 2)
```

</details>

## I - Basics - Syntax + Features

<details>
<summary>Syntax + Features</summary>

```js
// Syntax + Features :
// => what is an interface ?
// => syntax for defining interface
```

<details>
<summary>Types</summary>

```js
// Types in Ts
// Primitives types : string, number, boolean, null, undefined, void, symbol
// Object types : functions, classes, arrays, objects

// Used by Ts compilers to analize our code for errors
// Help others engineers to understand our code
```

```js
// Type of a value => shortcut, easy way to refers to the differents methods and properties that value has
//
```

</details>

<details>
<summary>Type Annotations + Type inference</summary>

```js
// When to use annotations

// 1) Function that returns 'any' type
// => JSON.parse(something) => any

// 2) Variable non initialized
// let isSomeoneHere; // any
// let isSomeoneHere: boolean; // ok
// let isSomeoneHere = false // better
// if(foundPerson) {
//     isSomeoneHere = true;
// }

// 3)Variable whote type cannot be inferred correctly
// let numbers = [-10, -1, -2]
// let numberAboveZero: boolean | numbers= false;
// const num = numbers.find((num) => num >= 0);
// if (num) {
//     numberAboveZero = num;
// }
```

</details>

</details>

## II - Design Patterns

<details>
<summary>Design patterns with TS</summary>

```js
// Design patterns with Ts:
// => how to use interface to write reusable code
```

</details>
