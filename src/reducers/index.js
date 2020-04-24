import { combineReducers } from "redux";
import tasks from "./tasks";
import display from "./display";
import search from "./search";
import task from "./task";

const myReducer = combineReducers({
  tasks,
  display,
  search,
  task,
});

export default myReducer;
