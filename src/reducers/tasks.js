import * as types from "../constants/ActionTypes";

// var data = JSON.parse(localStorage.getItem("tasks"));
var initialState = [];

var s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

var generateID = () => {
  return (
    "tan" + "_" + s4() + s4() + "_" + s4() + "_" + s4() + s4() + s4() + s4()
  );
};

var findIndex = (tasks, id) => {
  var result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) result = index;
  });
  return result;
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return [...state];
    case types.ADD_TASK:
      // localStorage.setItem("tasks", JSON.stringify(state));
      let result = action.task.name;
      if (result !== "") {
        return [
          ...state,
          {
            id: generateID(),
            name: action.task.name,
            completed: false,
          },
        ];
      } else {
        return [...state];
      }
    case types.TOGGLE_TASK:
      return state.map(todo =>
        todo.id === action.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );
    case types.DELETE_TASK:
      let id = action.id;
      let index = findIndex(state, id);
      // return [...state, state.splice(index, 1)];
      return state.filter(todo => todo.id !== action.id);

    case types.UPDATE_TASK:
      // let task = {
      //   id: action.task.id,
      //   name: action.task.name,
      // };
      // let indexUdp = findIndex(state, task.id);
      // if (task.name !== "") {
      //   state[indexUdp] = task;
      // }
      // localStorage.setItem("tasks", JSON.stringify(state));
      console.log(action);
      return state.map(todo =>
        todo.id === action.task.id
          ? {
              ...todo,
              name: action.task.name,
            }
          : todo
      );
    default:
      return state;
  }
};

export default myReducer;
