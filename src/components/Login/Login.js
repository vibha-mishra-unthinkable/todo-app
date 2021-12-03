import React, { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import LoginSignupNav from "../LoginSignUpNav/LoginSignupNav";

const Login = () => {
  const email = useRef();
  const password = useRef();
  let navigate = useNavigate();
  const loginSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "user",
      JSON.stringify({
        email: email.current.value,
        password: password.current.value,
      })
    );
    navigate("/home");
  };
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <LoginSignupNav />
      <div className="container-fluid">
        <form onSubmit={loginSubmit}>
          <h3 className="loginSignup">Login</h3>
          <div className="form-group">
            <label>Email Address:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              ref={email}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter passoword"
              name="password"
              ref={password}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block buttons">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
