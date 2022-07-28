let studentNames = ["john", "bobby", "jason"]

let teachers = [
{
        name: "damian",
        subjects: "arrays,javascript,mongodb"
},
{
     name: "johnathan",
     subjects: "arrays,javascript"
}
]

// sort()
// const sortedStudentNames = studentNames.sort();
// console.log(sortedStudentNames)

// filter()

// const filteredStudentNames = studentNames.filter(
//     // function (student) {
//     //     return student == "bobby"
//     // }
//     // (student) => {
//     //     return student === "bobby"
//     // }
//     // (student) => student === "bobby"
//     // (student) => true // dont do this
// )

// console.log(filteredStudentNames)

//sorten
// StudentNames = studentNames.filter((student)=> true)
// // .some()
// const someBobby = studentNames.some((student) => student === "bobby")
// console.log("Do we have at least a bobby?",someBobby)
// //.every()
// const everyBobby = studentNames.every((student) => student === "bobby")
// console.log("Everyone's a bobby?",everyBobby)


// studentNames.forEach((student) => {
//     console.log(student)
// })
// calling new array of just teacher names
// const justTheNames = teachers.map(teacher => {
//     return teacher.name
// })
// console.log(justTheNames)

let numbers = [10,20,30]
// returning one value reduce() 
let totals = numbers.reduce((accumulator,currentValue,index,array) => {
    return accumulator + currentValue
    // 0 is total starting point
},0)
let total = 0
for (let i  = 0; i < numbers.length;i++) {
    total += numbers[i]
}

total = numbers.reduce((total,currentNumber) => total + currentNumber,0)

console.log(total)

