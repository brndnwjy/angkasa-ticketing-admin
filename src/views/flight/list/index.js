import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../../components/module/sidebar";
import Navi from "../../../components/module/navi";
import Footer from "../../../components/module/footer";
import { Link } from "react-router-dom";

const FlightList = () => {
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
                <h1 class="h3 mb-2 text-gray-800">Flights</h1>
                <p class="mb-4">Manage flights here.</p>

                {/* <!-- DataTales Example --> */}
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                      Flights Database
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
                            <th class="col-3">Departure</th>
                            <th class="col-3">Arrival</th>
                            <th class="col-2">Airline</th>
                            <th class="col-2">Price</th>
                            <th class="col-2">Action</th>
                          </tr>
                        </thead>
                        <tfoot>
                          <tr>
                            <th>Departure</th>
                            <th>Arrival</th>
                            <th>Airline</th>
                            <th>Price</th>
                            <th>Action</th>
                          </tr>
                        </tfoot>
                        <tbody>
                          <tr>
                            <td>ID, Jakarta</td>
                            <td>SG, Singapore</td>
                            <td>Batik Air</td>
                            <td>Rp 2,320,000</td>
                            <td>
                              <div class="d-flex justify-content-between">
                                <Link to="/flight/1" class="btn btn-info btn-circle">
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
                            <td>ID, Manado</td>
                            <td>SG, Singapore</td>
                            <td>Batik Air</td>
                            <td>Rp 2,720,000</td>
                            <td>B</td>
                          </tr>
                          <tr>
                            <td>MY, Kuala Lumpur</td>
                            <td>ID, Jakarta</td>
                            <td>Malaysia Airlines</td>
                            <td>Rp 2,020,000</td>
                            <td>A</td>
                          </tr>
                          <tr>
                            <td>ID, Jakarta</td>
                            <td>MY, Sabah</td>
                            <td>Garuda</td>
                            <td>Rp 1,960,000</td>
                            <td>B</td>
                          </tr>
                          <tr>
                            <td>TH, Bangkok</td>
                            <td>SG, Singapore</td>
                            <td>Thailand Airlines</td>
                            <td>Rp 4,170,000</td>
                            <td>F</td>
                          </tr>
                          <tr>
                            <td>ID, Yogyakarta</td>
                            <td>PH, Cebu</td>
                            <td>Citylink</td>
                            <td>Rp 3,100,000</td>
                            <td>A</td>
                          </tr>
                          <tr>
                            <td>ID, Bali</td>
                            <td>SG, Singapore</td>
                            <td>Batik Air</td>
                            <td>Rp 1,250,000</td>
                            <td>A</td>
                          </tr>
                          <tr>
                            <td>ID, Jakarta</td>
                            <td>VN, Ho Chi Mihn</td>
                            <td>Air Asia</td>
                            <td>Rp 3,180,000</td>
                            <td>B</td>
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

export default FlightList;
