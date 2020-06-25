import React from 'react';
import Logo from '../../../assets/logo.svg';
import './style.css';
// import { useHistory } from "react-router-dom";
import firebase from '../../../services/firebase'
import { useDispatch } from 'react-redux';
import { isLoggedIn, token } from '../../../services/redux/actions'


function Header() {
  // let history = useHistory();
  const dispatch = useDispatch();

  function handleClick(link: string) {
    window.open(link, "_top");
  }

  function logout() {
    firebase.auth().signOut();
    dispatch(isLoggedIn(false));
    dispatch(token(null));
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="header">
      <div className="content">
        <span className="brand" onClick={() => handleClick('/list')}>
          <img src={Logo} alt="logo" /> Book Library
        </span>
        <span className="brand">
          <span style={{ color: 'red', fontSize: 14, fontWeight: 600, cursor: 'pointer' }} onClick={() => logout()}>Logout</span>
        </span>
      </div>
    </div>
  );
}

export default Header;
