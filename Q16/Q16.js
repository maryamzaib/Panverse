"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guestList = ["Stephen Hawking", "Albert Einstein", "Oprah Winfrey"];
console.log("Good news, everyone! I found a bigger dinner table!");
guestList.unshift("Marie Curie");
guestList.splice(2, 0, "Leonardo da Vinci");
guestList.push("Malala Yousafzai");
guestList.forEach(guest => {
    console.log(`\nDear ${guest}, I would be honored if you could join me for dinner. With the bigger table, we can accommodate more guests and I'm excited to have you be a part of the conversation.`);
});
