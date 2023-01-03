function a(){
    var v_a = "a"
    console.log("a :",typeof(v),typeof(v_a),typeof(v_b))

    function b(){
        var v_b = "b"
        console.log("b :",typeof(v),typeof(v_a),typeof(v_b))
    }

    b()
}

var v="v"
a()
console.log("o :",typeof(v),typeof(v_a),typeof(v_b))

//객체(변수)는 선언된 함수 안에서만 접근 가능 
