// callback function
function myfun2(name){
    console.log("inside my fun 2");
    console.log(`your name is ${name}`);
}
function myfun(callback){
    console.log("hello i am here");
    callback("debasis");
}
myfun(myfun2);