import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <section>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-lg-12">
            <div className="bg-image-1">
              <div className="d-flex flex-column justify-content-center align-items-center text-white text-center mt-5 min-vh-100 position-relative z-999">
                <h1 className="display-3 fw-medium text-border-bottom-center mb-3">
                  Architecture Projects
                </h1>
                <p className="w-50 fs-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem autem illo explicabo cum ut maiores.
                </p>
                <Link
                  className="btn bg-white py-3 px-5 text-black text-decoration-underline"
                  to="#"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
