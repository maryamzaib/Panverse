function makeSandwich(...items: string[]): void {
    console.log(`Making a sandwich with ${items.join(', ')}...`);
  }
  
  makeSandwich('lettuce', 'tomato', 'cheese');
  makeSandwich('turkey', 'bacon', 'mayo', 'avocado');
  makeSandwich('peanut butter', 'jelly');
  