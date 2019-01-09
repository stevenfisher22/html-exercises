// 1. Positive Numbers

// var arr = [-2, 6, 3, 8, 2]
// var newArr = arr.filter(function(i){
//     return i > 0;
// });
// console.log(newArr);


// 2. Even Numbers

// var arr = [-2, 6, 3, 8, 2]
// var newArr = arr.filter(function(i){
//     return i % 2 == 0;
// });
// console.log(newArr);


// 3. Square the Numbers

// var arr = [2, 3, 8, 4]
// var newArr = arr.map(function(i){
//     return i * i;
// });
// console.log(newArr);


// 4. Cities 1

// var cities = [ 
// 	{ name: 'Los Angeles', temperature: 60.0}, 
// 	{ name: 'Atlanta', temperature: 52.0 }, 
// 	{ name: 'Detroit', temperature: 48.0 }, 
// 	{ name: 'New York', temperature: 80.0 } ];
// var newArr = cities.filter(function(i){
//     return i.temperature < 70;
// });
// console.log(newArr);


// 5. Cities 2

// var cities = [ 
// 	{ name: 'Los Angeles', temperature: 60.0}, 
// 	{ name: 'Atlanta', temperature: 52.0 }, 
// 	{ name: 'Detroit', temperature: 48.0 }, 
// 	{ name: 'New York', temperature: 80.0 } ];
// var newArr = cities.map(function(i){
//     return i.name;
// });
// console.log(newArr);


// 6.. Good Job!

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
// people.forEach(function(i){
//     console.log('Good job, ' + i + '!');
// });


// 7. Sort an Array 1

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
// function peopleSort(i){
// 	return i.sort();
// }
// console.log(peopleSort(people));


// 8. Sort an Array 2
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// function sortArrLength(i) {
//     return i.sort(((a, b) => a.length - b.length));
// }
// console.log(sortArrLength(people)); 


// 9. Sort an Array 3
var arr = [ 
	[1, 3, 4], 
	[2, 4, 6, 8], 
	[3, 6] ];



// 10. 3 Times
function call3Times(fun) { fun(); fun(); fun(); }



// 11. n Times


// 12. Sum an array 


// 13. Acronym - Using reduce method

var a = ['very', 'important', 'person'];
var b = ['national', 'aeronautics', 'space', 'administration']

function acronym(i){
	var p = i.reduce(function(accumulator, currentValue){
		return accumulator + currentValue[0]
	},"");
	return p;
};
console.log(acronym(a));