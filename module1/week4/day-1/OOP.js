class Smartphone {
  static battery = "Included"
  static phonesProduced = 0
  #warranty = false
  constructor(ram, cpu, storage, camera) {
    this.ram = ram
    this.cpu = cpu
    this.storage = storage
    this.camera = camera
    Smartphone.phonesProduced += 1
  }

  turnOn() {
    return "Phone is turning on"
  }
  turnOff() {
    return "Phone is turning off"
  }
  takePicture() {
    return "here is your picture 🌆"
  }
  warrantyAvailable() {
    return this.#warranty
  }
  static printThis() {
    return this
  }

  static getPhonesProduced() {
    return this.phonesProduced
  }
}

const samsungS25 = new Smartphone("32gb", "Snapdragon", "256gb", "20mp")
const iphone = new Smartphone("64gb", "A1", "512gb", "20mp")
const motorola = new Smartphone("16gb", "snapdragon", "128gb", "20mp")

class ProSmartphone extends Smartphone {
  constructor(ram, cpu, camera, storage) {
    super(ram, cpu, camera, storage)
    this.pro = true
  }

  takePicture() {
    return "here is your ULTRA 4K picture 🏕️"
  }
}

const iphonePro = new ProSmartphone("128gb", "A1 AI pro", "20mp", "1tb")

// console.log(iphonePro.takePicture())
// console.log(iphone.takePicture())

// console.log(iphone)
// console.log(iphonePro)

// console.log("warranty available?", iphone.warranty)

// console.log(Smartphone.battery)
// console.log(Smartphone.printThis())

console.log(iphonePro.warrantyAvailable())

console.log(Smartphone.getPhonesProduced())

class Animal {
  constructor(type, age) {
    this.type = type
    this.age = age
  }
}

class Dog extends Animal {
  constructor(type, age, name) {
    super(type, age)
    this.name = name
  }

  bark() {
    return "Woof Woof bro"
  }
}

const fred = new Dog("mammal", 2, "fred")

console.log(fred)
console.log(fred.bark())
