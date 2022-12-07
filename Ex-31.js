// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.
current_users =  ['eric', 'ema', 'Chris', 'sara', 'John']
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
new_users = ['william', 'John', 'alia', 'illa', 'Chris']
// Loop through the new_users list to see if each new username has already been used.

for(i = 0; i < new_users.length; i++){
    if(new[i]) {
        console.log("Sorry", new_users, "Please enter new username");
    } else{
        console.log("Great", current_users , "it is available");
    }
}


