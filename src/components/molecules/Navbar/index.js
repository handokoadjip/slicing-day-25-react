import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-black navbar-dark px-4">
      <div className="container-fluid py-4 d-flex">
        <Link
          className="navbar-brand text-center text-uppercase mp-0 fw-bolder fs-5 ls-5px d-flex align-items-start"
          to="#"
        >
          <small className="fw-normal me-2">GIE</small>/ FINNHUTTE
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-uppercase ms-auto">
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-center" aria-current="page" to="#">
                home
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-center" to="#">
                pages
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-center" to="#">
                portofolio
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-center" to="#">
                shop
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-center" to="#">
                comment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default index;
