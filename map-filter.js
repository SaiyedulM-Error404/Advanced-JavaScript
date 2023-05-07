// map, filter, find, smart way to run for loop...............
const numbers = [2,3,4,5,6,7,8,9];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result)
//     // console.log(result);
// }
function square(element){
    console.log(element);
    return element*element;
    
}

numbers.map(square)
// console.log(output);
