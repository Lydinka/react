import React from "react";
import {TaskWrapper} from "./taskwrapper.js";
import { render } from "react-dom";
import {Task} from "./task";
import styled from "styled-components";

const Body = styled.body`
       text-align: center;
       background: #cce2ff; 
       margin: auto;
       width: 950px;
       height: auto;
       margin-top: 40px;
       margin-bottom: 30px;
       padding-bottom: 20px;
       padding-top: 30px;
`;


const Button = styled.button`
  border-radius: 6px;
  padding: 0.25em 2em;
  margin: 0 0.6em;
  background: transparent;
  color:#003087;
  border: 2px solid #003087;
`;

const Input = styled.input`
  padding: 0.47em;
  margin: 0.5em;
  color: #003087;
  background:#fff ;
  border: none;
  border-radius: 3px;
`;



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
        var taskId = Math.random().toString(36).substring(7);
        var newTask = {id: taskId, title: this.state.inputData, checked: false};
       this.setState({tasks: {...this.state.tasks, [taskId]: newTask}, inputData:''});
    };


    render()
    {
       return (
            <Body>
                <form>
                    <label>
                            <Button onClick={this.onClickHandler}>CLEAN ALL</Button>
                            <Button onClick={this.onClickHandlerDone}>CLEAN DONE</Button>
                            <Input value={this.state.inputData} onChange={this.onInputChange}/>
                            <Button onClick={this.onClickHandlerAdd}>ADD </Button>
                    </label>
                </form>
                <TaskWrapper onCheckClick={this.onCheckClick} onCleanClick={this.onCleanClick}
                             tasks={this.state.tasks}/>
            </Body>
       )
    }
}



render (<App />, document.getElementById("root"));