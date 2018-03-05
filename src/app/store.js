import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {reducers} from './reducers/index';


const middlewares = [];

middlewares.push(thunk);


let middleware = applyMiddleware(...middlewares);


if (window.devToolsExtension) {
    middleware = compose(middleware, window.devToolsExtension());
}

const store = createStore(reducers, middleware);

export {store};