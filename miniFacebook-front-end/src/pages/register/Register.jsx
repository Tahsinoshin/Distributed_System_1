import "./register.css";
import { useRef } from "react";

export default function Register({ setType }) {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleSubmit = () => {
    fetch("http://localhost:4000/api/users", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    })
      .then((response) => response.json())
      .then((obj) => {
        alert(obj.message);
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
          <input ref={firstNameRef} placeholder="First Name" className="loginInput" />
            <input ref={lastNameRef} placeholder="Last Name" className="loginInput" />
            <input ref={emailRef} placeholder="Email" className="loginInput" />
            <input
              ref={passwordRef}
              placeholder="Password"
              className="loginInput"
              type="password"
            />
            <input
              ref={confirmPasswordRef}
              placeholder="Confirm Password"
              className="loginInput"
              type="password"
            />
            <button className="loginButton" onClick={handleSubmit}>Sign Up</button>

            <button className="loginRegisterButton" onClick={ () => setType('login') }>Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
