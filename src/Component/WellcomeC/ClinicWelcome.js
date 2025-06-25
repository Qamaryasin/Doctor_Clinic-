import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './welcome.scss';

const ClinicWelcome = () => {
  return (
    <div className="clinic-welcome container my-5">
      <div className="row align-items-center">
        {/* Left Side Image */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="./Image/welcome.png"
            alt="Clinic"
            className="img-fluid"
          />
        </div>

        {/* Right Side Text */}
        <div className="col-md-6">
          <div className="welcome-box p-4">
            <h2 className="welcome-title mb-3">
              Welcome to <span>our clinic</span>
            </h2>
            <p className="welcome-text">
              Subdue whales void god which living don't midst lesser yielding over
              lights whose. Cattle greater brought sixth fly den dry good tree isn't seed stars were.
            </p>
            <p className="welcome-text">
              Subdue whales void god which living don't midst lesser yielding over
              lights whose. Cattle greater brought sixth fly den dry good tree isn't seed stars were the boring.
            </p>
            <a href="/learn-more" className="learn-more-btn mt-2">LEARN MORE</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicWelcome;
