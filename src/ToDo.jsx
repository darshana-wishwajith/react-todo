import React, { useState } from 'react'

function ToDo(){

    const [newTodo, setNewTodo] = useState("")
    const [todoList, setTodoList] = useState([
        {
            task : 'get breakfirst',
            addedDateTime : '2024-05-27 11:26:24 PM',
            status : 'pending'
        },

        {
            task : 'take a shower',
            addedDateTime : '2024-05-27 11:26:24 PM',
            status : 'completed'
        },

        {
            task : 'walk with dog',
            addedDateTime : '2024-05-27 11:26:24 PM',
            status : 'faild'
        }

    ])

    function handleAddTodo(){

        //setup current datetime
        const dateTime = new Date();
        const year = dateTime.getFullYear();
        const month = dateTime.getMonth() + 1;
        const date = dateTime.getDate();
        const hours = dateTime.getHours() % 12 || 12;
        const minutes = dateTime.getMinutes();
        const seconds = dateTime.getSeconds();
        const meredium = dateTime.getHours() >= 12 ? 'PM' : 'AM';
        
        const timestamp = `${year}-${month.toString().padStart(2, 0)}-${date.toString().padStart(2, 0)} ${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2, 0)} ${meredium}`;
        //setup current datetime

        const currentToDo = {
            task : newTodo,
            addedDateTime : timestamp,
            status : 'pending'
        }

        setTodoList(prevTodoList => [...prevTodoList, currentToDo])
        setNewTodo("")
    }

    function handleDeleteTodo(index){
        setTodoList(prevTodoList => prevTodoList.filter((_, i) => index !== i))
    }

    function handleCompletedTodo(index){
        setTodoList(prevTodoList => prevTodoList.map((todo, i) => 
            index === i ? {...todo, status : "completed"} : {...todo}
        ))
    }

    function handleFailedTodo(index){
        setTodoList(prevTodoList => prevTodoList.map((todo, i) => 
            index === i ? {...todo, status : "faild"} : {...todo}
        ))
    }

    function handleMoveTodoUp(index){
        if(index > 0){
            
            const updatedToDoList = [...todoList];
            [updatedToDoList[index], updatedToDoList[index-1]] = [updatedToDoList[index-1], updatedToDoList[index]];

            setTodoList(prevTodoList => prevTodoList = updatedToDoList);
        }
    }

    function handleMoveTodoDown(index){
        if(index < todoList.length-1){
            
            const updatedToDoList = [...todoList];
            [updatedToDoList[index], updatedToDoList[index+1]] = [updatedToDoList[index+1], updatedToDoList[index]];

            setTodoList(prevTodoList => prevTodoList = updatedToDoList);
        }
    }

    return(
        <>
            <div>
                <h1 className='text-5xl font-bold'>Easy To-Do</h1>
                <p>Note down your tasks and manage them easily</p>

                <div>
                    <input 
                        type="text" 
                        onChange={
                            (event) => setNewTodo(prevToDo => prevToDo = event.target.value)
                        }
                        placeholder='Enter a new task...'
                        className='border'
                        value={newTodo}
                    />
                    <button onClick={handleAddTodo}>Add task</button>
                </div>

                <div>
                    <ul>
                        {todoList.map((todo, index) => 
                        <li key={index}>
                            <div>
                                <span>{todo.task}</span> |&nbsp;&nbsp;
                                <span>{todo.status}</span> |&nbsp;&nbsp;
                                <span>{todo.addedDateTime}</span> |&nbsp;&nbsp;
                                <button onClick={() => handleDeleteTodo(index)}>Delete</button> |&nbsp;&nbsp;
                                <button onClick={() => handleCompletedTodo(index)}>complete</button> |&nbsp;&nbsp;
                                <button onClick={() => handleFailedTodo(index)}>Fail</button> |&nbsp;&nbsp;
                                <button onClick={() => handleMoveTodoUp(index)}>Up</button> |&nbsp;&nbsp;
                                <button onClick={() => handleMoveTodoDown(index)}>Down</button>
                            </div>
                        </li>)}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ToDo