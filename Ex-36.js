// Large Shirts:

// Modify the make_shirt() function 
function make_shirt(size='large', message='I love JavaScript'){
    // summarizing the shirts that's going to be made and the message printed on it.
    console.log("\nI'm going to make a "+ size + " t-shirts");
    console.log("It will say, "+ message + " ");
}
make_shirt();
make_shirt(size='medium');
make_shirt('small', 'Programmers are loopy')