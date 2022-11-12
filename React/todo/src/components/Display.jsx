import React from 'react'

const Display = (props) => {

    const {todoList, setTodoList} = props;

    const handleCompleted = (todo) => {
        todo.markedDelete = !todo.markedDelete;
        let updateTodos = [...todoList]
        setTodoList(updateTodos)
    }

    const styled = (markedDelete) => {
        if(markedDelete === true){
            return "completed"
        }
        else{
            return "notCompleted"
        }
    }

    const deleteButton = (idFromBelow) => {
        setTodoList(
            todoList.filter((todo, index)=>{
                return todo.content !== idFromBelow;
            })
        )
    }



  return (
    <div>
        {
            todoList.map((todo, index)=>(
                <div className={styled(todo.markedDelete)} key={index}>
                    <p>{todo.content}</p>
                    <input type="checkbox" onChange={(e)=>handleCompleted(todo)}/>
                    <button onClick={(e)=>deleteButton(todo.content)}>Delete</button>
                </div>
            ))
        }
    </div>
  )
}

export default Display