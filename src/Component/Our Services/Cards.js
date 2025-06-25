import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cards.scss'

const CardRow = () => {
    return (
        <div className="container ">
            <div className="row card_main">
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src="./Image/feature1.png" className="card-img-top" alt="Card 1" />
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
        </div>
    );
};

export default CardRow;
