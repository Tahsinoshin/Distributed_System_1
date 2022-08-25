import "./login.css";
import { useRef } from "react";

export default function Login({ setIsAuthenticated, setType, setFullName  }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = () => {
    fetch("http://localhost:7000/authentication/auth", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    })
      .then((response) => response.json())
      .then((obj) => {
        console.log(obj);
        if(obj.fullName !== undefined)
          setIsAuthenticated(true);
        setFullName(obj.fullName);
      });
  };

   
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">miniFacebook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on miniFacebook
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input  ref={ emailRef }  placeholder="Email" className="loginInput" />
            <input  ref={ passwordRef } placeholder="password" type="password" className="loginInput" />
            <button className="loginButton" onClick={ handleSubmit }>Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" onClick={ () => setType('register') }>
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
