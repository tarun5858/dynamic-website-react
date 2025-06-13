
const Blogdetails = () => {
 const blog = {
    id: 1,
    title: 'Beyond the Basics: Unlocking Hidden Benefits of Home Loans in India',
    date: '25 OCT,2024',
    readTime: 5,
    likes: 273,
    imageUrl: 'https://www.prehome.in/assets/img/blogs/Blog-10-Home-Loan-Tax-Benefits.jpg',
    tags: ['Psuedo Tag 1', 'Psuedo Tag Long name 1'],
  }

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>
      <div className="blog-meta">
        <span>{blog.date}</span> • <span>{blog.readTime} min read</span> • <span>{blog.likes} ❤️</span>
      </div>
      <p>{blog.content}</p>
      
      {/* Tags */}
      <div className="tags">
        {blog.tags?.map(tag => <span className="tag">{tag}</span>)}
      </div>

      {/* Sidebar Extras */}
      <aside>
        <h2>Most searched topics</h2>
        {/* Static or dynamic popular tags */}
        <div className="tag-cloud">...tags...</div>

        <h2>Related blogs</h2>
        {/* Optional: list of blog titles with links */}
      </aside>
    </div>
  );
};

export default Blogdetails;
