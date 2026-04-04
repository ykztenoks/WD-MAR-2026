const globalVariable = "hello Im globally accessible";
if (2 + 2 === 4) {
  const blockedScopedVariable = "hi, i am in the if statement";
  //   console.log(blockedScopedVariable);
}
// console.log(add(4, 5));
const subtract = (a, b) => {
  return a - b;
};
// console.log(subtract(1000, 3));

let petName = "Daisy";
// console.log(petName);

function add(a, b) {
  const total = a + b;
  return total;
}

//shadowing

let age = 39;
if (2 + 2 === 4) {
  const age = 29;
  //   console.log(age);
}

//copies
//primitive data types
let petAge = 5;
let petAge2 = petAge;
petAge2 += 1;

const array1 = [1, 2, 3, [4, 5, 6]];
const array2 = array1;
// ... is the spread operator and is a 'DEEP' copy but only one level~
const array3 = [...array1];
// true deep copy
const array4 = JSON.parse(JSON.stringify(array1)); //stringify turn array into a string '[1,2,3,[4,5,6]]'
const array5 = structuredClone(array1);

array1[3].push(7);
const newArray = new Array(...array1);
// console.log({ array1, array2, array3, array4, array5, array6: newArray });

//setTimeout
setTimeout(() => {
  //   console.log("three seconds has passed");
}, 3000);

//html variables
const htmlTimeElement = document.querySelector("#time-element");

//we need a button to click to start the timer
// can i try?\
let timer = 0;
let intervalId;
let isTimerRunning = false;
const startButton = document.querySelector("#start-btn");
const resetButton = document.querySelector("#reset-btn");
startButton.addEventListener("click", () => {
  isTimerRunning = !isTimerRunning;
  if (isTimerRunning) {
    startButton.innerText = "Stop Timer";
    intervalId = setInterval(() => {
      timer++;
      htmlTimeElement.innerText = timer;
    }, 1000);
  } else {
    clearInterval(intervalId);
    startButton.innerText = "Start Timer";
  }
});

resetButton.addEventListener("click", () => {
  timer = 0;
  htmlTimeElement.innerText = timer;
});
