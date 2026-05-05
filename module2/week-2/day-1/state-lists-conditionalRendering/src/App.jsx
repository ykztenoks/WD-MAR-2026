import Counter from "./components/Counter"
import { useState } from "react"
import UserCard from "./components/UserCard"

const userArr = [
  {
    name: "Theodor",
    image:
      "https://i.pinimg.com/736x/b1/13/a0/b113a01118e0286ce985ee01543422aa.jpg",
    bio: "cool guy",
  },
  {
    name: "Andre",
    image:
      "https://i.pinimg.com/736x/b1/13/a0/b113a01118e0286ce985ee01543422aa.jpg",
    bio: "cool guy",
  },
  {
    name: "Ali",
    image:
      "https://i.pinimg.com/736x/b1/13/a0/b113a01118e0286ce985ee01543422aa.jpg",
    bio: "cool guy",
  },
  {
    name: "Joao",
    image:
      "https://i.pinimg.com/736x/b1/13/a0/b113a01118e0286ce985ee01543422aa.jpg",
    bio: "cool guy",
  },
  {
    name: "Andy",
    image:
      "https://i.pinimg.com/736x/b1/13/a0/b113a01118e0286ce985ee01543422aa.jpg",
    bio: "cool guy",
  },
]
function App() {
  const [users, setUsers] = useState(userArr)

  const handleDelete = (name) => {
    setUsers(users.filter((user) => user.name !== name))
  }

  return (
    <>
      <h1>hello world</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        voluptatibus hic? Nihil labore asperiores tempore sequi cumque.
        Laudantium accusamus sunt perspiciatis deleniti labore consequatur
        impedit molestias, exercitationem soluta eligendi animi?
      </p>

      <Counter />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "2vw",
        }}
      >
        {users.length ? (
          users.map((user, i) => (
            <div key={i}>
              <UserCard user={user} />
              <button onClick={() => handleDelete(user.name)}>
                delete user
              </button>
            </div>
          ))
        ) : (
          <p>No more users 🥲🥲</p>
        )}

        <button onClick={() => setUsers(userArr)}>reset user list</button>
      </div>
    </>
  )
}

export default App
