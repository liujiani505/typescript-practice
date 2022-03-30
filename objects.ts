interface StudentInterface {
    name: String,
    age: Number,
    height?: String,
    greeting: () => String,
}

// const Tim: StudentInterface = {
//     name: "Tim",
//     age: 14,
//     greeting: () => "Hello"
// }

// console.log(Tim)
// console.log(Tim.age)
// console.log(Tim["age"])

// Tim.height = "5ft 6in"

function makeStudent(name: String, age: Number) : StudentInterface {
    return {
        name,
        age,
        greeting: () => "Hello"
    }
}

const ListOfStudents: Array<StudentInterface> = [
    makeStudent("Tim", 14),
    makeStudent("Jimmy", 14),
    makeStudent("Susie", 14),
]

console.log(ListOfStudents)




