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
      return {
        ...initialState,
        memory: state.memory,
      };
    }

    case actions.REMOVE_CHAR: {
      const newDisplay = state.display.slice(0, -1);
      return {
        ...state,
        display: newDisplay,
        answer: calculateValue(newDisplay),
      };
    }

    case actions.ADD_MEMORY: {
      const memoryAddition = Number(state.display);
      if (Number.isNaN(memoryAddition)) return state;

      const previousMemory = state.memory || 0;
      return {
        ...state,
        memory: previousMemory + memoryAddition,
      };
    }

    case actions.SUBTRACT_MEMORY: {
      const memorySubtraction = Number(state.display);
      if (Number.isNaN(memorySubtraction) || !state.memory) {
        return state;
      }

      return {
        ...state,
        memory: state.memory - memorySubtraction,
      };
    }

    case actions.DISPATCH_MEMORY: {
      if (!state.memory) return state;

      const newDisplay = `${state.display}${state.memory}`;
      return {
        ...state,
        display: newDisplay,
        answer: calculateValue(newDisplay),
      };
    }

    case actions.CLEAR_MEMORY: {
      return {
        ...state,
        memory: null,
      };
    }

    default: {
      return state;
    }
  }
}

export default inputReducer;
