function lvl3exercise1() {
	// Create a "hello" and a "world", return the concatenation of the two
	var greeting1 = "Hello";
	var greeting2 = "World";
	return greeting1 + greeting2
}

function lvl3exercise2() {
	// Create a "hello" and a 12, return the concatenation of the two
	var greeting1 = "Hello";
	var num1 = 12;
	return greeting1 + num1
}

function lvl3exercise3() { 
	// Create a variable that equals 12 and convert it to a string with concatenation. Return it.
	var num1 = 12;
	var string1 = num1.toString();
	return num1 + string1;
}

function lvl3exercise4() {
	// Create a "hello world!" string. Return the length of the string
	var string1 = "Hello world!";
	return string1.length;
}

function lvl3exercise5() {
	// Create a "hello world!" string. Return the index of the word "world".
	var string1 = "Hello world!";
	return string1.indexOf('world')
}

console.log(lvl3exercise3())