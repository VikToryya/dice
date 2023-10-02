/*  
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console

let continent = "Asia";
let population = 10000;
console.log(typeof country);
console.log(country);
*/

/*  1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console


let isIsland = false;
console.log(typeof isIsland);
console.log(typeof language);



// 1. Set the value of 'language' to the language spoken where you live (some
//     countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never
//     change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

let language;
let country = "Russia";
language = 'russian';
*/

/*
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 2 times, with input data for 2 different countries. Store the
returned values in 2 different variables, and log them to the console
*/

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// };
// let description_of_russia = describeCountry('Russia', 150, 'Moscow');
// let description_of_finland = describeCountry("Finland", 6, "Helsinki");
// // describeCountry('Finland', 6, 'Helsinki');

// //console.log(description_of_russia);

// console.log(description_of_russia + `. `, description_of_finland);

//1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'

// 2. Log to the console whether the array has 4 elements or not (true or false)

// if (populations.length == 4) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// console.log(populations.length === 4);

//console.log("4" === 4);
//data type and value ===
//data type ==

// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

// function percentageOfWorld1(population) {
//   return (population / 8000) * 100;
// }
//Function declaration

// percentageOfWorld1(1500)

//Function expression

// const percentageOfWorld3 = population => (population / 8000 * 100)

// let percentages = [
//     percentageOfWorld2(populations[0]),
//     percentageOfWorld2(populations[1]),
//     percentageOfWorld2(populations[2]),
//     percentageOfWorld2(populations[3]),
// ];
// console.log(percentages);

// 1. Create an array containing all the neighbouring countries of a country of your
// choice.
// Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'

// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
//куда.как(что)

// neighbours.push('Utopia')
// console.log(neighbours);

// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array

// neighbours.pop();

// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'

// if (!neighbours.includes('Germany')){
//   console.log("Probably not a central European country :D");
// }
//includes
////куда.как(что)
// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'

// let index_of_country = neighbours.indexOf("Russia");
// neighbours[index_of_country] = "Republic of Russia";
// console.log(neighbours);

// const myCountry = {
//   country: "Russia",
// };
// console.log(myCountry.country);

// console.log(myCountry["country"]);

//задача 3
// 1. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments)
/*let myCountry = {
  country: "Russia",
  capital: "Moscow",
  language: "Russian",
  population: 1500,
  neighbours: neighbours,
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries
    and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {

   this.isIsland = this.neighbours.length>=1 ? false : true
  } 
};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
//myCountry.population = myCountry.population+2;
//myCountry.population += 2;
//myCountry['population'] -=2;
//myCountry.describe();
*/
// Задача 4
// 1. Add a method called 'describe' to the 'myCountry' object. This method
// will log a string to the console, similar to the string logged in the previous
// assignment, but this time using the 'this' keyword.
// 2. Call the 'describe' method
// 3. Add a method called 'checkIsland' to the 'myCountry' object. This
// method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, and false if
// there are. Use the ternary operator to set the property.

//myCountry.push('describe');
//console.log(myCountry);
//не получилось

// Задача 5
// 1. There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
//получилось!

// Задача 6
// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier

// for (let a=1; a<=50; a++){
// console.log(`'Voter number ${a} is currently voting'`);
// }
let populations = [1500, 500, 150, 10];

const percentageOfWorld2 = function (populations) {
  return (populations / 8000) * 100;
};

let neighbours = ["Russia", "Finland", "China"];

// let percentage2 = [];

// for (let index = 0; index < populations.length; index++) {
//   //percentage2 = [percentageOfWorld2(populations[index])];
//   percentage2.push(percentageOfWorld2(populations[index]));
// }

// console.log(percentage2);

let percentage3;
percentage3 = [];
let index = 0;
while (index < populations.length) {
  percentage3.push(percentageOfWorld2(populations[index]));
  index++;
}
console.log(percentage3);

// 3. Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manually in the previous assignment,
// and reflect on how much better this solution is

// Задача 7
// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
// but this time using a while loop (call the array 'percentages3')
// 2. Reflect on what solution you like better for this task: the for loop or the while
// loop?

let neighbours2 = ["Russia", "Finland", "China"];

// CHALLENGE #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).
// Your task is to write some code to help them:
// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
// Log the value of BMIMark and BMIJohn to the console.
// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too
// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
//BMI = mass / (height * height)

function bmi(mass, height) {
  return mass / (height * height);
  
}

let mark = bmi(78, 1.69);
console.log(mark);
// let john = console.log(bmi(92, 1.95));
let john = bmi(92, 1.95)
console.log(john);
//john_bmi

// CHALLENGE #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:
// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.
// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".
// Note: Don't round the BMI values. Leave them as they are.
if(mark>john){
  console.log(`Mark's BMI (${mark}) is higher than John's (${john})!`);
}
else{
console.log(`John's BMI (${john}) is higher than Mark's! (${mark})`);
}

// CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.
// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:
// "Dolphins win the trophy" if Dolphins win, or
// "Koalas win the trophy" if Koalas win, or
// "Both win the trophy" if their average scores are equal.
// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110


