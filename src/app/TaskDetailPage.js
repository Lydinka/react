import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {push as pushAction} from 'react-router-redux';

export class TaskDetailPage extends React.Component {


    onBackClick = (e) => {
        e.preventDefault();
        this.props.pushAction('/');
    };


    render(){
        return (<div className='page'>
                <span className='titleback'>{this.props.task.title}
                </span>
            <button  className='back' onClick={this.onBackClick}>back</button>
        </div>);

    };
}

TaskDetailPage.propTypes = {
    pushAction: PropTypes.func.isRequired,
    params: PropTypes.object,
    task: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
    task: state.tasks.byId && state.tasks.byId[props.params.taskId]

});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    pushAction
},dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(TaskDetailPage);