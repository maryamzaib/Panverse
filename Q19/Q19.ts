const guestList: string[] = ["Marie Curie", "Stephen Hawking", "Albert Einstein", "Leonardo da Vinci", "Oprah Winfrey", "Malala Yousafzai"];

const numGuests = guestList.length;
console.log(`I'm inviting ${numGuests} people to dinner:`);

guestList.forEach(guest => {
  console.log(guest);
});
export{}