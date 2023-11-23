const VisibilityControl = (isChecked, setShowCompleted, deleteTask) => {

    const handleDelete = () => {
        if(window.confirm('¿Estas seguro de querer eliminar esta tarea?')){
            deleteTask()
        }
    }

    return(
        
        <div>
        <input 
        type="checkbox" 
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
        />{" "}
        <label>Mostrar las tareas completadas</label>
        <button onClick={handleDelete}>Eliminar</button>
        </div>

    )
}

export default VisibilityControl