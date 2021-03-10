var obj1 = {
    name:"apple"
}
function printName(a,b){
    console.log(this)
    console.log(this.name);
    console.log(a+b);
}
//这是call形式，传参是传的参数列表
printName.call(obj1,12,13)
//这是apply形式，传参是传的数组列表
printName.apply(obj1,[12,13])
//这是bind形式，传参是如何的？
//返回一个新的的函数
printName.bind(obj1)(22,24)
var temp = printName.bind(obj1)
temp(22,24)

//参数传递的问题

function printPrice(a,b){
    console.log(a);
    console.log(b);
    console.log(arguments.length)
    //this arguments
    //arguments不是真是的数组，而是一个类数组
    for(let int = 0;i < arguments.length;i++){
        console.log(arguments[i])
    }
    console.log("--------")
    Array.prototype.every.call(arguments,function(arg){
        console.log(arg);
        return true;
    });
}

// printPrice(1,2) 
printPrice(1,2,3,4)

//计算属性
var obj61 = {
    name:"apple",
    printPrice4:function(){
 
    }
}

obj61[tmeplate + "name"] = function(){
    console.log("this is ")
}

function Apple(name,price,address){
    this.name = name;
    this.price = price;
    this.address = address;
}

var apple = new Apple("redapple",20,"hebei");
var apple2 = new Apple("greenapple",)