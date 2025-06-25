// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./ClinicCards.css"; // Custom CSS for styling

// const clinics = [
//   {
//     title: "Cardiac Clinic",
//     description:
//       "Hath creeping subdue he fish gred face whose spirit that seasons today multiply female midst upon",
//     image: "https://via.placeholder.com/400x250?text=Cardiac+Clinic",
//   },
//   {
//     title: "Plastic Surgery",
//     description:
//       "Hath creeping subdue he fish gred face whose spirit that seasons today multiply female midst upon",
//     image: "https://via.placeholder.com/400x250?text=Plastic+Surgery",
//   },
//   {
//     title: "Dental Clinic",
//     description:
//       "Hath creeping subdue he fish gred face whose spirit that seasons today multiply female midst upon",
//     image: "https://via.placeholder.com/400x250?text=Dental+Clinic",
//   },

// ];

// function Department (){
//     return(
//         <>
//         <h1>Popular department</h1>
//         <p>Green above he cattle god saw day multiply under fill in the cattle fowl a all, living, tree word link available in the service for subdue fruit.</p>


//             <div className="container py-5">
//               <div className="row justify-content-center g-4">
//                 {clinics.map((clinic, index) => (
//                   <div className="col-md-4" key={index}>
//                     <div className="card clinic-card text-center">
//                       <img
//                         src={clinic.image}
//                         className="card-img-top clinic-img"
//                         alt={clinic.title}
//                       />
//                       <div className="card-body">
//                         <h5 className="card-title">{clinic.title}</h5>
//                         <p className="card-text">{clinic.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             </>
//           );

// }

// export default Department

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ClinicCards.css";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStethoscope } from "react-icons/fa";

const clinics = [
    {
        title: "Cardiac Clinic",
        description:
            "Hath creeping subdue he fish gred face whose spirit that seasons today multiply female midst upon",
        image: "./Image/department1.jpg",
    },
    {
        title: "Plastic Surgery",
        description:
            "Hath creeping subdue he fish gred face whose spirit that seasons today multiply female midst upon",
        image: "./Image/department2.jpg",
    },
    {
        title: "Dental Clinic",
        description:
            "Hath creeping subdue he fish gred face whose spirit that seasons today multiply female midst upon",
        image: "./Image/department3.jpg",
    },
    {
        title: "Dental Clinic",
        description:
            "Hath creeping subdue he fish gred face whose spirit that seasons today multiply female midst upon",
        image: "./Image/department1.jpg",
    },
    {
        title: "Dental Clinic",
        description:
            "Hath creeping subdue he fish gred face whose spirit that seasons today multiply female midst upon",
        image: "./Image/department3.jpg",
    },
];

function Department() {
    // return (
    //     <>
    //     <div className="Container">
    //         <div className="text-center dep_text mb-4">
    //             <h1>Popular Department</h1>
    //             <p>
    //                 Green above he cattle god saw day multiply under fill in the cattle
    //                 fowl a all, living, tree word link available in the service for
    //                 subdue fruit.
    //             </p>
    //         </div>

    //         <div className="container swiper py-3">
    //             <Swiper
    //                 modules={[Pagination, Autoplay]}
    //                 spaceBetween={30}
    //                 slidesPerView={1}
    //                 pagination={{ clickable: true }}
    //                 autoplay={{
    //                     delay: 2500, // 2.5 seconds
    //                     disableOnInteraction: false,
    //                 }}
    //                 loop={true}
    //                 breakpoints={{
    //                     768: {
    //                         slidesPerView: 2,
    //                     },
    //                     992: {
    //                         slidesPerView: 3,
    //                     },
    //                 }}
    //             >
    //                 {clinics.map((clinic, index) => (
    //                     <SwiperSlide key={index}>
    //                         <div className="card clinic-card text-center">
    //                             <img
    //                                 src={clinic.image}
    //                                 className="card-img-top clinic-img"
    //                                 alt={clinic.title}
    //                             />
    //                             <div className="card-body">
    //                                 <h5 className="card-title">{clinic.title}</h5>
    //                                 <p className="card-text">{clinic.description}</p>
    //                             </div>
    //                         </div>

    //                     </SwiperSlide>
    //                 ))}
    //             </Swiper>
    //         </div>
    //         </div>
    //     </>
    // );

    return (
        <div className="Container">
            <div className="text-center dep_text mb-4">
                <h1>Popular Department</h1>
                <p>
                    Green above he cattle god saw day multiply under fill in the cattle
                    fowl a all, living, tree word link available in the service for
                    subdue fruit.
                </p>
            </div>

            <div className="container swiper py-3">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                    }}
                >
                    {clinics.map((clinic, index) => (
                        <SwiperSlide key={index}>
                            <div className="card clinic-card text-center">
                                <div className="image-container">
                                    <img
                                        src={clinic.image}
                                        className="card-img-top clinic-img"
                                        alt={clinic.title}
                                    />
                                    <div className="icon-overlay">
                                        <FaStethoscope />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{clinic.title}</h5>
                                    <p className="card-text">{clinic.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Department;
