import React from "react";
import { Link } from "react-router-dom";
import BlogData from "../data/BlogData";

const RelatedBlogCards = ({ currentTags, currentId }) => {

  const formattedBlogData = BlogData.map((blog) => ({
    ...blog,
    blogTags: Array.isArray(blog.blogTags)
      ? blog.blogTags
      : blog.blogTags?.split(",").map((t) => t.trim()),
  }));

  const related = formattedBlogData.filter(
    (blog) =>
      blog.id !== currentId &&
      blog.blogTags?.some((tag) =>
        currentTags?.some((curr) => curr.toLowerCase() === tag.toLowerCase())
      )
  );

  return (
    <>
      {related.length === 0 ? (
        <p>No related blogs found.</p>
      ) : (
        related.map((blog) => (
          <div key={blog.id} className="row related-blogs">
            <div className="col-12 mt-2 mb-2">
              <h6><b>{blog.heading}</b></h6>
            </div>
            <div className="col-6 pt-2 blog-time">{blog.date}</div>
            <div className="col-6 pt-2 text-end">
              <Link to={`/blog/${blog.id}`}>Read now</Link>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default RelatedBlogCards;
