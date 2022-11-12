///////--реквайри (require) завжди пишуться зверху---//////////
// const fs = require('fs');
const builder=require('./students/createStudents');



//--зчитати дані з вказаного файла--////
// fs.readFile('./text.txt', (err, data)=>{
//     console.log(err, 'ERROR');
//
//     console.log(data);
//     console.log(data.toString());////--перетворить дані з buffer в стрінгу--//
// })
////--додає дані у вказаний файл--///
// fs.appendFile('./text.txt', ' ola chat \n',(err)=>{
//     console.log('ERR',err);
// })
/////--стирає всі попередні дані і записує замість них нові---///
// fs.writeFile('text.txt', 'WRITE FILE',(err)=>{
//     console.log('ERRORA',err);
// })
////--створення папки (directory)--//
// fs.mkdir('./students',(err)=>{
//     console.log(err);
// })
/////--створить файл з даними у вказаному місці--//
// fs.appendFile('./students/data.json', JSON.stringify({name: 'Dima'}), (err) => {
//     console.log(err);
// })
//////--видалення вказаного файла--///
// fs.unlink('./copy.txt',(err)=>{
//     console.log(err);
// })
////--очищає вказаний файл--//
// fs.truncate('./user/users.js',err => {
//     console.log(err);
// })
/////--видаляє папки (directory)--//
// fs.rmdir('./user',{recursive:true},err => {
//     console.log(err);
// })
/////--видаляє файл (file)--//
// fs.rm('./students', { recursive: true },err => {
//     console.log(err);
// })
///////////////--видаляє файл (file),в подальшому {recursive:true}-буде видалено--//
// fs.rm('./copyText.txt',err => {
//     console.log(err);
// })
////////
//////////--видаляє файл (file)--//
// fs.rm('./text.txt', { recursive: true },err => {
//     console.log(err);
// })
/////--зміна назви файла--/////
// fs.rename('./text2.txt','./users.js',(err) =>{
//     console.log(err);
// } )
/////--не тільки переіменує файл, а і перемістить його у вказане місце--///
// fs.rename('./users.js','./user/users.js',err => {
//         console.log(err);
//     })
//
// fs.appendFile('./user/users.js', ' ola chat \n',(err)=>{
//     console.log('ERR',err);
// })
//
/////--копіювання файлу із вказанням місця зберігання--////
// fs.copyFile('./text.txt','copyText2.txt',err => {
//     console.log(err);
// })
// fs.copyFile('./text.txt','./copyText.txt',err => {
//     console.log(err);
// })
///////////////////////////////////////////////////////////////
// fs.mkdir('./студенти',(err)=>{
//     console.log(err);
// })
//
// fs.rename('./студенти','./students',err => {
//     console.log(err);
// })
// fs.appendFile('./students/createStudents.js','hello', (err) => {
//     console.log(err);
// })
// fs.truncate('./students/createStudents.js',err => {
//     console.log(err);
// })
// fs.rmdir('./студенти',{recursive:true},err => {
//     console.log(err);
// })
// fs.rm('./copyText2.txt',{recursive:true},err => {
//     console.log(err);
// })
// fs.rm('./copyText.txt',err => {
//     console.log(err);
// })

let student1 = builder.studentBuilder('Masha',22);
console.log(student1);
let student2 = builder.studentBuilder('Max',52);
console.log(student2);

// let student2 = builder.fName('Julia',20);
// console.log(student2);



