/**
 * 
 * TASKS
 *  1. PALINDROMIC WORD
 *  2. ODD OR EVEN NUMBER
 * 
/**/


/**
 *
 *  TASK TWO: ODD OR EVEN NUMBER
 *  1. ASK THE USER TO CHOOSE BETWEEN ODD OR EVEN
 *  2. ASK THE USER TO INSERT A NUMBER BETWEEN 1 & 5
 *  3. GENERATE A RANDOM NUMBER, BETWEEN 1 & 5, FOR THE COMPUTER (USE A FUNCTION)
 *  4. SUM THE TWO NUMBERS
 *  5. UNDERSTAND IF THE SUM IS ODD OR EVEN (USE A FUNCTION)
 *  6. DECLARE WHO WINS
 * 
/**/

// VARIABLES
/*
var userDecision = prompt('Decide between: Odd or Even?').toLowerCase().trim();
console.log(userDecision);

var userNumber = parseInt( prompt('Choose a Number between 1 and 5'));
console.log('The number chosen from the user is: ' + userNumber);
var computerNumber = randomNumber(1, 5);
console.log('The number chosen from the computer is: ' + computerNumber);

// EVENTS

var sum = userNumber + computerNumber;
console.log('The sum of both number is: ' + sum);

var result = oddOrEven(sum);
console.log('The sum is ' + result);

if(result === userDecision) {
    console.log('User Wins!!!');
} else {
    console.log('Computer Wins!');
}

/**
 * 
 * UTILITIES 
 * 
/**/
/*
function randomNumber(min, max) {
    var randomNumber = Math.floor(Math.random() * max - min + 1) + min;

    return randomNumber;
}

function oddOrEven(number) {
    
    if(number % 2 === 0) {
        return 'even';
    }

    return 'odd';
}
*/




/**
 * 
 *  TASK ONE: PALINDROMIC WORD
 *  1. ASK THE USER TO INSERT A WORD
 *  2. CREATE A FUNCTION TO UNDERSTAND IF THE USER'S WORD IS PALINDROME OR NOT
 * 
/**/

// VARIABLE

var userWord = prompt('Please enter a word here').toLowerCase().trim();
console.log(userWord);

var isPalindromes = isPalindrome(userWord);
// console.log(isPalindromes);

// DECISION TO DETERMINE IF THE WORD IS PALINDROME OR NOT

if(isPalindromes === userWord) {
    console.log('The word ' + userWord + ' is Palindrome!!!');
} else {
    console.log('The word ' + userWord + ' is not Palindrome...');
}

/**
 * 
 * UTILITIES
 * 
/**/


/**
 * 
 * @param {word} word // TO UNDERSTAND IF THE WORD IS PALINDROME
 * @returns isPalindromes
 */

function isPalindrome(word) {
    var isPalindromes = '';

    for( var i = word.length -1; i >= 0; i--) {
        console.log(word[i]);
        isPalindromes += word[i];
    }

    return isPalindromes;
}
