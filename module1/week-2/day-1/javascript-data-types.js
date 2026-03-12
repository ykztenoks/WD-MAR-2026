const randomNumber = 78

console.log(randomNumber)
console.log("Hello everyone! We are in the browser")

const favoriteFood = "Pizza"
// const favoriteCoffee = 'Espresso' <<== please dont do this, theres no reason to

const favoriteColor = `Black`

let favoriteSong = "Time - Pink floyd"

// favoriteSong = "Since I've been loving you - Led Zeppelin"

const favoriteNumber = 37
const favoriteFloatingNumber = 37.01

const amIBald = true
const amICrazy = false

let hardwareSkills

let age = null

console.log(age)

// MATH METHODS

console.log(Math.ceil(37.01)) // ceil rounds up

console.log(Math.floor(37.01)) // floor rounds down

console.log(Math.round(2.01)) // rounds to the nearest integer
console.log(Math.round(2.51))

console.log(Math.max(1, 20, 3, 5, 10)) // returns the highest number in a list

console.log(Math.min(1, 20, 3, 5, 10)) // returns lowest number in a list

console.log(Math.round(Math.random() * 10)) // Math.random return random number from 0 to 0.99

// STRING METHODS

console.log(favoriteFood.length) // return numbers of chars in a string

console.log(favoriteFood[0])
console.log(favoriteFood[1])
console.log(favoriteFood[2])
console.log(favoriteFood[3])
console.log(favoriteFood[4])
console.log(favoriteFood[5]) //undefined

const bandFromFavSong = favoriteSong.slice(6)
console.log(bandFromFavSong)

console.log(favoriteSong.includes("Pink floyd"))

console.log(favoriteColor.toUpperCase())
console.log(favoriteColor.toLowerCase())

const favoriteBand = "pink floyd"

console.log(
  favoriteBand[0].toUpperCase() +
    favoriteBand.slice(1, 4) +
    " " +
    favoriteBand[5].toUpperCase() +
    favoriteBand.slice(6),
)

console.log(
  `My favorite band is ${
    favoriteBand[0].toUpperCase() + favoriteBand.slice(1, 4)
  } ${favoriteBand[5].toUpperCase() + favoriteBand.slice(6)}`,
)

console.log(1 + 2)
console.log(1 - 2)
console.log(2 / 1)
console.log(2 * 2)
console.log(2 ** 2)

console.log(2 % 2 === 0)
console.log(3 % 2 === 0)

let num1 = 5

console.log("is 5 lesser than 1", num1 < 1)

num1 -= 4
//num1 = num1 -5

console.log("is 5 lesser than or equal to 1", num1 <= 1)

console.log(0 || 0)
console.log("" || 1)
console.log(null || "a string")
console.log(undefined || "another string")
console.log(0 || 1)
console.log(0 || 10)

console.log(0 && 1)
console.log(1 && 1)
console.log("hello" && "")

const isBald = true
console.log("is Daniel not Bald " + !isBald)
