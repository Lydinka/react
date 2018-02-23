import React from "react";
import  Task  from "./task.js";
import { render } from "react-dom";
import Hello from "./index.js";
import "../styles.css";


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputData : '',
            tasks: {},


        };
    }
    onInputChange = (e) =>
    {
        this.setState({inputData: e.target.value})
    };


    onClickHandler = (e) => {
        e.preventDefault();
        console.log ('click')
        };

    onClickHandlerDone = (e) => {
            e.preventDefault();
            console.log ('clean click')
    };

    onClickHandlerAdd = (e) => {
        e.preventDefault();
        var taskId = Math.random().toString(36).substring(7);
        var newTask = {id: taskId, title: this.state.inputData };
        this.setState({tasks: {...this.state.tasks, [taskId]: newTask}});
        console.log(taskId)
        console.log({tasks: {...this.state.tasks, [taskId]: newTask}})
   };

   /* onCheckHandler = (e) => {
        this.state.
    }*/




    render()
    {
        console.log(this.state)
       return (<form>
            <label >
                <button onClick={this.onClickHandler}>Clean all</button>
                <button onClick={this.onClickHandlerDone}>Clean done</button>
                <input value={this.state.inputData} onChange={this.onInputChange}/>
                {<button onClick={this.onClickHandlerAdd}> Add task</button>}

            </label>
        </form>)
    }
}



render (<App />, document.getElementById("root"));