import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../../components/module/sidebar";
import Navi from "../../../components/module/navi";
import Footer from "../../../components/module/footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFlight, getFlight } from "../../../redux/action/flight.action";

const InsertFlight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { airline } = useSelector((state) => state.airline);

  const [flightForm, setFlightForm] = useState({
    airline_id: "",
    departure_country: "",
    departure_city: "",
    departure_time: "",
    arrival_country: "",
    arrival_city: "",
    arrival_time: "",
    terminal: "",
    gate: "",
    transit: "",
    facilities: "",
    price: 0,
  });

  // const [wifi, setWifi] = useState(false);
  // const [lunch, setLunch] = useState(false);
  // const [luggage, setLuggage] = useState(false);
  // const [transit, setTransit] = useState(false);

  const handleInput = (e) => {
    setFlightForm({
      ...flightForm,
      [e.target.name]: e.target.value,
    });
  };

  // const handleWifi = () => {
  //   if (wifi) {
  //     setWifi(false);
  //   } else {
  //     setWifi(true);
  //   }
  // };

  // const handleLunch = () => {
  //   if (lunch) {
  //     setLunch(false);
  //   } else {
  //     setLunch(true);
  //   }
  // };

  // const handleLuggage = () => {
  //   if (luggage) {
  //     setLuggage(false);
  //   } else {
  //     setLuggage(true);
  //   }
  // };

  // const handleTransit = () => {
  //   if (transit) {
  //     setTransit(false);
  //   } else {
  //     setTransit(true);
  //   }
  // };

  const handleInsert = (e) => {
    e.preventDefault();

    let data = {
      ...flightForm,
      price: parseInt(flightForm.price),
      // wifi,
      // lunch,
      // luggage,
      // transit,
    };

    console.log(data);
    dispatch(addFlight(data, navigate));
  };

  useEffect(() => {
    dispatch(getFlight());
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
                    <form
                      onSubmit={handleInsert}
                      className="card-body mt-3 d-flex flex-column"
                    >
                      <section className="d-flex col-12 justify-content-between align-items-center">
                        <div>
                          <label htmlFor="airline">Airline : </label>
                          <select
                            id="airline"
                            name="airline_id"
                            className="form-select ml-2"
                            aria-label="airline select"
                            onChange={handleInput}
                          >
                            <option selected>Select Airline</option>
                            {airline
                              ? airline.map((item) => (
                                  <option value={item.airline_id}>
                                    {item.name}
                                  </option>
                                ))
                              : ""}
                            {/* <option value="1">Garuda Indonesia</option> */}
                          </select>
                        </div>

                        <div className="d-flex col-6 justify-content-end">
                          <div className="mr-3">
                            <label htmlFor="terminal">Terminal : </label>
                            <select
                              id="terminal"
                              name="terminal"
                              className="form-select ml-2"
                              aria-label="terminal select"
                              onChange={handleInput}
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
                              name="gate"
                              className="form-select ml-2"
                              aria-label="gate select"
                              onChange={handleInput}
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
                          <input
                            className="col-9"
                            type="text"
                            name="departure_country"
                            onChange={handleInput}
                          />
                        </div>

                        <div className="col-3 d-flex align-items-center">
                          <label className="m-0 mr-2">City</label>
                          <input
                            className="col-9"
                            type="text"
                            name="departure_city"
                            onChange={handleInput}
                          />
                        </div>

                        <div className="col-3 d-flex align-items-center">
                          <label className="m-0 mr-2">Time</label>
                          {/* <input
                            className="col-8"
                            type="time"
                            name="departure_time"
                            onChange={handleInput}
                          /> */}
                          <select
                            className="col-8"
                            name="departure_time"
                            onChange={handleInput}
                          >
                            <option selected>-- Select --</option>
                            <option value="0">00:00 - 06:00</option>
                            <option value="1">06:00 - 12:00</option>
                            <option value="2">12:00 - 18:00</option>
                            <option value="3">18:00 - 24:00</option>
                          </select>
                        </div>
                      </section>

                      <section className="d-flex col-12 align-items-center">
                        <h6 className="col-2 p-0 m-0">Arrival : </h6>
                        <div className="col-4 d-flex align-items-center">
                          <label className="m-0 mr-2">Country</label>
                          <input
                            className="col-9"
                            type="text"
                            name="arrival_country"
                            onChange={handleInput}
                          />
                        </div>

                        <div className="col-3 d-flex align-items-center">
                          <label className="m-0 mr-2">City</label>
                          <input
                            className="col-9"
                            type="text"
                            name="arrival_city"
                            onChange={handleInput}
                          />
                        </div>

                        <div className="col-3 d-flex align-items-center">
                          <label className="m-0 mr-2">Time</label>
                          {/* <input
                            className="col-8"
                            type="time"
                            name="arrival_time"
                            onChange={handleInput}
                          /> */}
                          <select
                            className="col-8"
                            name="arrival_time"
                            onChange={handleInput}
                          >
                            <option selected>-- Select --</option>
                            <option value="0">00:00 - 06:00</option>
                            <option value="1">06:00 - 12:00</option>
                            <option value="2">12:00 - 18:00</option>
                            <option value="3">18:00 - 24:00</option>
                          </select>
                        </div>
                      </section>

                      <hr className="col-12 px-0 mx-0" />

                      {/* <section className="d-flex col-12 align-items-center">
                        <h6 className="m-0 p-0 mr-1 col-2">Facilities</h6>
                        <div class="form-check ml-2 mr-5">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="wifi"
                            onChange={handleWifi}
                          />
                          <label class="form-check-label" for="wifi">
                            Wi-Fi
                          </label>
                        </div>

                        <div class="form-check mr-5">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="inflightmeal"
                            onClick={handleLunch}
                          />
                          <label class="form-check-label" for="inflightmeal">
                            In-flight Meal
                          </label>
                        </div>

                        <div class="form-check mr-5">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="luggage"
                            onClick={handleLuggage}
                          />
                          <label class="form-check-label" for="luggage">
                            Luggage
                          </label>
                        </div>

                        <div class="form-check mr-5">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="transit"
                            onClick={handleTransit}
                          />
                          <label class="form-check-label" for="transit">
                            Transit
                          </label>
                        </div>
                      </section>

                      <hr className="col-12 px-0 mx-0" /> */}

                      <section className="d-flex col-12 align-items-center">
                        <div className="col-6 p-0">
                          <label className="col-4 p-0 m-0 mr-2">
                            <h6 className="p-0 m-0">Facility : </h6>
                          </label>
                          <select
                            className="col-7"
                            name="facilities"
                            onChange={handleInput}
                          >
                            <option selected>-- Select --</option>
                            <option value="0">Luggage</option>
                            <option value="1">In-flight Meal</option>
                            <option value="2">Wi-fi</option>
                          </select>
                        </div>

                        <div className="col-6 p-0">
                          <label className="col-4 p-0 m-0 mr-2">
                            <h6 className="p-0 m-0">Transit : </h6>
                          </label>
                          <select
                            className="col-7"
                            name="transit"
                            onChange={handleInput}
                          >
                            <option selected>-- Select --</option>
                            <option value="0">Direct</option>
                            <option value="1">Transit</option>
                            <option value="2">Transit 2+</option>
                          </select>
                        </div>
                      </section>

                      <hr className="col-12 px-0 mx-0" />

                      <section className="d-flex col-12 align-items-center">
                        <label className="col-2 p-0 m-0 mr-2">
                          <h6 className="p-0 m-0">Price : </h6>
                        </label>
                        <input
                          className="col-5"
                          type="number"
                          step="1000"
                          name="price"
                          onChange={handleInput}
                        />
                      </section>

                      <hr className="col-12 px-0 mx-0" />

                      <div className="col-12 d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary col-3">
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
