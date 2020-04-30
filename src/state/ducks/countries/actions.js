import { createAction } from 'redux-actions';

import types from './types';

const selectCountry = createAction(types.SELECT_COUNTRY);

export default {
    selectCountry,
};
