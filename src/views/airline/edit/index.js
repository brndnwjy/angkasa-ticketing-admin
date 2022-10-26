import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../../components/module/sidebar";
import Navi from "../../../components/module/navi";
import Footer from "../../../components/module/footer";

import airline from "../../../assets/airline.png";
import { useDispatch, useSelector } from "react-redux";
import { getAirlineDetail, updateAirline } from "../../../redux/action/airline.action";

const EditAirline = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { detail } = useSelector((state) => state.airline);

  const [name, setName] = useState("");
  const [logo, setLogo] = useState();
  const [preview, setPreview] = useState();

  const handleInput = (e) => {
    setName(e.target.value);
  };

  const handleFile = (e) => {
    setLogo(e.target.files[0]);
    setPreview([URL.createObjectURL(e.target.files[0])]);
  };

  const getDetail = async (params) => {
    await dispatch(getAirlineDetail(params));
    if (detail.logo) {
      setPreview(detail.logo);
    }
  };

  useEffect(() => {
    getDetail(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append("name", name);
    data.append("logo", logo);

    dispatch(updateAirline(id, data, navigate));
  }

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
                <Link to="/airline" class="btn btn-success btn-icon-split mb-4">
                  <span class="icon text-white-60">
                    <i class="fas fa-arrow-left"></i>
                  </span>
                  <span class="text">Back</span>
                </Link>

                <div className="col-12 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Airline ID : {id}
                      </h6>
                    </div>
                    <form className="card-body mt-3 d-flex justify-content-around">
                      <div className="d-flex my-3 col-5 flex-column justify-content-center align-items-center">
                        <label
                          htmlFor="airlineLogo"
                          style={{ height: "500px" }}
                          className="card shadow-sm d-flex col-12 justify-content-center align-items-center"
                        >
                          <img src={preview ? preview : ""} alt="airline logo" />
                        </label>
                        <input onChange={handleFile} type="file" id="airlineLogo" hidden />
                        <h3 style={{ height: "300px" }}>Airline Logo</h3>
                      </div>

                      <div className="d-flex my-3 col-6 flex-column justify-content-center">
                        <div className="d-flex flex-row align-items-center">
                          <label htmlFor="airlineName" className="col-2 p-0">
                            <h4>Name</h4>
                          </label>
                          <input
                            id="airlineName"
                            type="text"
                            onChange={handleInput}
                            className="form-control mb-3 col-10"
                            placeholder={detail.name ? detail.name : "Airline Name"}
                          />
                        </div>
                        <button onClick={handleUpdate} className="btn btn-primary">Edit</button>
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

export default EditAirline;
