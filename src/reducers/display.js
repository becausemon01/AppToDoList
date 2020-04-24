import * as types from "../constants/ActionTypes";

var initialState = false;

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_FORM:
      return !state;
    case types.SHOW_FORM:
      state = false;
      return state;
    case types.CLOSE_FORM:
      state = false;
      return state;
    case types.CLOSE_FORM_UPDATE:
      state = false;
      return state;
    default:
      return state;
  }
};

export default myReducer;
