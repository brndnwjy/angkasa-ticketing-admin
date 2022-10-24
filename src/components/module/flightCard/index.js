import React from "react";
import airline from "../../../assets/airline.png";

const FlightCard = (...params) => {
  return (
    <div className="col-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Flight ID : {params.flightId}</h6>
        </div>
        <div className="card-body d-flex flex-column">
          <div className="d-flex my-3 col-12 justify-content-center align-items-center">
            <img src={airline} alt="Garuda Indonesia" className="mr-3" />
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
          <div className="d-flex my-3 col-12 justify-content-between">
            <div>
              <i className="fas fa-fw fa-map-pin mr-2"></i>
              <span>Terminal B Gate 5</span>
            </div>
            <div>
              <i className="fas fa-fw fa-money-bill mr-2"></i>
              <span>Rp. 1.500.000,00/pax</span>
            </div>
            <div>
              <i className="fas fa-fw fa-wifi mr-2"></i>
              <span>Wi-Fi</span>
            </div>
            <div>
              <i className="fas fa-fw fa-utensils mr-2"></i>
              <span>In-Flight Meal</span>
            </div><div>
              <i className="fas fa-fw fa-suitcase-rolling mr-2"></i>
              <span>Luggage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
