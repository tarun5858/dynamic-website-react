import React from "react";
import CalculatorData from "../data/CalculatorData";
import {
  calculatorImage1,
  calculatorImage2,
  calculatorImage3,
} from "./Imagepath";

const CalculatorCard = () => {
  const datas = CalculatorData;

  const imageSrc = { calculatorImage1, calculatorImage2, calculatorImage3 };

  return (
        <div className="row  mt-3">
          {datas.map((data) => {
            const imageUrl = imageSrc[data.imgKey];
            return (
              <>
                <div
                  className="col-xl-4 col-lg-4 col-md-12 col-12 grid-item calculator-card"
                  style={{ backgroundColor: "#FFF6DF" }}
                >
                  <div className="icon ">
                    <img src={imageUrl} alt="" width="52px" />
                  </div>

                  <h1 className="calculator-text">{data.heading}</h1>

                  <div className=" calculator-p">
                    <p>{data.details}</p>
                    <a
                      href="https://prehome.in/monthly-budget-calculator"
                      style={{
                        textDecoration: "underline",
                        color: "#0086AD",
                      }}
                    >
                      {data.ctatext}
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
  );
};
export default CalculatorCard;
