//param destructuring
//objct
//react
const person={
    fname:"debasis",
   gender:"male"
}
// function printdetails(obj){
//     console.log(obj.fname);
//     console.log(obj.gender);
// }
// printdetails(person);
function printdetails({fname,gender}){
    console.log(fname);
    console.log(gender);
}
printdetails(person);
