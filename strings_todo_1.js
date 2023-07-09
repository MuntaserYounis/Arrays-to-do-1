// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

function blanks(str) {
    let output = "";

    for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
        output += str[i];
    }
    }

    return output;
}


console.log(blanks(" Pl ayTha tF u nkyM usi c ")); 
console.log(blanks("I can not BELIEVE it's not BUTTER"));

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits.
//  You are allowed to use isNaN() and Number().

// Examples:

// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680


function getDigits(str) {
    let result = 0;
    let multiplier = 1;

    for (let i = str.length - 1; i >= 0; i--) {
    const charCode = str.charCodeAt(i);
      const digit = charCode - 48; // ASCII value of '0' is 48

    if (digit >= 0 && digit <= 9) {
        result += digit * multiplier;
        multiplier *= 10;
    }
    }

    return result;
}


console.log(getDigits("abc8c0d1ngd0j0!8"));
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized).
//  You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

function acronym(str) {
    let result = "";
    let capitalize = true;

    for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === " " || char === "-") {
        capitalizeNext = true;
    } else if (capitalize) {
        result += char.toUpperCase();
        capitalize = false;
    }
    }

    return result;
}


console.log(acronym(" there's no free lunch - gotta pay yer way. "));
console.log(acronym("Live from New York, it's Saturday Night!")); 

// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

function Count(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
        count++;
    }
    }

    return count;
}


console.log(Count("Honey pie, you are driving me crazy"));
console.log(Count("Hello world !"));


// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value,
// returns an array that only contains strings longer than or equal to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']



function removeStrings(arr, length) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= length) {
        result.push(arr[i]);
    }
    }

    return result;
}


console.log(removeStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));

console.log(removeStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));
