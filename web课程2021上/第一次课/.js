console.log(typeof factory);

//  如何定义数组
var a = 1; //用var类型定义一个变量
let b = 2; //es6提供的let关键字，定义一个变量
const c = 3;//定义一个常量
var arr1 = [1,2,3,4];//定义一个数组
var arr2 = new Array(4);//通过关键字Array关键字来定义数组
console.log(arr1.length)//获取数组的长度
console.log(arr1[1])//获取数组的值
arr1[1] = 6;//改变数组的值
//数组的操作
//如果想往数组里面添加新元素
arr2.push(5);
//如果想把数组里面的元素弹出去
arr2.pop();
//js是一种弱类型的编程语言
var arr3 = [1,2,3,'a',{},function(){}]
//定义一个空数组
var arr5 = [,,,,,]
var arr6 = [
    {
        name:"list",
        age:20
    },
    {
        name:"wangwu",
        age:40
    }
]

//new 是否可以省略？
var arr7 = new Array(3);
//new 这个关键字是可以省略的
var arr8 = Array(4);
//如果只是声明一个数组，里面没有具体的赋值，那么它的默认值是underfined
console.log(arr7[0]);
console.log(arr8[1]);
//Array 是什么类型？ 是对象类型的
var arr9 = [];
console.log(typeof arr9);
//from 数组自带方法 从一个字符串转化成一个数组
let flag = "1234abcde";
let result = Array.from(flag);
console.log(result)
//of 数组自带方法
let result2 = Array.of("abc","123");
console.log(result2)

let result3 = Array(10)//这个数组长度是10
console.log(result3.length)
result3.length = 8;//数组的长度是重新改掉
console.log(result3[9])
//数组的遍历
let arr10 = [1,2,3,4,5,6];
//使用for循环进行遍历
for(var i = 0;i < arr10.length;i++){
    console.log(arr10[i]);
}
//使用for in循环进行打印
let arr11 = [1,2,3,4,5,6];
for(var a in arr11){
    console.log(a);//a是数组下标
    console.log(arr11[a])
}
//普通的for 和 for in有什么区别？
var obj1 = {
    name:"zhangsan",
    age:20,
    address:"nanchang"
}
//我想把obj1对象里面的内容都打印出来
var obj2 = {
    name:"zhangsan",
    age:20,
    address:"nanchang"
}

for(var b in obj2){
    console.log(obj2[b])
}
//第三种 遍历方式 forEach
//forEach 里面的参数是个函数
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