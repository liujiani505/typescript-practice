// let counter:number = 0

// while (counter < 10) {
//     console.log(counter)
//     if (counter % 5 === 0 && counter > 0){
//         break
//     }
//     counter += 1  
// }

// for(let counter:number = 0; counter < 10; counter += 1) {
//     console.log(counter)
//     if (counter % 5 === 0 && counter > 0) {
//         break
//     }
// }

// iteration of arrays
const myArray: Array<number> = [1,2,3,4,5,6]

// for (let index: number = 0; index < myArray.length; index += 1) {
//     const item:number = myArray[index]
//     console.log(item)
// }

// for (let item of myArray) {
//     console.log(item)
// }

function theThingToDoOnEachLoop (item:number, index:number):void{
    console.log(item)
}

myArray.forEach(theThingToDoOnEachLoop)



