import axios from 'axios';

// Action Types
export const Types = {
  LIST_REQUEST: 'email/LIST_REQUEST',
  LIST_SUCCESS: 'email/LIST_SUCCESS',
  LIST_FAILURE: 'email/LIST_FAILURE',
  VALIDATE_REQUEST: 'email/VALIDATE_REQUEST',
  VALIDATE_SUCCESS: 'email/VALIDATE_SUCCESS',
  VALIDATE_FAILURE: 'email/VALIDATE_FAILURE'
};

// Reducer
const initialState = {
  list: [],
  loading: false,
  error: null
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case Types.LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        list: action.payload
      };
    case Types.LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

// Action Creators

/**
 * @param form to submit
 * @param type - type of validate(mass, one)
 */
export function validate(form, type) {
  return dispatch => {
    dispatch({ type: Types.VALIDATE_REQUEST });

    axios.post('/email/validate/' + type, form).then(
      res => {
        dispatch({
          type: Types.VALIDATE_SUCCESS,
          payload: res.data.user
        });
      },
      err => {
        dispatch({
          type: Types.VALIDATE_FAILURE,
          payload: (err.response && err.response.data.error) || 'Server error'
        });
      }
    );
  };
}

/**
 * Get all emails validate from this user
 */
export function getAll() {
  return dispatch => {
    dispatch({ type: Types.LIST_REQUEST });

    axios.get('/email/list').then(
      res => {
        dispatch({
          type: Types.LIST_SUCCESS,
          payload: res.data.user
        });
      },
      err => {
        dispatch({
          type: Types.LIST_FAILURE,
          payload: (err.response && err.response.data.error) || 'Server error'
        });
      }
    );
  };
}
