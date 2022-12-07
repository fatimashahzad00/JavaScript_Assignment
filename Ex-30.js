// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!
usernames = ['devil', 'ava', 'john', 'admin', 'chris', 'maria'];

if (usernames) {
    console.log("not empty");
}
else {
// usernames.splice(0)
    console.log(usernames, "we need to find some users");
}

// console.log(usernames );

usernames = ['devil', 'ava', 'john', 'admin', 'chris', 'maria'];
if (usernames == '') {
    console.log("not empty");
}
else {
    console.log( "we need to find some users");
}
console.log(usernames.splice(0))
// console.log(usernames);