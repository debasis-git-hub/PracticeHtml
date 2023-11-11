// find the arr value from the given arr name
// const myArr=["Hello","cat","dog","lion"];
// function islength3(string){
//     return string.length===4;
// }
// const ans=myArr.find(islength3);
// console.log(ans);
const users=[
    {userid:1,username:"harsit"},
    {userid:2,username:"deba"},
    {userid:3,username:"sonu"},
    {userid:4,username:"liza"}
];
const myUser=users.find((user)=>user.username==="liza");
console.log(myUser);

