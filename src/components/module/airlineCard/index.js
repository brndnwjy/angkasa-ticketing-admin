import React from "react";
import airline from "../../../assets/airline.png";

const AirlineCard = ({...params}) => {
  return (
    <div className="col-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Airline ID : {params.airlineId}</h6>
        </div>
        <div className="card-body d-flex flex-column">
          <div className="d-flex my-3 col-12 justify-content-center align-items-center">
            <img src={airline} alt="Garuda Indonesia" className="mr-3" />
            <h1>{params.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirlineCard;
