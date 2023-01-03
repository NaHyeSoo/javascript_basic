var obj = {
    name : "object",
    weight : 30,
    isobject : true,
    arr : [1,2,3]
}

for(var propertyname in obj){
    console.log("\t", propertyname, ":", obj[propertyname])
}