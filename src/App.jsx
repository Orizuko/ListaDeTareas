import { useState, useEffect } from "react";
import "./App.css";
import TaskCreator from "./Components/TaskCreator"
import TaskTable from "./Components/TaskTable";
import VisibilityControl from "./Components/VisibilityControl";

function App(){

  const [taskItems, setTaskItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  function createNewTask(taskName){
    if (!taskItems.find(task => task.name === taskName)){
      setTaskItems([...taskItems, {name: taskName, completed: false}])
    }else{
      alert('Esta tarea ya ha sido añadida 👺')
    }
  }

  const toggleTask = (task) => {
    setTaskItems(
    taskItems.map((t) => (t.name == task.name ? {...t, completed: !t.completed} : t))
    )
  }

  useEffect(() => {
    let data = localStorage.getItem('task')

    if(data){
      setTaskItems(JSON.parse(data))
    }
  }, [ ])

  const deleteTask = () => {
    setTaskItems(taskItems.filter(task => !task.completed))
    setShowCompleted(false)
  }

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(taskItems))
  }, [taskItems])

  return (
    <div className='App'>
      <h1>Proyecto Lista de Tareas</h1>
      <hr/>
      
      <TaskCreator createNewTask={createNewTask}/>
      <TaskTable task={taskItems} toggleTask={toggleTask}/>
      <VisibilityControl isChecked={showCompleted} setShowCompleted={(checked) => setShowCompleted(checked)} deleteTask={deleteTask}/>
      {
      showCompleted === true && (<TaskTable task={taskItems} toggleTask={toggleTask} showCompleted={showCompleted}/>)
      }

    </div>
  );
}

export default App


/*<form>
<input type="text" placeholder="Añade una tarea"/>
<button>Añadir</button>
</form>*/
