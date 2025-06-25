import React from "react";
import './news.scss'
import { IoArrowForwardOutline } from "react-icons/io5";
// Reusable CardItem Component
const CardItem = ({ image, title, text }) => (
  <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
    <div className="news-card">
      <img src={image} className="card-img-top-news" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <p className="Read_more">Read more <IoArrowForwardOutline className="arrow"/></p>
      </div>
    </div>
  </div>
);

// Main News Component
export const News = () => {
  const newsData = [
    {
      image: "./Image/news1.jpg",
      title: "chip to model coeliac disease",
      text: "Elementum libero hac leo integer. Risus hac part duriw feugiat litora cursus hendrerit bibendum per person on elit.Tempus inceptos posuere me."
    },
    {
      image: "./Image/news2.jpg",
      title: "Comfortable Place",
      text: "Creeping for female light years that lesser can't evening heaven isn't bearing tree appear"
    },
    {
      image: "./Image/news3.jpg",
      title: "Quality Equipment",
      text: "Creeping for female light years that lesser can't evening heaven isn't bearing tree appear"
    }
  ];

  return (
    <>
      <div className="news-section">
        <h1>Recent Medical News</h1>
        <p>
          Green above he cattle god saw day multiply under fill in the cattle fowl
          a all, living, tree word link available in the service for subdue fruit.
        </p>

        <div className="container">
          <div className="row card_main">
            {newsData.map((item, index) => (
              <CardItem
                key={index}
                image={item.image}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
