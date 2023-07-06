import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Header = () => {
  return (
    <div
      className="header container-fluid py-2 sticky-top "
      style={{ background: "gray" }}
    >
      <div className="container mx-auto d-flex align-items-center justify-content-between">
        <Link>
          <div>
            <p className="text-dark fs-1 fw-bold m-0">
              LO<span className="text-primary">GO</span>
            </p>
          </div>
        </Link>
        <div className="d-flex gap-2">
          <Link to={"/"} className="btn btn-light rounded text-s">
            Home
          </Link>
          <Link to={"/product"} className="btn btn-light rounded text-s">
            Product
          </Link>
          <Link to={"/login"} className="btn btn-light rounded text-s">
            Login
          </Link>
          <Link to={"/register"} className="btn btn-primary rounded text-s">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
