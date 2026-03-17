// Iteration 1: Names and Input
const hacker1 = `amanda`;
console.log(`The drivers name is ${hacker1}`);
const hacker2 = "amanda";
console.log("The navigator's name is" + " " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name with ${hacker1.length} characters`,
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "The navigator has the longer name with " + hacker2.length + " characters",
  );
} else {
  console.log(
    "Wow yall have the same number of characters with " +
      hacker1.length +
      " characters",
  );
}
// Iteration 3: Loops
let spacedName = "";

for (let i = 0; i < hacker1.length; i++) {
  const currentLetter = hacker1[i];
  const upperLetter = currentLetter.toUpperCase();
  if (i !== hacker1.length - 1) {
    spacedName += upperLetter + "-";
  } else {
    spacedName += upperLetter;
  }
}
console.log(spacedName);

let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

//lexigraphical order

console.log(hacker1.localeCompare(hacker2));
if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo the navigator goes first");
} else if (hacker1.localeCompare(hacker2) === -1) {
  console.log("Obviously the driver goes first");
} else {
  console.log("wow yall have the same name");
}
