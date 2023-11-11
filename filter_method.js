const number=[1,2,3,4,5,6];
const oddNumber=number.filter((number)=>{
    return number%2!==0;
});
console.log("odd is",oddNumber);