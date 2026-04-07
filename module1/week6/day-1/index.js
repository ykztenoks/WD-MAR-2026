let bombTimer = null
let timeRemaining = 10
const root = document.querySelector("#root")

const loremElement = document.createElement("p")
const timer = document.createElement("h1")
const hiddenButton = document.createElement("button")

hiddenButton.innerText = "click"
hiddenButton.style.border = "none"
hiddenButton.style.backgroundColor = "white"
hiddenButton.style.color = "white"

hiddenButton.style.position = "absolute"
hiddenButton.style.left = "95%"
hiddenButton.style.top = "95%"

hiddenButton.addEventListener("click", stopBomb)

root.appendChild(hiddenButton)
const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
loremElement.innerText = lorem
loremElement.classList.add("lorem-ipsum")

loremElement.style.color = "rgb(201, 17, 17)"

root.appendChild(loremElement)

const btn = document.createElement("button")

btn.innerText = "Click me!"

btn.addEventListener("click", () => {
  alert("a bomb will explode if you dont find the hidden button 💥")
  root.appendChild(timer)
  startBomb()
})

root.appendChild(btn)

const students = [
  { name: "Daniel", age: 20 },
  { name: "Noah", age: 30 },
  { name: "Danilo", age: 20 },
  { name: "Almas", age: 30 },
  { name: "Joiakim", age: 30 },
  { name: "Busola", age: 30 },
  { name: "Amanda", age: 30 },
]

const studentsHtml = students.map((student) => {
  const container = document.createElement("div")
  const name = document.createElement("h2")
  const age = document.createElement("p")

  name.innerText = student.name
  age.innerText = `age: ${student.age}`

  container.addEventListener("click", () => {
    alert("hey! this is " + student.name)
  })

  container.appendChild(name)
  container.appendChild(age)
  return container
})

console.log(studentsHtml)

studentsHtml.forEach((container) => root.appendChild(container))

function startBomb() {
  bombTimer = setInterval(() => {
    if (timeRemaining > 0) {
      timeRemaining--
      timer.innerText = timeRemaining
    }
    if (timeRemaining === 0) {
      clearInterval(bombTimer)
      const explosion = document.createElement("img")
      explosion.src =
        "https://media.tenor.com/nANqORN7qhQAAAAM/explosion-explode.gif"
      explosion.style.width = "80vw"
      explosion.style.height = "80vh"

      root.appendChild(explosion)
    }
  }, 1000)
}

function stopBomb() {
  alert("CONGRATS THE BOMB HAS STOPPED")
  clearInterval(bombTimer)
  timeRemaining = 10
}
