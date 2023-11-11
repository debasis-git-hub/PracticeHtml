// const arr=[1,2,3,4];
// const sum=arr.reduce((a,b)=>{
//     return a+b;
// });
// console.log(sum);
const usercart=[
    {productid:1,productName:"mobile",price:12000},
    {productid:2,productName:"bike",price:2000},
    {productid:3,productName:"charger",price:13000}
]
const totalAmount=usercart.reduce((totalprice,currentproduct)=>{
return totalprice+currentproduct.price},0)
console.log(totalAmount);
