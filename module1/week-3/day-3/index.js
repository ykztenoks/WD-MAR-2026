const petsArray = [
  {
    name: "Ragnar",
    age: 5,
    owner: {
      ownerName: "Joshua",
      email: "j@j.com",
    },
  },
  {
    name: "Daisy",
    age: 10,
    owner: {
      ownerName: "Samantha",
      email: "s@s.com",
    },
  },
];
const theOwnerWithBrackets = petsArray[0]["owner"]["ownerName"];
const ownerWithDotNotation = petsArray[0].owner.ownerName;
const test = "name";
const nameExample = petsArray[1][test];

const bestPetEver = {
  name: "Ragnar",
  age: 5,
  owner: {
    ownerName: "Joshua",
    email: "j@j.com",
  },
};

// console.log(bestPetEver);
delete bestPetEver.age;
bestPetEver.isAGoodBoy = true;
// console.log("age" in bestPetEver);
// console.log(Object.values(bestPetEver));

//**************For in loop */
for (key in bestPetEver) {
  console.log(bestPetEver.name);
}
