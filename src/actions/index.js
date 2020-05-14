import * as types from "../constants/ActionTypes";

export const listAll = () => {
  return {
    type: types.LIST_ALL,
  };
};

export const onSort = () => {
  return {
    type: types.SORT_TASK,
  };
};

export const addTask = task => {
  return {
    type: types.ADD_TASK,
    task,
  };
};

export const toggleTask = id => {
  return {
    type: types.TOGGLE_TASK,
    id,
  };
};

export const createForm = () => {
  return {
    type: types.CREATE_FORM,
  };
};

export const showForm = () => {
  return {
    type: types.SHOW_FORM,
  };
};

export const closeForm = () => {
  return {
    type: types.CLOSE_FORM,
  };
};

export const closeFormUpdate = () => {
  return {
    type: types.CLOSE_FORM_UPDATE,
  };
};

export const deleteTask = id => {
  return {
    type: types.DELETE_TASK,
    id,
  };
};

export const updateTask = (id, task) => {
  return {
    type: types.UPDATE_TASK,
    id,
    payload: task,
  };
};

export const searchTask = keyword => {
  return {
    type: types.SEARCH,
    keyword,
  };
};

export const editTask = task => {
  return {
    type: types.EDIT_TASK,
    task,
  };
};

export const dragAndDrop = (result, task) => {
  return {
    type: types.DRAG_AND_DROP,
    task,
    result,
  };
};

export const addProject = project => {
  return {
    type: types.ADD_PROJECT,
    project,
  };
};
