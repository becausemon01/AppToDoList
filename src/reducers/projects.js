import * as types from "../constants/ActionTypes";
import * as fn from "../function/function";

let initialState = [
    {
        id: "tan_adce3860_6c8f_7da08417f156e05d",
        name: "Inbox",
        is_favorite: false,
        color: "rgb(128, 128, 128)",
    },
    {
        id: fn.getId(),
        name: "Welcome 👋",
        is_favorite: false,
        color: "rgb(128, 128, 128)",
    },
];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_PROJECT:
            return [
                ...state,
                {
                    id: fn.getId(),
                    name: action.project.name,
                    is_favorite: action.project.is_favorite,
                    color: action.project.color,
                },
            ];
        case types.UPDATE_PROJECT:
            return state.map(project =>
                project.id === action.id
                    ? { ...project, ...action.payload }
                    : project
            );
        default:
            return state;
    }
};

export default myReducer;
