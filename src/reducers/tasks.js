import * as types from '../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];

var s4 = () => {
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }
  
var generateID = () => {
    return s4() + s4() + '_' + s4() + '_' + s4() + s4() + s4() + s4();
  }

var findIndex = (tasks, id) => {
    var result = -1 ;
    tasks.forEach((task, index) => {
        if (task.id === id)
            result = index
    });
    return result;
}


var myReducer = (state = initialState , action) => {
    switch(action.type){
        case types.LIST_ALL :
            return state;
        case types.ADD_TASK :
            var newTask = {
                id : generateID(),
                name : action.task.name
            };
            state.push(newTask);
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
        case types.DELETE_TASK :
            var id = action.id;
            var index = findIndex(state, id);
            state.splice(index, 1);
            localStorage.setItem("tasks",JSON.stringify(state));
            return [...state];
        default: return state
    }
}

export default myReducer;