export const SET_TASK = 'SET_TASK';
export const REMOVE_TASKS = 'REMOVE_TASKS,';
export const ONE_TASK = 'ONE_TASK';
export const CHECK_TASK = 'CHECK_TASK';
export const REMOVE_ALL_CHECK ='REMOVE_ALL_CHECK';

const initialState = {
    byId: {},

};

const removeAllCheckedTasks = (state) => {
    const byId = {...state.byId};

    Object.values(state.byId).map((task) => {
        if (task.checked) {
            delete byId[task.id]
        }
    });


    return {
        ...state, byId
    }
};


const deleteOneTask  = (state, payload) => {
    const byId = {...state.byId};
    delete byId[payload];

    return {
        ...state,byId
    }
};


const checkTasks = (state, payload) => {
    const task = {...state.byId[payload]};
    task.checked = !task.checked;

    return{
        ...state, byId:{...state.byId,[payload]:task}
    }

};


/*
kolekcia - byId: {
    idckoo: {id: idckoo, title: lol, checked: false},
    ineidecko: {id: ineidecko, title: omg, checked: false}
}
 */



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
            return {...state, byId:payload};


        case ONE_TASK:

            return deleteOneTask(state, payload);


        case CHECK_TASK:

            return  checkTasks(state, payload);

        case REMOVE_ALL_CHECK:

            return removeAllCheckedTasks(state);


        default: return state;
        }
    };


