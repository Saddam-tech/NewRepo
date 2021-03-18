'use strict';

/////////////////////// Functions

// function logger() {
//   console.log("My name is Saddam!");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 2);
// console.log(appleJuice);

// function calcAge1(birthYear) {
//   return 2067 - birthYear;
// }

// const age = calcAge1(1998);
// console.log(age);

// const retireYear = (birthYear) => 65 - (2021 - birthYear);

// const retirement = retireYear(1998);
// console.log(retirement);

// function cutFruitPiece(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPiece(apples);
//   const orangePieces = cutFruitPiece(oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//   return juice;
// }

// console.log(fruitProcessor(4, 2));

// const calcAge = (birthYear) => 2021 - birthYear;

// const retireYear = (birthYear) => {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement <= 0) {
//     return `You are retired now! You are ${age} years old!`;
//   }
//   return `You have ${retirement} years to retire!`;
// };

// console.log(retireYear(1974));

// const calcAverage = (score1, score2, score3) => {
//   const averageScore = (score1 + score2 + score3) / 3;
//   return averageScore;
// };

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins > avgKoalas * 2) {
//     return `Dolphins win (${avgDolphins}, ${avgKoalas})`;
//   } else if (avgKoalas > avgDolphins * 2) {
//     return `Koalas win (${avgKoalas}, ${avgDolphins})`;
//   } else {
//     return "No one wins ((";
//   }
// };

// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// console.log(checkWinner(avgDolphins, avgKoalas));

// const friends = ["Michael", "Aston", "Martin"];

// friends.push("Marvin");
// console.log(friends);

//////////////////////////////////////////////
//  Coding Challenge #2

// const calcTip = (bill) => {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [
//   calcTip(bills[0]) + bills[0],
//   calcTip(bills[1]) + bills[1],
//   calcTip(bills[2]) + bills[2],
// ];

// console.log(tips);
// console.log(total);

/////////////////////////////////////////////

// const Saddam = {
//   firstName: "Saddam",
//   lastName: "Salokhiddinov",
//   age: 2021 - 1998,
//   job: "Software engineer",
//   friends: ["Michael", "Peter", "Steven"],
// };

// const interestedIn = prompt(
//   "What do you want to know about Saddam? Choose between firstName, lastName, age, job and friends"
// );

// console.log(Saddam[interestedIn]);

// Saddam.location = "South Korea";

// Saddam.email = "salokhiddinov0727@gmail.com";

// console.log(Saddam);

// Challenge

// const Saddam = {
//   firstName: "Saddam",
//   lastName: "Salokhiddinov",
//   birthYear: 1998,
//   job: "Software engineer",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2021 - this.birthYear;
//     return this.age;
//   },
//   driversLicense: function () {
//     if (this.hasDriversLicense) {
//       return "has a driver`s license";
//     } else {
//       ("does not have a driver`s license");
//     }
//   },
// };

// console.log(
//   `${Saddam.firstName}, has ${Saddam.friends.length} friends, and his best friend is called ${Saddam.friends[0]}`
// );

// console.log(Saddam.calcAge());

// console.log(
//   `${Saddam.firstName} is a ${Saddam["calcAge"]()}-year old ${
//     Saddam.job
//   }, and he ${Saddam.driversLicense()}`
// );

// Challenge #3

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   bmiCalc: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   bmiCalc: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.bmiCalc();
// john.bmiCalc();

// if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s bmi (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
//   );
// }

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s bmi (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
//   );
// }

// for loop keeps running WHILE the condition is TRUE;

// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weights repetition ${i}`);
// }

// const Saddam = [
//   "Saddam",
//   "Salokhiddinov",
//   1998,
//   "Software engineer",
//   ["Michael", "Peter", "Steven"],
// ];

// const types = [];

// for (let i = 0; i < 5; i++) {
//   console.log(Saddam[i]);

//   types.push(typeof Saddam[i]);
// }

// console.log(types);

// const years = [1998, 1991, 1995, 1966];

// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2021 - years[i]);
// }

// console.log(ages);

// for (let i = 0; i < Saddam.length; i++) {
//   if (typeof Saddam[i] !== "string") continue;
//   console.log(Saddam[i], typeof Saddam[i]);
// }

// for (let i = 0; i < Saddam.length; i++) {
//   if (typeof Saddam[i] === "number") break;
//   console.log(Saddam[i], typeof Saddam[i]);
// }

// for (let i = Saddam.length - 1; i >= 0; i--) {
//   console.log(Saddam[i]);
// }

// Challenge

// const calcTip = (bill) => {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];

// const totals = [];

// for (let i = 0; i <= bills.length - 1; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(bills[i] + tip);
// }

// console.log(totals, tips);

// const calcAvr = arr => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   const average = sum / arr.length;
//   console.log(average);
// };

// calcAvr(bills);

// //////////////////////////

// const expenses = [400, 235];

// const division = [];

// const bozoraka = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     const divided = arr[i] / 4;
//     division.push(divided);
//   }
//   console.log(division);
// };

// bozoraka(expenses);

////////////////////////////////

// const measureKelvin = function () {
//   const measurement = {
//     temp: 'temp',
//     unit: 'unit',
//     value: Number(prompt('Degrees of celsius: ')),
//   };
//   console.log(typeof measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// const heights = [1, 1, 4, 2, 1, 3];
// const heights2 = [1, 5, 3, 2, 1, 2];

// const heightChecker = function (heights) {
//   const prev = [];
//   let output = 0;
//   for (let i of heights) prev.push(i);
//   const sortedArr = heights.sort((a, b) => a - b);
//   for (let i = 0; i < sort.length; i++) {
//     if (prev[i] !== sortedArr[i]) {
//       output++;
//     }
//   }
//   return output;
// };

// heightChecker(heights);

// var heightChecker = function (heights) {
//   var Changes = 0;
//   var Prev = [];
//   for (let i of heights) {
//     Prev.push(i);
//   }
//   var sort = heights.sort(function (a, b) {
//     return a - b;
//   });
//   for (let i = 0; i < sort.length; i++) {
//     if (sort[i] != Prev[i]) {
//       Changes++;
//     }
//   }
//   return Changes;
// };

// const nums = [2, 7, 11, 15];
// const target = 9;

// var twoSum = function (nums, target) {
//   for (let i of nums) {
//     if (nums[i] + nums.slice(1)[i] === target) {
//       console.log('TRUE');
//     }
//   }
// };

// twoSum(nums, target);

const text = 'SalokhiDDeenov';

const toUpper = function (text) {
  const newText = text.split('');
  return newText
    .map(char =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join('');
};

console.log(toUpper(text));

//new changes
