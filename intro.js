console.log("Hello")

const firstName = "Homero"
let age = 27
let isCool = true
let capstoneName = null // Null is intentionally abesnt of value
let newTattoo = undefined // undefined is unintentionally absent of value
//two slashes
// cmd  /    comment out the whole line
// Benefits are Personal notes to ourselves or ignore code
/* 
    multi line comment
    ased
*/

console.log(firstName)
console.log (`Hello ${firstName}, who has rotated the sun ${age} times.`)
// when using backticks, you can use ${} to reference variable values, and they get placed into the string.

//---------------- Math ---------------
let x = 40
let y = 10
let z = 7 + 8

let sum = x - (y * z)
console.log (sum)

//------------- Conditional Logic ----------
if(x > y) {
    //if code block ONLY runs if the conditional results in something true
    console.log("x is greater than y!")
} else{
    // else code block ONLY runs if the conditional resutls in something false
    console.log("Yeah that's wrong.")
}

if(isCool) {
    console.log("I'm cool")
} else {
    console.log("Git good kid")
}

if(firstName === "Joely") {
    console.log("I'm the GOAT!")
} else {
    console.log("You're just a pretender.")
} 