import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
const Home = () => {
   const [values, setValues]= useState('')
    const [list, setList]= useState([])
     const [edit, setEdit] = useState(false)
    
    //  Add todo
     const addTodo= (todo)=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
          return;
        }
      const  newList = [todo,...list]
       setList (newList)
        console.log(newList)
     };
//  edit
const handleEditChange=(id,text)=>{
  setEdit(id)
  setValues(text)
}
  const editList = (id,text)=>{
     let temp= list.map((todo)=>{
       if(todo.id === id){
         todo.text = text
       }
       return list
     })  
     setValues(temp)
     setEdit(false)

  }

  // remvoe

  const remv =(id)=>{
    let temps= [...list].filter((itms)=>itms.id !== id)
      setList(temps)
  }


  return (
    <>
    <TodoForm submits={addTodo}/>
    <Todo
      list ={list}
      editList={editList}
      edit={edit}
      handleEditChange={handleEditChange}
       values={values}
       setValues={setValues}
        remv={remv}
    
    />
    
    </>
  )
}

export default Home