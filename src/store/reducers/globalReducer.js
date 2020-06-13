import { SET_USERNAME } from "../consts";

const INIT_STATE = {
  username: "John",
};

const globalReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_USERNAME: {
      return {
        ...state,
        username: action.payload,
      };
    }
    default:
      return state;
  }
};

export default globalReducer;
