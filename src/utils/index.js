export const API_ROOT = 'https://5b939d42bd13d3001426964a.mockapi.io/api/v1/';
export const API_ENDPOINT_EMPLOYEES = 'entities';
export const API_ENDPOINT_POSITIONS = 'categories';


export const EMPLOYEE_REQUEST = 'EMPLOYEE_REQUEST';
export const EMPLOYEE_SUCCESS = 'EMPLOYEE_SUCCESS';
export const EMPLOYEE_FAIL = 'EMPLOYEE_FAIL';
export const EMPLOYEE_CHECKED_IDS = 'EMPLOYEE_CHECKED_IDS';

export const POSITION_REQUEST = 'POSITION_REQUEST';
export const POSITION_SUCCESS = 'POSITION_SUCCESS';
export const POSITION_FAIL = 'POSITION_FAIL';

export const getKey = (keyValue, pref) => (pref || '') + keyValue;
