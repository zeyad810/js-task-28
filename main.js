const myObj ={
    price:1000,
    quantity:500,
    vat:100,
    shipping:150
}
function newObj(obj) {
    const result = {};
    for (const key in myObj) {
        
        result[key] = myObj[key]*2
    }
    return result;
}
console.log( newObj(myObj));