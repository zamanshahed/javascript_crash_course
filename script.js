//console items
console.log("Binary in my blood!");
console.error("A customised error message!");
console.warn("A customised warning message!");

//variables: let (changeable), const(constant)
let year = 2020;
const age = 23;
year--;
console.log(age);
console.log(year);

//Data types: String, number, boolean, null, undefined, symbols(less used)
const name = 'John';
const age2 = 40;
const driverRating = 4.7;
const isCool = true;
const isMarried = null;
const bankBalance = undefined;
let haveKids;

console.log(typeof name);
console.log(typeof age2);
console.log(typeof driverRating);
console.log(typeof isCool);
console.log(typeof isMarried);
console.log(typeof bankBalance);
console.log(typeof haveKids);

//String Concatenation
console.log("The driver's name is "+name+", who is "+age+" years old");

const fName = "Sumon";
// IMPORTANT: Template String
const intro = `Hey there, I am ${fName} and I am ${age} years old`;
console.log(intro);

//String operations
console.log(name.length);
console.log(name.substring(0,3).toUpperCase());
console.log(name.toLowerCase());
console.log(fName.toUpperCase());
console.log(fName.split(""));
const cars = "BMW, Benz, Ferrari, Bughatti, Lambourgini";
console.log(cars.split(', '));