import React from 'react';

const Header = ({ userName }) => {
  return (
    <div className="header">
      <div className="user">{userName}</div>
    </div>
  )
}

export default Header;