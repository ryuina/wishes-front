import { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { setUserName } from "../actions/header";

const UserIcon = ({ setUserName }) => {
  const userName = useSelector(state => state.header.userName);
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

const mapStateToProps = state => ({
  userName: state.header.userName
});

const mapDispatchToProps = dispatch => ({
  setUserName: (userName) => {
    dispatch(setUserName(userName));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserIcon);