import React from "react";
import './appointment.css'

export const Appointment = () => {
    return (
        <>
            <h1 className="text-center">Patients are saying</h1>
            <p className="text-center px-2 px-sm-4">
                Green above he cattle god saw day multiply under fill in the cattle fowl all,
                <br className="d-none d-sm-block" />
                living, tree word link available in the service for subdue fruit.
            </p>
            <div className="container my-5">
                <div className="row align-items-center">
                    {/* Left: Card */}
                    <div className="col-md-6 mb-4 mb-md-0 ">
                        <div className="p-4 bg-light Patient_card">
                            <img
                                src='./Image/patient1.png'
                                alt="Profile"
                                className="card_image mb-3"
                                width="100"
                                height="100"
                            />
                            <div className="text_app">
                                <h5 className="fw-bold">DAREN JHONSON</h5>
                                <p className="text-muted mb-2">Hp Specialist</p>
                                <p className="text-secondary mb-0">
                                    Elementum libero hac leo integer. Risus hac road parturient feugiat.
                                    Litora cursus hendrerit bib elit. Tempus inceptos posuere metus.
                                </p></div>
                        </div>
                        <div className="p-4 bg-light Patient_card">
                            <img
                                src='./Image/patient2.png'
                                alt="Profile"
                                className="card_image mb-3"
                                width="100"
                                height="100"
                            />
                            <div className="text_app">
                                <h5 className="fw-bold">DAREN JHONSON</h5>
                                <p className="text-muted mb-2">Hp Specialist</p>
                                <p className="text-secondary mb-0">
                                    Elementum libero hac leo integer. Risus hac road parturient feugiat.
                                    Litora cursus hendrerit bib elit. Tempus inceptos posuere metus.
                                </p></div>
                        </div>
                    </div>
                    {/* Right: Form */}
                    {/* <div className="col-md-6 mb-4 mb-md-0 position-relative"
                        style={{
                            backgroundImage: 'url("https://media.istockphoto.com/id/638647058/photo/we-offer-our-patients-premium-healthcare-here.jpg?s=612x612&w=0&k=20&c=pek5ehwgsZNPemeEh4bObQ1U5DRPEs0WHleosG-daa8=")', // Replace with your own image
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            padding: '20px',
                            position: 'relative',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(to right top, rgba(21, 228, 253, 0.9), rgba(36, 76, 253, 0.9))',
                            }}
                        ></div>

                        <div className="position-relative form_box" style={{ zIndex: 1 }}>
                            <form>
                                <h4 className="mb-4 text-center">Appointment Now</h4>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        className="form-control"
                                        rows="4"
                                        placeholder="Write your message"
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div> */}
                    <div
                        className="col-md-6 mb-4 mb-md-0 position-relative"
                        style={{
                            backgroundImage: 'url("https://media.istockphoto.com/id/638647058/photo/we-offer-our-patients-premium-healthcare-here.jpg?s=612x612&w=0&k=20&c=pek5ehwgsZNPemeEh4bObQ1U5DRPEs0WHleosG-daa8=")',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            minHeight: '400px',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(to right top, rgba(21, 228, 253, 0.9), rgba(36, 76, 253, 0.9))',
                            }}
                        ></div>
                        <div className="position-relative form_box">
                            <div className="appointment-form w-100" style={{ maxWidth: '500px', zIndex: 1 }}>
                                <form>
                                    <h4 className="mb-4 mt-4 text-center text-white text-uppercase">Appointment Now</h4>

                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Name" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="tEXT" className="form-control" placeholder="Date" />
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="form-control" rows="4" placeholder="Write your message"></textarea>
                                    </div>
                                    <button type="submit" className="btn_primary mb-4">
                                        Appointment Now</button>
                                </form>
                            </div></div>
                    </div>
                </div>
            </div>
        </>
    )
}