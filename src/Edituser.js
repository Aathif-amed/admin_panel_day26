import { useFormik } from "formik";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Edituser() {
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetchdata();
  }, []);
  // const [userdata, setUserdata] = useState({});
  const [loading, setLoading] = useState(false);
  const [bloading, setbLoading] = useState(false);

  const fetchdata = async () => {
    try {
      setLoading(true);
      const data = await axios.get(
        `https://634ac2b15df95285141826d3.mockapi.io/demoapi/user_details/${id}`
      );
      formik.setValues(data.data);
      console.log(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(userdata);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      gender: "",
      dob: "",
      phoneNo: "",
      address: "",
      city: "",
      state: "",
      country: "",
    },
    onSubmit: async (values) => {
      try {
        setbLoading(true);
        const data = await axios.put(
          `https://634ac2b15df95285141826d3.mockapi.io/demoapi/user_details/${id}`,
          values
        );
        console.log(data);
        setbLoading(false);
        alert("Data Submitted Successfully")
      } catch (error) {
        console.log(error);
      }
    },
  });

  // console.log(userdata.name);
  // userdata === [] ? console.log(`${userdata}+true`) :  console.log(`${userdata}+false`);
  return loading ? (
    <>
      <div class="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-2 text-gray-800">Edit User</h1>
          <Link
            to={"/Users"}
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-arrow-left fa-sm text-white-50"></i> Users
          </Link>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="row g-3 ">
            <div className="col-md-6">
              <label for="userName" className="form-label">
                Name
              </label>
              <input
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                type="text"
                className="form-control"
                id="userName"
                placeholder="Mohamed"
              />
            </div>
            <div className="col-md-6">
              <label for="userEmail" className="form-label">
                Email
              </label>
              <input
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                type="email"
                className="form-control"
                id="userEmail"
                placeholder="mohamed@email.in"
              />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">
                Gender
              </label>
              <select
                className="form-select"
                id="inputState"
                name="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
              >
                <option selected disabled value="">
                  Choose...
                </option>
                <option>Male</option>
                <option>Female</option>
                <option>Rather Not Say</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="dob" className="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                onChange={formik.handleChange}
                value={formik.values.dob}
                className="form-control"
                name="dob"
                id="dob"
                min="2001-01-01"
              />
            </div>

            <div className="col-md-4">
              <label for="phoneNo" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                onChange={formik.handleChange}
                value={formik.values.phoneNo}
                name="phoneNo"
                className="form-control"
                id="phoneNo"
              />
            </div>
            <div className="col-md-12">
              <label for="inputAddress" className="form-label">
                Address
              </label>
              <input
                name="address"
                onChange={formik.handleChange}
                value={formik.values.address}
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>

            <div className="col-md-4">
              <label for="inputCity" className="form-label">
                City
              </label>
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.city}
                className="form-control"
                id="inputCity"
                name="city"
              />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">
                State
              </label>
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.state}
                className="form-control"
                id="inputState"
                name="state"
              />
            </div>
            <div className="col-md-4">
              <label for="inputCountry" className="form-label">
                Country
              </label>
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.country}
                className="form-control"
                id="inputCountry"
                name="country"
              />
            </div>

            <div className="col-12 my-3">
              {bloading ? (
                <>
                  <div class="text-center">
                    <div class="spinner-border text-primary" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                </>
              ) : (
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Edituser;
