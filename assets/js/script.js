let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let button = document.getElementById("button");
let char = document.getElementById("char");
let mycharacter = document.getElementById("character");

// start Example 1
function findMaxMin(num1, num2, num3) {
  let maxNumber = Math.max(num1, num2, num3);
  let minNumber = Math.min(num1, num2, num3);
  console.log(`max number: ${maxNumber}`);
  console.log(`min number: ${minNumber}`);
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  findMaxMin(num1.value, num2.value, num3.value);
});
// end Example 1
/* ======== */
//  strat Example 2
function character(letter) {
  const myArray = ["a", "e", "i", "o", "u"];
  if (letter !== "") {
    myArray.includes(letter.toLowerCase())
      ? console.log("vowels")
      : console.log("Consonant");
  } else {
    console.log("please type again");
  }
}
char.addEventListener("click", (event) => {
  event.preventDefault();
  character(mycharacter.value);
});
//  End Example 2

/* ======== */

//  Start Example 3
let multiplication = document.getElementById("multiplication");
let multipleNum = document.querySelector(".multipleNum");

function multiplyNumberBy12(number) {
  for (let index = 0; index <= 12; index++) {
    console.log(number * index);
  }
}
multipleNum.addEventListener("click", (event) => {
  event.preventDefault();
  multiplyNumberBy12(multiplication.value);
});
//  Start Example 3

/* ======== */

//  start Example 4

let evenNumber = document.getElementById("even-number");
let Go = document.querySelector(".GO");
function findEvenNumbers() {
  for (let i = 1; i <= evenNumber.value; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

Go.addEventListener("click", (event) => {
  event.preventDefault();
  findEvenNumbers();
});

// End Example 4
 /* ======== */

//  start Example 5

// Write a program to enter marks of five subjects and calculate total, average and percentage.

let subject1 = document.getElementById("subject1")
let subject2 = document.getElementById("subject2")
let subject3 = document.getElementById("subject3")
let subject4 = document.getElementById("subject4")
let subject5 = document.getElementById("subject5")
let calculateNumber = document.getElementById("calculate")

function calculate(subject1, subject2, subject3, subject4, subject5) {
    let num1 = parseFloat(subject1);
    let num2 = parseFloat(subject2);
    let num3 = parseFloat(subject3);
    let num4 = parseFloat(subject4);
    let num5 = parseFloat(subject5);
    let result = num1 + num2 + num3 + num4 + num5
    console.log(`result = ${result}`);
    let average = result / 5;
    console.log(`average = ${average}`);
    let percent = (result / (5 * 100)) * 100;
    console.log(`percent is ${percent} %`);
}

calculateNumber.addEventListener("click", (event) => {
    event.preventDefault() 
    calculate(subject1.value, subject2.value, subject3.value, subject4.value, subject5.value)
})

//  End Example 5

/* ======== */
// Start Example 6

// 6- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade

let Physics = document.getElementById("Physics")
let Chemistry = document.getElementById("Chemistry")
let Biology = document.getElementById("Biology")
let Mathematics = document.getElementById("Mathematics")
let Computer = document.getElementById("Computer")
let inputPercent = document.getElementById("percentage")
console.log(inputPercent);
function percentage(Physics, Chemistry, Biology, Mathematics,Computer) {
  let num1 = parseFloat(Physics);
  let num2 = parseFloat(Chemistry);
  let num3 = parseFloat(Biology);
  let num4 = parseFloat(Mathematics);
  let num5 = parseFloat(Computer);
  let total = num1 + num2 + num3 + num4 + num5
  let percent = (total / (5 * 100)) * 100;
  if (percent >= 90) {
    console.log(`${percent}% Grad A`);
  }else if (percent >= 80) {
    console.log(`${percent}% Grad B`);
  }else if (percent >= 70) {
    console.log(`${percent}% Grad C`);
  }else if (percent >= 60) {
    console.log(`${percent}% Grad D`);
  }else if (percent >= 40) {
    console.log(`${percent}% Grad E`);
  }else if (percent < 40) {
    console.log(`${percent}% Grad F`);
  }
}
inputPercent.addEventListener("click", (event) => {
  event.preventDefault()
  percentage(Physics.value, Chemistry.value, Biology.value, Mathematics.value, Computer.value)
})


// End Example 
