// import React from "react";
// import { useParams } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { doctorData } from "../data/doctorData";

// const DoctorDetails = () => {
//   const { id } = useParams(); // get doctor id from URL
//   const doctor = doctorData.find((doc) => doc.id === parseInt(id));

//   if (!doctor) {
//     return (
//       <div className="container py-5 text-center">
//         <h4>Doctor not found</h4>
//       </div>
//     );
//   }

//   return (
//     <div className="container py-5">
//       <div className="card shadow-lg border-0 rounded-4">
//         <div className="row g-0">
//           {/* Doctor Image */}
//           <div className="col-md-4 text-center p-4">
//             <img
//               src={doctor.image}
//               alt={doctor.name}
//               className="img-fluid rounded-circle border border-3"
//               style={{ maxWidth: "250px" }}
//             />
//             <h4 className="mt-3">{doctor.name}</h4>
//             <p className="text-muted">{doctor.specialization}</p>
//             <span className="badge bg-success fs-6">
//               ⭐ {doctor.rating} / 5.0
//             </span>
//           </div>

//           {/* Doctor Details */}
//           <div className="col-md-8 p-4">
//             <h5 className="fw-bold">About</h5>
//             <p className="text-muted">
//               {doctor.experience} of experience at {doctor.hospital}.
//             </p>

//             <div className="row mt-4">
//               <div className="col-sm-6 mb-3">
//                 <strong>Experience:</strong>
//                 <p>{doctor.experience}</p>
//               </div>
//               <div className="col-sm-6 mb-3">
//                 <strong>Languages:</strong>
//                 <p>{doctor.languages}</p>
//               </div>
//               <div className="col-sm-6 mb-3">
//                 <strong>Hospital:</strong>
//                 <p>{doctor.hospital}</p>
//               </div>
//               <div className="col-sm-6 mb-3">
//                 <strong>Reviews:</strong>
//                 <p>{doctor.reviews}+ patients reviewed</p>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="d-flex gap-3 mt-4">
//               <button className="btn btn-primary"   onClick={() => window.open("https://meet.google.com/xyz-abcd-123", "_blank")}>Book Appointment</button>
//               <button className="btn btn-outline-secondary">Contact Doctor</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorDetails;


import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { doctorData } from "../data/doctorData";

const DoctorDetails = () => {
  const { id } = useParams(); // get doctor id from URL
  const navigate = useNavigate();

  const doctor = doctorData.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="container py-5 text-center">
        <h4>Doctor not found</h4>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0 rounded-4 position-relative">
        {/* Cross Button */}
        <button
          className="btn-close position-absolute top-0 end-0 m-3"
          onClick={() => navigate(-1)} // go back
        ></button>
        <div className="row g-0">
          {/* Doctor Image */}
          <div className="col-md-4 text-center p-4">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="img-fluid rounded-circle border border-3"
              style={{ maxWidth: "250px" }}
            />
            <h4 className="mt-3">{doctor.name}</h4>
            <p className="text-muted">{doctor.specialization}</p>
            <span className="badge bg-success fs-6">
              ⭐ {doctor.rating} / 5.0
            </span>
          </div>

          {/* Doctor Details */}
          <div className="col-md-8 p-4">
            <h5 className="fw-bold">About</h5>
            <p className="text-muted">
              {doctor.experience} of experience at {doctor.hospital}.
            </p>

            <div className="row mt-4">
              <div className="col-sm-6 mb-3">
                <strong>Experience:</strong>
                <p>{doctor.experience}</p>
              </div>
              <div className="col-sm-6 mb-3">
                <strong>Languages:</strong>
                <p>{doctor.languages}</p>
              </div>
              <div className="col-sm-6 mb-3">
                <strong>Hospital:</strong>
                <p>{doctor.hospital}</p>
              </div>
              <div className="col-sm-6 mb-3">
                <strong>Reviews:</strong>
                <p>{doctor.reviews}+ patients reviewed</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex gap-3 mt-4">
              <button
                className="btn btn-primary"
                onClick={() =>
                  window.open("https://calendly.com/qyasin303/30min", "_blank")
                }
              >
                Book Appointment
              </button>
              <button className="btn btn-outline-secondary">
                Contact Doctor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
