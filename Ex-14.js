// Changing Guest List

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
guest = ['Ava', 'Sara', 'John']
console.log(guest[0] + ", Please come to Dinner")
console.log(guest[1] + ", Please come to Dinner")
console.log(guest[2] + ", Please come to Dinner")

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
console.log("Sorry, " + guest[1] + " you can't make it to dinner");
guest.splice(1,1, "Chris")

// • Print a second set of invitation messages, one for each person who is still in your list.
console.log(guest[0] + ", Please come to Dinner")
console.log(guest[1] + ", Please come to Dinner")
console.log(guest[2] + ", Please come to Dinner")

