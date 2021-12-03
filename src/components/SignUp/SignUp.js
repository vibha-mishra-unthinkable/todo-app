import React from "react";
import { Link } from "react-router-dom";
import LoginSignupNav from "../LoginSignUpNav/LoginSignupNav";

const SignUp = () => {
  return (
    <>
      <LoginSignupNav />
      <div className="container-fluid">
        <form>
          <h3 className="loginSignup">Sign Up</h3>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              required
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block buttons">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <Link to="/">Log in?</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
// npm install -g sass
