import LargeBlueCta from "./LargeBlueCta";
// import { listImage } from "./Imagepath";

const TextImageSection = ({ data, src, reverse = false }) => {
  return (
    <div className="container container-lg">
          <div className={`row align-items-center flex-column-reverse flex-md-row mt-5 mb-5 ${reverse ? "flex-md-row-reverse" : ""}`}>
        <div
          className="col-xl-6 col-md-5 ps-xl-4 aos-item getpre-cont"
          data-aos="fade-up"
        >
          <div
            className="section-title list-style  "
            data-wow-duration="1500ms"
            data-wow-delay="00ms"
          >
            <h2 className="desktop-show">{data.heading}</h2>

            <p className="pb-3 text-justify">{data.paragraph}</p>

            {data.listitems?.map((item, index) => (
              <div key={index} className="mx-3">
                <ul className="blog-text-ul">
                  {item.point.map((benefit, i) => ( 
                  <li key={i}> <b>{item.title}</b> {benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <LargeBlueCta text="Get prequalified"></LargeBlueCta>
        </div>
     
      <div className="col-xl-6 col-md-6  aos-item section-title ">
        <h2 className="mobile-show">{data.heading}</h2>
        <div className="about-images mb-md-4 mb-sm-0  ">
          <img src={src} alt="" />
        </div>
      </div>
       </div>
    </div>
  );
};
export default TextImageSection;
