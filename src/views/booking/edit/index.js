import React from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../../../components/module/sidebar";
import Navi from "../../../components/module/navi";
import Footer from "../../../components/module/footer";

import airline from "../../../assets/airline.png";

const EditBooking = () => {
  const { id } = useParams();

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
                <Link to="/booking" class="btn btn-success btn-icon-split mb-4">
                  <span class="icon text-white-60">
                    <i class="fas fa-arrow-left"></i>
                  </span>
                  <span class="text">Back</span>
                </Link>

                <div className="col-12 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Booking ID : {id}
                      </h6>
                    </div>
                    <div className="card-body d-flex flex-column align-items-center">
                      <div className="d-flex my-3 col-12 justify-content-between align-items-center">
                        <p>User ID : 001</p>
                        <p>Flight ID : 001</p>
                      </div>

                      <div className="d-flex my-3 col-12 justify-content-center align-items-center">
                        <img
                          src={airline}
                          alt="Garuda Indonesia"
                          className="mr-3"
                        />
                        <h1>Garuda Indonesia</h1>
                      </div>

                      <div className="d-flex my-3 col-12 justify-content-center align-items-center">
                        <div className="card-body col-6 d-flex text-center justify-content-center align-items-center">
                          <i className="fas fa-fw fa-plane-departure fa-3x mr-4" />
                          <div className="d-flex flex-column align-items-start">
                            <h3>IDN - Jakarta</h3>
                            <span>(12:15)</span>
                          </div>
                        </div>

                        <div className="card-body col-6 d-flex text-center justify-content-center align-items-center">
                          <i className="fas fa-fw fa-plane-arrival fa-3x mr-4" />
                          <div className="d-flex flex-column align-items-start">
                            <h3>SGP - Singapore</h3>
                            <span>(14:25)</span>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex my-3 p-0 col-11 justify-content-between">
                        <div className="card col-4 m-0 p-0 d-flex justify-content-center">
                          <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary ">
                              Passenger Detail
                            </h6>
                          </div>
                          <div className="d-flex mt-3 mx-4 justify-content-between align-items-center">
                            <p>Mr. Alex Ferguson</p>
                            <p>British</p>
                          </div>
                        </div>

                        <div className="card col-7 m-0 p-0 d-flex justify-content-center">
                          <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary ">
                              Contact Person
                            </h6>
                          </div>
                          <div className="d-flex mt-3 mx-4 justify-content-between align-items-center">
                            <p>Brandon Wijaya</p>
                            <p>brandon@mail.com</p>
                            <p>+62 856 7676 8593</p>
                          </div>
                        </div>
                      </div>

                      <div className="card col-11 p-0 m-0 d-flex justify-content-center">
                        <div className="card-header py-3">
                          <h6 className="m-0 font-weight-bold text-primary ">
                            Booking Detail
                          </h6>
                        </div>
                        <div className="d-flex mt-3 mx-4 justify-content-start align-items-start">
                          <div className="d-flex col-6">
                            <div>
                              <p>Wi-Fi</p>
                              <p>Meal</p>
                              <p>Luggage</p>
                              <p>Insurance</p>
                            </div>
                            <div>
                              <p> &nbsp; : &nbsp;</p>
                              <p> &nbsp; : &nbsp;</p>
                              <p> &nbsp; : &nbsp;</p>
                              <p> &nbsp; : &nbsp;</p>
                            </div>
                            <div>
                              <p>Yes</p>
                              <p>Yes</p>
                              <p>Yes</p>
                              <p>Yes</p>
                            </div>
                          </div>

                          <div className="d-flex col-6">
                            <div>
                              <p>Terminal</p>
                              <p>Gate</p>
                              <p>Total</p>
                              <p>Status</p>
                            </div>
                            <div>
                              <p>&nbsp; : &nbsp;</p>
                              <p>&nbsp; : &nbsp;</p>
                              <p>&nbsp; : &nbsp;</p>
                              <p>&nbsp; : &nbsp;</p>
                            </div>
                            <div>
                              <p>1</p>
                              <p>A</p>
                              <p>Rp 3.150.000</p>
                              <p>Pending</p>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default EditBooking;
