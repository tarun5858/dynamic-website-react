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
      <input name="title" placeholder="Title" value={blog.title} onChange={handleChange} /><br /><br />
      <textarea name="description" placeholder="Description" value={blog.description} onChange={handleChange} /><br /><br />
      <input name="heading" placeholder="Heading" value={blog.heading} onChange={handleChange} /><br /><br />
      <input name="subheading" placeholder="Subheading" value={blog.subheading} onChange={handleChange} /><br /><br />
      <textarea name="introduction" placeholder="Introduction" value={blog.introduction} onChange={handleChange} /><br /><br />
      <input name="tags" placeholder="Tags (comma separated)" value={blog.tags} onChange={handleChange} /><br /><br />
      <input name="blogTags" placeholder="Blog Tags (comma separated)" value={blog.blogTags} onChange={handleChange} /><br /><br />
      <button type="submit">Save Blog</button>
    </form>
  );
}

export default BlogForm;
