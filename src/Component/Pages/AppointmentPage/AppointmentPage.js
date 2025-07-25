import React, { useState } from 'react';
import { Appointment } from '../../Appointment/Appointment';
import './appointmentpage.scss'; // Import CSS for styling

function AppointmentPage() {
  return (
    <>
      <div className="appointment-image-container">
        <img
          src="./Image/doc_backpic1.jpg" // Replace with your actual image URL
          alt="Appointment"
          className="appointment-image"
        />
        <div className="appointment-text">Appointment</div>
      </div>
      <Appointment />
    </>
  );
}

export default AppointmentPage;