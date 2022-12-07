// Sandwiches

// Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides
function sandwiches(items){
    console.log("I will make you a sandwich");
    for(i = 0; i < items.length; i++){
        console.log("adding " + items[i] + " to your sandwich");
    }
    console.log("You're sandwich is ready");
}

sandwiches(['roast beef', 'cheddar cheese', 'lettuce', 'ketchup'])
console.log("<br>");
sandwiches(['yogurt', 'onion', 'mustard'])
console.log("<br>");
sandwiches(['peanut butter', 'strawberry jam'])


