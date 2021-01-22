import { SET_USER_NAME } from "../constants/ActionTypes";

export const setUserName = (userName: string) => 
  ({
    type: SET_USER_NAME,
    data: userName
  });
