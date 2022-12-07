// City Names

// Write a function called city_country() that takes in the name of a city and its country. 
function city_country(city, country){
    // Return a string like, "Lahore, Pakistan"
    return(city + " " + country)
}
// The function should return a string formatted like this:
city = city_country('Lahore,', 'Pakistan');
console.log(city);
// Call your function with at least three city-country pairs, and print the value that’s returned.
city = city_country('Tehran,', 'Iran')
console.log(city);
city = city_country('California,', 'UK')
console.log(city);
