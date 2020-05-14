// Libraries
import * as types from "../constants/ActionTypes";
import moment from "moment";

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

const findIndex = (tasks, id) => {
  var result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) result = index;
  });
  return result;
};

const reorder = (todoList, startIndex, endIndex) => {
  const result = Array.from(todoList);
  const [remove] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, remove);
  return result;
};

let myReducer = (state = initialState, action) => {
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
            priority: action.task.priority,
            date: moment(new Date()).format("Do"),
            Project: action.task.project,
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
      // let index = findIndex(state, id);
      // return [...state, state.splice(index, 1)];
      return state.filter(todo => todo.id !== action.id);

    // this.props.updateTask({
    //   name: abc
    // });

    // this.props.updateTask({
    //   id:
    //   priority: abc
    // });
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
      return state.map(todo =>
        todo.id === action.id
          ? {
              ...todo,
              ...action.payload,
              // name: action.task.name,
            }
          : todo
      );
    case types.DRAG_AND_DROP:
      console.log(action.result);
      const { destination, source } = action.result;

      if (!destination) {
        return [...state];
      } else {
        const todoList = reorder(action.task, source.index, destination.index);
        return [...todoList];
      }
    case types.SORT_TASK:
      const tasks = [...state];

      tasks.sort((a, b) => {
        if (a.priority > b.priority) return 1;
        if (a.priority < b.priority) return -1;
        else return 0;
      });

      return [...tasks];
    default:
      return state;
  }
};

export default myReducer;
