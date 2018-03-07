import React from "react";
import {TaskWrapper} from "./taskwrapper.js";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setTaskAction, removeAllTasksAction, removeOneTasksAction, checkTasksAction, removeAllCheckedTasksAction} from "./actions/task.actions";
import PropTypes from 'prop-types';

import '../styles.css';
import '../main.css';
import '../maintitle.css';


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

//CLEAN ALL - buttony s eventom sa nachadzaju v tomto componente
    onClickHandler = (e) => {
        e.preventDefault();
        this.props.removeAllTasksAction();

    };

    //CLEAN DONE
    onClickHandlerDone = (e) => {
        e.preventDefault();
        this.props.removeAllCheckedTasksAction();
    };



    onCheckClick = (taskId) => {
       this.props.checkTasksAction(taskId);
    };


  //ONE click clean
    onCleanClick = (taskId) => {
        this.props.removeOneTasksAction(taskId);
        };

    //add
    onClickHandlerAdd = (e) => {
        e.preventDefault();

        if(this.state.inputData){
            this.props.setTaskAction(this.state.inputData);
            this.setState({inputData:''});
        }
    };


    render()
    {
        return (
            <div className='main'>
                <form>
                    <label>
                        <div>
                            <button  key='cleanAll' onClick={this.onClickHandler}>CLEAN ALL</button>
                            <button  key='cleanDone'onClick={this.onClickHandlerDone}>CLEAN DONE</button>
                            <input  key='data' className='titleinput' value={this.state.inputData} onChange={this.onInputChange}/>
                            <button key='add' className='add' onClick={this.onClickHandlerAdd}>ADD </button>
                        </div>
                    </label>
                </form>

                <TaskWrapper onCheckClick={this.onCheckClick} onCleanClick={this.onCleanClick}
                             tasks={this.props.tasks}/>
            </div>
        )
    }
}
//vzdy zadefinovat, ake action a data chceme pouzit
App.propTypes = {
    setTaskAction: PropTypes.func.isRequired,
    removeAllTasksAction: PropTypes.func,
    removeOneTasksAction: PropTypes.func,
    checkTasksAction: PropTypes.func,
    removeAllCheckedTasksAction: PropTypes.func,
    tasks: PropTypes.object,
    };

//mapping of state to component props - data from store -> props - konkretne data na kontretnu props z konktet reducera
const mapStateToProps = (state) => ({
    tasks: state.tasks.byId,
});

//maps actions to props
const mapDispatchToProps = (dispatch) => bindActionCreators({
    setTaskAction,
    removeAllTasksAction,
    removeOneTasksAction,
    checkTasksAction,
    removeAllCheckedTasksAction
}, dispatch);


// connects mapStateToProps and mapDispatchToProps to this component
export default connect(mapStateToProps, mapDispatchToProps)(App);