import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RelatedBlogCards = ({ currentTags, currentId,currentBlog }) => {
  const [blogs, setBlogs] = useState([]);

useEffect(() => {
    const fetchBlogs = async () => {
        try {
            // 1. FIX: Use the correct deployed URL
            const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/blogs`;
            const res = await fetch(apiUrl);
            
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const data = await res.json();
            
            // 2. FIX: Correctly access the blog array
            const blogsArray = data.data && Array.isArray(data.data) 
                             ? data.data 
                             : (Array.isArray(data) ? data : []);

            // 3. LOGIC: Filter for related blogs (Customize this part!)
            let relatedBlogs = blogsArray;
            if (currentBlog && currentBlog.topic) { 
                relatedBlogs = blogsArray
                    .filter(blog => blog._id !== currentBlog._id && blog.topic === currentBlog.topic)
                    .slice(0, 4); // Show top 4 related blogs
            }

            setBlogs(relatedBlogs);
            
        } catch (err) {
            console.error("Failed to fetch related blogs", err);
        }
    };
    
    // Trigger fetch only when the current blog data is available for filtering
    if (currentBlog) { 
        fetchBlogs();
    }
    
    // Update dependencies based on when the related blogs should refresh
}, [currentBlog]); // Fetch again if the main blog details change

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
