import * as types from "../constants/ActionTypes";

let initialState = "";

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_VALUE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default myReducer;
