import { createAction } from 'redux-actions';

export const getSerialsRequest = createAction('SEARCH_REQUEST');
export const getSerialsSuccess = createAction('SEARCH_SUCCESS');
export const getSerialsFailure = createAction('SEARCH_FAILURE');

export const getSerialByIdRequest = createAction('SHOW_REQUEST');
export const getSerialByIdSuccess = createAction('SHOW_SUCCESS');
export const getSerialByIdFailure = createAction('SHOW_FAILURE');