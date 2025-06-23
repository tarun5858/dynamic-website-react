// import "../App.css";
import { Link } from "react-router-dom";
import {
  blogImage1,
  blogImage2,
  blogImage3,
  blogImage4,
  blogImage5,
  blogImage6,
  blogImage7,
} from "../components/Imagepath";



const BlogCard = ({ blog }) => {

  const imageSrc = {
     blogImage1,
  blogImage2,
  blogImage3,
  blogImage4,
  blogImage5,
  blogImage6,
  blogImage7,}

  const imageUrl = imageSrc[blog.imageKey]
  return (     
    <div className="blog-card col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-5 mt-2">
      <Link to={`/blog/${blog.id}`} className="blog-link">
        {" "}
        <h3 className="blog-title">{blog.title}</h3>
      </Link>
      <Link to={`/blog/${blog.id}`} className="blog-link">
        {" "}
        <img src={imageUrl} alt={blog.title} className="blog-image" />
      </Link>

      <div className="blog-meta">
        <span>{blog.date}</span>
        <span> {blog.readTime} min read</span>
        {/* <span> {blog.likes}</span> */}
      </div>
      <Link to={`/blog/${blog.id}`} className="blog-link">
        {" "}
        <p className="blod-desc">{blog.description}</p>
      </Link>

      <div className="tags">
        {/* {blog.tags.map((tag, index) => (
          <button key={index} className="outline-cta">
            {tag}
          </button>
        ))} */}
      </div>
    </div>
  );
};

export default BlogCard;
