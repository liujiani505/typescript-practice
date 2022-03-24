// if statement

let cheese:string
const value:string = "medium"

if(value === "expensive") {
    cheese = "manchego"
} else if (value === "medium"){
    cheese = "gouda"
} else {
    cheese = "American"
}

console.log(cheese)

// checking if a variable has a value
// everything is true expect false, 0, "", undefined, null, NaN
if(!cheese) {
    console.log("You have no cheese")
}

// Switch statement
let cheese2:string

switch(value) {
    case "expensive":
        cheese2 = "manchego"
        break
    case "medium":
        cheese2 = "gouda"
        break
    default:
        cheese2 = "American"
}

console.log(cheese2)

// ternary operator (if as an expression)
let cheese3:string
cheese3 = value === "expensive" ? "manchego" : value === "medium" ? "gouda" : "American"
console.log(cheese3)