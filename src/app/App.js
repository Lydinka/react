import React from "react";
import TaskWrapper from "./TaskWrapper";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setTaskAction, removeTasksAction, checkTasksAction} from "./actions/task.actions";
import PropTypes from 'prop-types';
import './styles/styles.css';


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputData : '',
        };
    }

    onInputChange = (e) => {
        this.setState({inputData: e.target.value})
    };

    onClickHandlerCleanAll = (e) => {
        e.preventDefault();
        const taskIds = this.props.tasks.map(task => task.id);
        this.props.removeTasksAction(taskIds);
    };

    onClickHandlerDone = (e) => {
        e.preventDefault();
        const tasks = this.props.tasks;
        const taskIds = tasks.filter(task => task.checked).map(task => task.id);
        this.props.removeTasksAction(taskIds);
    };

    onCheckClick = (taskId) => {
       this.props.checkTasksAction(taskId);
    };

    onCleanClick = (taskId) => {
        this.props.removeTasksAction([taskId]);
    };

    onClickHandlerAdd = (e) => {
        e.preventDefault();

        if(this.state.inputData){

            const taskId = Math.random().toString(20).substring(2);

            this.props.setTaskAction(this.state.inputData, taskId);
            this.setState({inputData:''});
        }
    };


    render()
    {
        return (
            <div className='main'>
                <button className='cleanButton' key='cleanAll' onClick={this.onClickHandlerCleanAll}>clean all</button>
                <button key='cleanDone'onClick={this.onClickHandlerDone}>clean done</button>
                <input  key='data' className='titleinput' value={this.state.inputData} onChange={this.onInputChange}/>
                <button key='add' className='add' onClick={this.onClickHandlerAdd}>add </button>

                <TaskWrapper onCheckClick={this.onCheckClick} onCleanClick={this.onCleanClick}
                             tasks={this.props.tasks}/>
            </div>
        )
    }
}

App.propTypes = {
    setTaskAction: PropTypes.func.isRequired,
    removeTasksAction: PropTypes.func,
    checkTasksAction: PropTypes.func,
    tasks: PropTypes.array,
    };


const mapStateToProps = (state) => ({
    tasks: Object.values(state.tasks.byId)
});


const mapDispatchToProps = (dispatch) => bindActionCreators({
    setTaskAction,
    removeTasksAction,
    checkTasksAction,
    }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(App);