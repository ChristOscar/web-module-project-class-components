import React from "react";

const Todo = props => {
    const handleClick = () => {
        props.handleToggleTask(props.listToDo);
    }
    return(
        <div onClick={handleClick} className={`task${props.listToDo.completed ? 'completed' : ''}`}>
            <p>{props.listToDo.name}</p>
        </div>
    );
};

export default Todo;