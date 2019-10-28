// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    /** SOLUTION 1 **/
    // return str.split``.reverse``.join``;

    /** SOLUTION 2 O(n)**/
    // let len = str.length - 1;
    // let reversed = '';
    // for(let i = len; len >= 0; i--){
    //     reversed += str[i];
    // }
    // return reversed;

    /** SOLUTION 3 O(n)**/
    // let reversed = '';
    // for(let character of str){
    //     reversed = character + reversed;
    // }
    // return reversed;

    /** SOLUTION 4 **/
    return str.split``.reduce((rev, char)=>char + rev,'');
}

module.exports = reverse;
