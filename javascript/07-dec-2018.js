// 1. 

// var myString = 'hello';
// var myArray = myString.split('');
// var reverse = myArray.reverse();
// var reverseString = reverse.join('');

// console.log(reverseString)


// 2. 

// function reverse (str){
// 	let reverse = '';
// 	for (let character of str){
// 		reverse = char + reverse;
// 	}
// 	return reverse;
// }

// console.log(reverse('hello'));


// 3. 

// function palindrome (str){
// 	let newString = str.split('');
// 	if (newString.reverse().join('') === str){
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }

// console.log(palindrome('hello'));


// 4. 

var i = 34;
var iString = i.toString();
var iSplit = iString.split('').reverse().join('');


