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
    // <div
    //   id="carouselExampleIndicators"
    //   className="carousel slide"
    //   data-bs-ride="carousel"

    // >
    //   <div className="carousel-indicators " style={{marginLeft:"9%",position:"relative",left:0, zIndex:"1000"}} >
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide-to="0"
    //       className="active"
    //       aria-current="true"
    //       aria-label="Slide 1"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide-to="1"
    //       aria-label="Slide 2"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide-to="2"
    //       aria-label="Slide 3"
    //     ></button>
    //   </div>

    //   <div className="carousel-inner" style={{position:"relative"}}>
    //     {CarouselData.map((item, index) => {
    //       const imageUrl = imageSrc[item.carouselimgKey]; // ✅ dynamically fetch the correct image

    //       return (
    //         <div
    //           className={`carousel-item ${index === 0 ? "active" : ""}`}
    //           key={item.id}
    //         >
    //           <div className="container container-lg">
    //             <div className="row align-items-center">
    //               <div className="col-xl-6 col-md-6 col-sm-12">
    //                 <div
    //                   className="transformative-images mb-md-5 mb-sm-0  aos-item "
    //                   data-aos="zoom-in"
    //                 >
    //                   <img src={imageUrl} alt="" className="img-fluid" />
    //                 </div>
    //               </div>
    //               <div className="col-xl-6 col-md-6 col-sm-12 ">
    //                 <div
    //                   className="section-title list-style aos-item"
    //                   data-aos="zoom-in-left"
    //                 >
    //                   {/* <img src={carouselIcon} alt="" /> */}
    //                   <h3 className="carousel-h3">{item.subhead}</h3>
    //                   <p className="carousel-p">{item.paragraph}</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
//     <div
//     id="carouselExampleIndicators"
//     className="carousel slide"
//     data-bs-ride="carousel"
// >
//     {/* 1. Removed marginLeft:"9%" which can conflict.
//       2. CRITICAL: Added transform: "none" to override Bootstrap's default 
//          left: 50% and transform: translateX(-50%) centering.
//       3. Set left: "9%" to push it to the desired position.
//       4. Set right: "auto" to ensure horizontal alignment starts from the left.
//     */}
//     <div
//         className="carousel-indicators"
//         style={{
//             position: "absolute",
//             left: "9%",
//             right: "auto", 
//             transform: "none", // Stops the horizontal centering calculation
//             margin: 0, // Resets any default margin interference
//             justifyContent: "flex-start", // Ensures buttons start left-aligned
//         }}
//     >
//         <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="0"
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//         ></button>
//         <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//         ></button>
//         <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="2"
//             aria-label="Slide 3"
//         ></button>
//     </div>

//     <div className="carousel-inner" style={{ position: "relative" }}>
//         {CarouselData.map((item, index) => {
//             const imageUrl = imageSrc[item.carouselimgKey];

//             return (
//                 <div
//                     className={`carousel-item ${index === 0 ? "active" : ""}`}
//                     key={item.id}
//                 >
//                     <div className="container container-lg">
//                         <div className="row align-items-center">
//                             <div className="col-xl-6 col-md-6 col-sm-12">
//                                 <div
//                                     className="transformative-images mb-md-5 mb-sm-0 aos-item "
//                                     data-aos="zoom-in"
//                                 >
//                                     <img src={imageUrl} alt="" className="img-fluid" />
//                                 </div>
//                             </div>
//                             <div className="col-xl-6 col-md-6 col-sm-12 ">
//                                 <div
//                                     className="section-title list-style aos-item"
//                                     data-aos="zoom-in-left"
//                                 >
//                                     <h3 className="carousel-h3">{item.subhead}</h3>
//                                     <p className="carousel-p">{item.paragraph}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             );
//         })}
//     </div>
// </div>
<div
            id="carouselExampleIndicators"
            className="carousel carousel-parent slide bg-gray-100 p-8 rounded-xl "
            data-bs-ride="carousel"
            style={{ position: 'relative', minHeight: '410px' }}
        >
            
            {/* CRITICAL FIX 2: Indicators with absolute positioning and vertical/horizontal lock */}
            <div
                className="carousel-indicators"
                style={{
                    position: "absolute",
                    
                    // FIX: Locks vertical position 1.5rem from the bottom of the main container
                    bottom: '1.5rem', 
                    
                    // FIX: Overrides Bootstrap's default centering transform
                    marginLeft: "9%",
                    // right: "auto", 
                    transform: "none", 
                    margin: 0, 
                    justifyContent: "flex-start",
                    zIndex: 10,
                }}
            >
                {CarouselData.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={index.toString()}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            <div className="carousel-inner" style={{ position: "relative" }}>
                {CarouselData.map((item, index) => {
                    const imageUrl = imageSrc[item.carouselimgKey];

                    return (
                        <div
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                            key={item.id}
                        >
                            <div className="container container-lg">
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-md-6 col-sm-12">
                                        <div
                                            className="transformative-images mb-md-5 mb-sm-0 aos-item"
                                            data-aos="zoom-in"
                                        >
                                            <img src={imageUrl} alt="" className="img-fluid rounded-lg shadow-md" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6 col-sm-12 ">
                                        <div
                                            className="section-title list-style aos-item"
                                            data-aos="zoom-in-left"
                                        >
                                            <h3 className="carousel-h3 text-2xl font-bold mb-3">{item.subhead}</h3>
                                            <p className="carousel-p text-gray-600">{item.paragraph}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            {/* Optional: Add prev/next controls if you need them */}
        </div>
  );
};

export default OurStoryCarousel;
