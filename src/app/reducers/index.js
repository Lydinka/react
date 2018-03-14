import {combineReducers} from 'redux';
import {taskReducer} from './tasks.reducer';
import {routerReducer} from 'react-router-redux';

export const reducers = combineReducers({
    routing: routerReducer,
    tasks: taskReducer
});

