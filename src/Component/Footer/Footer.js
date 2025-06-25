// import React from "react";

// export const Footer = () => {
//     return (
//         <>
//             <div className="row">
//                 <div className="col-md-3">
//                     <h1>Tops Product</h1>
//                 </div>
//                 <div className="col-md-3">
//                     <h1>NewsLetter</h1>
//                 </div>
//                 <div className="col-md-3">
//                     <h1>Instagram Feed</h1>
//                 </div>
//             </div>
//         </>
//     )
// }

import React from "react";
import './footer.scss'; // Optional external CSS for further styling

export const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-5">
            <div className="container">
                <div className="row text-start text-md-left justify-content-between">
                    {/* Top Products */}
                    <div className="col-md-3 mb-4">
                        <h5 className="fw-bold">TOP PRODUCTS</h5>
                        <ul className="list-unstyled">
                            <li>Managed Website</li>
                            <li>Managed Reputation</li>
                            <li>Power Tools</li>
                            <li>Marketing Service</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold">NEWSLETTER</h5>
                        <p>You can trust us. we only send promo offers, not a single.</p>
                        <div className="d-flex">
                            <input type="email" className="form-control me-2" placeholder="Your email here" />
                            <button className="btn btn-primary">SUBSCRIBE NOW</button>
                        </div>
                    </div>

                    {/* Instagram Feed */}
<div className="col-md-3 mb-4">
    <h5 className="fw-bold">INSTAGRAM FEED</h5>
    <div className="d-flex flex-wrap gap-1">
        {Array.from({ length: 8 }).map((_, i) => (
            <img
                key={i}
                src={`/images/feed${i + 1}.jpg`}
                alt={`Feed ${i + 1}`}
                className="img-thumbnail p-0"
                style={{ width: "60px", height: "60px", objectFit: "cover" }}
            />
        ))}
    </div>
</div>


                    {/* Social Icons */}
                    {/* <div className="col-md-2 mb-4 d-flex align-items-start flex-column justify-content-end">
                        <div className="d-flex gap-2 mt-4">
                            <button className="btn btn-light btn-sm">
                                <i className="fab fa-facebook-f"></i>
                            </button>
                            <button className="btn btn-light btn-sm">
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button className="btn btn-light btn-sm">
                                <i className="fab fa-dribbble"></i>
                            </button>
                            <button className="btn btn-light btn-sm">
                                <i className="fab fa-behance"></i>
                            </button>
                        </div>
                    </div> */}
                </div>

                {/* Bottom Copyright */}
                <div className="text-center pt-4 mt-4 border-top border-light">
                    <small>Copyright ©2025 All rights reserved | This template is made with ♡ by Colorlib</small>
                </div>
            </div>
        </footer>
    );
};
