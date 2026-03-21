const theTotal = 19;
//declaring a funtion
//with the function keyword
function sumAllNumbers(num1, num2, num3) {
  const theTotal = num1 + num2 + num3;
  console.log("the total is ....", theTotal);
}
//declaring a function with fat arrow
const subtractAllNumbers = (x, y, z) => {
  const theTotal = x - y - z;
  console.log("numbers subtracted equal ...", theTotal);
};
//invoke or call
// sumAllNumbers(5, 12, 33);
// subtractAllNumbers(100, 30, 22);

// ************ARRAYS***********
const ourArr = [2, 3, 44, 87, 100];
//.pop() removes the last element
ourArr.pop();
//.shift() removes the first element
ourArr.shift();
//.push() adds an element to the end
ourArr.push("hello");
// .unshift() adds an element to the front
ourArr.unshift("world");

//.splice() remove elements from any position and even add elements
ourArr.splice(2, 2, "this is new", "this is also new");
const ourStr = "ragnar is sleeping";
// console.log(ourStr.split(" ").join("-"));

//*******************function that takes an array and adds all the numbers of the array */
const numsArr = [3, 7, 12];
const numsArr2 = [99, 77, 298, 10000];
function addNums(pizza) {
  let total = 0;
  for (let i = 0; i < pizza.length; i++) {
    total += pizza[i];
  }
  return total;
}

//****************Average the numbers in an array */

const averageNumber = (pizza) => {
  let total = addNums(pizza);
  return total / pizza.length;
};

//*******************************find the biggest number */

const arrOfNums = [2, 1000, 55555, 777772393829, 1, -5, 587, 0];
function findBiggestNum(pizza) {
  //great solution
  //   let biggest = pizza[0];
  //   for (let i = 0; i < pizza.length; i++) {
  //     if (pizza[i] > biggest) {
  //       biggest = pizza[i];
  //     }
  //   }
  //   return biggest;

  //more advanced solution
  return Math.min(...pizza);
}

const num = 7.5;
// console.log(findBiggestNum(arrOfNums));
// console.log(averageNumber(numsArr2));

//.forEach()
const strArr = ["Ragnar", "Joshua", "Joao"];
const nums = [1, 2, 3, 6, 55, 3000];
nums.forEach(function (currentNumber, index, wholeArray) {
  //   console.log(currentNumber);
});

const duplicatesArr = [
  "hello",
  "goodbye",
  "Ragnar",
  "hello",
  "Leonidas",
  "hello",
  "Ragnar",
];
//function that takes an array and removes all of the dubplicates
function removeDuplicateNames(array) {
  const uniqueArray = [];

  array.forEach((aWord) => {
    if (!uniqueArray.includes(aWord)) {
      uniqueArray.push(aWord);
    }
  });
  return uniqueArray;
}
// console.log(removeDuplicateNames(duplicatesArr));

////************************find the longest word */
const wordsArr = [
  "hello",
  "goodbye",
  "see ya later",
  "ragnar is annoying me!!!",
];
function findLogestWord(words) {
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
console.log(findLogestWord(wordsArr));
console.log(findLogestWord(strArr));
