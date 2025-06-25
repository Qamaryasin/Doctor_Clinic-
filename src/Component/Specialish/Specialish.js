import React from "react";
import './specialish.scss'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io5";
export const Specialish = () => {
    return (
        <>
            <h1>Our specialish</h1>
            <p>Green above he cattle god saw day multiply under fill in the cattle fowl a all, living, <br /> tree word link available in the service for subdue fruit.</p>

            {/* <div className="container ">
            <div className="row card_main">
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src="./Image/doctor1.jpg" className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title">advance technology</h5>
                            <p className="card-text">Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src="./Image/feature2.png" className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title">comfortable place
                            </h5>
                            <p className="card-text">Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src="./Image/feature3.png" className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title">quality equipment</h5>
                            <p className="card-text">Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src="./Image/feature4.png" className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title">friendly staff</h5>
                            <p className="card-text">Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

            <div className="container py-5">
                <div className="row text-center">
                    {[
                        {
                            name: 'ETHEL DAVIS',
                            title: 'SR. FACULTY DATA SCIENCE',
                            image: './Image/doctor1.jpg',
                        },
                        {
                            name: 'DAND MORIES',
                            title: 'SR. FACULTY PLASTIC SURGERY',
                            image: './Image/doctor2.jpg',
                            highlight: true,
                        },
                        {
                            name: 'ALIGN BOARD',
                            title: 'SR. FACULTY DATA SCIENCE',
                            image: './Image/doctor3.jpg',
                        },
                        {
                            name: 'JESON LIMIT',
                            title: 'SR. FACULTY PLASTIC SURGERY',
                            image: './Image/doctor4.jpg',
                        },
                    ].map((doc, index) => (
                        <div className="col-lg-3 col-md-6 mb-4" key={index}>
                            <div className="card border-0 shadow-sm no-border-radius"
                             style={{ backgroundColor: 'transparent' }}
                            >
                                <img src={doc.image} className="card-img-top-spec" alt={doc.name} />
                                <div className={`py-3 text-black card-header-info`}>
                                    <h5 className="fw-bold mb-0">{doc.name}</h5>
                                    <small>{doc.title}</small>
                                </div>
                                <div className="card-body">
                                    <p className="card-text text-muted">
                                        If you are looking at blank cassettes on the web, you may be very confused at the.
                                    </p>
                                    <div className="d-flex justify-content-center gap-3">
                                        <FaFacebookF className="icon"/>
                                        <FaTwitter className="icon"/>
                                        <FaLinkedinIn className="icon"/>
                                        <IoLogoPinterest className="icon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}