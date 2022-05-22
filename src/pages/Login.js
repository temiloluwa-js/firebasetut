import React from "react";
import {auth, provider} from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from "react-router-dom";

const Login = ({setIsAuth}) => {
  let navigate= useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate('/')
    })
  }

  return (
    <div className="loginpage">
      <p>Sign in with Google to Continue</p>
      <button className="google_login_button" onClick={signInWithGoogle}>Sign In WIth Google</button>
    </div>
  );
};

export default Login;
