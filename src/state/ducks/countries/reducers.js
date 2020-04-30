import { initialState } from '../../store';

import types from './types';

const countries = (state = {}, action) => {
  const { type } = action;
  let optionLabel = (option) => option.label;
  switch (type) {
    case types.SELECT_COUNTRY: {
      let optionLabel = (option) => option.label;
      return [
        ...state,
        {optionLabel}];      
    }
    default:
      return state;
  }
};

export default countries;
