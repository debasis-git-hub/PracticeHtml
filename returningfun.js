function  myfun(){
    function hello(){
        return "helloworld";
    }
    return hello;
}
const ans=myfun();
console.log(ans());