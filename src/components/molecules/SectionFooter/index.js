import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <section className="p-5 bg-white-80">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row w-100 pt-5">
          <div className="col-lg-3 mb-5 mb-lg-0">
            <div className="wrapper text-black text-center text-lg-start">
              <h3 className="mb-4 fw-bold text-border-bottom">
                Our Company Is Here 4u
              </h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <Link
                className="text-decoration-underline text-black fw-medium"
                to="#"
              >
                read more
              </Link>
            </div>
          </div>
          <div className="col-lg-3 mb-5 mb-lg-0">
            <div className="wrapper text-black text-center text-lg-start">
              <h3 className="fs-6 mb-4 text-uppercase fw-bold text-border-bottom">
                post
              </h3>
              <div className="section-1 mb-4">
                <p
                  className="text-black text-decoration-none mb-1 d-block fw-medium"
                  to="#"
                >
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <p className="text-fade-black-1">23 Dec 2022</p>
              </div>
              <div className="section-1">
                <p
                  className="text-black text-decoration-none mb-1 d-block fw-medium"
                  to="#"
                >
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <p className="text-fade-black-1">23 Dec 2022</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-5 mb-lg-0">
            <div className="wrapper text-black text-center text-lg-start">
              <h3 className="fs-6 mb-4 text-uppercase fw-bold text-border-bottom">
                product
              </h3>
              <nav className="fw-medium">
                <Link
                  className="text-black text-decoration-none mb-1 d-block"
                  to="#"
                >
                  Lorem
                </Link>
                <Link
                  className="text-black text-decoration-none mb-1 d-block"
                  to="#"
                >
                  Ipsum
                </Link>
                <Link
                  className="text-black text-decoration-none mb-1 d-block"
                  to="#"
                >
                  Dolor
                </Link>
                <Link
                  className="text-black text-decoration-none mb-1 d-block"
                  to="#"
                >
                  Sit
                </Link>
                <Link
                  className="text-black text-decoration-none mb-1 d-block"
                  to="#"
                >
                  Amet
                </Link>
                <Link
                  className="text-black text-decoration-none mb-1 d-block"
                  to="#"
                >
                  consectetur
                </Link>
              </nav>
            </div>
          </div>
          <div className="col-lg-3 mb-5 mb-lg-0">
            <div className="wrapper text-black text-center text-lg-start">
              <h3 className="fs-6 mb-4 text-uppercase fw-bold text-border-bottom">
                contact
              </h3>
              <nav className="fw-medium">
                <Link
                  className="text-black text-decoration-none mb-1 d-block"
                  to="#"
                >
                  Lorem
                </Link>
                <Link
                  className="text-black text-decoration-none mb-1 d-block"
                  to="#"
                >
                  Ipsum
                </Link>
                <Link
                  className="text-black text-decoration-none mb-1 d-block"
                  to="#"
                >
                  Dolor
                </Link>
                <Link
                  className="text-black text-decoration-none mb-1 d-block"
                  to="#"
                >
                  Sit
                </Link>
                <Link
                  className="text-black text-decoration-none mb-1 d-block"
                  to="#"
                >
                  Amet
                </Link>
                <Link
                  className="text-black text-decoration-none mb-1 d-block"
                  to="#"
                >
                  consectetur
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
