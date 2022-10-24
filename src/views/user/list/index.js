import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../../components/module/sidebar";
import Navi from "../../../components/module/navi";
import Footer from "../../../components/module/footer";
import { Link } from "react-router-dom";

const UserList = () => {
  return (
    <>
      <Helmet>
        {/* <!-- Custom fonts for this template --> */}
        <link
          href="vendor/fontawesome-free/css/all.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />

        {/* <!-- Custom styles for this template --> */}
        <link href="css/sb-admin-2.min.css" rel="stylesheet" />

        {/* <!-- Custom styles for this page --> */}
        <link
          href="vendor/datatables/dataTables.bootstrap4.min.css"
          rel="stylesheet"
        />
      </Helmet>

      <main id="page-top">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Navi />

              <div class="container-fluid">
                {/* <!-- Page Heading --> */}
                <h1 class="h3 mb-2 text-gray-800">Users</h1>
                <p class="mb-4">Manage users here.</p>

                {/* <!-- DataTales Example --> */}
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                      Users Database
                    </h6>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table
                        class="table table-bordered"
                        id="dataTable"
                        width="100%"
                        cellspacing="0"
                      >
                        <thead>
                          <tr>
                            <th class="col-2">User ID</th>
                            <th class="col-3">Username</th>
                            <th class="col-3">Email</th>
                            <th class="col-3">Phone</th>
                            <th class="col-1">Action</th>
                          </tr>
                        </thead>
                        <tfoot>
                          <tr>
                            <th>User ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                          </tr>
                        </tfoot>
                        <tbody>
                          <tr>
                            <td>001</td>
                            <td>Alexander Purwoto</td>
                            <td>alex@mail.com</td>
                            <td>(+62)85643430789</td>
                            <td>
                              <div class="d-flex justify-content-between">
                                <Link to="#" class="btn btn-info btn-circle">
                                  <i class="fas fa-info-circle"></i>
                                </Link>
                                <Link to="#" class="btn btn-warning btn-circle">
                                  <i class="fas fa-edit"></i>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default UserList;
