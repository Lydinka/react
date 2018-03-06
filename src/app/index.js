import React from "react";
import {TaskWrapper} from "./taskwrapper.js";
import { render } from "react-dom";
import "../styles.css";
import {Provider} from 'react-redux';
import {store} from './store.js';
import "../main.css";
import "../maintitle.css";
import {setTaskAction} from './actions/task.actions'
import {Task} from "./task";
import PropTypes from "prop-types";



export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputData : '',
            tasks: {},
        };
    }
    onInputChange = (e) => {
        this.setState({inputData: e.target.value})
    };


    onClickHandler = (e) => {
        e.preventDefault();
        this.setState({tasks: {}});

    };

    onClickHandlerDone = (e) => {
        e.preventDefault();
        let tasks = {...this.state.tasks};
        Object.values(this.state.tasks).map((task) => {
             if (task.checked) {
                delete tasks[task.id]
            }
        });
         this.setState({tasks});
    };


    onCheckClick = (taskId) => {
        const task = {...this.state.tasks[taskId]};
        const checkedTask = {...task, checked: !task.checked};
        this.setState({tasks:{...this.state.tasks, [taskId]: checkedTask}});
    };

    onCleanClick = (taskId) => {
        const tasks = {...this.state.tasks};
        delete tasks[taskId];
        this.setState({tasks});
        console.log (taskId)
    };

    onClickHandlerAdd = (e) => {
        e.preventDefault();
        const taskId = Math.random().toString(20).substring(2);
        const newTask = {id: taskId, title: this.state.inputData, checked: false};
       this.setState({tasks: {...this.state.tasks, [taskId]: newTask}, inputData:''});
       this.props.setTaskAction(this.state.inputData);

    };


    render()
    {
       return (
           <Provider store={store}>
               <div className='main'>
                   <form>
                        <label>
                            <div>
                                <button   onClick={this.onClickHandler}>CLEAN ALL</button>
                                <button  onClick={this.onClickHandlerDone}>CLEAN DONE</button>
                                <input  className='titleinput' value={this.state.inputData} onChange={this.onInputChange}/>
                                <button  className='add' onClick={this.onClickHandlerAdd}>ADD </button>
                            </div>
                        </label>
                    </form>

                    <TaskWrapper onCheckClick={this.onCheckClick} onCleanClick={this.onCleanClick}
                                 tasks={this.state.tasks}/>
                </div>
           </Provider>
       )
    }
}


App.propTypes ={
    setTaskAction: PropTypes.func,
};




render (<App />, document.getElementById("root"));