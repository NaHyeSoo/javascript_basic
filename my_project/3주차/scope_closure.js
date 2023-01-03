/* scope : 변수가 어느 범위까지 참조되는지
변수는 선언된 함수 안에서만 접근 가능 
즉, 변수의 scope는 함수의 scope를 따름 */

const a = 5;  //global scope
{
const b = 3;  // local scope 
console. log(a, b);  // 5 3
}
console. log(a, b);  // Error!


//var를 사용하면 오류가 생길 수 있다. (호이스팅)
var c = 5;  
{
    //호이스팅 되어 변수 선언이 상단으로 올라가버린다. 
    //블록 내부에 새롭게 선언하더라도 블록 외부 변수값도 변하게 된다. 
    // var는 함수수준의 scope 이고 let,const는 블록수준의 scope 이기 때문 
    var c = 10; 
    console. log(c);  // 10
}
console. log(c);  // 10


/* closure : 함수가 선언된 환경의 스코프 기억하여 함수가 스코프 밖에서 실행될 때에도 
기억한 스코프에 접근할 수 있게 만드는 문법 */

function makeGreeting (name) {
    const greeting = "Hello,"; //지역 스코프라 함수가 종료되면 메모리에서 사라짐 
    return function () {
    console. log (greeting + name) ;
    };
}    
const world = makeGreeting ("World!");
world(); // 그런데 살행시점에서 greeting이 살아있다. 


//은닉화 : 클로저를 이용해 내부변수와 함수를 숨긴다. 