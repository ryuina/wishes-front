import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "../actions/header";
import { RootState } from '../reducers/index';

const UserIcon = () => {
  const userName = useSelector(({ header }: RootState) => header.userName);
  const dispatch = useDispatch();
  const onClick = useCallback(() => dispatch(setUserName("RyuIna")), [dispatch]);
  return (
    <div className="user">
      {(userName.length === 0 ? 
        <button onClick={onClick}>로그인</button> :
        userName
      )}
    </div>
  )
};

export default React.memo(UserIcon);