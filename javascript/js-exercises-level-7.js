// Write a function that takes a number as an input. 
// Have it create an empty array and then push a string into the array as many 
// times as the input number
//
// Name the function "finalFunction"

function finalFunction (num1) {
    var array = [];
    for (var i = 0; i < num1; i ++) {
        array.push('hello');
    }
    console.log(array)
}

finalFunction(10)