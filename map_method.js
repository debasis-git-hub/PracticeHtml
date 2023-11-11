// const number=[3,6,4,7];
// const square=function(number){
//     return number*number;
//     // console.log(number*number);
// }
// const squarenumber=number.map(square);
// console.log(squarenumber);
const user=[
    {fname:"debasis",age:23},
    {fname:"sonu",age:29}
]
const superuser=user.map((user)=>{
    return user.age,user.fname;
});
console.log(superuser)