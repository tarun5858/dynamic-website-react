// import React, { useEffect, useState } from 'react';
// import BlogCard from '../components/Blogcard';
// import axios from 'axios';
import BlogCard from "../components/Blogcard";

const BlogPage = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/blogs');
//         setBlogs(res.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Failed to fetch blogs', error);
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

  return (
    <div className="blog-container">
       <h2 class="blog-head">Everything you need to know about home ownership</h2>

       <div className="container cta-container">
        <div className="row cta-row">
            <button className="active">ALL BLOGS</button>
            <button>Renting VS Buying</button>
            <button>Down Payment</button>
            <button>Home Loans</button>               
        </div>
       </div>

       <div className="container blog-cards-container">
        <div className="row blog-cards-row">
            <div className="blog-cards-parent">
                <BlogCard></BlogCard>
                <BlogCard></BlogCard>
                <BlogCard></BlogCard>
                <BlogCard></BlogCard>
                <BlogCard></BlogCard>
                <BlogCard></BlogCard>
                
            </div>
        </div>
       </div>
    </div>
  );
};

export default BlogPage;
