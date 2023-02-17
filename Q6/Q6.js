"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nameWithWhitespace = "\t  \n John Smith \t \n";
console.log("Name with whitespace: " + nameWithWhitespace);
let strippedName = nameWithWhitespace.trim();
console.log("Stripped name: " + strippedName);
