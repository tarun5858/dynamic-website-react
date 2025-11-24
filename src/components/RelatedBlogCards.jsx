import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RelatedBlogCards = ({ currentBlog }) => {
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Initial Check: If currentBlog is null or the topic is missing, skip fetching.
    if (!currentBlog || !currentBlog.topic) {
      setIsLoading(false);
      return;
    }

    const fetchRelatedBlogs = async () => {
      setIsLoading(true);
      try {
        // FIX 1: Override the backend limit to fetch ALL blogs (e.g., limit=500)
        // This ensures the component can find related blogs regardless of their position.
        const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/blogs?limit=500`;
        const res = await fetch(apiUrl);

        if (!res.ok) throw new Error("Failed to fetch blogs");

        const data = await res.json();
        const blogsArray = Array.isArray(data.data) ? data.data : [];

        // Get the current blog's topic, ensuring it's lowercase for comparison
        const currentTopic = currentBlog.topic.toLowerCase();

        // FIX 2: Filter blogs using the new singular 'topic' field
        const related = blogsArray
          .filter(
            (blog) =>
              // 1. Exclude the current blog
              blog._id !== currentBlog._id &&
              // 2. Ensure the related blog has a topic
              blog.topic &&
              // 3. Compare topics case-insensitively
              blog.topic.toLowerCase() === currentTopic
          )
          // Limit to 4 related blogs for the sidebar
          .slice(0, 4);

        setRelatedBlogs(related);
      } catch (err) {
        console.error("Error fetching related blogs", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRelatedBlogs();
  }, [currentBlog]); // Rerun only when the current blog changes

  // --- Rendering States ---
  if (isLoading) {
    return <p>Loading related blogs...</p>;
  }

  if (relatedBlogs.length === 0) {
    return <p>No related blogs found for this topic.</p>;
  }

  // --- Final Render ---
  return (
    <>
        {relatedBlogs.map((blog) => (
        <div key={blog._id} className="row related-blogs">
          <div className="col-12 mt-2 mb-2">
            <h6><b>{blog.title}</b></h6>
          </div>
          <div className="col-6 pt-2 blog-time">{blog.date}</div>
          <div className="col-6 pt-2 text-end">
            <Link to={`/blog/${blog._id}`}>Read now</Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default RelatedBlogCards;