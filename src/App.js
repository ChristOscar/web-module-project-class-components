import React from 'react';
import { ReactDOM } from 'react-dom';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks
    };
  }

  handleClearCompleted = () => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(task => {
        return !task.completed;
      })
    })
  }

  handleAddTask = (taskName) => {
    const newTask = {
      task: taskName, 
      id: Date.now(), 
      completed: false
    }

    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTask]
    })
  }

  handleToggleTask = (selectedTask) => {
    this.setState({
      ...this.state, 
    tasks: this.state.tasks.map(task => {
      if(task.id === selectedTask.id) {
        return({
          ...task,
          purchased: !task.completed
        })
      } else {
        return task;
       }
      })
    });
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
        <div className='header'>
        <h1>Welcome to the To Do App! </h1>
        <p>Use as you wish! Promise you wont be let down. </p>
        </div>
        <TodoList handleToggleTask={this.handleToggleTask} tasks={this.state.tasks} />
        <div className='todo-form'>
        <TodoForm handleAddTask={this.handleAddTask}/>
        </div>
        <button onClick={this.handleClearCompleted} className='clear-btn'>Clear Completed</button>
      </div>
    );
  }
}

export default App;