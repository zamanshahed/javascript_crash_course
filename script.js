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

/***********************************************************/


//Data types: String, number, boolean, null, undefined, symbols(less used)
console.warn("Data Types....................")
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


/***********************************************************/


//Arrays
console.warn("Arrays..............")
const rolls = new Array(1, 2, 3, 4, 5, 6);
console.log(rolls);
const games = ['GTA5', 'ASC', 'FC', 'COD', 'NFS', 'CS', 'DOTA', 22, 563, 67857, true, false, null, undefined];
games.push('PUBG');         //to add at the last
games.unshift('RDR2');      //to add at the begining
games.pop();                //delete the last item
console.log("Array Validity: "+Array.isArray(games));
console.log(games);
console.log(games[1]);



/***********************************************************/

//Object Literals
console.warn("Objects Literals.....................");
const person = {
    firstName: 'John',
    lastName: 'Doe',
    personAge: 25,
    hobbies: ['Cycling', 'Movies', 'Music', 'Gaming'],
    address:{
        Street:'Road #12345',
        Area: 'Bashundhara R/A',
        City: "Dhaka"
    }
}
console.log(person);
console.log(person.hobbies[2]);
console.log(person.address.Area);
person.email = 'john@email.com';
console.log(person);

//Arrays of Objects

const ToDos=[
    {
        id: 1,
        Task:"Do the homework",
        isDone: true
    },
    {
        id: 2,
        Task:"Finish PS lesson",
        isDone: false
    },
    {
        id: 3,
        Task:"Watch Tv series",
        isDone: true
    }
];

console.log(ToDos);
console.log(ToDos[2].Task, ToDos[2].isDone);


/***********************************************************/

//JSON
console.warn("JSON........");

const toDoJSON = JSON.stringify(ToDos);     //convering into JSON array
console.log(toDoJSON);


/***********************************************************/

//Loops

console.warn("Loops and Arrays.........");

for(let i=0; i<5; i++){
    console.log(`For Loop ${i}`);
}

let i=5;
while(i<10){
    console.log(`While Loop ${i}`);
    i++;
}

//using loops for Arrays
for(let i=0; i<ToDos.length; i++){
    console.log(ToDos[i].Task);
}

//Looping in SMART JS WAY
for(let items of ToDos){    
    console.log(`Task Validity: ${items.isDone}`);
}


//Higher Way Methods
//forEach, map, filter

ToDos.forEach(function(items){
    console.log(`Task name: ${items.Task}`);
});

ToDos.map(function(item){
 console.log(`Task ID: ${item.id}`);
});

// converting the tasks into a text array
const ToDosTextArray = ToDos.map(function(item){
 return item.Task;
});
console.log(ToDosTextArray);


const ToDosAnotherArray = ToDos.filter(function(item){
    return item.isDone ===true;
});

console.log(ToDosAnotherArray);


//more powerful one
const ToDosCompletedArray = ToDos.filter(function(item){
    return item.isDone ===true;
}).map(function(items){
    return items.Task
});

console.log(ToDosCompletedArray);


/***********************************************************/

//Conditionals
console.warn('Conditionals..........');

// '==' only value matching
let x="10";
if(x==10){
    console.log(`Value Matched!!`);
}

// '===' both value and type matching
let y="10";
if(y===10){
    console.log(`Value Matched!!`);
}else{
    console.log(`Failed to match Type!!`);
}

//Ternary operator
const a = 100;

const color = a>10 ? 'green' : 'Red';

//switch operator
switch(color){
    case 'Red':
        console.log(`Color is Red.`);
        break;
    case 'Green':
        console.log(`Color is Green.`);
        break;
    default:
        console.log(`No colors found, Error detected!!`);
}


/*****************************************************/

//functions

console.warn('functions.........');
function AddNum(num1=1, num2=2){        //default values 1, 2 in case no value was passed!
    return (num1+num2);
}

console.log(AddNum(2,25));

//smarter ways
const newAddNum = (num1, num2) => {
    return num1+num2;
}

console.log(newAddNum(2.11,7.54));


/*****************************************************/


//objects
console.warn("objects....");
//funcitons to create objects AKA: constructor function
function Persion(firstName, lastName, Dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.Dob = new Date(Dob);
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

Persion.prototype.getBirthYear = function(){
    return this.Dob.getFullYear();
}
//instantiate the object
const person1 = new Persion('John', 'Doe', '3-2-2001');
const person2 = new Persion('Sheldon', 'Cooper', '1-2-1981');

console.log(person1);
console.log(person2.getFullName());
console.log(person2.getBirthYear())



/*****************************************************/


//class
console.warn("CLass...........");

class Student{
    constructor (firstName, lastName, id){
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }
    
    getStudentFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const Student1 = new Student('Howerd', 'Walowodtz', '5500132');

console.log(Student1.getStudentFullName());