// import React from "react";

// export const Main = () => {
//     return (
//         <>
//             <img src="/Image/banner-bg.jpg" alt="Banner" className="img-fluid" />

//         </>
//     )
// }
import React from "react";
import "./index.scss"; // Import the CSS file

export const Main = () => {
    return (
        <div className="banner-container">
            <img src="/Image/banner-bg.jpg" alt="Banner" className="banner-image" />
            <div className="banner-text">
                <p className="small-heading">Caring for better life</p>
                <h1>Leading the way in<br />medical excellence</h1>
                <p className="description">
                    Earth greater grass for good. Place for divide evening yielding them that.
                    Creeping beginning over gathered brought.
                </p>
                <button className="appointment-btn">TAKE APPOINTMENT</button>
            </div>
        </div>
    );
};
