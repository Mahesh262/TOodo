import React from 'react'

const TodoForm = (props) => {
     const [inpt ,setInpt] = React.useState('')
      const handlesubmit = (e)=>{
          e.preventDefault()
          props.submits({
              id:Math.floor(Math.random()* 100),
              text:inpt,
          })
          setInpt('')
      }
 
  return (
    <>
    TodoForm
    <form onSubmit={handlesubmit}>
        <input type ="text" value ={inpt ?? ""} onChange={(e)=>setInpt(e.target.value)}/>
    
        <button type='submit'>Add Tod</button>
    </form>
    
    </>
  )
}

export default TodoForm