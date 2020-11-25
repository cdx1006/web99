function apple13(){
    var name ="苹果13";
    function apple13Son(){
        console.log("this is apple 13 son")
    }
    apple13Son()
    console.log("this is apple13 ")
    return {
        test:apple13Son
    }
}
apple13().test();
