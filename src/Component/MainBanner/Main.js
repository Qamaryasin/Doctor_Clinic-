// import React from "react";
// import "./index.scss"; // Import the CSS file

// export const Main = () => {
//     return (
//         <div className="banner-container">
//             <img src="/Image/banner-bg.jpg" alt="Banner" className="banner-image" />
//             <div className="banner-text">
//                 <p className="small-heading">Caring for better life</p>
//                 <h1>Leading the way in<br />medical excellence</h1>
//                 <p className="description">
//                     Earth greater grass for good. Place for divide evening yielding them that.
//                     Creeping beginning over gathered brought.
//                 </p>
//                 <button className="appointment-btn">TAKE APPOINTMENT</button>
//             </div>
//         </div>
//     );
// };

// import React, { useState } from "react";
// import "./index.scss";
// import { Modal, Button, Form } from "react-bootstrap";

// export const Main = () => {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <div className="banner-container">
//             <img src="/Image/banner-bg.jpg" alt="Banner" className="banner-image" />
//             <div className="banner-text">
//                 <p className="small-heading">Caring for better life</p>
//                 <h1>
//                     Leading the way in<br />medical excellence
//                 </h1>
//                 <p className="description">
//                     Earth greater grass for good. Place for divide evening yielding them that.
//                     Creeping beginning over gathered brought.
//                 </p>
//                 <button className="appointment-btn" onClick={handleShow}>
//                     TAKE APPOINTMENT
//                 </button>
//             </div>

//             {/* Bootstrap Modal */}
//             <Modal show={show} onHide={handleClose} centered>
//                 <Modal.Header closeButton></Modal.Header>
//                 <Modal.Body>
//                     <Form>
//                         <Form.Group controlId="formUsername">
//                             <Form.Label>Username</Form.Label>
//                             <Form.Control type="text" placeholder="Enter username" />
//                         </Form.Group>

//                         <Form.Group controlId="formPassword" className="mt-3">
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control type="password" placeholder="Password" />
//                         </Form.Group>

//                         {/* Extra Options */}
//                         <div className="d-flex justify-content-between mt-3">
//                             <a href="#" style={{ fontSize: '14px' }}>Create new user</a>
//                             <a href="#" style={{ fontSize: '14px' }}>Forgot password?</a>
//                         </div>

//                         {/* Login Button at Bottom */}
//                         <div className="d-grid mt-4">
//                             <Button variant="primary" size="lg">
//                                 Login
//                             </Button>
//                         </div>
//                     </Form>
//                 </Modal.Body>
//             </Modal>

//         </div>
//     );
// };



// import React, { useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";
// import "./index.scss";

// export const Main = () => {
//   const [showLogin, setShowLogin] = useState(false);
//   const [showRegister, setShowRegister] = useState(false);

//   const handleLoginClose = () => setShowLogin(false);
//   const handleLoginShow = () => setShowLogin(true);

//   const handleRegisterClose = () => setShowRegister(false);
//   const handleRegisterShow = () => {
//     setShowLogin(false); // Close login modal
//     setShowRegister(true); // Open register modal
//   };

//   return (
//     <div className="banner-container">
//       <img src="/Image/banner-bg.jpg" alt="Banner" className="banner-image" />
//       <div className="banner-text">
//         <p className="small-heading">Caring for better life</p>
//         <h1>
//           Leading the way in<br />medical excellence
//         </h1>
//         <p className="description">
//           Earth greater grass for good. Place for divide evening yielding them that.
//           Creeping beginning over gathered brought.
//         </p>
//         <button className="appointment-btn" onClick={handleLoginShow}>
//           TAKE APPOINTMENT
//         </button>
//       </div>

//       {/* Login Modal */}
//       <Modal show={showLogin} onHide={handleLoginClose} centered>
//         <Modal.Header closeButton />
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formUsername">
//               <Form.Label>Username</Form.Label>
//               <Form.Control type="text" placeholder="Enter username" />
//             </Form.Group>

//             <Form.Group controlId="formPassword" className="mt-3">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" placeholder="Password" />
//             </Form.Group>

