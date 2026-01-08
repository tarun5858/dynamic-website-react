import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RelatedBlogCards = ({ currentBlog }) => {
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!currentBlog || !currentBlog.topic) {
      setIsLoading(false);
      return;
    }

const fetchRelatedBlogs = async () => {
    setIsLoading(true);
    
    // Use the URL confirmed to work for fetching all blogs
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/blogs?limit=500`;

    //  ROBUST FETCH IMPLEMENTATION
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10-second timeout

        const res = await fetch(apiUrl, { signal: controller.signal });
        clearTimeout(timeoutId); // Clear the timeout if the fetch succeeds quickly

        if (!res.ok) {
            // If the response status is 4xx or 5xx, try to read the error message
            let errorText = `Failed to fetch blogs. Status: ${res.status}`;
            try {
                const errorBody = await res.text();
                errorText += `. Body: ${errorBody.substring(0, 100)}...`;
            } catch (e) {
              console.log(e)
                // Ignore parsing errors
            }
            throw new Error(errorText);
        }

        // Attempt to parse the response as JSON
        const data = await res.json();
        
        // --- DATA PROCESSING START ---
        
        // Handle common API response structures: { data: [...] } or just [...]
        const blogsArray = Array.isArray(data.data) 
            ? data.data 
            : Array.isArray(data) 
                ? data 
                : [];
        
        // Log the actual count of blogs *received*
        console.log("Total Blogs Fetched (Parsed):", blogsArray.length);

        if (blogsArray.length === 0) {
            // If the array is empty, this is the reason you see the message
            setRelatedBlogs([]);
            return;
        }

        // Get the current blog's topic, ensuring it's lowercase for comparison
        const currentTopic = currentBlog.topic.toLowerCase();

        // Filter and slice
        const related = blogsArray
          .filter(
            (blog) =>
              blog._id !== currentBlog._id &&
              blog.topic &&
              blog.topic.toLowerCase() === currentTopic
          )
          .slice(0, 4);

        setRelatedBlogs(related);
        
    } catch (err) {
        if (err.name === 'AbortError') {
            console.error("Error fetching related blogs: Request timed out (10s limit).", err);
        } else {
            console.error("Error fetching related blogs (API or Parsing Error):", err);
        }
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
          <div className="col-12">
            <h4>
              <>{blog.title}</>
            </h4>
          </div>
          <div className="col-6 pt-2 blog-time">{blog.readTime} min read</div>
          <div className="col-6 pt-2 text-end">
            <Link to={`/blog/${blog._id}`}>Read now</Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default RelatedBlogCards;
