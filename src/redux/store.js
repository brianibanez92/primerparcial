import {createStore, compose, applyMiddleware} from 'redux'
import rootReduxes from './ducks'
import thunk from 'redux-thunk'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default createStore(
    rootReduxes, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
);