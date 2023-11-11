// function addtwo(a,b){
//     return a+b;
// }
// console.log(addtwo(2,4));
// now default is
const addtwo=(n1,n2=0)=>{
    return n1+n2;
}
console.log(addtwo(2));