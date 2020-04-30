import { countriesTypes } from '../ducks/countries';

const addCountryToList = () => (next) => (action) => {
  const newAction = {
    ...action,
    payload: {
      ...action.payload,
      getOptionLabel: {optionLabel},
    },
  };

  if (action.type === countriesTypes.SELECT_COUNTRY) {
    next(action);
  } else {
    next(newAction);
  }
};

export default [addCountryToList];
