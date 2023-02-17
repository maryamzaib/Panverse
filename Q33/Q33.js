"use strict";
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] == 1) {
        console.log(numArray[i] + 'st');
    }
    else if (numArray[i] == 2) {
        console.log(numArray[i] + 'nd');
    }
    else if (numArray[i] == 3) {
        console.log(numArray[i] + 'rd');
    }
    else {
        console.log(numArray[i] + 'th');
    }
}
