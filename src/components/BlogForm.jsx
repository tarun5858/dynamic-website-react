import { useState } from "react";

function BlogForm() {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    heading: "",
    subheading: "",
    introduction: "",
    tags: "",
    blogTags: ""
  });

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...blog,
      tags: blog.tags.split(",").map(t => t.trim()),
      blogTags: blog.blogTags.split(",").map(t => t.trim())
    };

    await fetch("http://localhost:5000/api/blogs/upload-csv", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    alert("Blog added successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <h2>Add Blog</h2>
      <input
        style={{border:"1px solid black",padding:"1%",borderRadius:"8px",margin:"1%"}}
       name="title" placeholder="Title" value={blog.title} onChange={handleChange} /><br /><br />
      <textarea
        style={{border:"1px solid black",padding:"1%",borderRadius:"8px",margin:"1%"}}
      
      name="description" placeholder="Description" value={blog.description} onChange={handleChange} /><br /><br />
      <input
        style={{border:"1px solid black",padding:"1%",borderRadius:"8px",margin:"1%"}}
      
      name="heading" placeholder="Heading" value={blog.heading} onChange={handleChange} /><br /><br />
      <input
        style={{border:"1px solid black",padding:"1%",borderRadius:"8px",margin:"1%"}}
      
      name="subheading" placeholder="Subheading" value={blog.subheading} onChange={handleChange} /><br /><br />
      <textarea
        style={{border:"1px solid black",padding:"1%",borderRadius:"8px",margin:"1%"}}
      
      name="introduction" placeholder="Introduction" value={blog.introduction} onChange={handleChange} /><br /><br />
      <input
        style={{border:"1px solid black",padding:"1%",borderRadius:"8px",margin:"1%"}}
      
      name="tags" placeholder="Tags (comma separated)" value={blog.tags} onChange={handleChange} /><br /><br />
      <input
        style={{border:"1px solid black",padding:"1%",borderRadius:"8px",margin:"1%"}}
      
      name="blogTags" placeholder="Blog Tags (comma separated)" value={blog.blogTags} onChange={handleChange} /><br /><br />
      <button 
        style={{border:"1px solid black",padding:"1%",borderRadius:"8px",margin:"1%"}}
      
      type="submit">Save Blog</button>
    </form>
  );
}

export default BlogForm;
