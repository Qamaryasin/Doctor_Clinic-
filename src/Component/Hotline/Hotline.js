import React from "react";
import './hotline.scss'; // we will use external CSS for better practice

export const Hotline = () => {
  return (
    <div className="hotline-container">
      <h1>Emergency hotline</h1>
      <span className="con_text">(+01) – 256 567 550</span>
      <p>We provide 24/7 customer support. Please feel free to contact us
      for emergency case.....</p>
    </div>
  )
}
