import React from "react";
import airlineImg from "../../../assets/airline.png";

const FlightCard = ({ data }) => {
  
  return (
    <div className="col-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Flight ID : {data.flight_id}
          </h6>
        </div>
        <div className="card-body d-flex flex-column">
          <div className="d-flex my-3 col-12 justify-content-center align-items-center">
            <img
              src={data.icon_airlines ? data.icon_airlines : airlineImg}
              alt="Garuda Indonesia"
              className="mr-3"
              width={"200px"}
            />
            <h1>{data.airline}</h1>
          </div>
          <div className="d-flex my-3 col-12 justify-content-center align-items-center">
            <div className="card-body col-6 d-flex text-center justify-content-center align-items-center">
              <i className="fas fa-fw fa-plane-departure fa-3x mr-4" />
              <div className="d-flex flex-column align-items-start">
                <h3>
                  {data.departure_country} - {data.departure_city}
                </h3>
                <span>({data.departure_time})</span>
              </div>
            </div>

            <div className="card-body col-6 d-flex text-center justify-content-center align-items-center">
              <i className="fas fa-fw fa-plane-arrival fa-3x mr-4" />
              <div className="d-flex flex-column align-items-start">
                <h3>
                  {data.arrival_country} - {data.arrival_city}
                </h3>
                <span>({data.arrival_time})</span>
              </div>
            </div>
          </div>
          <div className="d-flex my-3 col-12 justify-content-between">
            <div>
              <i className="fas fa-fw fa-map-pin mr-2"></i>
              <span>
                Terminal {data.terminal} Gate {data.terminal}
              </span>
            </div>
            <div>
              <i className="fas fa-fw fa-money-bill mr-2"></i>
              <span>Rp. {data.price}</span>
            </div>
            {data.wifi ? (
              <div>
                <i className="fas fa-fw fa-wifi mr-2"></i>
                <span>Wi-Fi</span>
              </div>
            ) : (
              ""
            )}
            {data.lunch ? (
              <div>
                <i className="fas fa-fw fa-utensils mr-2"></i>
                <span>In-Flight Meal</span>
              </div>
            ) : (
              ""
            )}
            {data.luggage ? (
              <div>
                <i className="fas fa-fw fa-suitcase-rolling mr-2"></i>
                <span>Luggage</span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
