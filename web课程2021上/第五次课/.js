//rest参数
function point3(...x){
    console.log(x)
}

point3(2,3,45)

//附加：数组里的方法
//shift 方法    返回新数组  原数组会改变
function point4(a,b,c,...d){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
}
point4(1,2,3,4,5,6,7,8)

let arr = [1,2,3,4,5,6,7,8]
let result = arr.shift();
console.log(result)
console.log(arr)

//unshift 方法 类似push 方法    push    pop
let arr2 = [1,2,3,4,5,6,7,8]
let result2 = arr2.unshift(9)
console.log(result2)
console.log(arr2)

//对象的字面量定义
let obj2 = {
    name:"zhangsan",
    age:20,
    address:function address(){
        console.log("this is address")
    },
    //简写方式
    score(){
        console.log("this is score")
    }
}

let obj4 = {}   //字面量形式    语法糖
let obj5 = new Object()

//类的定义
function Point(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
}
Point.prototype.print = function(){
    console.log(this.x)
    console.log(this.y)
    console.log(this.z)
}

//用es6 class 类关键字重写
class Point{
    //构造函数
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    print(){
        console.log(this.x);
        console.log(this.y);
        console.log(this.z);
    }
}

let obj5 = new Point(20,30,40)
obj5.print();

function Point6(x,y,...rest){
    this.x = x;
    this.y = y;
    this.z = rest;
}
Point6.prototype.printX = function(){
    console.log(this.x)
}
Point6.prototype.printX = function(){
    console.log(this.y)
}
Point6.prototype.printX = function(){
    console.log(this.z)
}

class Point6{
    constructor(a,b,...c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    print(){
        console.log("this is print a");
    }
    print(){
        console.log("this is print b");
    }
    print(){
        console.log("this is print c");
    }
}

//  ==  和  === 和 Object.js()
console.log(1==1);
console.log('1'==1);
console.log(1===1);
console.log('1'===1);

console.log(+0 == -0);
console.log(+0 === -0);

console.log(null == undefined);
console.log(null === undefined);

console.log(null == null);
console.log(undefined == undefined);

let test;
console.log(test);
console.log(test1)