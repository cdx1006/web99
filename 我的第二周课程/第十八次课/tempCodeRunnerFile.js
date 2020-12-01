function Haw(name,price,origin){
    this.name = name;
    this.price = price;
    this.origin = origin;
    this.printName = function(){
        console.log("this is Haw")
    }
}

Haw.prototype.printPrice = function(){
    console.log("prototype print Price")
}

//Haw()

var h1 = new Haw("山楂",2,"河南省");
h1.printName()
h1.printPrice()