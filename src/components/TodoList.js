// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from './Todo';

class TodoList extends React.Component {
    render() {
        return(
            <div className='todo-list'>
                {this.props.tasks.map(task => (
                    <Todo handleToggleTask={this.props.handleToggleTask} key={task.id} task={task} name={task.name} completed={task.completed} />
                ))}
            </div>
        );
    }
    }
   

export default TodoList;