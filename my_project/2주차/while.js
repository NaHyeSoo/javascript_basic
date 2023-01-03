/* 
continue : 해당 단계 건너뛰고 반복문 처음으로
break : 재어문 중단하고 빠져나가서 뒤쪽 코드 실행 안함 
*/

var count = 0;
while(true){
    var ans;
    ans = parseInt(prompt("1+1=?"))
    if(ans !=2){
        console.log(++count + "번 틀렸습니다. 다시 도전하세요.")
        continue
    }

    ans = parseInt(prompt("3+7=?"))
    if(ans !=10){
        console.log(++count + "번 틀렸습니다. 다시 도전하세요.")
        continue
    }

    ans = parseInt(prompt("4*6=?"))
    if(ans !=24){
        console.log(++count + "번 틀렸습니다. 다시 도전하세요.")
        continue
    }
    break
    //continue를 만나면 여기로 이동 
}
//break 만나면 여기로 이동 
console.log("참 잘했어요.")