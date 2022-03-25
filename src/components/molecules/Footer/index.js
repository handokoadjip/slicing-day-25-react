import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <footer className="bg-white">
      <div className="container-fluid">
        <div className="row align-items-center h-vh-30">
          <div className="col-lg-2 bg-black py-3 mb-3 mb-lg-0">
            <div className="wrapper text-center text-lg-start">
              Lorem ipsum / dolor sit
            </div>
          </div>
          <div className="col-lg-9">
            <div className="wrapper text-center text-lg-start">
              <div className="copyright d-block d-lg-flex justify-content-lg-between align-items-lg-center text-center">
                <div className="mb-5 mb-lg-0">
                  <Link
                    className="text-black text-uppercase mp-0 fw-bolder ls-5px d-flex justify-content-center align-items-start"
                    to="#"
                  >
                    <small className="fw-normal me-2">GIE</small>/ FINNHUTTE
                  </Link>
                </div>
                <div className="mb-5 mb-lg-0">
                  <p className="mp-0 text-black">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quos, sed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1 d-flex justify-content-end">
            <div className="wrapper text-center border text-black text-center p-2 w-50">
              T
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
