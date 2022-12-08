import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const deleteData = async (userid) => {
    if (window.confirm("Are you sure to delete this user?")) {
      setLoading(true);
      await axios.delete(
        `https://634ac2b15df95285141826d3.mockapi.io/demoapi/user_details/${userid}`
      );
      fetchdata();
      setLoading(false);
    }
  };
  const [usersdata, setUsersdata] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchdata();
  }, [setUsersdata]);

  const fetchdata = async () => {
    try {
      setLoading(true);
      const data = await axios.get(
        "https://634ac2b15df95285141826d3.mockapi.io/demoapi/user_details"
      );
      setUsersdata(data.data);
      setLoading(false);
    } catch (error) {
      alert("There is Some Problem");
      setLoading(false);

      console.log(error);
    }
  };

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
      <div class="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-2 text-gray-800">Users</h1>
          <Link
            to={"/createUser"}
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-plus fa-sm text-white-50"></i> Create New User
          </Link>
        </div>

        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Users</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                style={{ fontSize: "10px" }}
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>PhoneNo</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>PhoneNo</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {usersdata.map((user) => {
                    return (
                      <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNo}</td>

                        <td>
                          <Link
                            to={`/view/${user.id}`}
                            className="btn btn-sm btn-outline-primary shadow-sm m-1"
                          >
                            <i className="fas fa-eye fa-sm"></i> View
                          </Link>
                          <Link
                            to={`/edit/${user.id}`}
                            className="btn btn-sm btn-outline-warning shadow-sm m-1"
                          >
                            <i className="fas fa-pen fa-sm"></i> Edit
                          </Link>
                          {/* <Link
                            to={`/delete/${user.id}`}
                            className="btn btn-sm btn-outline-danger shadow-sm m-1"
                          >
                            <i className="fas fa-trash fa-sm"></i> Delete
                          </Link> */}
                          <button
                            className="btn btn-sm btn-outline-danger shadow-sm m-1 "
                            onClick={() => {
                              deleteData(user.id);
                            }}
                          >
                            <i className="fas fa-trash fa-sm"></i> Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
