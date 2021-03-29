/**
 * 
 * TASKS
 *  1. PALINDROMIC WORD
 *  2. ODD OR EVEN NUMBER
 * 
/**/



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

switch(userWord === isPalindromes) {
    case userWord === isPalindromes:
        console.log('La parola: ' + userWord +' è Palindroma!');
        break;
    default:
        console.log('La parola: ' + userWord +' non è Palindroma...');
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