// Original list of travel destinations
const travelList: string[] = ["Japan", "Egypt", "Iceland", "Peru", "Thailand"];

// Print the list in its original order
console.log("Original order:");
console.log(travelList);

// Print the list in alphabetical order without modifying it
console.log("Alphabetical order:");
console.log([...travelList].sort());

// Show that the original list is still in its original order
console.log("Original order (again):");
console.log(travelList);

// Print the list in reverse alphabetical order without modifying it
console.log("Reverse alphabetical order:");
console.log([...travelList].sort().reverse());

// Show that the original list is still in its original order
console.log("Original order (again):");
console.log(travelList);

// Reverse the order of the list and print it
travelList.reverse();
console.log("Reversed order:");
console.log(travelList);

// Reverse the order of the list again and print it
travelList.reverse();
console.log("Original order (again):");
console.log(travelList);

// Sort the list in alphabetical order and print it
travelList.sort();
console.log("Alphabetical order:");
console.log(travelList);

// Sort the list in reverse alphabetical order and print it
travelList.sort().reverse();
console.log("Reverse alphabetical order:");
console.log(travelList);
