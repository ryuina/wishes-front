import { SET_USER_NAME } from '../constants/ActionTypes';

const initialState = {
  userName: ''
};

const header = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.data
      };
    default:
      return state;
  }
}

export default header;