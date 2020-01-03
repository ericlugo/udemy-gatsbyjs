import React, { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  const clickHandler = () => setCount(count => count + 1)

  return (
    <div className="counter">
      <h3>click the button below if you like the post</h3>
      <p>likes: {count}</p>
      <button onClick={clickHandler}>click me</button>
    </div>
  )
}

export default Counter
