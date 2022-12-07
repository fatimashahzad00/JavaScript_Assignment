// Dinner Guests:

// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
guest = ['Ava', 'Sara', 'John']
console.log("Sorry, " + guest[1] + " you can't make it to dinner");
guest.splice(1,1, "Chris")
console.log(guest[0] + ", Please come to Dinner")
console.log(guest[1] + ", Please come to Dinner")
console.log(guest[2] + ", Please come to Dinner")

// • Add one new guest to the beginning of your array.
guest.unshift("Ema")
// • Add one new guest to the middle of your array
guest.splice(2,0, "Ranzel")
// Use append() to add one new guest to the end of your list. 
guest.push("Semson")
// • Print a new set of invitation messages, one for each person in your list.
console.log(guest[0] + ", Please come to Dinner")
console.log(guest[1] + ", Please come to Dinner")
console.log(guest[2] + ", Please come to Dinner")
console.log(guest[3] + ", Please come to Dinner")
console.log(guest[4] + ", Please come to Dinner")
console.log(guest[5] + ", Please come to Dinner")

// print a message indicating the number of people you are inviting to dinner.
let length = guest.length;
console.log(length);