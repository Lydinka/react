export const SET_TASK = 'SET_TASK';


const initialState = {
    byId: {},
};

export const taskReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_TASK:
            return {
                ...state,
                byId: {
                    ...state.byID, [payload.id]: payload
                }
            };
        default: return state;
        }
    };

