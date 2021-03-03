var obj4 = {
    f1:function(){
        console.log("this is f1");
        this.f2();
    }
    ,
    f2:function(){
        console.log("this is f2 in obj4")
    }
}

var obj5 = {
    f2:function(){
        console.log("this is f2 in obj5")
    }
}

var arr14 = [1,2,3];
arr14.forEach(obj4.f1,obj4)

var arr16 = {
    f1:function(){
        console.log("this is f1 in obj16");
        //this 引用
        this.f2()
    },
    f2:function(){
        console.log("this is f2 in obj16")
    }
};

var obj17 = {
    f2:function(){
        console.log("this is f2 in obj17")
    }
}

//every 方法
var arr21 = [1,2,6,3,4,5]
arr21.every(function(arg){
    if(arg > 4){
        console.log(arg)
        return false;
    }else{
        console.log("continue")
        return true;
    }
})

//some 方法
var arr22 = [1,2,3,4,5,6]
arr22.some(function(arg){
    console.log(arg)
})
console.log("********")
arr22.every(function(arg){
    console.log(arg)
    return true;
})