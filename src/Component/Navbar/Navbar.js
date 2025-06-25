import React from "react";
import './Navbar.scss';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaVimeoV
} from 'react-icons/fa';

export const Navbar = () => {
  return (
    <div className="containe">
    <div className="navbar-top container py-2 px-3">
      <div className="row align-items-center">
        {/* Left Info */}
        <div className="col-12 col-md-8 d-flex flex-column flex-md-row gap-2 gap-md-4 text-center text-md-start justify-content-center justify-content-md-start">
          <span className="d-flex align-items-center justify-content-center text-muted">
            <FaPhoneAlt className="me-2" /> CALL US NOW! +1 305 708 2563
          </span>
          <span className="d-flex align-items-center justify-content-center text-muted">
            <FaEnvelope className="me-2" /> MEDICAL@EXAMPLE.COM
          </span>
          <span className="d-flex align-items-center justify-content-center text-muted">
            <FaMapMarkerAlt className="me-2" /> FIND OUR LOCATION
          </span>
        </div>

        {/* Social Icons */}
        <div className="col-12 col-md-4 mt-2 mt-md-0 d-flex justify-content-center justify-content-md-end gap-3">
          <a href="#" className="text-muted"><FaFacebookF /></a>
          <a href="#" className="text-muted"><FaLinkedinIn /></a>
          <a href="#" className="text-muted"><FaTwitter /></a>
          <a href="#" className="text-muted"><FaInstagram /></a>
          <a href="#" className="text-muted"><FaVimeoV /></a>
        </div>
      </div>
    </div>
    </div>
  );
};
