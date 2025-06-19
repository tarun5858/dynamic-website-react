import BlogCard from "../components/Blogcard";
import BlogData from "../data/BlogData";
import { useState } from "react";
import TopicBarCta from "../components/TopicBarCta";
import topics from "../data/BlogTopicData";
import "../App.css"
// import LargeBlueCta from "../components/LargeBlueCta";
const BlogPage = () => {
  const blogs = BlogData;

  const [activeTopic, setActiveTopic] = useState("ALL BLOGS");

  const filteredBlogs =
    activeTopic && activeTopic !== "ALL BLOGS"
      ? blogs.filter(
          (blog) =>
            Array.isArray(blog.points) && blog.points.includes(activeTopic)
        )
      : blogs;
  return (
    <>
      <div className="container blog-container">
        <h2 className="blog-head">
          Everything you need to know about home ownership
        </h2>

{/* <LargeBlueCta text="prehome cta"></LargeBlueCta> */}
        <div className="topic-cta-container mb-4">
          <div className=" cta-row">
            {topics.map((topic, index) => (
              <TopicBarCta
                key={index}
                topic={topic}
                isActive={activeTopic === topic}
                onClick={() => setActiveTopic(topic)}
              ></TopicBarCta>
            ))}
          </div>
        </div>

        <div className=" blog-cards-container">
          <div className="row blog-cards-row">
            <div className="blog-cards-parent">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
