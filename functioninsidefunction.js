function app(){
    const myfun=()=>{
        console.log("hello debasis");
    }
    const add=(n1,n2)=>{
        return n1+n2;
    }
   
    const mul=(n1,n2)=>{
       return n1*n2;
    }
    console.log("inside app");
    myfun();
    console.log(add(2,3));
    console.log(mul(2,3));
}
app();