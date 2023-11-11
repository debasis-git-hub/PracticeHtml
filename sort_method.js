// const userName=['harsit','abcd','mohit']
// userName.sort();
// console.log(userName);
const usercart=[
    {productid:1,productName:"mobile",price:12000},
    {productid:2,productName:"bike",price:2000},
    {productid:3,productName:"charger",price:13000}
]
// const lowTohigh=usercart.slice(0).sort((a,b)=>{
//     return a.price-b.price
// });
// console.log(lowTohigh);
const highTolow=usercart.slice(0).sort((a,b)=>{
        return b.price-a.price
    });
console.log(highTolow);