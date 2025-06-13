import React from "react";
import "../App.css";
import Blogdetails from "./blogdetails";
import {Link} from "react-router-dom"

const BlogCard = () => {
  const blog = {
    id: 1,
    title: 'Maximizing Your Home Loan Benefits',
    description: `A home loan is more than just a means to buy property – it's a powerful financial tool that, when used wisely...`,
    date: '25 OCT,2024',
    readTime: 5,
    likes: 273,
    imageUrl: 'https://www.prehome.in/assets/img/blogs/Blog-10-Home-Loan-Tax-Benefits.jpg',
    tags: ['Psuedo Tag 1', 'Psuedo Tag Long name 1'],
  }
  
  return (
    
    <div className="blog-card col-sm-12 col-md-6 col-lg-4">
     
      <Link to="/blog-details" className="blog-link"> <h3>{blog.title}</h3></Link>
      <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
      <div className="blog-meta">
        <span>{blog.date}</span>
        <span> {blog.readTime} min read</span>
        <span> {blog.likes}</span>
      </div>
      <p className="blod-desc">{blog.description}</p>
      <div className="tags">
        {blog.tags.map((tag, index) => (
          <button key={index} className="outline-cta">
            {tag}
          </button>
        ))}
      </div>
    </div>
  
  );
};

export default BlogCard;
