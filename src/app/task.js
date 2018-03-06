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

    render(){
       const checkedClass = this.props.task.checked ? 'checked' : '';

        return <div className='container'>

            <div className='wra'>

            <span className={'title '+checkedClass}> {this.props.task.title} </span>
            <span>
                <button onClick={this.onCheckClick}>{this.props.task.checked ? 'UN-CHECK' : 'CHECK'}</button>
            </span>
            <button onClick={this.onCleanClick}>CLEAN</button>
            </div>
        </div>
    }
}

Task.propTypes ={
    task:PropTypes.object,
        onCheckClick:PropTypes.func,
        onCleanClick:PropTypes.func,
};