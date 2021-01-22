import { SET_USER_NAME } from '../constants/ActionTypes';

export interface HeaderState {
  userName: string;
}

interface SetUserAction {
  type: typeof SET_USER_NAME;
  data: string;
}

type HeaderActionTypes = SetUserAction;

const initialState: HeaderState = {
  userName: ''
};

const header = (state = initialState, action: HeaderActionTypes) => {
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