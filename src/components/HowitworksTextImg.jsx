import LargeBlueCta from "./LargeBlueCta";
const howitworksTextImg = ({ data, srcNumber, srcIcon, reverse = false }) => {
  return (
    <div className="container container-lg">

      <div
       className={`row align-items-center ${
  reverse ? "flex-row-reverse flex-md-row-reverse" : "flex-row flex-md-row"
}`}


      >

        <div class="col-4 col-sm-4 col-md-5  col-lg-4 col-xl-4  ">
          <div
            class="about-images   mb-sm-0  aos-item section-title d-flex align-items-center"
            data-aos="zoom-in"
          >
            <div class="circle p-0 m-0">
              <img src={srcNumber} alt="" style={{height:"50px", width:"50px"}} />
              <img src={srcIcon} alt="" />
            </div>
          </div>
        </div>
        <div class="col-8 col-sm-8 col-md-7 col-lg-8 col-xl-6    ps-xl-5">
          <div
            class="section-title list-style aos-item "
            data-aos="zoom-in-left"
          >
            <h3 class="sec-title-h3">{data.heading}</h3>
            <p class="sec-title-p">{data.paragraph}</p>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-0"></div>
      </div>

    </div>
  );
};
export default howitworksTextImg;
