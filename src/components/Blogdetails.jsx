import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import RelatedBlogCards from "./RelatedBlogCards";
import {
  blogImage1,
  blogImage2,
  blogImage3,
  blogImage4,
  blogImage5,
  blogImage6,
  blogImage7,
  blogDetailImage1,
  blogDetailImage2,
  blogDetailImage3,
  blogDetailImage4,
  blogDetailImage5,
  blogDetailImage7,
  
blogImagestrategies,
blogImagelongterm,
blogImagedownpayments,
blogImagerentbuy,
blogImageMitigating,
blogImageUnderCons,
blogImageHiddenValue,
blogImageAssessing,
blogImageFinancial,
blogImageFundamentals,
blogImageFinancialaspects,
blogImageHomeownership,
blogImageTruecost,
blogImageHiddencosts,
blogImageBeyond,
blogDetailBeyond,
blogDetailNavigating,
blogDetailNavigating2,
blogDetailThePower,
blogDetailUnderConstruction,
blogDetailFinancialImplications,
blogDetailMitigating,
blogDetailTheFundamentals,
blogDetailFinancialAspects,
blogDetailBuildingWealth,
blogDetailStrategies,
blogDetailTheHidden,
blogDetailAssessingPotential,
blogDetailTheTrueCost,
blogDetailHiddenCosts,
blogDetailBeyondthe,
} from "../components/Imagepath";

const Blogdetails = () => {
  const imageSrc = {
    blogImage1,
    blogImage2,
    blogImage3,
    blogImage4,
    blogImage5,
    blogImage6,
    blogImage7,
    blogDetailImage1,
    blogDetailImage2,
    blogDetailImage3,
    blogDetailImage4,
    blogDetailImage5,
    blogDetailImage7,
    
blogImagestrategies,
blogImagelongterm,
blogImagedownpayments,
blogImagerentbuy,
blogImageMitigating,
blogImageUnderCons,
blogImageHiddenValue,
blogImageAssessing,
blogImageFinancial,
blogImageFundamentals,
blogImageFinancialaspects,
blogImageHomeownership,
blogImageTruecost,
blogImageHiddencosts,
blogImageBeyond,
blogDetailBeyond,
blogDetailNavigating,
blogDetailNavigating2,
blogDetailThePower,
blogDetailUnderConstruction,
blogDetailFinancialImplications,
blogDetailMitigating,
blogDetailTheFundamentals,
blogDetailFinancialAspects,
blogDetailBuildingWealth,
blogDetailStrategies,
blogDetailTheHidden,
blogDetailAssessingPotential,
blogDetailTheTrueCost,
blogDetailHiddenCosts,
blogDetailBeyondthe,
  };

  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog from API
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/blogs/${id}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  // Sticky Sidebar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return <p>Loading blog...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!blog) return <p>No blog found.</p>;

  const imageUrl = imageSrc[blog.imageKey] || blog.imageUrl;
  const detailimageUrl = imageSrc[blog.detailImageKey] || blog.detailImageUrl;

  return (
    <div className="blog-detail">
      <div className="blogdetail-subhead">
        <div className="container">
          <h1 className="blog-head">{blog.heading}</h1>
          <div className="blog-date">
            <b>{blog.date} </b> {blog.readTime} min read
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row d-flex">
          <div className="blog-text col-sm-12 col-md-6 col-lg-8">
            {imageUrl && (
              <img
                src={imageUrl}
                alt={blog.title}
                className="blog-detail-image img-fluid"
              />
            )}

            <h4>
              <b>{blog.subheading}</b>
            </h4>
            <h4>
              <b>Introduction:</b>
            </h4>
            <p>{blog.introduction}</p>

            {/* Dynamic Subtitle & Content Rendering */}
            {Object.keys(blog)
  .filter((key) => key.startsWith("subtitle"))
  .sort((a, b) => {
    const numA = parseInt(a.replace("subtitle", "")) || 0;
    const numB = parseInt(b.replace("subtitle", "")) || 0;
    return numA - numB;
  })
  .map((subtitleKey) => {
    const num = subtitleKey.replace("subtitle", "") || "";
    const subtitle = blog[subtitleKey];
    const subttileHead = blog[`subttileHead${num}`];

    if (!subtitle && !subttileHead) return null;

    return (
      <div key={subtitleKey}>
        {subtitle && (
          <h4>
            <b>{subtitle}</b>
          </h4>
        )}
        {Array.isArray(subttileHead) &&
          subttileHead.map((scheme, index) => (
            <div key={index} className="mx-3">
              {scheme.name && (
                <h4>
                  <b>{scheme.name}</b>
                </h4>
              )}
              <ul className="blog-text-ul">
                {scheme.benefits?.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    );
  })}



            {detailimageUrl && (
              <img src={detailimageUrl} alt="" className="img-fluid" />
            )}

            {/* Extra Sections */}
            {blog.outcome && (
              <>
                <li>
                  <b>Outcome:</b> {blog.outcome}
                </li>
                <br />
              </>
            )}
           
            {blog.lesson && (
              <>
                <li>
                  <b>Lesson:</b> {blog.lesson}
                </li>
                <br />
              </>
            )}
             {blog.outcome1 && (
              <>
                <li>
                  <b>Outcome:</b> {blog.outcome1}
                </li>
                <br />
              </>
            )}
            {blog.lesson1 && (
              <>
                <li>
                  <b>Lesson:</b> {blog.lesson1}
                </li>
                <br />
              </>
            )}
            {blog.outcome2 && (
              <>
                <li>
                  <b>Outcome:</b> {blog.outcome2}
                </li>
                <br />
              </>
            )}
            {blog.lesson2 && (
              <>
                <li>
                  <b>Lesson:</b> {blog.lesson2}
                </li>
                <br />
              </>
            )}

            {/* Conclusion */}
            <h4>
              <b>Conclusion:</b>
            </h4>
            {blog.conclusion && <p>{blog.conclusion}</p>}
            {blog.conclusion1 && <p>{blog.conclusion1}</p>}
            {blog.conclusion2 && <p>{blog.conclusion2}</p>}

            {blog.nextSeries && (
              <li>
                <b>Next in Our Series:</b> {blog.nextSeries}
              </li>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-sm-12 col-md-6 col-lg-4 sticky-blogs">
            <aside
              id="sidebar"
              className={`sidebar ${isSticky ? "sticky" : ""}`}
            >
              <h4>Related blogs</h4>
              <RelatedBlogCards
                currentHeading={blog.heading}
                currentTags={blog.blogTags}
                currentId={blog._id}
                time="3 min read"
              />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogdetails;
