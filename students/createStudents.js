function studentBuilder(name,age) {
    return{
        name,
        age,
        sleep:()=>{console.log(`no sleep, i am student.`)}
    }
}
module.exports={
    studentBuilder
}

// module.exports.fName=studentBuilder;

// module.exports={
//     creator: (name,age)=> {
//     return{
//         name,
//         age,
//         sleep:()=>{console.log(`no sleep, i am student.`)}
//     }
// }, lesson:'FS'
// }





