const usernames = ['john', 'smith', 'jane', 'admin', 'doe', 'alice'];

for (let i = 0; i < usernames.length; i++) {
  if (usernames[i] === 'admin') {
    console.log(`Hello admin, would you like to see a status report?`);
  } else {
    console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
  }
}
