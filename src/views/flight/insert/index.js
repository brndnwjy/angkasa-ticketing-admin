import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../../components/module/sidebar";
import Navi from "../../../components/module/navi";
import Footer from "../../../components/module/footer";

const InsertFlight = () => {
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
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navi />

              <div className="container-fluid">
                {/* <!-- Page Heading --> */}
                <h1 className="h3 mb-2 text-gray-800">New Flight</h1>
                <p className="mb-4">Record new flight to system</p>

                <div className="col-12 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Flight Registree
                      </h6>
                    </div>
                    <form className="card-body mt-3 d-flex flex-column">
                      <section className="d-flex col-12 justify-content-between align-items-center">
                        <div>
                          <label htmlFor="airline">Airline : </label>
                          <select
                            id="airline"
                            className="form-select ml-2"
                            aria-label="airline select"
                          >
                            <option selected>Select Airline</option>
                            <option value="1">Garuda Indonesia</option>
                            <option value="2">Batik Air</option>
                            <option value="3">Citylink</option>
                          </select>
                        </div>

                        <div className="d-flex col-6 justify-content-end">
                          <div className="mr-3">
                            <label htmlFor="terminal">Terminal : </label>
                            <select
                              id="terminal"
                              className="form-select ml-2"
                              aria-label="terminal select"
                            >
                              <option selected>Select Terminal</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>

                          <div>
                            <label htmlFor="gate">Gate : </label>
                            <select
                              id="gate"
                              className="form-select ml-2"
                              aria-label="gate select"
                            >
                              <option selected>Select Gate</option>
                              <option value="A">A</option>
                              <option value="B">B</option>
                              <option value="C">C</option>
                              <option value="D">D</option>
                              <option value="E">E</option>
                            </select>
                          </div>
                        </div>
                      </section>

                      <hr className="col-12 px-0 mx-0" />

                      <section className="d-flex mb-3 col-12 align-items-center">
                        <h6 className="col-2 p-0 m-0">Departure : </h6>
                        <div className="col-4 d-flex align-items-center">
                          <label className="m-0 mr-2">Country</label>
                          <input className="col-9" type="text" />
                        </div>

                        <div className="col-3 d-flex align-items-center">
                          <label className="m-0 mr-2">City</label>
                          <input className="col-9" type="text" />
                        </div>

                        <div className="col-3 d-flex align-items-center">
                          <label className="m-0 mr-2">Time</label>
                          <input className="col-8" type="time" />
                        </div>
                      </section>

                      <section className="d-flex col-12 align-items-center">
                        <h6 className="col-2 p-0 m-0">Arrival : </h6>
                        <div className="col-4 d-flex align-items-center">
                          <label className="m-0 mr-2">Country</label>
                          <input className="col-9" type="text" />
                        </div>

                        <div className="col-3 d-flex align-items-center">
                          <label className="m-0 mr-2">City</label>
                          <input className="col-9" type="text" />
                        </div>

                        <div className="col-3 d-flex align-items-center">
                          <label className="m-0 mr-2">Time</label>
                          <input className="col-8" type="time" />
                        </div>
                      </section>

                      <hr className="col-12 px-0 mx-0" />

                      <section className="d-flex col-12 align-items-center">
                        <h6 className="m-0 p-0 mr-1 col-2">Facilities</h6>
                        <div class="form-check ml-2 mr-5">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="wifi"
                          />
                          <label class="form-check-label" for="wifi">
                            Wi-Fi
                          </label>
                        </div>

                        <div class="form-check mr-5">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="inflightmeal"
                          />
                          <label class="form-check-label" for="inflightmeal">
                            In-flight Meal
                          </label>
                        </div>

                        <div class="form-check mr-5">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="luggage"
                          />
                          <label class="form-check-label" for="luggage">
                            Luggage
                          </label>
                        </div>
                      </section>

                      <hr className="col-12 px-0 mx-0" />

                      <div className="col-12 d-flex justify-content-center">
                        <button className="btn btn-primary col-3">
                          Submit
                        </button>
                      </div>
                    </form>
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

export default InsertFlight;
