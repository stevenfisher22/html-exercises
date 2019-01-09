// var greet = function (name){
//     return 'hello ' + name;
// }

// console.log(greet())

//*******************
// Declaring variables for add, subtract, and calc
// Pull in add or subtract by passing it through 'operation'

// var add = function (num1, num2){
//     return num1 + num2;
// }

// var subtract = function (num1, num2){
//     return num1 - num2;
// }

// var calc = function(num1, num2, operation){
//     return operation(num1, num2);
// }
// console.log(calc(7,5,add))

// Iterate through each element in the array using .forEach"
// var arr = [-2, 3, 6, 2, 8];

// arr.forEach(function(i){
//     console.log(i);
// });

// Use ".map()" to iterate over array and create new array; It returns true or false so if you try to get rid of negatives, say, it will print 'undefined'
// var arr = [-2, 3, 6, 2, 8];
// var newArr = arr.map(function(i){
//     return i +2;
// })
// console.log(arr);
// console.log(newArr);


// Use '.filter()' to create new array with only elements you want
// var arr = [-2, 6, 3, 8, 2]
// var newArr = arr.filter(function(i){
//     return i > 0;
// });
// console.log(newArr);


// Use 'some()' to return TRUE if at least one element passes condition
var arr = [0, 2, 6, 4, 8, 3]
var some = arr.some(function(i){
    return i < 4;
});
console.log(some);