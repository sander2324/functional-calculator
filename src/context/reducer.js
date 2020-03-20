import initialState from './initial';
import * as actions from './types';

import calculateValue from '../helpers/calculateValue';


function inputReducer(state, action) {
  switch (action.type) {
    case actions.EVAL: {
      return {
        ...state,
        display: state.answer,
        answer: '',
      };
    }

    case actions.APPEND: {
      const newDisplay = `${state.display}${action.payload}`;
      return {
        ...state,
        display: newDisplay,
        answer: calculateValue(newDisplay),
      };
    }

    case actions.CLEAR: {
      return initialState;
    }

    case actions.REMOVE_CHAR: {
      const newDisplay = state.display.slice(0, -1);
      return {
        ...state,
        display: newDisplay,
        answer: calculateValue(newDisplay),
      };
    }

    case actions.STORE_MEMORY: {
      return {
        memory: state.display,
        display: initialState.display,
      };
    }

    case actions.DISPATCH_MEMORY: {
      const newDisplay = `${state.display}${state.memory}`;
      return {
        ...state,
        display: newDisplay,
        answer: calculateValue(newDisplay),
      };
    }

    default: {
      return state;
    }
  }
}

export default inputReducer;
