import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import airline from "../../../assets/airline.png";
import {
  approveBooking,
  cancelBooking,
} from "../../../redux/action/booking.action";

const BookingCard = ({ data }) => {
  const dispatch = useDispatch();

  const approve = (id) => {
    dispatch(approveBooking(id));
  };

  const cancel = (id) => {
    dispatch(cancelBooking(id));
  };

  return (
    <div className="col-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Booking ID : {data.booking_id}
          </h6>
        </div>
        <div className="card-body d-flex flex-column align-items-center">
          <div className="d-flex my-3 col-12 justify-content-between align-items-center">
            <p>User ID : {data.user_id}</p>
            <p>Flight ID : {data.flight_id}</p>
          </div>

          <div className="d-flex my-3 col-12 justify-content-center align-items-center">
            <img
              src={data.logo_url ? data.logo_url : airline}
              alt="Garuda Indonesia"
              className="mr-3"
              width={"200px"}
            />
            {/* <h1>{data.name}</h1> */}
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

          <div className="d-flex my-3 p-0 col-11 justify-content-between">
            <div className="card col-4 m-0 p-0 d-flex justify-content-center">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary ">
                  Passenger Detail
                </h6>
              </div>
              <div className="d-flex mt-3 mx-4 justify-content-between align-items-center">
                <p>
                  {data.cp_title}. {data.cp_name}
                </p>
                <p>{data.cp_nationality}</p>
              </div>
            </div>

            <div className="card col-7 m-0 p-0 d-flex justify-content-center">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary ">
                  Contact Person
                </h6>
              </div>
              <div className="d-flex mt-3 mx-4 justify-content-between align-items-center">
                <p>{data.username}</p>
                <p>{data.email}</p>
                <p>{data.phone}</p>
              </div>
            </div>
          </div>

          <div className="card col-11 p-0 m-0 d-flex justify-content-center">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary ">
                Booking Detail
              </h6>
            </div>
            <div className="d-flex mt-3 mx-4 justify-content-start align-items-start">
              <div className="d-flex col-6">
                <div>
                  <p>Wi-Fi</p>
                  <p>Meal</p>
                  <p>Luggage</p>
                  <p>Insurance</p>
                </div>
                <div>
                  <p> &nbsp; : &nbsp;</p>
                  <p> &nbsp; : &nbsp;</p>
                  <p> &nbsp; : &nbsp;</p>
                  <p> &nbsp; : &nbsp;</p>
                </div>
                <div>
                  <p>{data.wifi ? "Yes" : "No"}</p>
                  <p>{data.lunch ? "Yes" : "No"}</p>
                  <p>{data.luggage ? "Yes" : "No"}</p>
                  <p>{data.travel_insurance ? "Yes" : "No"}</p>
                </div>
              </div>

              <div className="d-flex col-6">
                <div>
                  <p>Terminal</p>
                  <p>Gate</p>
                  <p>Total</p>
                  <p>Status</p>
                </div>
                <div>
                  <p>&nbsp; : &nbsp;</p>
                  <p>&nbsp; : &nbsp;</p>
                  <p>&nbsp; : &nbsp;</p>
                  <p>&nbsp; : &nbsp;</p>
                </div>
                <div>
                  <p>{data.terminal}</p>
                  <p>{data.gate}</p>
                  <p>Rp {data.price}</p>
                  <p>{data.payment_status ? "E-Ticket Issued" : "Pending"}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-11 p-0 m-0 mt-3 d-flex flex-row justify-content-around">
            <button
              className="btn btn-danger btn-icon-split col-4 d-flex justify-content-start"
              onClick={() => cancel(data.booking_id)}
              type="button"
            >
              <span className="icon text-white-50">
                <i className="fas fa-trash"></i>
              </span>
              <span className="text ml-2">Cancel Booking</span>
            </button>

            <button
              class="btn btn-success btn-icon-split col-4 d-flex justify-content-start"
              onClick={() => approve(data.booking_id)}
            >
              <span class="icon text-white-50">
                <i class="fas fa-check"></i>
              </span>
              <span class="text ml-2">Approve Payment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
