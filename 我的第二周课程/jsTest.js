//课后作业题目(20201203)：


//第一道题目 按照下面的几点要求，设计出一个构造函数
//1、构造出一个构造函数，构造函数有4个形式参数，构造函数名为：City。
//2、有4个形式参数(cityName,cityArea,cityPostcode,cityRegions ),城市名称为字符串类型，城市面积
//为数值型，城市邮编为字符串类型，城市区划为数组（南昌市有 东湖区、西湖区、青山湖区、新建区等）。
//3、城市区划数组里面的值为字面量对象类型且对象类型里面有包含属性
//（orgionName,orgionPostcode,orgionArea,名字为字符串类型，邮编为字符串类型，面积为数值型）。
//4、需要在函数的原型上面添加函数：打印名称函数、打印城市面积函数、打印城市邮编函数，打印城市区划函数（需
//要用到循环）。
//6、按照构造函数的形参要求，new 出对象出来，调用原型上的函数。
function City(cityName, cityArea, cityPostcode, cityRegions) {
    this.cityName = cityName;
    this.cityArea = cityArea;
    this.cityPostcode = cityPostcode;
    this.cityRegions = 
}


//第二道题目 目前我们学了两种设计函数的方法，请用 Function 设计出 下列一个函数：
// function City2() {
//     return {
//         name: "this is NanChang",
//         printName: function () {
//             console.log("this city is " + this.name)
//         }
//     }
// }
// City2().printName()


let str = 'return ' + `{
    name:"this is NanChang",
printName: function (){
console.log("this city is " + this.name)
     }}`
let City2 = new Function(str)
City2().printName()


    //第三道题目 请说出下面程序的运行结果
    ; (function (x) {
        console.log("this is chestnut")
        return ((x) => function () {
            console.log("this is haw")
            x.printName = function () {
                console.log("this is x().printName")
                return this.name
            }
            return 200 + x.printName() + x()
        }())(() => { this.name = 6666; console.log("this is pitaya"); return 3999 })
    })()


        //第四道题目 请说出下面程序的运行结果
        + function $() {
            -function () {
                console.log("this is pear")
                void function () {
                    console.log("this is nut")
                    console.log($.name)
                }()
            }()
            this.name = "my name is $"
        }()


//第五道题目 完善代码，计算出 单价和数量的乘积
function watermelon(name, price, number) {
    this.name = name,
        this.price = price,
        this.number = number
}
watermelon.prototype.getSum = function () {
    console.log(this.price * this.number)
}
let watermelon1 = new watermelon("西瓜", 10, 10)
watermelon1.getSum()


//第六题目 请说出下列代码的意图
function $2(x) {
    //console.log(typeof x)
    if (typeof x == "string") {
        let targets = window.document.getElementsByTagName(x)
        if (targets.length > 0) {
            let array = targets;
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                element.style.backgroundColor = "red"
            }
        }
    }
}
$2("div")
//node.js      global
//浏览器v8 引擎 window


//第七题目 请说出下面的运行结果
//如何去遍历这个数组
var lichees = [
    () => {
        return function () {
            console.log("this is number 1")()
        }
    },
    +function () { console.log("this is number 2") }(),
    {
        name: "this is lichee 3"
    },
    2000,
    "this is lichee 4",
    null,
    new Object({}),
    Object.create({}),
    Object.prototype,
    new Object({}).__proto__,
    new Date(),
    function licheeNut() {
        return {
            printNut: () => {
                console.log("thisis printNut")
            }
        }
    },
    Object.prototype.tag = "this is tag",
    Object.tag
]


//第八道题目 $5 如何去调用呢
window.$5 = function () {
    console.log("this is $5 in window object")
}
window.document.$5 = function () {
    console.log("this is $5 in window document object")
}
$5()

//第九道题目 请说出下面的运行结果
; (console.log(1000 / function () {
    console.log("this is anonymous function ");
    return function () { return 2000 / 2 }()
}()))
//1

//第十道题目 请说出下面的运行结果
//如何通过 __proto__ 获得getPrice的调用
function orange() {
    console.log("this is orange")
}
orange.prototype = function () {
    this.name = "张三",
    this.price = 20
    this.getPrice = function () { return this.price }()
}
let orange1 = new orange();