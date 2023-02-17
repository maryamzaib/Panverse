"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guestList = ["Marie Curie", "Stephen Hawking", "Albert Einstein", "Leonardo da Vinci", "Oprah Winfrey", "Malala Yousafzai"];
console.log("Bad news, everyone. The new dinner table won't arrive in time, so we can only invite two guests for dinner.");
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest}, I won't be able to invite you to dinner. I hope we can catch up another time.`);
}
guestList.forEach(guest => {
    console.log(`Dear ${guest}, I would be honored if you could still join me for dinner. While I'm disappointed that we can't all be together, I'm looking forward to a great evening with you.`);
});
guestList.pop();
guestList.pop();
console.log(guestList);
