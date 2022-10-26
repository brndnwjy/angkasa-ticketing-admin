import React from "react";
import { Link } from "react-router-dom";
import airline from "../../../assets/airline.png";

const BookingCard = (...params) => {
  return (
    <div className="col-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Booking ID : {params.bookingId}
          </h6>
        </div>
        <div className="card-body d-flex flex-column align-items-center">
          <div className="d-flex my-3 col-12 justify-content-between align-items-center">
            <p>User ID : 001</p>
            <p>Flight ID : 001</p>
          </div>

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

          <div className="d-flex my-3 p-0 col-11 justify-content-between">
            <div className="card col-4 m-0 p-0 d-flex justify-content-center">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary ">
                  Passenger Detail
                </h6>
              </div>
              <div className="d-flex mt-3 mx-4 justify-content-between align-items-center">
                <p>Mr. Alex Ferguson</p>
                <p>British</p>
              </div>
            </div>

            <div className="card col-7 m-0 p-0 d-flex justify-content-center">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary ">
                  Contact Person
                </h6>
              </div>
              <div className="d-flex mt-3 mx-4 justify-content-between align-items-center">
                <p>Brandon Wijaya</p>
                <p>brandon@mail.com</p>
                <p>+62 856 7676 8593</p>
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
                  <p>Yes</p>
                  <p>Yes</p>
                  <p>Yes</p>
                  <p>Yes</p>
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
                  <p>1</p>
                  <p>A</p>
                  <p>Rp 3.150.000</p>
                  <p>Pending</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-11 p-0 m-0 mt-3 d-flex flex-row justify-content-around">
            <Link to="#" className="btn btn-danger btn-icon-split col-4 d-flex justify-content-start">
              <span className="icon text-white-50">
                <i className="fas fa-trash"></i>
              </span>
              <span className="text ml-2">Cancel Booking</span>
            </Link>

            <Link href="#" class="btn btn-success btn-icon-split col-4 d-flex justify-content-start">
              <span class="icon text-white-50">
                <i class="fas fa-check"></i>
              </span>
              <span class="text ml-2">Approve Payment</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
