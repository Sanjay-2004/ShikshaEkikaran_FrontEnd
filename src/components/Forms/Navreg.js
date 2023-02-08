import React from "react";
import { Link } from "react-router-dom";

export default function Navreg() {
  return (
    <div>
      <div className=" header container-fluid">
        <div className="py-2">
          <nav className="navbar navbar-expand-md justify-content-center">
            <div className="container-fluid ">
              <Link to="/">
                <img src="logo1.png" alt="LOGO" height="50px" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav mx-auto ">
                  <Link className="nav-link mx-5" to="schools">
                    SCHOOLS
                  </Link>
                  <Link className="nav-link mx-5" to="intermediate">
                    INTERMEDIATE
                  </Link>
                  <Link className="nav-link mx-5" to="polytech">
                    POLYTECHNIC
                  </Link>
                  <Link className="nav-link mx-5" to="undergrad">
                    UNDERGRAD
                  </Link>
                  <Link className="nav-link mx-5" to="postgrad">
                    POSTGRAD
                  </Link>
                  <Link className="nav-link mx-5" to="phd">
                    M. PHIL/ PHD
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <hr className="border border-success border-3 opacity-50 mt-0"></hr>
    </div>
  );
}
