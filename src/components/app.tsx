import React, { useState, useEffect, Fragment } from "react";
import firebase from "../services/firebase";
import PrivateRoutes from "../routes/privateRoutes";
import PublicRoutes from "../routes/publicRoutes";
import Loader from "./shared/loader";
import { useSelector, useDispatch } from 'react-redux';
import { isLoggedIn, token, uid } from '../services/redux/actions'
import Header from "./shared/Header";


function App() {
  const isAuthenticated = useSelector<boolean>((state: any) => state.isLoggedIn);
  const [isLoading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();


  useEffect(() => {
    async function getToken(): Promise<any> {
      const user: any = firebase.auth().currentUser;
      user.getIdToken(true).then((idToken: string) => {
        dispatch(isLoggedIn(true));
        dispatch(token(idToken));
        dispatch(uid(user.uid));
        localStorage.setItem('token', idToken);
        localStorage.setItem('uid', user.uid)
        setLoading(false)
      }).catch((err: any) => console.log(err));
    }
    async function checkAuthentication() {
      firebase.auth().onAuthStateChanged((user: any) => {
        if (user) {
          getToken();
        } else {
          setLoading(false)
        }
      });
    }
    checkAuthentication();
  }, []);


  if (isLoading) {
    return (
      <Loader />
    );
  }

  return (
    <Fragment>
      {isAuthenticated ?
        <div>
          <Header></Header>
          <div style={{maxWidth: 1140, display: 'flex', justifyContent: 'center', margin: 'auto', padding: 8}}>
            <PrivateRoutes />
          </div>
        </div> :
        <PublicRoutes />
      }
    </Fragment>
  );
}

export default App;
