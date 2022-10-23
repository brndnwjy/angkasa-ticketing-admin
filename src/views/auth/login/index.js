import React from "react";
import styles from "./login.module.css"
import banner from "../../../assets/banner.png"

const Login = () => {
  return (
    <main className={`d-flex justify-content-center align-items-center ${styles.wrapper}`}>
      <div className="container">
        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                    <img className="col-lg-6 d-none d-lg-block" src={banner} alt="banner" />
                  <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user">
                          <input
                            type="email"
                            className="mb-3 form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                          />
                          <input
                            type="password"
                            className="mb-3 form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                          />
                        <a
                          href="index.html"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
