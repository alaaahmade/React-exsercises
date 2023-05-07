import { useState } from 'react'

const Second = () => {
  const colors = ['red', 'blue', 'green', 'black', 'yellow'];
  const [color, setColor] = useState(0);
  const handleClassName = (col) => setColor(col)
  return <>
  <div className={`color ${color}`}>
    {colors.map((e) =>
      <button key={e} onClick={() =>
        handleClassName(e)}>
        {e}
      </button>
    )}
  </div>
    <hr/>
    </>
}


export default Second;