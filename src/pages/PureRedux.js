import React, { useState } from "react";
import {
  createStore,
  combineReducers,
  compose,
  bindActionCreators,
  applyMiddleware,
} from "redux";

const PureRedux = () => {
  const [composeString, setComposeString] = useState("Witam");

  const composeHandler = () => {
    // const update = addDot(separateBySpace(makeUppercase(composeString)));
    const composed = compose(makeUppercase, addDot, separateBySpace);
    const update = composed(composeString);

    setComposeString(update);
  };

  return (
    <div>
      <div>COMPOSE</div>
      <h2>{composeString}</h2>
      <button onClick={composeHandler}>Run Compose</button>
    </div>
  );
};

export default PureRedux;

function makeUppercase(value) {
  return value.toUpperCase();
}

function separateBySpace(value) {
  return value.split("").join(" ");
}

function addDot(value) {
  return value + ".";
}

const INIT_STORE = {
  counter: 1,
};

function myFirstReducer(state = INIT_STORE, action) {
  if (action.type === "INCREASE") {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  }

  return state;
}

function fruitReducer(state = { fruits: [] }, action) {
  if (action.type === "ADD_FRUIT") {
    return {
      ...state,
      fruits: [...state.fruits, action.payload],
    };
  }

  return state;
}

const increaseAction = (step) => {
  return {
    type: "INCREASE",
    payload: step,
  };
};

const rootReducer = combineReducers({
  myFirstReducer,
  fruitReducer,
});

// applyMiddleware
const logger = ({ getState }) => {
  return (next) => (action) => {
    const value = next(action);
    return value;
  };
};

const store = createStore(rootReducer, applyMiddleware(logger));

const dispatchAdd = bindActionCreators(increaseAction, store.dispatch);

dispatchAdd(5);
