import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Task</h1>
        </div>
        <div className="row ">
          <div className="col-12  d-flex justify-content-center ">
            <p className="text-center">Design an UI to implement the CRUD</p>
          </div>
          <div className="col-12  d-flex justify-content-center ">
            <Link
              to={"/Users"}
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm "
            >
              View Users{" "}
              <i className="fas fa-arrow-right fa-sm text-white-50"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
