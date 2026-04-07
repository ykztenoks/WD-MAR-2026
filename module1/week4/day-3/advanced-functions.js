console.log(sum(1, 1))

function sum(num1, num2) {
  return num1 + num2
}

const subtract = (num1, num2) => {
  return num1 - num2
}
console.log(subtract(2, 1))

// console.log(printParameters("panther", "cat", "dog", "josh", "movie", "mind"))

// function printParameters(par1, par2, par3, par4, par5, par6) {
//   return arguments //reserved keyword
// }

const randomArr = [0, 1, "hello"]

randomArr.forEach((currentElement) => {
  //example of anonymous arrow function
  console.log(currentElement)
})

// forEach( () => {} ) anonymous arrow function as argument
const objArr = [
  { name: "Daniel", age: 20 },
  { name: "Noah", age: 30 },
  { name: "Danilo", age: 20 },
  { name: "Almas", age: 30 },
  { name: "Joiakim", age: 30 },
  { name: "Busola", age: 30 },
  { name: "Amanda", age: 30 },
]

const numArr = [1, 2, 3, 4, 5]
let total = 0

numArr.forEach((currentElement) => {
  currentElement += 100
})

const mapped = objArr.map((currentElement, index) => {
  return currentElement.name
})

console.log(mapped)
console.log(objArr)

const underThirty = objArr.filter((currentElement, index) => {
  if (currentElement.age < 30) {
    return currentElement
  }
})

console.log(underThirty)

const odds = numArr.filter((currentElement) => {
  if (currentElement % 2 !== 0) {
    return currentElement
  }
})

const even = numArr.filter((currentElement) => {
  if (currentElement % 2 === 0) {
    return currentElement
  }
})

console.log(odds)
console.log(even)

const totalReduce = numArr.reduce((accumulator, currentElement) => {
  return (accumulator += currentElement)
})

console.log(totalReduce)

const unsorted = [32, 1, 6, 319, 19, 2, 8, 199]
const unsorted2 = [41, 21, 6, 2, 1, 319, 17, 2, 8, 199]

unsorted.sort((currentElement, nextElement) => {
  return currentElement - nextElement //ascending order NUMBERS
})

unsorted2.sort((currentElement, nextElement) => {
  return nextElement - currentElement //descending order NUMBERS
})

// unsorted.sort((currentElement, nextElement) => {
//   if (currentElement > nextElement) {
//     return 1
//   } else if (currentElement < nextElement) {
//     return -1
//   } else {
//     return 0
//   }
// })

console.log(unsorted)

objArr.sort((currentElement, nextElement) => {
  return currentElement.name.localeCompare(nextElement.name)
})

console.log(objArr)
