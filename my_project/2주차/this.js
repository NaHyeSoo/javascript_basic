/*
함수 역시 객체의 속성이 될 수 있음
속성의 값으로 함수가 들어가면 그 함수를 method라고 부름 

예약어 this 
함수가 불리었을때 어떤 객체에 바인딩 된 속성으로 불렸는지 알 수 있게해줌

브라우저에서 코드를 실행하고 있으므로 가장 바깥(전역)에 선언한 함수들은 
모두 윈도우라는 브라우저 오브젝트에 바인드됨 
*/

function f(){
    console.log(this)
    console.log("f is called")
}

function setName(name){
    this.name=name
}

var o = {name:"object", method:f, setName:setName}
var o2 = {name:"", setName:setName}


f()
o.method()  //객체의 메소드로서 호출 


o.setName("object1")
o2.setName("object2")
console.log(o,o2)

