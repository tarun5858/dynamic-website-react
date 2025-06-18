import BlogData from "../data/BlogData";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RelatedBlogCards from "./RelatedBlogCards";

const Blogdetails = () => {
  const { id } = useParams();
  const blogs = BlogData;
  const blog = blogs.find((b) => String(b.id) === String(id));

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
              src={blog.imageUrl}
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
            {blog?.schemes?.map((scheme, index) => (
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
            <br />
            <h4>
              <b>{blog.subtitle2}</b>{" "}
            </h4>
            {blog?.texbenefits?.map((scheme, index) => (
              <div key={index} className="mx-3">
                <h4>
                  <b>{scheme.section}</b>
                </h4>
                <ul className="blog-text-ul">
                  {scheme.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
            <img src={blog.detailImageUrl} alt="" className="img-fluid" />

            <br />
            <h4>
              <b> {blog.subtitle3}</b>
            </h4>
            {blog?.Strategies?.map((scheme, index) => (
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

            {blog?.StepByStep?.map((scheme, index) => (
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

            {blog?.loanApproval?.map((scheme, index) => (
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

            {blog?.keyTerms?.map((scheme, index) => (
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

            <img src={blog.detailImageUrlTwo} alt="" className="img-fluid" />

            <br />
            <h4>
              {" "}
              <b>{blog.subtitle4}</b>
            </h4>
            {blog?.Leveraging?.map((scheme, index) => (
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

            {blog?.Pitfalls?.map((scheme, index) => (
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

            {blog?.creditScore?.map((scheme, index) => (
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

            {blog?.Eligibility?.map((scheme, index) => (
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

            <br />
            <h4>
              <b> {blog.subtitle5}</b>
            </h4>
            {blog?.RentToOwn?.map((scheme, index) => (
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
              <b>Conclusion:</b>
            </h4>
            <p> {blog.conclusion1}</p>
            <p> {blog.conclusion2}</p>

            <h4>
              <b>Next in Our Series:</b>
            </h4>
            <p> {blog.nextSeries}</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 sticky-blogs">
            {/* Sidebar Extras */}
            <aside
              id="sidebar"
              className={`sidebar ${isSticky ? "sticky" : ""}`}
            >
              <h4>Related blogs</h4>
              {/* <RelatedBlogCards
                currentHeading={blog.heading}
                time="2 min read"
              ></RelatedBlogCards> */}
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
