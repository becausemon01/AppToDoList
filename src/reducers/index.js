import { combineReducers } from "redux";
import tasks from "./tasks";
import display from "./display";
import search from "./search";
import task from "./task";
import projects from "./projects";

const myReducer = combineReducers({
  tasks,
  display,
  search,
  task,
  projects,
});

export default myReducer;
