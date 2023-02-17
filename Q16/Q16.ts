const guestList: string[] = ["Stephen Hawking", "Albert Einstein", "Oprah Winfrey"];

console.log("Good news, everyone! I found a bigger dinner table!");

guestList.unshift("Marie Curie"); // Add to the beginning
guestList.splice(2, 0, "Leonardo da Vinci"); // Add to the middle
guestList.push("Malala Yousafzai"); // Append to the end

guestList.forEach(guest => {
  console.log(`\nDear ${guest}, I would be honored if you could join me for dinner. With the bigger table, we can accommodate more guests and I'm excited to have you be a part of the conversation.`);
});
export{}