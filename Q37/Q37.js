"use strict";
function make_shirt(message = "I love TypeScript", size = "large") {
    console.log(`Making a ${size} shirt with the message: "${message}"`);
}
make_shirt();
make_shirt("I love TypeScript", "medium");
make_shirt("TypeScript is awesome", "small");
