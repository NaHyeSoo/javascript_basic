if(true){
    console.log("이 구문은 실행됨")
}
if(false){
    console.log("이 구문은 실행안됨")
}


console.log("menu")
console.log("1 : ice cream")
console.log("2 : americani")
console.log("3 : cafe latte")

var choice = parseInt(prompt("메뉴를 선택해 주새요."))
console.log(choice + "번 메뉴 선택")

switch(choice){
    case 1:
        console.log("아이스크림은 1000원")
        break
    case 2:
        console.log("아메리카노 2000원")  
        break
    case 3:
        console.log("카페라떼 1500원")
        break
    default:
        console.log("그런 메뉴는 없습니다.")    
}