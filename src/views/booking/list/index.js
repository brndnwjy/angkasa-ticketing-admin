import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../../components/module/sidebar";
import Navi from "../../../components/module/navi";
import Footer from "../../../components/module/footer";
import { Link } from "react-router-dom";
import { getBooking } from "../../../redux/action/booking.action";

const BookingList = () => {
  const dispatch = useDispatch();

  const { booking } = useSelector((state) => state.booking);

  const getData = async () => {
    try {
      dispatch(getBooking());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                <h1 class="h3 mb-2 text-gray-800">Bookings</h1>
                <p class="mb-4">Manage bookings here.</p>

                {/* <!-- DataTales Example --> */}
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                      Bookings Database
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
                            <th class="col-2">Booking ID</th>
                            <th class="col-2">Flight ID</th>
                            <th class="col-3">CP Name</th>
                            <th class="col-2">Total</th>
                            <th class="col-2">Status</th>
                            <th class="col-1">Action</th>
                          </tr>
                        </thead>
                        <tfoot>
                          <tr>
                            <th>Booking ID</th>
                            <th>Flight ID</th>
                            <th>Customer Name</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </tfoot>
                        <tbody>
                          {booking
                            ? booking.map((item) => (
                                <tr>
                                  <td>{item.booking_id}</td>
                                  <td>{item.flight_id}</td>
                                  <td>{item.username}</td>
                                  <td>Rp {item.price}</td>
                                  <td>
                                    {item.payment_status
                                      ? "E-Ticket Issued"
                                      : "Pending"}
                                  </td>
                                  <td>
                                    <div class="d-flex justify-content-center">
                                      <Link
                                        to={`/booking/${item.booking_id}`}
                                        class="btn btn-info btn-circle"
                                      >
                                        <i class="fas fa-info-circle"></i>
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            : ""}
                          <tr>
                            <td>001</td>
                            <td>01A</td>
                            <td>Alexander Purwoto</td>
                            <td>Rp 3,100,000</td>
                            <td>Pending</td>
                            <td>
                              <div class="d-flex justify-content-center">
                                <Link
                                  to="/booking/1"
                                  class="btn btn-info btn-circle"
                                >
                                  <i class="fas fa-info-circle"></i>
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

export default BookingList;
