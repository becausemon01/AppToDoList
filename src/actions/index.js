import * as types from '../constants/ActionTypes';

export const listAll = () => {
    return {
        type :types.LIST_ALL
    }
};

export const addTask = task => {
    return {
        type : types.ADD_TASK,
        task
    }
};

export const createForm = () => {
    return {
        type : types.CREATE_FORM
    }
};

export const showForm = () => {
    return {
        type : types.SHOW_FORM
    }
};

export const closeForm = () => {
    return {
        type : types.CLOSE_FORM
    }
};

export const closeFormUpdate = () => {
    return {
        type : types.CLOSE_FORM_UPDATE
    }
};

export const deleteTask = (id) => {
    return {
        type : types.DELETE_TASK,
        id
    }
};

export const updateTask = (task,id) => {
    return {
        type : types.UPDATE_TASK,
        id,
        task
    }
};

export const searchTask = (keyword) => {
    return {
        type : types.SEARCH,
        keyword
    }
};