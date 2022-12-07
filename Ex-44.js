// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

`function make_car(manufacturer, model, car_info){
    cars ={
       'manufacturer' : manufacturer,
       'model': model
    }
   for(key in car_info){

    cars[key] = car_info
   }
    return cars
}`

cars = make_car('Hyundai', 'ioniq', color='red', two_package=true)
console.log(cars)
// my_record = make_car('Ford', 'ford gt', year=2017, color='grey')
// console.log(my_record);