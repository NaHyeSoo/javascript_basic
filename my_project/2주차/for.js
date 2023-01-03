/* for(초기화 구문; 조건식; 업데이트식)){
    반복 실행될 코드
}
*/

var arr = [1,2,3,4,5] ;

for(var i = 0 ; i < arr.length ; i++){
    console.log(arr[i]);
}

// for문에서 continue 만나면 업데이트 구문으로 이동
// 업데이트 구문 실행되고 다시 조건식 비교

// while문에서 continue 만나면 반복실행 코드 끝으로 이동 후 바로 조건식 검사 