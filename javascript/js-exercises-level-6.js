function lvl6exercise1(num) {
	// Return 'hello' if num is 1, 'world' if num is 2, otherwise return'bye'
	if (num == 1) {
		return 'hello'
	} else if (num == 2){
		return 'world'
	} else {
		return 'bye'
	}
}

	// Switch Statement version
	// switch(num){
	// 	case 1:
	// 		return 'hello'
	// 	case 2: 
	// 		return 'world'
	// 	default:
	// 		return 'bye'
	// }

	// Switch Statement with correct Break statements
	// var x;
	// switch(num){
	// 	case 1:
	// 		x = 'hello';
	// 		break;
	// 	case 2: 
	// 		x = 'world';
	// 		break;
	// 	default:
	// 		x = 'bye';
	// 		break;
	// }
	// return x;

function lvl6exercise2() {
	// Push 10 "hello" strings into the array using a for loop, then return it
	var array = [];
	for (var count = 0; count < 10; count ++) {
		array.push("hello")
	}
	return array;
}

function lvl6exercise3() {
	// Empty this array using a while loop and return it
	var array = ["hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello"];
	// while (array.length > 0) {
	// 	array.pop();
	for (var i = array.length; i > 0; i--){
		array.pop();
	}
	return array;
}

console.log(lvl6exercise3())