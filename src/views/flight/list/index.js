import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../../components/module/sidebar";
import Navi from "../../../components/module/navi";
import Footer from "../../../components/module/footer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFlight, removeFlight } from "../../../redux/action/flight.action";

const FlightList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { flight } = useSelector((state) => state.flight);

  const getData = async () => {
    try {
      dispatch(getFlight());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemove = (param) => {
    try {
      dispatch(removeFlight(param));
    } catch (error) {
      console.log(error);
    }
  };

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

        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        {/* <!-- Core plugin JavaScript--> */}
        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

        {/* <!-- Custom scripts for all pages--> */}
        <script src="js/sb-admin-2.min.js"></script>

        {/* <!-- Page level plugins --> */}
        <script src="vendor/chart.js/Chart.min.js"></script>

        {/* <!-- Page level custom scripts --> */}
        <script src="js/demo/chart-area-demo.js"></script>
        <script src="js/demo/chart-pie-demo.js"></script>

        {/* <!-- Page level plugins --> */}
        <script src="vendor/datatables/jquery.dataTables.min.js"></script>
        <script src="vendor/datatables/dataTables.bootstrap4.min.js"></script>

        {/* <!-- Page level custom scripts --> */}
        <script src="js/demo/datatables-demo.js"></script>
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
                          {flight
                            ? flight.map((item) => (
                                <tr>
                                  <td>
                                    {item.departure_country},{" "}
                                    {item.departure_city}
                                  </td>
                                  <td>
                                    {item.arrival_country}, {item.arrival_city}
                                  </td>
                                  <td>{item.airline}</td>
                                  <td>Rp {item.price}</td>
                                  <td>
                                    <div class="d-flex justify-content-between">
                                      <Link
                                        to={`/flight/${item.flight_id}`}
                                        class="btn btn-info btn-circle"
                                      >
                                        <i class="fas fa-info-circle"></i>
                                      </Link>
                                      <Link
                                        to={`/flight/edit/${item.flight_id}`}
                                        class="btn btn-warning btn-circle"
                                      >
                                        <i class="fas fa-edit"></i>
                                      </Link>
                                      <button
                                        value={item.flight_id}
                                        onClick={() => handleRemove(item.flight_id)}
                                        class="btn btn-danger btn-circle"
                                      >
                                        <i class="fas fa-trash"></i>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            : ""}
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
