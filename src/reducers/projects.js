import * as types from "../constants/ActionTypes";

let initialState = [
  {
    name: "Inbox",
  },
  {
    name: "Welcome 👋",
  },
];

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PROJECT:
      return [
        ...state,
        {
          name: action.project.name,
        },
      ];
    default:
      return state;
  }
};

export default myReducer;
