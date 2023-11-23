import "./Todo.css"

const TodoInput = () =>{
    return(
        <div>
            <div>
                <input className="input"
                type="text" 
                placeholder="Añadir una tarea"/>
            </div>
        </div>
    )
}

export {TodoInput}