import React from "react";
import TextImageCard from "../components/TextImageCard";
import componentsData from "../data/componentsData";
import { benefitimg1, benefitimg2, benefitimg3 } from "../components/Imagepath";
import VideoPlayer from "../components/VideoPlayer";
import TextImageSection from "../components/TextImageSection";
import PreFooter from "../components/PreFooter";
import Carousel from "../components/Carousel";
import InputField from "../components/InputFiled";
import CalculatorCard from "../components/CalculatorCard";
import TextImageData from "../data/TextImageData";
import { image1 } from "../components/Imagepath";
const ComponentsParent = () => {
    const cardData = componentsData;
     const imageSrc = {
    benefitimg1,
    benefitimg2,
    benefitimg3,
  };

  const data = TextImageData;

  return (
    <>
      <div className="container " style={{height:"100vh"}}>
        <div className="row d-flex">
            {cardData.map((data,i)=>
            
          <TextImageCard src={imageSrc[data.imageKey]} key={i} subheading={data.subheading} paragraph={data.paragraph}></TextImageCard>
            )}
          {/* <TextImageCard ></TextImageCard>
          <TextImageCard ></TextImageCard> */}
        </div>
      </div>

      <div className="container mt-5 mb-5  d-flex justify-content-center">
<VideoPlayer></VideoPlayer>
      </div>

      <div className="container mt-5 mb-5  d-flex justify-content-center">
<TextImageSection data={data} image={image1}   />
      </div>


      <div className="container mt-5 mb-5  d-flex justify-content-center">
<Carousel></Carousel>
      </div>


      <div className="container mt-5 mb-5  d-flex justify-content-center">
<InputField></InputField>
      </div>


      <div className="container mt-5 mb-5">

<CalculatorCard></CalculatorCard>
      </div>

      


<PreFooter></PreFooter>
    </>
  );
};
export default ComponentsParent;
