// function parentFunction(a: () => number):number{
//     return a()
// }

// function childFunction ():number {
//     return 5
// }

// console.log(parentFunction(childFunction))
// console.log(parentFunction(()=>7))

// forEach - loops over the array and runs the function for each item
const myArray1: Array<number> = [1,2,3,4,5,6]

myArray1.forEach((item:number, index:number)=>{
    console.log(`Item: ${item} - Index: ${index}`)
})

// map - run a function on each item in the array and return a new array of the return values
console.log(myArray1.map((item:number, index:number) => item + 1))


// filter - return a new array of only items in which the function returns true
function isItEven (item:number, index:number):boolean {
    return item % 2 === 0
}
console.log(myArray1.filter(isItEven))


// some and every - return true or false based on whether the callback functions return true some of the time or everytime
console.log("some:", myArray1.some(isItEven))
console.log("every:", myArray1.every(isItEven))

// find and findIndex, return the first item in which the function returns true (find) or return the index of the first item that returns
console.log("find:", myArray1.find(isItEven))
console.log("findIndex:", myArray1.findIndex(isItEven))

// reduce - takes an array of values and use them to calculate one value
function sum (runningTotal:number, item:number) :number {
    return runningTotal + item
}

console.log(myArray1.reduce(sum, 0))