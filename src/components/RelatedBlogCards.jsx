import React, { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";

const RelatedBlogCards = ({ currentTags, currentId }) => {
  const [blogs, setBlogs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // const res = await fetch("http://localhost:5000/api/blogs");
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/blogs/${id}`);
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Failed to fetch blogs", err);
      }
    };
    fetchBlogs();
  }, []);

  if (!currentTags || currentTags.length === 0) {
    return <p>No related blogs found.</p>;
  }

  const related = [];
  const usedIds = new Set();

  currentTags.forEach((tag) => {
    const match = blogs.find((blog) => {
      // Exclude current blog
      if (blog._id === currentId || blog.id === currentId) return false;

      // Skip already used blogs
      if (usedIds.has(blog._id) || usedIds.has(blog.id)) return false;

      // Ensure blogTags array exists & check exact match ignoring case
      return blog.blogTags?.some(
        (t) => t.trim().toLowerCase() === tag.trim().toLowerCase()
      );
    });

    if (match) {
      related.push(match);
      usedIds.add(match._id || match.id);
    }
  });

  return (
    <>
      {related.length === 0 ? (
        <p>No related blogs found.</p>
      ) : (
        related.map((blog) => (
          <div key={blog._id || blog.id} className="row related-blogs">
            <div className="col-12 mt-2 mb-2">
              <h6>
                <b>{blog.title}</b>
              </h6>
            </div>
            <div className="col-6 pt-2 blog-time">{blog.date}</div>
            <div className="col-6 pt-2 text-end">
              <Link to={`/blog/${blog._id || blog.id}`}>Read now</Link>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default RelatedBlogCards;
