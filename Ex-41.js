// Great Magicians

//Start with a copy of your program from Exercise 39.
function show_magicians(magicians){
    // prints the name of each magician in the array.
    for(names of magicians){
        console.log(names);
    }
}

// Write a function called make_great() that modifies the array of magicians  

function make_great(magicians){
    
    for(i = 0; i < magicians.length; i++){
        console.log(magicians[i] + " the Great")
      
    }
}

magicians =['David Copperfield', 'Mark Wilson', 'Ricky Jay']
make_great(magicians);

show_magicians(magicians);