import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import './style.css';
import Logo from "../../assets/logo.svg";
import firebase from '../../services/firebase'
import TransparentLoader from '../shared/TransparentLoader';
import { isLoggedIn, token, uid } from '../../services/redux/actions'

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>('');
  const dispatch = useDispatch();

  function login(event: any): void {
    event.preventDefault();
    if (email && password) {
      setLoading(true)
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user: any) => {
          if (user) {
            getToken();
          }
        })
        .catch((error: any) => {
          setErrorText(error.message)
          setLoading(false)
        });
    } else {
      setErrorText('Enter email & password both')
    }
  }

  async function getToken(): Promise<any> {
    const user: any = firebase.auth().currentUser;
    user.getIdToken(true).then((idToken: string) => {
      localStorage.setItem('token', idToken);
      localStorage.setItem('uid', user.uid);
      dispatch(token(idToken));
      dispatch(uid(user.uid));
      dispatch(isLoggedIn(true));
    }).catch((err: any) => console.log(err));
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
        width: '100%',
        height: '100vh'
      }}
    >
      <img src={Logo} alt="logo" style={{ height: 80 }} />
      <h3>Login to continue</h3>
      <form className="form" onSubmit={(event) => login(event)}>
        <label>Email*</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter email address" />
        <label>Password*</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter password" />
        <p style={{ textAlign: "center", color: ' red', margin: '0px 0px 8x 0px' }}>{errorText}</p>
        <button type="submit">Login</button>
      </form>
      {isLoading && <TransparentLoader />}
    </div>
  );
}

export default Login;
