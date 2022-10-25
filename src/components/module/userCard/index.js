import React from "react";
import airline from "../../../assets/airline.png";

const UserCard = (...params) => {
  return (
    <div className="col-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            User ID : {params.userId}
          </h6>
        </div>
        <div className="card-body d-flex flex-column">
          <div className="d-flex mt-3 mb-2 col-12 flex-column justify-content-center align-items-center">
            <img src={airline} alt="profile" />
            <h3 className="mt-3">Brandon Wijaya</h3>
          </div>

          <div className="d-flex my-3 col-12 justify-content-around align-items-center">
            <div className="card col-5 p-0  d-flex justify-content-center">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary ">
                  Address
                </h6>
              </div>
              <div className="d-flex flex-column mt-3 mx-4 justify-content-start align-items-start">
                <p>Jalan bahagia tanpa kehadirannya nomor 132</p>
                <p>Jakarta, 14320</p>
              </div>
            </div>

            <div className="card col-5 p-0  d-flex justify-content-center">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary ">
                  Contact
                </h6>
              </div>
              <div className="d-flex flex-column mt-3 mx-4 justify-content-start align-items-start">
                <p>Email : brandon@mail.com</p>
                <p>Phone : +62 856 7676 8578</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
