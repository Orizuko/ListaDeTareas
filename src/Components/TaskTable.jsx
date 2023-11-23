import TaskRow from "./TaskRow"

const TaskTable = ({task, toggleTask, showCompleted = false}) => {

    const taskTableRows = (doneValue) =>{
        return(
            task
            .filter(task => task.completed === doneValue)
            .map(task => (
                <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
            ))
        )
    }

    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>Tareas: </th>
                </tr>
                </thead>
                <tbody>   
                    {
                    taskTableRows(showCompleted)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TaskTable