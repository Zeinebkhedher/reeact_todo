import React from 'react'
import {v4 as uuidv4} from "uuid"
function Form({input,setInput,todos,setTodos}) {


const handleChange = (e)=>{
  setInput(e.target.value)
}

const handleSubmit=(e)=>{
    e.preventDefault()
    setInput([...todos,{id:uuidv4(),title:input,completed:false}])
    setInput("")
}
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder="add todo"
            onChange={handleChange}
            value={input}
            required/>
            <button type="submit" >Add</button>
        </form>
    )
}

export default Form;
