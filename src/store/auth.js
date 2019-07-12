import axios from 'axios';
import { alert } from './alert';

// Action Types
export const Types = {
  REGISTER_REQUEST: 'auth/REGISTER_REQUEST',
  REGISTER_SUCCESS: 'auth/REGISTER_SUCCESS',
  REGISTER_FAILURE: 'auth/REGISTER_FAILURE',
  LOGIN_REQUEST: 'auth/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'auth/LOGIN_FAILURE',
  RESET: 'auth/RESET'
};

// Reducer
const initialState = {
  token: null,
  user: null,
  loading: false,
  error: null
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.REGISTER_REQUEST:
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case Types.REGISTER_SUCCESS:
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        token: 'Bearer ' + action.payload.token,
        user: action.payload.user
      };
    case Types.REGISTER_FAILURE:
    case Types.LOGIN_FAILURE:
      console.log('teste', action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case Types.RESET:
      return initialState;
    default:
      return state;
  }
}

// Action Creators

export function reset() {
  return { type: Types.RESET };
}

export function register(form) {
  return dispatch => {
    dispatch({ type: Types.REGISTER_REQUEST, payload: form });

    axios.post('/auth/register', form).then(
      res => {
        dispatch({
          type: Types.REGISTER_SUCCESS,
          payload: res.data
        });
      },
      err => {
        dispatch({
          type: Types.LOGIN_FAILURE,
          payload: (err.response && err.response.data.error) || 'Server error'
        });
      }
    );
  };
}

export function login(form) {
  return dispatch => {
    dispatch({ type: Types.LOGIN_REQUEST, payload: form });

    axios.post('/auth/login', form).then(
      res => {
        dispatch({ type: Types.LOGIN_SUCCESS, payload: res.data });
      },
      err => {
        console.log(err);
        dispatch({
          type: Types.LOGIN_FAILURE,
          payload: 'Usuário ou senha inválido'
        });
      }
    );
  };
}
