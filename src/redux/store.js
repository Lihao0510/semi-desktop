/**
 * Created by lihao on 2017/10/2.
 */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer'

const middleWares = [thunk];

export default createStore(reducers, {}, applyMiddleware(...middleWares));