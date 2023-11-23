import "./Task.css";

const Task = () => {
    return(
        <div className="container">
            <div className="division1">
                <span className="span"></span>
                <p className="tarea">
                    Tarea
                </p>
            </div>
            <img className="delete" src="/delete-icon.svg" alt="Delete Icon"/>
        </div>
    )
}

export {Task}