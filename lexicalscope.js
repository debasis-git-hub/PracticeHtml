// const myvar="value0";
function myApp(){
    function myfun(){
        // const myvar="values are present"
        const myfun2=function(){
            const myvar="value2";
            console.log("inside my fun",myvar);
        }
        console.log(myfun2());
    }
    myfun();
    const myfun3=()=>{}
    
}
myApp();