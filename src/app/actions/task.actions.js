import {SET_TASK, REMOVE_TASKS,ONE_TASK, CHECK_TASK, REMOVE_ALL_CHECK} from '../reducers/tasks.reducer';





export const setTaskAction = (title) => (dispatch) => {
console.log('lol');
    const task = {
        id: Math.random().toString(20).substring(2),
        title,
        checked: false

    };

    dispatch({type: SET_TASK, payload:task});

};


export const removeAllTasksAction = () => (dispatch) => {

    console.log ('vkvna');
    dispatch({ type: REMOVE_TASKS, payload:{}});

};

export const removeOneTasksAction = (taskId) => (dispatch) => {

    dispatch ({type: ONE_TASK, payload:taskId })


};


export const checkTasksAction = (taskId) => (dispatch) => {

    dispatch ({type: CHECK_TASK, payload: taskId})
};

export const removeAllCheckedTasksAction = () => (dispatch) => {

    dispatch ({type: REMOVE_ALL_CHECK, payload: ''})
};