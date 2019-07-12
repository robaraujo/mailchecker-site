import axios from 'axios';

// Action Types
export const Types = {
  LIST_REQUEST: 'email/LIST_REQUEST',
  LIST_SUCCESS: 'email/LIST_SUCCESS',
  LIST_FAILURE: 'email/LIST_FAILURE',
  VALIDATE_REQUEST: 'email/VALIDATE_REQUEST',
  VALIDATE_FAILURE: 'email/VALIDATE_FAILURE',
  VALIDATE_SUCCESS: 'email/VALIDATE_SUCCESS',
  CLEAR_VALIDATED: 'email/CLEAR_VALIDATED'
};

// Reducer
const initialState = {
  list: null,
  recent: {
    mass: null,
    one: null
  },
  validatedOne: null,
  loading: false,
  error: null
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LIST_REQUEST:
    case Types.VALIDATE_REQUEST:
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
    case Types.VALIDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case Types.VALIDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: action.payload,
        recent: {
          ...state.recent,
          [action.payload.type]: action.payload.emails
        }
      };
    case Types.CLEAR_VALIDATED:
      return {
        ...state,
        recent: initialState.recent
      };
    default:
      return state;
  }
}

// Action Creators

/**
 * Clear list of last validated emails
 */
export function clearValidated() {
  return {
    type: Types.CLEAR_VALIDATED
  };
}

/**
 * @param form to submit
 * @param type - type of validate(mass, one)
 */
export function validate(mails, type) {
  return dispatch => {
    dispatch({ type: Types.VALIDATE_REQUEST });

    axios.post('/email/validate', { mails, type }).then(
      res => {
        dispatch({
          type: Types.VALIDATE_SUCCESS,
          payload: {
            type: type,
            emails: res.data.mailsValidated
          }
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
          payload: res.data.emails
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
