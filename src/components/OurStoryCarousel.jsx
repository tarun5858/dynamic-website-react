import React from "react";
import {
  carouselImg1,
  carouselImg2,
  carouselImg3,
  //   carouselIcon
} from "../components/Imagepath";
import CarouselData from "../data/CarouselData";

const OurStoryCarousel = () => {
  const data = CarouselData;
  const imageSrc = { carouselImg1, carouselImg2, carouselImg3 };

  console.log(data);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators " style={{marginLeft:"9%"}}>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        {CarouselData.map((item, index) => {
          const imageUrl = imageSrc[item.carouselimgKey]; // ✅ dynamically fetch the correct image

          return (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={item.id}
            >
              <div className="container container-lg">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-md-6 col-sm-12">
                    <div
                      className="transformative-images mb-md-5 mb-sm-0  aos-item "
                      data-aos="zoom-in"
                    >
                      <img src={imageUrl} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-6 col-sm-12 ">
                    <div
                      className="section-title list-style aos-item"
                      data-aos="zoom-in-left"
                    >
                      {/* <img src={carouselIcon} alt="" /> */}
                      <h3 className="carousel-h3">{item.subhead}</h3>
                      <p className="carousel-p">{item.paragraph}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurStoryCarousel;
