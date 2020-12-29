let arr13 = [1,2,3,4];
function func(arg){
    if(arg % 2 == 0){
        console.log(arg)
        return true;
    }else{
        return false;
    }
}
let result6 = arr13.forEach(func)
console.log(result6);