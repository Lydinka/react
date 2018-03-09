import React from "react";
import {Task} from "./Task";
import PropTypes from "prop-types";

const TaskWrapper = ({tasks, onCheckClick, onCleanClick}) => {

    const onCheckClickHandler = (taskId) => {
        onCheckClick(taskId)
    };

    const onCleanClickHandler = (taskId) => {
       onCleanClick(taskId)
    };


    return (
        <div>
            {tasks.map(task => (<Task key={task.id} onCleanClick={onCleanClickHandler}
                                             onCheckClick={onCheckClickHandler} task={task} />))}
        </div>
    );

};

TaskWrapper.propTypes ={
    tasks: PropTypes.array.isRequired,
    onCheckClick:PropTypes.func.isRequired,
    onCleanClick:PropTypes.func.isRequired,
};

export default TaskWrapper;
