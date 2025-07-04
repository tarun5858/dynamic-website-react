import React from "react";
import { useState, useEffect } from "react";

import VideoPlayer from "../components/VideoPlayer";
import HowitworksTextImg from "../components/HowitworksTextImg";
import HowitworksData from "../data/HowitworksData";
import PreFooter from "../components/PreFooter";
import {
    containerImg1,
    containerImg2,
  cardnumber1,
  cardnumber2,
  cardnumber3,
  cardnumber4,
  cardnumber5,
  cardicon1,
  cardicon2,
  cardicon3,
  cardicon4,
  cardicon5,
  logo,
  containerImg1mobile,
  containerImg2mobile
} from "../components/Imagepath";
const HowItWorks = () => {
  const imageSrc = {
    containerImg1,
    containerImg2,
    cardnumber1,
    cardnumber2,
    cardnumber3,
    cardnumber4,
    cardnumber5,
    cardicon1,
    cardicon2,
    cardicon3,
    cardicon4,
    cardicon5,
    logo
  };

    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // run on load
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <section className="about-wrapper ">
        <h2 className="desktop-text">
          Your path to homeownership with Prehome
        </h2>
        <h2 className="mobile-text">Your path to homeownership with Prehome</h2>
        <div className="container container-lg">
          <div className="row my-5">
            <div className="col-12 d-flex justify-content-center text-center">
              <VideoPlayer></VideoPlayer>
            </div>
          </div>
        </div>
      </section>

      <section className=" about-wrapper container mb-50 how-works-margin">
        <div className="container container-lg">
{HowitworksData.map((value, i) => {
    const imgSrc =
          i % 2 === 0
            ? isMobile
              ? containerImg1mobile
              : containerImg1
            : isMobile
            ? containerImg2mobile
            : containerImg2;
      return(   
  <div key={i}>
    {i % 2 === 0 ? (
      <div className="row">
        <div className="col-lg-12 text-center">
          <img src={imgSrc} alt="Top" />
        </div>
      </div>
    ) : (
      <div className="row">
        <div className="col-lg-12 text-center">
          <img src={imgSrc} alt="Bottom" />
        </div>
      </div>
    )}

    <HowitworksTextImg
      data={value}
      srcNumber={imageSrc[value.imgkeyNumber]}
      srcIcon={imageSrc[value.imgkeyIcon]}
      reverse={value.reverse === "true"}
    />
  </div>
  )   
})}


  </div>
        {/* </div> */}
      </section>


      <PreFooter></PreFooter>
    </>
  );
};
export default HowItWorks;
