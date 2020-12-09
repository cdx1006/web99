function orange() {
    console.log("this is orange")
}
orange.prototype = function () {
    this.name = "张三",
    this.price = 20
    this.getPrice = function () { return this.price }()
}
console.log(orange.prototype.getPrice)