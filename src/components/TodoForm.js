import React,{useState} from 'react'

export default function TodoForm(props) {

    const [input, setInput] = useState('');

    const handleChange = e =>{
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask({
        id: Math.floor(Math.random()*1000000),
        text:input,
        isComplete:false
       })
       setInput('')
    }


  return (
    <form className='todoform'>
      <input type="text" placeholder='Add a to-do' onChange={handleChange} className='to-do-input' value={input} name="text" />
      <button type="submit" className='todo-btn' onClick={handleSubmit}> ADD </button>
  </form>
  )
}
