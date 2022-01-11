import React from "react";

class Todo extends React.Component {
    render(){
        const handleClick = () => {
            this.props.handleToggleTask(this.props.task);
        }
        return(
            <div onClick={handleClick} className={`task${this.props.task.completed ? 'completed' : ''}`}>
                <p>{this.props.task.name}</p>
            </div>
        );
    }
    }
   

export default Todo;