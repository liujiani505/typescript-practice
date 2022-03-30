interface StudentInterface {
    name: String,
    age: Number,
    height?: String,
    greeting: () => String,
}


class Student {

    name: String
    age: Number
    height?: String

    constructor(name:String, age:number){
        this.name = name
        this.age = age
    }

    greeting(){
        return "Hello"
    }
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

const ListOfStudents2: Array<Student> = [
    new Student("Tim", 14),
    new Student("Jimmy", 14),
    new Student("Susie", 14),
]


console.log(ListOfStudents2)




