import BlogCard from "../components/Blogcard";
import BlogData from "../data/BlogData";

const BlogPage = () => {
  const blogs = BlogData;

  return (
    <div className="container blog-container">
      <h2 className="blog-head">
        Everything you need to know about home ownership
      </h2>

      <div className="container cta-container mt-5 mb-4">
        <div className=" cta-row ">
          <button className="active">ALL BLOGS</button>
          <button>Renting VS Buying</button>
          <button>Down Payment</button>
          <button>Home Loans</button>
        </div>
      </div>

      <div className="container blog-cards-container">
        <div className="row blog-cards-row">
          <div className="blog-cards-parent">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
