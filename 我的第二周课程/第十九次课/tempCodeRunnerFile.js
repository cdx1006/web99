

function Chestnut(name,price,origin,weigth){
    this.name = name,
    // this.__proto__ = "",
    this.price = price,
    this.origin = origin,
    this.weight = weigth,
    this.printName = function(){
        console.log("this is" + this.name)
    }
}
Chestnut.prototype.printName2 = function(){
    console.log("this is chestnut prototype")
}
let che1 = new Chestnut("大栗子",20,"江西",12)
che1.printPrice = function(){
    console.log("this is price" + this.price)
}
che1.printPrice()

console.log(che1.__proto__)
console.log(Chestnut.prototype)