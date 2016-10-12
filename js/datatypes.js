// String
var name = String('Tom')
var name2 = 'Tom'
// console.log(name === name2) // is true

// var word = '      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.      ' // Lorem works

// console.log(word.length) // a property of word that is already known by js.  Stored in a variable and printed to screen when called with the property call
// console.log(word.toUpperCase()) // a method is a behavior to paint the word variable in all uppercase.
// console.log(word.toLowerCase().trim())
// console.log(word.trim())
// console.log(word)

var word = `pizza,is,amazing`
// word = `Pizza is amazing`.substr(-7,7) // substr specifies starting point and length
// word = `Pizza is amazing`.slice(9,16) // slice uses start and ending index points
word = word.split(',') // comma delimited CSV
// word = word.repeat(5)
console.log(word)

// Number

var number = Number(1)
var number2 = Number('1')
var number3 = 1

// console.log(number === number2 && number2 === number3)

// Boolean

var bool = Boolean(true)
var bool2 = true
// console.log(bool === bool2)

// Date
// Math
// Object
// Array
