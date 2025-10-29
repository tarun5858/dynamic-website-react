import { useState, useEffect } from 'react';

// Replace with your actual API endpoint URL
const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/blogs`; 

const useFetchLatestBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch(API_URL);
        
//         if (!response.ok) {
//       // 🛑 MODIFIED: Log the status for debugging
//       console.error("API Response Status:", response.status); 
      
//       // If the status is not 'ok', read the text (which is the HTML error page)
//       const errorText = await response.text();
      
//       // Pass the status and the beginning of the response as an error
//       throw new Error(`Server returned status ${response.status}. Response starts with: ${errorText.substring(0, 50)}`);
//     }
        
//         const data = await response.json();
        
//         // 1. Sort by date (if necessary, assuming 'date' or similar field)
//         // 2. Take only the first 3 posts
//         const latestBlogs = data
//           .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort descending
//           .slice(0, 3); 

//         setBlogs(latestBlogs);
//       } catch (err) {
//         console.error("Failed to fetch blogs:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []); // Empty dependency array ensures it runs only once on mount

useEffect(() => {
  const fetchBlogs = async () => {
    setLoading(true); // Ensure loading is true before fetch

    try {
      const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/blogs`;
      const response = await fetch(apiUrl);

      // --- CRITICAL CHECK: Handle HTTP Errors ---
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Fetched data object:", data); 

      // --- CRITICAL CHANGE: Determine Blog Array ---
      // 1. Try accessing data.data (if your API wraps the array)
      // 2. Fall back to data (if your API returns the array directly)
      const blogsArray = data.data && Array.isArray(data.data) 
                         ? data.data 
                         : (Array.isArray(data) ? data : []);
      
      console.log("Blogs array for state:", blogsArray); 
      
      if (blogsArray.length === 0) {
          console.warn("API returned successful response but the blog array is empty or misstructured.");
      }

      // Sort blogs by date (newest first) - Logic is correct
      const sortedData = [...blogsArray].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      setBlogs(sortedData);
      
     // Build topic list dynamically
    //   setTopics((prevTopics) => {
    //     const currentTopics = new Set(prevTopics);
    //     const newTopics = [];

    //     blogsArray.forEach((blog) => {
    //       if (Array.isArray(blog.points)) {
    //         blog.points.forEach((point) => {
    //           if (!currentTopics.has(point)) {
    //             currentTopics.add(point);
    //             newTopics.push(point);
    //           }
    //         });
    //       }
    //     });

    //     return prevTopics.length === 0
    //       ? ["ALL BLOGS", ...newTopics]
    //       : [...prevTopics, ...newTopics];
    //   });
      
      setLoading(false);

    } catch (err) {
      console.error("Error fetching blogs:", err);
      setLoading(false);
    }
  };

  fetchBlogs();
}, []);

  return { blogs, loading };
};

export default useFetchLatestBlogs;