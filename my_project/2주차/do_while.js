cond = false

do{
    console.log("이 구문은 한번은 실행됩니다.")
}while(cond); //false면 반복 안해 

do{
    var ans = parseInt(prompt("1+1=?"))
}while(ans != 2) //ans가 2가 아니면 do안의 식이 계속 반복 
console.log("맞췄습니다.")