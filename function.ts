//
function addOne(a:number, b:number): number {
    return a + b
}

const result:number = addOne(5, 6)

console.log(result)

//
const subtractOne: Function = function (a:number, b:number) :number {
    return a - b
}
const result2 = subtractOne(5, 5)
console.log(result2)

//
const multiplyOne: Function = (a: number, b: number) :number => {
    return a * b
}
const result3:number = multiplyOne(5,5)
console.log(result3)

