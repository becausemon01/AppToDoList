import {combineReducers} from 'redux';
import tasks from './tasks';
import display from './display';
import search from './search';

const myReducer = combineReducers({
    tasks,
    display,
    search,
});

export default myReducer;