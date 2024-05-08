function greet() {
    alert("Welcome My friends Welcome!");
}

greet();

let aadi = 69;
let baba = "Hello, world!";
let c = true;
let d = [1, 2, 3];
let e = { name: "John", age: 25 };

console.log(aadi);
console.log(baba);
console.log(c);
console.log(d);
console.log(e);

\
let myAge = 21;
let herAge = 17;

if (myAge >= 21 && herAge >= 18) {
    console.log("Allowed to marry her");
} else if (myAge >= 21 && herAge < 18) {
    console.log("She's too young to marry");
} else {
    console.log("Wait until you're 21 to consider marriage");
}


// Nested loops
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(j);
    }
}

// While loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Do-while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);


let marks = [85, 97, 44, 37, 76, 60];

// Using reduce to calculate sum
let sum = marks.reduce((acc, curr) => acc + curr, 0);

let average = sum / marks.length;
console.log("Average marks:", average);

// Multidimensional array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Flatten the matrix
let flattenedMatrix = matrix.flat();
console.log("Flattened Matrix:", flattenedMatrix);


// Function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1)
        return 1;
    else
        return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5));

// Arrow function
const greetUser = name => {
    console.log(`Welcome, ${name}!`);
}

greetUser("Alice");
