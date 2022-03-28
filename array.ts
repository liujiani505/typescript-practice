const numberArray: Array<number> = [1, 2, 3, 4, 5, 6, 7]

// reverse - reverse the array (mutate)
console.log(numberArray.reverse())

// contact (add two arrays to make NEW array )
console.log(numberArray.concat([5, 5, 5]))

// adding and subtracting values from an array
numberArray.pop() // remove the last item in the array
numberArray.push(8) // add the number 8 at the end of the array
console.log(numberArray)

numberArray.shift() // remove the first thing in the array
numberArray.unshift(9) // add 9 to the front of the array
console.log(numberArray)

// splice, removes and maybe adds items anywhere in the array
numberArray.splice(2, 0, 99)
console.log(numberArray)

// slice makes a new array from subset of the original array
const newArray = numberArray.slice(0, 3)
console.log(newArray)
console.log(numberArray)







