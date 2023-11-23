import { useState } from "react";

const TaskCreator = ({createNewTask}) => {

    const [newTask, setNewTask] = useState("")
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        createNewTask(newTask)
        setNewTask('')
        alert('tarea añadida ✅')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Añade una tarea" 
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}/>
                <button>Añadir</button>
            </form>
        </div>
    )
}

export default TaskCreator