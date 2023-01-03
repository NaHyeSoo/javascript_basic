const obj1 = new Object();
const obj2 = {};
const obj = {name:'나방',height:154};

console.log(obj1);
console.log(obj2);
console.log(obj);

//객체 값 추가, 삭제 
obj["uni"] = "cnu"
console.log(obj)

obj.phone = "apple"
console.log(obj);

delete obj.phone;
console.log(obj)

console.log("email" in obj);
console.log("uni" in obj);

//keys, values 집합
console.log(Object.keys(obj))
console.log(Object.values(obj))

//객체의 순회 for in
for(key in obj){
    console.log(key,obj[key])
}


