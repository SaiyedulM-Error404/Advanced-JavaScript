map, filter, find, smart way to run for loop...............
const numbers = [2,3,4,5,6];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element*element;
    output.push(result)
    // console.log(result);
}
function square(element){
    console.log(element);
    return element*element;
    
}

numbers.map(function(element,index,array){
    console.log(element, index, array);
})
console.log(output);
const square = element => element;
const result1 = numbers.map(element => element*element)
console.log(result1);
console.log("This is the second result ");
const result = numbers.map(function(element){
    return element*element;
})
console.log(result);



Filter......Porgram

let numbers = [2,3,4,5,6,7,8];
let bigger = numbers.filter(x =>x <2);
console.log(bigger);

// Find .........Program
let isThere = numbers.find(x => x < 5);
console.log(isThere);