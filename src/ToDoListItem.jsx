import DeleteIcon from './assets/icons/DeleteIcon'
import CompleteIcon from './assets/icons/CompleteIcon' 
import FailIcon from './assets/icons/FailIcon'
import UpIcon from './assets/icons/UpIcon'
import DownIcon from './assets/icons/DownIcon'


function ToDoListItem(props){
    if(props.attrs.status == "pending"){
        return(
            <>
            <div className='flex justify-between gap-5 px-10 py-5 mb-3 bg-slate-100 min-w-[80vw] rounded-md shadow-xl outline outline-[2px] outline-slate-500 hover:outline-blue-500 hover:bg-blue-100 hover:cursor-grab'>
                <div className='flex items-center flex-1 font-semibold'><span className='px-3 py-1 rounded-md bg-slate-300'>{props.id+1}</span>&nbsp;&nbsp;{props.attrs.task}</div> 
                <div className='flex items-center justify-center px-4 py-1 text-xs font-semibold bg-yellow-500 rounded-full'><div>{props.attrs.status}</div></div> 

                <div className='flex items-center text-xs font-medium'><div>{props.attrs.addedDateTime}</div></div>
                <div className='flex gap-3'>
                    <button onClick={() => props.funcs.handleCompletedTodo(props.id)} className='flex items-center px-2 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-500/70 w-[35px] h-[35px]'><CompleteIcon /></button> 
                    <button onClick={() => props.funcs.handleFailedTodo(props.id)} className='flex items-center px-2 py-2 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-500/70 w-[35px] h-[35px]'><FailIcon /> </button> 
                    <button onClick={() => props.funcs.handleMoveTodoUp(props.id)} className='flex items-center px-2 py-2 font-bold text-white rounded-full bg-cyan-500 hover:bg-cyan-500/70 w-[35px] h-[35px]'><UpIcon /></button> 
                    <button onClick={() => props.funcs.handleMoveTodoDown(props.id)} className='flex items-center px-2 py-2 font-bold text-white rounded-full bg-cyan-500 hover:bg-cyan-500/70 w-[35px] h-[35px]'><DownIcon /></button>
                    <button onClick={() => props.funcs.handleDeleteTodo(props.id)} className='flex items-center px-2 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-500/70 w-[35px] h-[35px]'><DeleteIcon/></button>
                </div> 
            </div>
        </>
        )
    }
    else if(props.attrs.status === "completed"){
        return(
            <>
            <div className='flex justify-between gap-5 px-10 py-5 mb-3 bg-green-100 min-w-[80vw] rounded-md shadow-xl outline outline-[2px] outline-green-500 hover:outline-blue-500 hover:bg-blue-100 hover:cursor-grab'>
                <div className='flex items-center flex-1 font-semibold'><span className='px-3 py-1 bg-green-300 rounded-md'>{props.id+1}</span>&nbsp;&nbsp;<span className='line-through'>{props.attrs.task}</span></div> 
                <div className='flex items-center justify-center px-4 py-1 text-xs font-semibold bg-green-500 rounded-full'><div>{props.attrs.status}</div></div> 

                <div className='flex items-center text-xs font-medium'><div>{props.attrs.addedDateTime}</div></div>
                <div className='flex gap-3'>
                    <button onClick={() => props.funcs.handleCompletedTodo(props.id)} className='flex items-center px-2 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-500/70 w-[35px] h-[35px]'><CompleteIcon /></button> 
                    <button onClick={() => props.funcs.handleFailedTodo(props.id)} className='flex items-center px-2 py-2 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-500/70 w-[35px] h-[35px]'><FailIcon /> </button> 
                    <button onClick={() => props.funcs.handleMoveTodoUp(props.id)} className='flex items-center px-2 py-2 font-bold text-white rounded-full bg-cyan-500 hover:bg-cyan-500/70 w-[35px] h-[35px]'><UpIcon /></button> 
                    <button onClick={() => props.funcs.handleMoveTodoDown(props.id)} className='flex items-center px-2 py-2 font-bold text-white rounded-full bg-cyan-500 hover:bg-cyan-500/70 w-[35px] h-[35px]'><DownIcon /></button>
                    <button onClick={() => props.funcs.handleDeleteTodo(props.id)} className='flex items-center px-2 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-500/70 w-[35px] h-[35px]'><DeleteIcon/></button>
                </div> 
            </div>
        </>
        )
    }
    else if(props.attrs.status === "faild"){
        return(
            <>
            <div className='flex justify-between gap-5 px-10 py-5 mb-3 bg-red-100 min-w-[80vw] rounded-md shadow-xl outline outline-[2px] outline-red-500 hover:outline-blue-500 hover:bg-blue-100 hover:cursor-grab'>
                <div className='flex items-center flex-1 font-semibold line-through'><span className='px-3 py-1 bg-red-300 rounded-md'>{props.id+1}</span>&nbsp;&nbsp;<span className='line-through'>{props.attrs.task}</span></div> 
                <div className='flex items-center justify-center px-4 py-1 text-xs font-semibold bg-red-500 rounded-full'><div>{props.attrs.status}</div></div> 

                <div className='flex items-center text-xs font-medium'><div>{props.attrs.addedDateTime}</div></div>
                <div className='flex gap-3'>
                    <button onClick={() => props.funcs.handleCompletedTodo(props.id)} className='flex items-center px-2 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-500/70 w-[35px] h-[35px]'><CompleteIcon /></button> 
                    <button onClick={() => props.funcs.handleFailedTodo(props.id)} className='flex items-center px-2 py-2 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-500/70 w-[35px] h-[35px]'><FailIcon /> </button> 
                    <button onClick={() => props.funcs.handleMoveTodoUp(props.id)} className='flex items-center px-2 py-2 font-bold text-white rounded-full bg-cyan-500 hover:bg-cyan-500/70 w-[35px] h-[35px]'><UpIcon /></button> 
                    <button onClick={() => props.funcs.handleMoveTodoDown(props.id)} className='flex items-center px-2 py-2 font-bold text-white rounded-full bg-cyan-500 hover:bg-cyan-500/70 w-[35px] h-[35px]'><DownIcon /></button>
                    <button onClick={() => props.funcs.handleDeleteTodo(props.id)} className='flex items-center px-2 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-500/70 w-[35px] h-[35px]'><DeleteIcon/></button>
                </div> 
            </div>
        </>
        )
    }
}

export default ToDoListItem