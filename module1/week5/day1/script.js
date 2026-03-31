console.log("connected!!!");
//grab the h1 from the html
const h1Element = document.querySelector("#header");
const counterElement = document.getElementById("counter");
const lightModeButtonElement = document.getElementById("mode");
const addPetButtonElement = document.getElementById("add-pet");
const petContainerElement = document.getElementById("pet-container");
h1Element.style.color = "blue";
h1Element.style.border = "1px solid white";

counterElement.innerHTML = "<h3>this is now not a p tag</h3>";

const pets = [
  {
    name: "Ragnar",
    image: "./assets/ragnar.png",
  },
  {
    name: "Bonzai",
    image: "./assets/bonzai.jpg",
  },
  {
    name: "Becas",
    image: "./assets/becas.jpg",
  },
  {
    name: "Kurt",
    image: "./assets/kurt.jpg",
  },
];

//add an event listener
lightModeButtonElement.addEventListener("click", () => {
  console.log("clicked");
  const bodyElement = document.querySelector("body");
  //   bodyElement.style.backgroundColor = "white";\

  //add a class
  //   bodyElement.classList.add("light-mode");
  //toggle a class
  bodyElement.classList.toggle("light-mode");
});

//add pet button
addPetButtonElement.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * pets.length);
  const randomPet = pets[randomIndex];

  const newSection = document.createElement("section");
  newSection.classList.add("pet-card");
  newSection.innerHTML = `
        <img alt=${randomPet.name}  src='${randomPet.image}'/>
        <h3>Name: ${randomPet.name}</h3>
        <button id='liked-btn'>Like</button>
        <button id='delete-btn'>Delete</button>
    `;
  //this adds it to the page
  petContainerElement.appendChild(newSection);
  //add event listener to the like button
  const likedButton = newSection.querySelector("#liked-btn");
  likedButton.addEventListener("click", () => {
    likedButton.classList.toggle("liked");
  });
  //add event listener to remove element from page
  const deleteButton = newSection.querySelector("#delete-btn");
  deleteButton.addEventListener("click", () => {
    // newSection.remove();
    newSection.style.display = "none";
  });

  //remove the pet from the array to not select twice
  pets.splice(randomIndex, 1);
});
