function makeCounterFunction(initVal){
	var count = initVal;
	function Increase(){
		count++;
		console.log(count);
	}
	return Increase;
}

var counter1 = makeCounterFunction(0);  // 1 출력
var counter2 = makeCounterFunction(10); // 11 출력

/*
counter 1,2 함수가 호출되었을 때 count 값이 다르다. 이는 클로저 때문 
함수 바깥에서 count 변수에 직접 접근할 수 있는 방법이 없다. 

counter1의 closure
함수 : function Increase(){}
환경 : var count = 0;

counter2의 closure
함수 : function Increase(){}
환경 : var count = 10;
*/