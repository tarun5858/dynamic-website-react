import React from "react";
import { bannerImg } from "../components/Imagepath";
import LargeBlueCta from "../components/LargeBlueCta";
import VideoPlayer from "../components/VideoPlayer";
import Carousel from "../components/Carousel";
import TextImageCard from "../components/TextImageCard";
import componentsData from "../data/componentsData";
import { benefitimg1, benefitimg2, benefitimg3,whatweoffer,perfectplace,worriedabout,experienceliving } from "../components/Imagepath";
import TextImageSection from "../components/TextImageSection";
import TextImageData from "../data/TextImageData";
import PreFooter from "../components/PreFooter";
const Home = () => {
  const cardData = componentsData;
  const imageSrc = {
    benefitimg1,
    benefitimg2,
    benefitimg3,
    whatweoffer,perfectplace,worriedabout,experienceliving
  };

  const data = TextImageData;


  return (
    <>
      <section className=" section-padding-home text-md-start">
        <div className="single-slide">
          <div className="container container-lg">
            <div className="row home-text-img-container">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="hero-contents pe-lg-3 ">
                  <h6>&nbsp;</h6>
                  <h1 className="fs-lg">Redefining homeownership</h1>
                  <p className="sub-head-home">
                    A smarter way to rent, a simpler way to own.
                  </p>

                  {/* <a
                href="#"
                className="theme-btn btn-radius join-our-waitlist me-sm-4 mt-4 speak-to-expert-btn"
                data-animation-in=""
                data-delay-in=""
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Join our waitlist
              </a> */}
                  <LargeBlueCta text="Join our waitlist"></LargeBlueCta>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <img src={bannerImg} alt="" width="100%" height="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" section-padding text-md-start">
        <div className="container container-lg">
          <div
            className="section-title text-center aos-item"
            data-aos="flip-left"
          >
            <h2 className="text-center">An alternate path to homeownership</h2>
          </div>
          <div className="row my-5">
            <div className="col-12 d-flex justify-content-center text-center">
              <VideoPlayer></VideoPlayer>
              <div className="cta-parent">
                <LargeBlueCta text="Learn how"></LargeBlueCta>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-wrapper1 section-padding container">
        <div className="container container-lg">
          <h2 className="line5 text-center">
            <b>Hear it from the Prehomers</b>
          </h2>
          <Carousel></Carousel>

          <div className="cta-parent d-flex justify-content-center">
            <LargeBlueCta text="Learn how"></LargeBlueCta>
          </div>
        </div>
      </section>

      <section className="prehome-benefit-sec">
        <div className="container container-lg">
          <div className=" align-items-center">
            <div className="row">
              <div className="col-12 mb-md-3 mb-sm-0  ">
                <div className=" text-center aos-item" data-aos="fade-down">
                  <h2 className="sec-title-h2">The Prehome Benefit</h2>
                  <div className="row d-flex">
                    {cardData.map((data, i) => (
                      <TextImageCard
                        src={imageSrc[data.imageKey]}
                        key={i}
                        subheading={data.subheading}
                        paragraph={data.paragraph}
                      ></TextImageCard>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-wrapper ">
        <div className="container container-lg">
          <div className="row align-items-center  column-reverse ">
            <div
              className="col-xl-12 col-md-5 ps-xl-4 aos-item getpre-cont text-left"
              data-aos="fade-up"
            >
              <div
                className="section-title list-style  "
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
              >
              {data.map((value,i) => 
                <TextImageSection src={imageSrc[value.imgkey]} key={i} data={value} reverse={value.reverse === "true"} />
              )}

              </div>
            </div>
          </div>
        </div>
      </section>

 <section className="why-choice-us">

      <PreFooter></PreFooter>
 </section>
    </>
  );
};
export default Home;
