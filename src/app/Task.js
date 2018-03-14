import React from "react";
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

    onDetailClick = (e) => {
        e.preventDefault();
        this.props.onDetailClick(this.props.task.id);
    };


    render(){
       const checkedClass = this.props.task.checked ? 'checked' : '';

        return (
        <div className='container'>
            <span className={`title ${checkedClass}`}> {this.props.task.title} </span>
            <button onClick={this.onCheckClick}>{this.props.task.checked ? 'un-check' : 'check'}</button>
            <button onClick={this.onCleanClick}>clean</button>
            <button onClick={this.onDetailClick}>detail</button>
        </div>)
    }
}

Task.propTypes ={
    task:PropTypes.object,
    onCheckClick:PropTypes.func,
    onCleanClick:PropTypes.func,
    onDetailClick:PropTypes.func,
};