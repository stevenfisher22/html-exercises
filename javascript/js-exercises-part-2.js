// 1. Madlib

// var answers = ['Steven ', ' dogs' ];
// console.log(answers[0] + 'really loves' + answers[1] + '.')

// function madlib (name, subject) {
//     var output = name + ' really likes ' + subject + '.';
//     console.log(output);
//     return output;
// }

// madlib('Steven', 'art')


// 2. Tip Calculator

// function tipAmount (billAmount, serviceLevel) {
//     if (serviceLevel == 'good') {
//         var tipAmount = billAmount * .20
//     } else if (serviceLevel == 'fair') {
//         var tipAmount = billAmount * .15
//     } else if (serviceLevel == 'bad') {
//         var tipAmount = billAmount * .10
//     } 
//     console.log(tipAmount)
// }

// tipAmount (20, 'good')


// 3. Tip Calculator 2

// function tipAmount (billAmount, serviceLevel) {
//     if (serviceLevel == 'good') {
//         var tipAmount = billAmount * .20
//         var totalAmount = billAmount + tipAmount
//     } else if (serviceLevel == 'fair') {
//         var tipAmount = billAmount * .15
//         var totalAmount = billAmount + tipAmount
//     } else if (serviceLevel == 'bad') {
//         var tipAmount = billAmount * .10
//         var totalAmount = billAmount + tipAmount
//     } 
//     console.log(totalAmount)
// }

// tipAmount (20, 'bad')



// 4. Print Numbers

// function printNumbers (startNum, endNum) {
//     var count = startNum;
//     while (count < endNum){
//         count += 1;
//         console.log(count)
//     }
// }

// printNumbers(5, 10)


// function printNumbers (startNum, endNum) {
//     for (var count = startNum; count <= endNum; count ++){
//         console.log(count)
//     }
// }

// printNumbers(5, 10)



// 5. Print a Square *******

function printSquare (num) {
    for (var i = 0; i <= num * num; i++){
        console.log("*")
    }
}

// Loop-Exercises.py Version:
// n = int(input('Enter a number: '))
// for i in range(n):
//     print('*' * n)

printSquare(4)


// 6. Print a Box *******

// Loop-Exercises.py Version:
// # width = int(input('Enter a number: '))
// # height = int(input('Enter a number: '))

// # print ('*' * width)

// # num_spaces = width - 2
// # spaces = ' ' * num_spaces
// # for i in range(height - 2):
// #     print('*' + spaces + '*')

// # print('*' * width)



// 7. Print a Banner *******




// 8. Leetspeak *******

// Loop-Exercises.py Version:
// # string = input('What can I convert for you today? ')
// # string = string.upper()
// # string = string.replace('A','4').replace('E','3').replace('G','6').replace('I','1').replace('O','0').replace('S','5').replace('T','7')
// # print(string)


// 9. Long-Long Vowels *******

// Loop-Exercises.py Version:
// # string = input('What\'s your favorite food? ')
// # string = string.lower()
// # string = string.replace('aa','aaaaa').replace('ee','eeeee').replace('ii','iiiii').replace('oo','ooooo').replace('uu','uuuuu')
// # print(string)


// 10. Just the Positives *******

// Loop-Exercises.py Version:
// # numbers = [0, 1, -2, 3, 4, -5, 6, 7, 8]
// # positiveNumbers = []
// # for i in numbers:
// #     if i > 0:
// #         positiveNumbers.append(i)

// # print(positiveNumbers)