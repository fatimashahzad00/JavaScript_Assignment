// Shrinking Guest List

// your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
guest = ['Ava', 'Sara', 'John']
// Guest can't make to dinner
console.log("Sorry, " + guest[1] + " you can't make it to dinner");
guest.splice(1,1, "Chris")
// Guest can make to dinner
console.log(guest[0] + ", Please come to Dinner")
console.log(guest[1] + ", Please come to Dinner")
console.log(guest[2] + ", Please come to Dinner")
// New Guest add according to index no
guest.unshift("Ema")
guest.splice(2,0, "Ranzel")
guest.push("Semson")
//  New invitation again
console.log(guest[0] + ", Please come to Dinner")
console.log(guest[1] + ", Please come to Dinner")
console.log(guest[2] + ", Please come to Dinner")
console.log(guest[3] + ", Please come to Dinner")
console.log(guest[4] + ", Please come to Dinner")
console.log(guest[5] + ", Please come to Dinner")


// new dinner table won’t arrive in time for the dinner. so this is a message
console.log("Sorry, We can invite only two people to dinner")

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.name1 = guest.splice(5,1)
console.log(name1 + ", Sorry there is no room at the table")
name2 = guest.splice(0,1)
console.log(name2 + ", Sorry there is no room at the table");
name3  = guest.splice(1,1)
console.log(name3 + ", Sorry there is no room at the table");
name4 = guest.splice(2,1)
console.log(name4 + ", Sorry there is no room at the table");

// • Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log(guest[0] + ", Please come to Dinner");
console.log(guest[1] + ", Please come to Dinner");

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guest.splice(0);
guest.splice(1);
console.log(guest);