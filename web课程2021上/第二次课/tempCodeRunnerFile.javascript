var arr22 = [1,2,3,4,5,6]
arr22.some(function(arg){
    console.log(arg)
})
console.log("********")
arr22.every(function(arg){
    console.log(arg)
    return true;
})