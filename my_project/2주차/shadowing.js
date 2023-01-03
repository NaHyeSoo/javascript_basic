function shadowing_ex(){
    var val = 0 
    console.log("F", val)
    val++
}

var val = 0 ;
shadowing_ex() 
console.log("O", val)
