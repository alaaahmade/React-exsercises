import { useState } from 'react';

const ToDo = () => {
  let [tasks, setTask] = useState([])
  const [val, setVal] = useState('')
  const handleVal = (newVal) => setVal(newVal)
  return <div className='todo'>
    <label>ToDo</label>
    <input className='input' onChange={(e) => handleVal(e.target.value)}></input>
    <button onClick={()=> setTask([...tasks, {p: val, id: tasks.length+1}])}>Add</button>
    <ul>
      {tasks.map((e) => <li 
      id={e.id} 
      key={e.id}
      >{e.p} 
      <button 
      id={e.id}
      onClick={(e) => setTask(tasks.filter(t => +t.id !== +e.target.id))}>
        Delete
        </button>
         </li>)}
    </ul>
    <hr/>
  </div>
}

export default ToDo;