// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings
month = "may";
console.log(month == "may");
console.log(month != "may");

// • Tests using the lower case function
quiz = "Metaverse";
console.log(quiz.toLowerCase()=="metaverse");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
age = 18;
console.log(age > 18);
console.log(age < 18);
console.log(age >= 18);
console.log(age <= 18);

// • Tests using "and" and "or" operators
age1 = 18;
console.log(age1 == 18);
console.log(age1 != 18);
console.log(age1<=10 && age1>=18)
console.log("......");
console.log(age1<=20 || age1>=18)
console.log("-----");

// • Test whether an item is in a array
num = [10, 36, 2, 11, 00, 45]
console.log(num.includes(00) , "00 in num");

// • Test whether an item is not in a array
months = ['may', 'march', 'june', 'july', 'april']
console.log(months.includes('jan') , "jan in num");
