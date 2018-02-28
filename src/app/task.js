import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';

export class Task extends React.Component {


    onCheckClick = (e) => {
     e.preventDefault();
       this.props.onCheckClick(this.props.task.id);
     };

    onCleanClick = (e) => {
        e.preventDefault();
       this.props.onCleanClick(this.props.task.id);
    };



    render(){
        const background =   this.props.task.checked ? 'green' : 'orange';
        return (
            <div>
                <label>
                    <div className = {background}>
                    {this.props.task.title}
                    </div>
                    <button onClick={this.onCheckClick}>{this.props.task.checked ?'Uncheck' : 'Check'}</button>
                    <button  onClick={this.onCleanClick}>CLEAN</button>
                </label>
            </div>)

    }


}

 Task.propTypes ={
        task:PropTypes.object,
        onCheckClick:PropTypes.func,
        onCleanClick:PropTypes.func,
}