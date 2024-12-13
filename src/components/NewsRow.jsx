import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/components/newsRow.css";

function NewsRow() {
  return (
    <div className="news-row px-4">
      <div className="news-row-top d-flex align-items-center justify-content-center">
        <div className="display-4 fw-bold text-center text-white">
          What's new?
        </div>
      </div>
      <div className="news-row-bottom">
        <div className="row h-100">
          <div className="col-12 col-md-6 d-flex align-items-center text-center text-sm-start">
            <p className="ms-3 mb-0">
              A changelog of the latest <b className="">Quickit</b> feature
              releases, product updates and important bug fixes.
            </p>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-end align-items-center justify-content-center justify-content-sm-end">
            <div className="changelog rounded-pill me-3 mt-sm-0 mt-3">
              Changelog in 2023
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsRow;
