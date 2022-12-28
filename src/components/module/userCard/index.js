import React from "react";
import airline from "../../../assets/airline.png";

const UserCard = ({ data }) => {
  return (
    <div className="col-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            User ID : {data.user_id}
          </h6>
        </div>
        <div className="card-body d-flex flex-column">
          <div className="d-flex mt-3 mb-2 col-12 flex-column justify-content-center align-items-center">
            <img
              src={data.ava_url ? data.ava_url : airline}
              alt="profile"
              style={{
                width: "150px",
                height: "150px",
                border: "1px solid black",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <h3 className="mt-3">{data.username}</h3>
          </div>

          <div className="d-flex my-3 col-12 justify-content-around align-items-center">
            <div className="card col-5 p-0  d-flex justify-content-center">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary ">Address</h6>
              </div>
              <div className="d-flex flex-column mt-3 mx-4 justify-content-start align-items-start">
                <p>{data.address ? data.address : ""}</p>
                <p>
                  {data.city ? data.city : ""},{" "}
                  {data.postcode ? data.postcode : ""}
                </p>
              </div>
            </div>

            <div className="card col-5 p-0  d-flex justify-content-center">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary ">Contact</h6>
              </div>
              <div className="d-flex flex-column mt-3 mx-4 justify-content-start align-items-start">
                <p>Email : {data.email}</p>
                <p>Phone : {data.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
