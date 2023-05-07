import { useState } from 'react'

const CounterCom = () => {
  const [count, rCount] = useState((prev => prev || 0));
  const  handelIncrementCount = () => rCount((prev) => prev+1)
  const  handelDecrementCount = () => rCount((prev) => prev-1)
  const  handelResetCount = () => rCount(0)
  return (
    <div>
      <h2>count {count}</h2>
      <button onClick={() => handelIncrementCount()}>Increment</button>
      <button onClick={() => handelDecrementCount()} >Decrement</button>
      <button onClick={() => handelResetCount()}>Reset</button>
      <hr/>
    </div>
  )
}

export default CounterCom;