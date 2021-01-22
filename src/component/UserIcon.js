import { connect } from "react-redux";
import { setUserName } from "../actions/header";

const UserIcon = ({ userName, setUserName }) => {
  return (
    <div className="user">
      {(userName.length === 0 ? 
        <button onClick={() => setUserName("RyuIna")}>로그인</button> :
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