// Action Types
export const Types = {
  SHOW_MSG: 'alert/SHOW_MSG',
  CLEAR_MSG: 'alert/CLEAR_MSG'
};

// reducer
const initialState = {
  message: null,
  type: null
};

export function alert(state = {}, action) {
  switch (action.type) {
    case Types.SHOW_MSG:
      return {
        type: action.payload.type,
        message: action.payload.message
      };
    case Types.CLEAR_MSG:
      return initialState;
    default:
      return initialState;
  }
}

// Action Creators
function showMsg(message, type) {
  return { type: Types.SHOW_MSG, payload: { message, type } };
}
