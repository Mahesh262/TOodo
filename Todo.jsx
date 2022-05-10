import React from 'react'
import { Button } from 'react-bootstrap'

const Todo = ({
    editList,
    list,
    edit,
    handleEditChange,
    values,
    setValues,
    remv

}) => {
  return (
    <>
    
    {list.map((todo)=>(
        <div className='row' key={todo.id}>
             {todo.text}
       {edit === todo.id ? (<input width="100px" type ="text" value={values ?? ""} onChange={(e)=>setValues(e.target.value)}/>) :null}


         <div width="100px">
         {edit === todo.id ? (<Button onClick ={()=>editList(todo.id, values)}> Update todo</Button> ):(
        <>
         <button onClick={()=>remv(todo.id)}>Delte</button>
         <button onClick={()=>handleEditChange(todo.id, todo.text)}>Change</button> </>)}

             </div>

        </div>
    ))}
    
    </>
  )
}

export default Todo