// Unchanged Magicians
function show_magicians(magicians){
    // prints the name of each magician in the array.
    for(i = 0; i < magicians.length; i++){
        console.log(magicians[i]);
        
    }
}
// Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array

function make_great(magicians){
    
    for(i = 0; i < magicians.length; i++){
        console.log(magicians[i] + " the Great")
      
    }
    return magicians;
}

magicians =['David Copperfield', 'Mark Wilson', 'Ricky Jay']
// make_great(magicians);
show_magicians(magicians);

console.log("\nGreat Magicians");
// great_magicians = make_great(magicians)
make_great(magicians)

console.log("\nOriginal Magicians");
show_magicians(magicians)
