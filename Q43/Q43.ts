function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]): string[] {
    let great_magicians = [];
    for (let magician of magicians) {
      great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
  }
  
  let magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
  let great_magicians: string[] = make_great(magicians); // create a copy of the array using the spread operator
  
  console.log("Original Magicians:");
  show_magicians(magicians);
  
  console.log("Great Magicians:");
  show_magicians(great_magicians);
  export{}
  