// problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // will log Tesla
console.log(otherRandomCar) // will log Mercedes


// problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name); //will give an error saying isn't delcared aka like doesn't exist
console.log(otherName); //will log Elon


// problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // will log 12345
console.log(hashedPassword); // will give error undefined


// problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //2
const [,,,second] = numbers; //5
const [,,,,,,,,third] = numbers;//2
//Predict the output
console.log(first == second); // false
console.log(first == third); //true


// problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; //'value'
const { secondKey } = lastTest; // [1, 5, 1, 8, 3, 3]
const [ ,willThisWork] = secondKey; // 5
//Predict the output
console.log(key); // will log value
console.log(secondKey); // will log array [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // will log 1
console.log(willThisWork); // will log 5











