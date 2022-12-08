import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";

function UserCreate() {
  const navigate =useNavigate();
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
        // setLoading(true);
        const data = await axios.post(
          "https://634ac2b15df95285141826d3.mockapi.io/demoapi/user_details",
          values
        );
        alert("Data Created Successfully");
        navigate("/users")
      } catch (error) {
        alert("There is Some Problem");

        console.log(error);
      }
    },
  });

  return (
    <>
      <div class="container">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-2 text-gray-800">Create User</h1>
          <Link
            to={"/Users"}
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-arrow-left fa-sm text-white-50"></i> back
          </Link>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div class="row g-3 ">
            <div class="col-md-6">
              <label for="userName" class="form-label">
                Name
              </label>
              <input
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                type="text"
                class="form-control"
                id="userName"
                placeholder="Mohamed"
              />
            </div>
            <div class="col-md-6">
              <label for="userEmail" class="form-label">
                Email
              </label>
              <input
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                type="email"
                class="form-control"
                id="userEmail"
                placeholder="mohamed@email.in"
              />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Gender
              </label>
              <select
                class="form-select"
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
            <div class="col-md-4">
              <label for="dob" class="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                onChange={formik.handleChange}
                value={formik.values.dob}
                class="form-control"
                name="dob"
                id="dob"
                min="2001-01-01"
              />
            </div>

            <div class="col-md-4">
              <label for="phoneNo" class="form-label">
                Phone Number
              </label>
              <input
                type="number"
                onChange={formik.handleChange}
                value={formik.values.phoneNo}
                name="phoneNo"
                class="form-control"
                id="phoneNo"
              />
            </div>
            <div class="col-md-12">
              <label for="inputAddress" class="form-label">
                Address
              </label>
              <input
                name="address"
                onChange={formik.handleChange}
                value={formik.values.address}
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>

            <div class="col-md-4">
              <label for="inputCity" class="form-label">
                City
              </label>
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.city}
                class="form-control"
                id="inputCity"
                name="city"
              />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                State
              </label>
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.state}
                class="form-control"
                id="inputState"
                name="state"
              />
            </div>
            <div class="col-md-4">
              <label for="inputCountry" class="form-label">
                Country
              </label>
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.country}
                class="form-control"
                id="inputCountry"
                name="country"
              />
            </div>

            <div class="col-12 my-3">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserCreate;
