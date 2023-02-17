function make_shirt(message: string = "I love TypeScript", size: string = "large"): void {
    console.log(`Making a ${size} shirt with the message: "${message}"`);
  }
  
  make_shirt();
  
  make_shirt("I love TypeScript", "medium");
  
  make_shirt("TypeScript is awesome", "small");
  