import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../../components/module/sidebar";
import Navi from "../../../components/module/navi";
import { Link } from "react-router-dom";
import airline from "../../../assets/airline.png";

const AirlineList = () => {
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
                <h1 class="h3 mb-2 text-gray-800">Airlines</h1>
                <p class="mb-4">Manage airlines here.</p>

                {/* <!-- DataTales Example --> */}
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                      Airline Database
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
                            <th class="col-2">ID</th>
                            <th class="col-4">Logo</th>
                            <th class="col-4">Name</th>
                            <th class="col-2">Action</th>
                          </tr>
                        </thead>
                        <tfoot>
                          <tr>
                            <th>ID</th>
                            <th>Logo</th>
                            <th>Name</th>
                            <th>Action</th>
                          </tr>
                        </tfoot>
                        <tbody>
                          <tr>
                            <td>001</td>
                            <td>
                              <img src={airline} alt="" />
                            </td>
                            <td>Batik Air</td>
                            <td>
                              <div class="d-flex justify-content-between">
                                <Link to="#" class="btn btn-info btn-circle">
                                  <i class="fas fa-info-circle"></i>
                                </Link>
                                <Link to="#" class="btn btn-warning btn-circle">
                                  <i class="fas fa-edit"></i>
                                </Link>
                                <Link to="#" class="btn btn-danger btn-circle">
                                  <i class="fas fa-trash"></i>
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>002</td>
                            <td>
                              <img src={airline} alt="" />
                            </td>
                            <td>Air Asia</td>
                            <td>
                              <div class="d-flex justify-content-between">
                                <Link to="#" class="btn btn-info btn-circle">
                                  <i class="fas fa-info-circle"></i>
                                </Link>
                                <Link to="#" class="btn btn-warning btn-circle">
                                  <i class="fas fa-edit"></i>
                                </Link>
                                <Link to="#" class="btn btn-danger btn-circle">
                                  <i class="fas fa-trash"></i>
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>003</td>
                            <td>
                              <img src={airline} alt="" />
                            </td>
                            <td>Garuda</td>
                            <td>
                              <div class="d-flex justify-content-between">
                                <Link to="#" class="btn btn-info btn-circle">
                                  <i class="fas fa-info-circle"></i>
                                </Link>
                                <Link to="#" class="btn btn-warning btn-circle">
                                  <i class="fas fa-edit"></i>
                                </Link>
                                <Link to="#" class="btn btn-danger btn-circle">
                                  <i class="fas fa-trash"></i>
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
          </div>
        </div>
      </main>
    </>
  );
};

export default AirlineList;
