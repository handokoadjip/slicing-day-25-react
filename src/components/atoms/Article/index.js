import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const index = (props) => {
  const className = ["col-lg-6", "d-flex", "align-items-center"];
  className.push(props.className);

  return (
    <div className={className.join(" ")}>
      <div className="wrapper mx-5 mb-5 mb-lg-0">
        <h2 className="text-capitalize fw-medium">{props.title}</h2>
        <p className="leading-loose text-fade-1 mb-4">{props.description}</p>
        <Link className="text-decoration-underline fw-medium" to={props.href}>
          View Project
        </Link>
      </div>
    </div>
  );
};

index.propTypes = {
  className: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
};

export default index;
