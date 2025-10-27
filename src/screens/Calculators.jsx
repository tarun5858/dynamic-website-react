import CalculatorCard from "../components/CalculatorCard";
import LargeCtaRoutes from "../components/LargeCtaRoutes";
import { useState,useEffect } from "react";

import {
  prefooterDesktop,
  prefooterMobile
} from "../components/Imagepath";


const Calculators = () => {



       const [bgImage, setBgImage] = useState(prefooterDesktop);
    
       useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setBgImage(prefooterMobile);
          } else {
            setBgImage(prefooterDesktop);
          }
        };
           handleResize(); // initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return (
        <>

         <section className="about-wrapper pt-2 ">
        <div className="container container-lg">
            <div className="row align-items-center">
                <div className="col-12 col-md-12">
                    <div className=" list-style wow">
                        <h2 className="calculator-subhead">Explore our calculators designed to simplify your journey to ownership</h2>

                    </div>

                </div>
            </div>
        </div>
    </section>
    <section className="">
        <div className="container">
                <CalculatorCard></CalculatorCard>
        </div>
       </section>

       <section className="pre-footer" >
        <div className="container pre-footer-container text-center" style={{backgroundImage: `url(${bgImage})`, height: "228px",width: "83%",backgroundRepeat:"no-repeat"}}>
            <h1 >Learn how we unlock your path to <br/> homeownership.</h1>
            <div className="header-right-element d-flex align-items-end justify-content-center">
                {/* <a href="" className="theme-btn-navbar btn-radius animated" data-animation-in="fadeInRight"
                    data-delay-in="0.9" data-bs-toggle="modal" data-bs-target="" style={{width: "272px", height: "62px"}}>Learn more
                    </a> */}
                  <LargeCtaRoutes text="Learn more"  to="/blog" style={{width: "272px",height: "62px",fontSize:"16px"}}></LargeCtaRoutes>
            </div>
        </div>
    </section>

        </>
    )
}
export default Calculators;