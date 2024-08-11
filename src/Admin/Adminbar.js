import React from "react";
import { Link } from "react-router-dom";

export default function Adminbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{background:"green"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Full Stack Application
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="btn btn-outline-light" to="/">
           Login
          </Link>
          
        </div>
      </nav>
    </div>
  );
}