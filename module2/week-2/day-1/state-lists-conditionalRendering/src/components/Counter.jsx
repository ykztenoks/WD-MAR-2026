import { useState } from "react"
export default function Counter() {
  const [num, setNum] = useState(0)

  return (
    <div>
      <span>current number:{num}</span>
      <button onClick={() => setNum(num + 1)}>increment</button>
      <button onClick={() => setNum(num - 1)}>decrement</button>
    </div>
  )
}
