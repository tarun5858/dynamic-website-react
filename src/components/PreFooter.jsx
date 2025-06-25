import React from "react";
import { backgroundImage } from "./Imagepath";
import LargeBlueCta from "./LargeBlueCta";
const PreFooter = () => {
  return (
    <section
      className="why-choice-us section-padding bg-cover "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container container-lg">
        <div className="row ">
          <div
            className="col-12 cal-to-action pt-100 pb-100 aos-item footer-section text-left"
            data-aos="flip-up"
          >
            <h2 className="text-white pb-3">Stay Tuned!</h2>
            <p className="text-white pb-4 mt-10 mb-30">
              Be the first to know about our upcoming homes near you!!
            </p>

            <LargeBlueCta text="Join our waitlist"></LargeBlueCta>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PreFooter;
