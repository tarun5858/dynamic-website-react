import BlogData from "../data/BlogData";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  };

  const { id } = useParams();
  const blogs = BlogData;
  const blog = blogs.find((b) => String(b.id) === String(id));

  const imageUrl = imageSrc[blog.imageKey];

  const detailimageUrl = imageSrc[blog.detailImageKey];

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="blog-detail">
      <div className="blogdetail-subhead">
        <div className="container">
          {/* {blog.tags.map((tag, index) => (
            <button key={index} className="outline-cta">
              {tag}
            </button>
          ))} */}
          <h1 className="blog-head">{blog.heading}</h1>

          <div className="blog-date">
            <b>{blog.date} </b>
            {blog.readTime} min read
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row d-flex">
          <div className=" blog-text col-sm-12 col-md-6 col-lg-8">
            <img
              src={imageUrl}
              alt={blog.title}
              className="blog-detail-image img-fluid"
            />
            <h4>
              <b>{blog.subheading}</b>
            </h4>
            <h4>
              <b>Introduction:</b>
            </h4>
            <p>{blog.introduction}</p>

            <h4>
              <b>{blog.subtitle}</b>{" "}
            </h4>
            {blog?.subttileHead?.map((scheme, index) => (
              <div key={index} className="mx-3">
                <h4>
                  <b>{scheme.name}</b>
                </h4>
                <ul className="blog-text-ul">
                  {scheme.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}

            <h4>
              <b>{blog.subtitle1}</b>{" "}
            </h4>
            {blog?.subttileHead1?.map((scheme, index) => (
              <div key={index} className="mx-3">
                <h4>
                  <b>{scheme.name}</b>
                </h4>
                <ul className="blog-text-ul">
                  {scheme.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}

            <h4>
              <b>{blog.subtitle2}</b>{" "}
            </h4>
            {blog?.subttileHead2?.map((scheme, index) => (
              <div key={index} className="mx-3">
                <h4>
                  <b>{scheme.name}</b>
                </h4>
                <ul className="blog-text-ul">
                  {scheme.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}

            <img src={detailimageUrl} alt="" className="img-fluid" />
            {/* <img src={blog.detailImageUrl} alt="" className="img-fluid" /> */}

            {blog.subheading2 && (
              <>
                <li>
                  <b>{blog.subheading2}</b>
                </li>
              </>
            )}
            {blog.subheading3 && (
              <>
                <li>
                  <b>{blog.subheading3}</b>
                </li>
              </>
            )}
            {blog.paragraph1 && (
              <>
                <li>
                  <b>{blog.paragraph1}</b>
                </li>
              </>
            )}

            {blog.subtitle3 && (
              <>
                <h4>
                  <b> {blog.subtitle3}</b>
                </h4>
              </>
            )}

            {blog?.subttileHead3?.map((scheme, index) => (
              <div key={index} className="mx-3">
                <h4>
                  <b>{scheme.name}</b>
                </h4>
                <ul className="blog-text-ul">
                  {scheme.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* <img src={blog.detailImageUrlTwo} alt="" className="img-fluid" /> */}

            {blog.subtitle4 && (
              <>
                <h4>
                  <b> {blog.subtitle4}</b>
                </h4>
              </>
            )}
            {blog?.subttileHead4?.map((scheme, index) => (
              <div key={index} className="mx-3">
                <h4>
                  <b>{scheme.name}</b>
                </h4>
                <ul className="blog-text-ul">
                  {scheme.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
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

            {blog.subtitle6 && (
              <>
                <li>
                  <b>{blog.subtitle6}</b>
                </li>
              </>
            )}

            {blog.paragraph3 && (
              <>
                <li>{blog.paragraph3}</li>
              </>
            )}

            {blog.subtitle5 && (
              <>
                <h4>
                  <b> {blog.subtitle5}</b>
                </h4>
              </>
            )}

            {blog?.subttileHead5?.map((scheme, index) => (
              <div key={index} className="mx-3">
                {scheme.name && (
                  <h4>
                    <b> {scheme.name}</b>
                  </h4>
                )}
                <ul className="blog-text-ul">
                  {scheme.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}

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

            <h4>
              <b>Conclusion:</b>
            </h4>
            <p> {blog.conclusion}</p>
            <p> {blog.conclusion1}</p>
            <p> {blog.conclusion2}</p>

            {blog.nextSeries && (
              <li>
                <b>Next in Our Series:</b> {blog.nextSeries}
              </li>
            )}
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 sticky-blogs">
            {/* Sidebar Extras */}
            <aside
              id="sidebar"
              className={`sidebar ${isSticky ? "sticky" : ""}`}
            >
              <h4>Related blogs</h4>
              <RelatedBlogCards
                currentHeading={blog.heading}
                currentTags={blog.blogTags}
                currentId={blog.id}
                time="3 min read"
              ></RelatedBlogCards>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogdetails;
