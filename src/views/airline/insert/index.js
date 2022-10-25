import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../../components/module/sidebar";
import Navi from "../../../components/module/navi";
import Footer from "../../../components/module/footer";

const InsertAirline = () => {
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
                <h1 class="h3 mb-2 text-gray-800">New Airline</h1>
                <p class="mb-4">Record new airline to system</p>

                <div className="col-12 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-body mt-3 d-flex justify-content-around">
                      <div className="d-flex my-3 col-5 flex-column justify-content-center align-items-center">
                        <label
                          htmlFor="airlineLogo"
                          style={{ height: "500px" }}
                          className="card shadow-sm d-flex col-12 justify-content-center align-items-center"
                        >
                          Input here
                        </label>
                        <input type="file" id="airlineLogo" hidden />
                        <h3 style={{ height: "300px" }}>Airline Logo</h3>
                      </div>

                      <form className="d-flex my-3 col-6 flex-column justify-content-center">
                        <div className="d-flex flex-row align-items-center">
                          <label htmlFor="airlineName" className="col-2 p-0">
                            <h4>Name</h4>
                          </label>
                          <input
                            id="airlineName"
                            type="text"
                            className="form-control mb-3 col-10"
                          />
                        </div>
                        <button className="btn btn-primary">Submit</button>
                      </form>
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

export default InsertAirline;
