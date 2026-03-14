const num = 11

if (num > 10) {
  console.log("yep my number is greater than 10")
} else if (num < 0) {
  console.log("our number is not greater than 10, but its lesser than 0")
} else {
  console.log("our number is not greater than 10 nor lesser than 0")
}

const charName = "Daniel"

switch (charName) {
  case "Jon":
    console.log("house targaryen")
    break
  case "Aria":
    console.log("house stark")
    break
  case "Tyrion":
  case "Jamie":
  case "Cersei":
    console.log("greedy lannisters")
    break
  default:
    console.log("you are not so important")
}

const helloStudents = "hey guys whats up"

for (let i = 0; i < helloStudents.length; i++) {
  if (helloStudents[i] === " ") {
    continue //prevents the code below from running, skips one iteration
  }

  console.log(`The current INDEX i is -> ${i}`)
  console.log(`The current CHARACTER or ELEMENT is -> ${helloStudents[i]}`)
}

console.log("finished loop")

let count = 0
const funString = "this is so fun!!!!"

while (count < funString.length) {
  if (funString[count] === "!") {
    break //exits the loop if condition is met
  }

  console.log(funString[count])
  if (funString[count] === " ") {
    console.log("WE FOUND EMPTY SPACE 🌌🚀☄️")
  }

  count++
}

try {
  console.log(funString[iuhrfrihourihuorag])
} catch (error) {
  alert(error.message)
  console.log(error)
}

console.log("CONSOLE.LOG AFTER THE ERROR")
console.log("CONSOLE.LOG AFTER THE ERROR")
console.log("CONSOLE.LOG AFTER THE ERROR")
