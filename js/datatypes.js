var moment = require('moment') // importing moment bits from npm install

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

// var word = `pizza,is,amazing`
// word = `Pizza is amazing`.substr(-7,7) // substr specifies starting point and length
// word = `Pizza is amazing`.slice(9,16) // slice uses start and ending index points
// word = word.split(',') // comma delimited CSV
// word = word.repeat(5)

// var word = 'City of Seattle'
// var indianaIndexStart = word.indexOf("Seattle") // indexOf shows which index the matching word starts
// var whatIsTheLetter = word.charAt(indianaIndexStart)
// var isItIndianapolis = word.includes('Seattle')  // Regular expression with includes matching letters specified
// word = word.replace("Seattle","Indianapolis")
// console.log(whatIsTheLetter)
// console.log(isItIndianapolis)
// console.log(word)
//
// var phoneNumber = 'Phone Number 123-456-7890'
// var hasPhoneNumber = phoneNumber.match(/\d\d\d-\d\d\d-\d\d\d\d/) // regex uses variable.match()  with forward slash encompassing statement /\d\d\d/ etc.
// console.log(hasPhoneNumber[0]) // square brackets pulls out exactly the index of the value found matching
// console.log(hasPhoneNumber.index) // square brackets pulls out exactly the index of the value found matching
// console.log(hasPhoneNumber.input) // square brackets pulls out exactly the index of the value found matching
//
// var phoneNumber = 'Phone Number 425-333-4444'
// var hasPhoneNumber = phoneNumber.match(/\d\d\d-\d\d\d-\d\d\d\d/) // regex uses variable.match()  with forward slash encompassing statement /\d\d\d/ etc.
// var hasPhoneNumber = phoneNumber.replace(/\d\d\d-\d\d\d-\d\d\d\d/gi, '[REDACTED]') // /g greedy and /i case insensitive
// console.log(hasPhoneNumber) // square brackets pulls out exactly the index of the value found matching


// Number

var number = Number(1)
var number2 = Number('1')
var number3 = 1

number = number + (number * 50)
number++

// console.log(number)

// console.log(number === number2 && number2 === number3)

// Boolean

// var bool = Boolean(true)
// var bool2 = true
// console.log(bool === bool2)

////////////
// Date
////////////
//
// var today = new Date()
// var yestarday = moment().subtract(180, 'day')
// var yestarday = moment().subtract(2400, 'seconds')
//
// console.log(today)
// // console.log(yestarday.toString())
// // console.log(yestarday.calendar())
// console.log(yestarday.format("MM/DD/YYYY HH:mm:ss")) // formatting for date printout
// Math
//
// var cost = Math.round(5.65)
// var cost2 = 4.20
// var cost3 = Math.ceil(cost2)
// var cost4 = Math.floor(cost2)
//
// console.log(cost)
// console.log(Math.round(cost2))
// console.log(cost3)
// console.log(cost4)
// console.log(Math.PI)
// console.log(Math.round(Math.random() * 10))
//
// var price = 4.2043
// // price = parseFloat(price, 2) // didn't work
// var cents = String(price).split('.')[1].substr(0,2) // Trimming off everything beyond two decimals.  Use premade libraries for this like accountingJS or something
// var dollars = String(price).split('.')[0]
// price = dollars + '.' + cents
// console.log(price)

////////////
// Object //
////////////

var pizza = Object()
var pie = {
    ingredients : 'stuff',
    meat: 'pepperoni',
    cheese: 'mozzarella',
    price: 14.99,
    priceRounded: Math.round(14.99)
} // same as Object()
console.log(pie.cheese)
////////////
// Array //
////////////

var ingredients = [
    'meat',
    'cheese',
    'sauces',
    'noms',
    12.32,
    function() {
        blah blah
    }]
console.log(ingredients[2])
