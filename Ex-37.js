// Cities: 
// Write a function called describe_city() that accepts the name of a city and its country. 

// Give the parameter for the country a default value
function describe_city(city, country="Turkey"){
    // Describe a city
    console.log(city + " is in " + country);
}
// The function should print a simple sentence, such as Karachi is in Pakistan

// Call your function for three different cities, at least one of which is not in the default country.
describe_city('Konya')
describe_city('Karachi', 'Pakistan')
describe_city('California')