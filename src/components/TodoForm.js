import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input:''
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            input: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddTask(this.state.input);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type='text' name='task' />
                <button>Add Task</button>
            </form>
        )
    }
}

export default TodoForm;