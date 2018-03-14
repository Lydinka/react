import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {reducers} from './reducers/index';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';

const middlewares = [];

middlewares.push(thunk);

middlewares.push(routerMiddleware(browserHistory));


let middleware = applyMiddleware(...middlewares);


if (window.devToolsExtension) {
    middleware = compose(middleware, window.devToolsExtension());
}

const store = createStore(reducers, middleware);

const history = syncHistoryWithStore(browserHistory, store);

export {store, history};