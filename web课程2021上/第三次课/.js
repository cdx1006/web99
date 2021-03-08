//for-of 和 for-in循环的区别
//
var arr = ["apple","orange","peach","melon"];
for(var a in arr){
    console.log(a);
}
for(var a of arr){
    console.log(a);
}
//区别：在循环遍历数组的时候，for-in 打印下标，for-of 打印具体的值

//用for-in 遍历对象的属性

Object.prototype.color="blue";
var obj = {
    name:"apple",
    price:20,
    address:"jiangdezhen"
}

for(var o in obj){
    console.log(o);
    console.log(obj[o]);
}

//过滤是否属于自己的属性
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

var num1 = 89;
//把 num1 转换成字符串，如何操作

var result1 = num1.toString();
console.log(result1);
console.log(typeof result1);

//字符串大小转换

var name1 = "apple";
console.log(name1);
var result2 = name1.toUpperCase();
console.log(result2)
var result3 = result2.toLowerCase();
console.log(result3);

//字符串分割

var name4 = "jiangxi,software,university";
var result4 = name4.split(",");
console.log(result4);

//字符串长度

var name5 = "jiangxi,software,university";
var result6 = name5.length;
console.log(result6);

//字符串查找位置（下标）
var name6 = "software,jiangxi,software,university";
var result7 = name6.indexOf("software",1);
console.log(result7);
var result8 = name6.lastIndexOf("software",name6.length);
console.log(result8);

//字符串替换
var name7 = "software,jiangxi,software,university";
var result9 = name7.replace("software","hardware").replace("software","hardware");
console.log(result9);

//查找给定位置的字符
var name8 = "apple";
let result10 = name8.charAt(1);
console.log(result10);
let result11 = name8.charCodeAt(0)
console.log(result11);

//字符串链接
//字符串拼接
var

//字符串切割和提取
var name13 = "apple,orange,peach,melon";
var result13 = name13.slice(1,5);
console.log(result13);
var result14 = name13.substring(1,5);
console.log(result14);
var result15 = name13.substr(1,5);
console.log(result15);