import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./header";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <div className="">
      <Header />
      <div
        className="container-fluid d-flex flex-column align-items-center justify-content-center"
        style={{ height: "90vh" }}
      >
        <div className="col-3 border rounded py-3 px-3">
          <div>
            <h5 className="m-0">Welcome Back!</h5>
            <p className="m-0 text-s text-secondary">
              Please login with your account.
            </p>
          </div>
          <div className="d-flex flex-column gap-3 my-3">
            <div className="">
              <label className="text-sm fw-500" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-control text-s"
                placeholder="Enter your email"
                type="text"
              />
            </div>
            <div className="">
              <label className="text-sm fw-500" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="form-control text-s"
                type="password"
                placeholder="********"
              />
            </div>
            <div className="">
              <label className="text-sm fw-500" htmlFor="password">
                Confirm Password
              </label>
              <input
                id="password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                className="form-control text-s"
                type="password"
                placeholder="********"
              />
            </div>
            <div>
              <button className="btn btn-primary w-100">Create</button>
              <p className="text-s my-2">
                Already have an account?
                <Link to={"/login"} className="fw-500">
                  {" "}
                  Login
                </Link>
              </p>
            </div>
            <hr className="m-0" />
            <div>
              <button className="btn btn-light text-sm w-100">
                <span>Continue With Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;