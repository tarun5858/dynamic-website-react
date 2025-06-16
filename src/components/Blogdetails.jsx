import BlogData from "../data/BlogData";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';


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

        {blog.tags.map((tag, index) => (
          <button key={index} className="outline-cta">
            {tag}
          </button>
        ))}
        <h1 className="blog-head">{blog.heading}</h1>

        <div className="blog-meta">
          <span>
            {blog.date} {blog.readTime} min read
          </span>
        </div>
        </div>
      </div>

      <div className="container">
        <div className="row d-flex">
          <div className=" blog-text col-sm-12 col-md-6 col-lg-8">
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <p>
              <b>{blog.subheading}</b>
            </p>
            <p>
              <b>Introduction:</b>
            </p>
            <p>{blog.introduction}</p>
            {blog?.schemes?.map((scheme, index) => (
              <div key={index}>
                <h2>{scheme.name}</h2>
                <ul>
                  {scheme.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}

            <img src={blog.detailImageUrl} alt="" />

            {blog?.schemes?.map((scheme, index) => (
              <div key={index}>
                <h2>{scheme.name}</h2>
                <ul>
                  {scheme.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            {/* Sidebar Extras */}
            <aside id="sidebar" className={`sidebar ${isSticky ? 'sticky' : ''}`}>
              <h2>Most searched topics</h2>
              <div className="tag-cloud">...tags...</div>

              <h2>Related blogs</h2>
              <div className="related-blogs">...related blog titles...</div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogdetails;
