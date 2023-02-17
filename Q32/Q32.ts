const currentUsers: string[] = ["harry", "bob", "charlie", "dave", "eve"];
const newUsers: string[] = ["frank", "gina", "bob", "HARRY", "irene"];

for (let i=0;i< newUsers.length;i++ ) {
const lowerNewUser = newUsers[i].toLowerCase();
  if (currentUsers.some(user => {user.toLowerCase() == lowerNewUser})) {
    console.log(`Sorry, the username "${newUsers[i]}" is already taken. Please choose a different username.`);
  } else {
    console.log(`The username "${newUsers[i]}" is available.`);
  }
}
