function oneMore(callBack) {
  return callBack
}

// function callAnother() {
//   oneMore(() => {
//     oneMore(() => {
//       oneMore(() => {
//         oneMore(() => {
//           oneMore(() => {

//           })
//         })
//       })
//     })
//   })
// }

let callPromise = () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success its a triangle")

      reject(new Error("failed, its something else"))
    }, 2000)
  })
  return promise
}

callPromise()
  .then((result) => console.log(result))
  .catch((err) => console.log(err))

callPromise()
  .then((result) => {
    console.log(result)
    callPromise()
      .then((result) => {
        console.log(result)
        return callPromise()
      })
      .catch((error) => console.log(error))
  })
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(result)
  })

const handlePromises = async () => {
  try {
    const result1 = await callPromise()
    console.log(result1)

    const result2 = await callPromise()
    console.log(result2)

    const result3 = await callPromise()
    console.log(result3)

    const result4 = await callPromise()
    console.log(result4)

    const result5 = await callPromise()
    console.log(result5)
  } catch (error) {
    console.log(error)
  }
}

handlePromises()

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success its a triangle1")

    reject(new Error("failed, its something else"))
  }, 2000)
})

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success its a triangle2")

    reject(new Error("failed, its something else"))
  }, 2000)
})

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success its a triangle3")

    reject(new Error("failed, its something else"))
  }, 2000)
})

let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success its a triangle4")

    reject(new Error("failed, its something else"))
  }, 2000)
})

const handleAll = async () => {
  const result = await Promise.all([promise1, promise2, promise3, promise4])
  console.log(result)
}

handleAll()
