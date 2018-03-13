import {SET_TASK, REMOVE_TASKS, CHECK_TASK} from '../reducers/tasks.reducer';

export const setTaskAction = (title, taskId) => {

    const task = {
        id: taskId,
        title,
        checked: false
    };

    return {type: SET_TASK, payload:task};
};


export const removeTasksAction = (taskIds) => ({type: REMOVE_TASKS, payload: taskIds});

export const checkTasksAction = (taskId) => ({type: CHECK_TASK, payload: taskId});
