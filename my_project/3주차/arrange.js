const arr1 = new Array();
const arr2 = [];
const arr3 = [1,2,3,4,5];
const arr4 = new Array(5);
const arr5 = new Array(5).fill(5) //해당 값으로 모두 초기화

console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr4) //(5) [empty × 5]
console.log(arr5)

// Array.from(초기화 할 배열, 함수(배열의 값, 인덱스))
const arr6 = Array.from(Array(5), function(v,k){
    return k+1
})

//arrat.lengths
console.log(arr3.length)
arr3.length = 3;
console.log(arr3) //길이 줄이면 뒤의 요소 삭제됨 
arr3.length = 10;
console.log(arr3) // 길이 늘이면 empty로 늘어남 

//join
console.log(arr3.join(","));

//reverse
console.log(arr3.reverse())
console.log(arr3)  //한번 reverse 사용하면 원래 배열에 영향 

//concat 두 배열 합치기 
console.log(arr3.concat(arr5))

//push,pop,shift,unshift
const arr = [1,2,3,4,5]
arr.push(7,8,9);
console.log(arr);
arr.pop(); //9
arr.pop(); //8
console.log(arr.pop())

arr.shift();
arr.shift();
arr.unshift(10);
console.log(arr);

//slice(start index, finish index)
// 슬라이스의 경우 원본 배열 변화 x <-> reverse 
console.log(arr.slice(1,3)) 
console.log(arr)

//splice(start index, 몇 개 삭제)
const a = [2,6,4,7,1];
console.log(a.splice(1,2))
console.log(a)

//배열의 순회 : for, for of 
// for in 이랑 for of는 다름 
let b = [1,2,3,4,5];
for(let i = 0 ; i < 5 ; ++i){
    console.log(b[i]);
}


let c = [1,2,3,4,5];
for(let item of c){
    console.log(item);
}

//배열의 type
let arr7 = [1,2,3,4,5];
console.log(typeof(arr7)) //object
arr7["key"] = "value";
console.log(arr7)
console.log(arr7.length) //길이는 여전히 5 




