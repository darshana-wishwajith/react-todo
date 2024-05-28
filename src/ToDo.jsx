import React, { useState } from 'react'
import ToDoListItem from './ToDoListItem.jsx'
import Background from './assets/images/bg.svg'

function ToDo(){

    const [newTodo, setNewTodo] = useState("")
    const [draggedItem, setDraggedItem] = useState(undefined)
    const [todoList, setTodoList] = useState([])
    const [contentRendered, setContentRendered] = useState(false);

    if(!contentRendered){
        if(navigator.cookieEnabled){
            if(document.cookie){
    
                    let cookieArray = document.cookie.split("=");
                    let cookie;
                    cookieArray.forEach((cookieItem, index , array) => cookieItem === "todos" ? cookie = array[index + 1] : null);
                        
                    if(cookie !== null){
                        const jsonObject = JSON.parse(cookie);
                        setTodoList(todoList => todoList = jsonObject);
                        setContentRendered(prev => prev = true);
                    }
    
            }
        }
    }
    

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

        if(newTodo !== ""){
            
            const jsonString = JSON.stringify([...todoList, currentToDo]);
            document.cookie = `todos = ${jsonString}; expires = ${new Date().getSeconds() + 356 * 24 * 60 * 60}; path = / `;

            setTodoList(prevTodoList => [...prevTodoList, currentToDo])
            setNewTodo("")
        }
    }

    function handleDeleteTodo(index){
        setTodoList(prevTodoList => prevTodoList.filter((_, i) => index !== i))

        const alltodos = [...todoList];
        const updatedTodos = alltodos.filter((_, i) => index !== i);
        const jsonString = JSON.stringify(updatedTodos);
        document.cookie = `todos = ${jsonString}; expires = ${new Date().getSeconds() + 356 * 24 * 60 * 60}; path = / `;
    }

    function handleCompletedTodo(index){
        setTodoList(prevTodoList => prevTodoList.map((todo, i) => 
            index === i ? {...todo, status : "completed"} : {...todo}
        ))

        const alltodos = [...todoList];
        const updatedTodos = alltodos.map((todo, i) => index === i ? {...todo, status : 'completed'} : {...todo});
        const jsonString = JSON.stringify(updatedTodos);
        document.cookie = `todos = ${jsonString}; expires = ${new Date().getSeconds() + 356 * 24 * 60 * 60}; path = / `;
    }

    function handleFailedTodo(index){
        setTodoList(prevTodoList => prevTodoList.map((todo, i) => 
            index === i ? {...todo, status : "faild"} : {...todo}
        ))

        const alltodos = [...todoList];
        const updatedTodos = alltodos.map((todo, i) => index === i ? {...todo, status : 'faild'} : {...todo});
        const jsonString = JSON.stringify(updatedTodos);
        document.cookie = `todos = ${jsonString}; expires = ${new Date().getSeconds() + 356 * 24 * 60 * 60}; path = / `;
    }

    function handleMoveTodoUp(index){
        if(index > 0){
            
            const updatedToDoList = [...todoList];
            [updatedToDoList[index], updatedToDoList[index-1]] = [updatedToDoList[index-1], updatedToDoList[index]];

            setTodoList(prevTodoList => prevTodoList = updatedToDoList);

            const jsonString = JSON.stringify(updatedToDoList);
            document.cookie = `todos = ${jsonString}; expires = ${new Date().getSeconds() + 356 * 24 * 60 * 60}; path = / `;
        }
    }

    function handleMoveTodoDown(index){
        if(index < todoList.length-1){
            
            const updatedToDoList = [...todoList];
            [updatedToDoList[index], updatedToDoList[index+1]] = [updatedToDoList[index+1], updatedToDoList[index]];

            setTodoList(prevTodoList => prevTodoList = updatedToDoList);

            const jsonString = JSON.stringify(updatedToDoList);
            document.cookie = `todos = ${jsonString}; expires = ${new Date().getSeconds() + 356 * 24 * 60 * 60}; path = / `;
        }
    }

    return(
        <>  
            <div>
                <img src={Background} className=' w-[100vw] h-[100vh] bg-contain -z-10 fixed'/>
            </div>
            <div className='z-10 flex flex-col items-center justify-center h-full bg-transparent backdrop-blur pb-[65vh]'>
                <h1 className='py-1 mt-20 text-6xl font-bold text-blue-500'>Easy To-Do</h1>
                <p className='text-sm font-semibold border-b-[1px] mb-10 border-b-black/25'>Note down your tasks and manage them easily</p>

                <div className='border-transparent rounded-md p-[5px] border-2 mb-10 bg-blue-100 shadow-xl' id='inputDiv'>
                    <input 
                        type="text" 
                        onChange={
                            (event) => setNewTodo(prevToDo => prevToDo = event.target.value)
                        }
                        placeholder='Enter a new task...'
                        className='px-4 py-2 rounded-md text-md focus:outline-none w-[25vw] bg-blue-100'
                        value={newTodo}
                        id='taskInput'
                        onFocus={() => {
                                document.getElementById("inputDiv").classList.add("border-blue-500");
                                document.getElementById("inputDiv").classList.remove("border-transparent");
                            }
                        }
                        onBlur={() => {
                                document.getElementById("inputDiv").classList.remove("border-blue-500");
                                document.getElementById("inputDiv").classList.add("border-transparent");
                            }
                        }
                    />
                    <button onClick={handleAddTodo} className='px-4 py-2 text-white rounded-md text-md bg-gradient-to-tr from-blue-500 to-green-500'>Add task</button>
                </div>

                <div>
                    <ul>
                        {todoList.map((todo, index) => 
                        
                        {
                        return (
                                <li 
                                    key={index}
                                    draggable={true}
                                    
                                    onDragStart={(event) => {
                                            setDraggedItem(index);
                                            event.currentTarget.classList.add("dragging");
                                        }
                                    }
                                    
                                    onDragEnd={(event) => {
                                        event.currentTarget.classList.remove("dragging");
                                    }}

                                    onDragOver={(event) => event.preventDefault()}
                                    
                                    onDrop={(event) => {
                                        const updatedToDoList = [...todoList];
                                        [updatedToDoList[index], updatedToDoList[draggedItem]] = [updatedToDoList[draggedItem], updatedToDoList[index]];

                                        setTodoList(prevTodoList => prevTodoList = updatedToDoList);

                                        const jsonString = JSON.stringify(updatedToDoList);
                                        document.cookie = `todos = ${jsonString}; expires = ${new Date().getSeconds() + 356 * 24 * 60 * 60}; path = / `;
                                        }
                                    }
                                    >
                                    <ToDoListItem attrs={todo} id={index} funcs={{handleAddTodo, handleDeleteTodo, handleCompletedTodo, handleFailedTodo, handleMoveTodoUp, handleMoveTodoDown}}/>
                                </li>
                            )}
                        
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ToDo