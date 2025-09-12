import BlogForm from "../components/BlogForm";
import CSVUpload from "../components/CSVUpload";

function BlogManager() {
  return (
    <div style={{ padding: "20px" }} className="text-center">
      <h1>Blog Management</h1>
      <BlogForm />
      <hr />
      <CSVUpload />
    </div>
  );
}

export default BlogManager;
