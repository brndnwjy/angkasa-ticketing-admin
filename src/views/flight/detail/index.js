import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../../components/module/sidebar";
import Navi from "../../../components/module/navi";
import Footer from "../../../components/module/footer";
import FlightCard from "../../../components/module/flightCard";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFlightDetail } from "../../../redux/action/flight.action";

const FlightDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { detail } = useSelector((state) => state.flight);

  const getDetail = (params) => {
    dispatch(getFlightDetail(params));
  };

  useEffect(() => {
    getDetail(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
                <Link to="/flight" class="btn btn-success btn-icon-split mb-4">
                  <span class="icon text-white-60">
                    <i class="fas fa-arrow-left"></i>
                  </span>
                  <span class="text">Back</span>
                </Link>

                {/* <!-- Card Example --> */}
                <FlightCard data = {detail}/>
                <p>{detail.name}</p>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default FlightDetail;
