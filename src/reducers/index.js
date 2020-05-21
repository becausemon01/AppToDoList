import { combineReducers } from "redux";
import tasks from "./tasks";
import display from "./display";
import search from "./search";
import task from "./task";
import projects from "./projects";
import value from "./value";

const myReducer = combineReducers({
  tasks,
  display,
  search,
  task,
  projects,
  value,
});

export default myReducer;