//             <div className="d-flex justify-content-between mt-3">
//               <a href="#" onClick={handleRegisterShow} style={{ fontSize: "14px" }}>
//                 Create new user
//               </a>
//               <a href="#" style={{ fontSize: "14px" }}>
//                 Forgot password?
//               </a>
//             </div>

//             <div className="d-grid mt-4">
//               <Button variant="primary" size="lg">
//                 Login
//               </Button>
//             </div>
//           </Form>
//         </Modal.Body>
//       </Modal>

//       {/* Register Modal */}
//       <Modal show={showRegister} onHide={handleRegisterClose} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Create New User</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="registerUsername">
//               <Form.Label>Username</Form.Label>
//               <Form.Control type="text" placeholder="Enter username" />
//             </Form.Group>

//             <Form.Group controlId="registerEmail" className="mt-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" placeholder="Enter email" />
//             </Form.Group>

//             <Form.Group controlId="registerPassword" className="mt-3">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" placeholder="Enter password" />
//             </Form.Group>

//             <div className="d-grid mt-4">
//               <Button variant="success" size="lg">
//                 Create Account
//               </Button>
//             </div>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./index.scss";

export const Main = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showForgot, setShowForgot] = useState(false);

    // Modal controls
    const handleLoginClose = () => setShowLogin(false);
    const handleRegisterClose = () => setShowRegister(false);
    const handleForgotClose = () => setShowForgot(false);

    const handleLoginShow = () => setShowLogin(true);
    const handleRegisterShow = () => {
        setShowLogin(false);
        setShowRegister(true);
    };
    const handleForgotShow = () => {
        setShowLogin(false);
        setShowForgot(true);
    };

    return (
        <div className="banner-container">
            <img src="/Image/banner-bg.jpg" alt="Banner" className="banner-image" />
            <div className="banner-text">
                <p className="small-heading">Caring for better life</p>
                <h1>
                    Leading the way in<br />medical excellence
                </h1>
                <p className="description">
                    Earth greater grass for good. Place for divide evening yielding them that.
                    Creeping beginning over gathered brought.
                </p>
                <button className="appointment-btn" onClick={handleLoginShow}>
                    TAKE APPOINTMENT
                </button>
            </div>

            {/* Login Modal */}
            <Modal show={showLogin} onHide={handleLoginClose} centered>
                <Modal.Body className="modal-style">
                    <h4 className="text-center mb-4">Welcome Back</h4>
                    <Form>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>

                        <div className="d-flex justify-content-between mt-3">
                            <a href="#" onClick={handleRegisterShow} className="form-link">
                                Create account
                            </a>
                            <a href="#" onClick={handleForgotShow} className="form-link">
                                Forgot password?
                            </a>
                        </div>

                        <div className="d-grid mt-4">
                            <Button variant="primary" size="lg">
                                Login
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Register Modal */}
            <Modal show={showRegister} onHide={handleRegisterClose} centered>
                <Modal.Body className="modal-style">
                    <h4 className="text-center mb-4">Create Your Account</h4>
                    <Form>
                        <Form.Group controlId="registerUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group controlId="registerEmail" className="mt-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="registerPassword" className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>

                        <div className="d-grid mt-4">
                            <Button variant="success" size="lg">
                                Create Account
                            </Button>
                        </div>

                        <div className="text-center mt-3">
                            <p className="form-link" onClick={() => {
                                handleRegisterClose();
                                handleLoginShow();
                            }}>
                                Already have an account? <strong>Login</strong>
                            </p>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Forgot Password Modal */}
            <Modal show={showForgot} onHide={handleForgotClose} centered>
                <Modal.Body className="modal-style">
                    <h4 className="text-center mb-4">Forgot Password</h4>
                    <p className="text-muted text-center mb-3" style={{ fontSize: "15px" }}>
                        Enter your email address and we’ll send you instructions to reset your password.
                    </p>
                    <Form>
                        <Form.Group controlId="forgotEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <div className="d-grid mt-4">
                            <Button variant="warning" size="lg">
                                Send Reset Link
                            </Button>
                        </div>

                        <div className="text-center mt-3">
                            <p className="form-link" onClick={() => {
                                handleForgotClose();
                                handleLoginShow();
                            }}>
                                Back to <strong>Login</strong>
                            </p>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};
