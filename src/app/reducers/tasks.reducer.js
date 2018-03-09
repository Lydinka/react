export const SET_TASK = 'SET_TASK';
export const REMOVE_TASKS = 'REMOVE_TASKS,';
export const CHECK_TASK = 'CHECK_TASK';


const initialState = {
    byId: {},
};

const removeTasks = (state, payload) => {
    const byId = {...state.byId};

    payload.forEach(taskId => delete byId[taskId]);

    return {
        ...state, byId
    }
};


const checkTasks = (state, payload) => {
    const task = {...state.byId[payload]};
    task.checked = !task.checked;

    return{
        ...state, byId:{...state.byId,[payload]:task}
    }
};


export const taskReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_TASK:

            return {
                ...state,
                byId: {
                    ...state.byId, [payload.id]: payload
                }
            };

        case REMOVE_TASKS:

            return removeTasks(state, payload);

        case CHECK_TASK:

            return  checkTasks(state, payload);

        default: return state;
        }
    };


