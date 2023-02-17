let guestList: string[] = ["Albert Einstein", "Oprah Winfrey", "David Bowie"];

let cancellation = "David Bowie";
console.log(`${cancellation} has had to cancel and won't be able to attend the dinner.`);

let replacementGuest = "Stephen Hawking";
let indexOfCancellation = guestList.indexOf(cancellation);
guestList[indexOfCancellation] = replacementGuest;

guestList.forEach(guest =>  {
  console.log(`\nDear ${guest}, I would be honored if you could join me for dinner. Unfortunately, ${cancellation} won't be able to attend, but I'm excited to have you as a guest and hear your thoughts on the world.`);
});

export{}