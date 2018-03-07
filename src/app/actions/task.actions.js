import {SET_TASK} from '../reducers/tasks.reducer';




export const setTaskAction = (title) => (dispatch) => {
console.log('lol');
    const task = {
        id: Math.random().toString(20).substring(2),
        title,
        checked: false

    };

    dispatch({type: SET_TASK, payload:task});


}