"use strict";
let pName = "Ansab sultan";
console.log(" " + pName.toLowerCase());
console.log(" " + pName.toUpperCase());
function toTitleCase(name) {
    let result = "";
    let words = name.split(" ");
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let firstChar = word.charAt(0).toUpperCase();
        let remainingWord = word.substring(1).toLowerCase();
        let newWord = firstChar + remainingWord;
        result += newWord + " ";
    }
    return result.trim();
}
console.log(" " + toTitleCase(pName));
