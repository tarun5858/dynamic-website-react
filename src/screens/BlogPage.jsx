import { useState, useEffect, useRef } from "react";
import BlogCard from "../components/Blogcard";
import TopicBarCta from "../components/TopicBarCta";
import "../App.css";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [topics, setTopics] = useState(["ALL BLOGS"]);
  const [activeTopic, setActiveTopic] = useState("ALL BLOGS");
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);
  const scrollAmount = 150;

  // Fetch blogs from backend API
// useEffect(() => {
//   fetch("http://localhost:5000/api/blogs")
//     .then((res) => res.json())
//     .then((data) => {
//       setBlogs(data); // No sorting applied

//       const extractedTopics = [
//         ...new Set(
//           data.flatMap((blog) =>
//             Array.isArray(blog.points) ? blog.points : []
//           )
//         ),
//       ].reverse();

//       setTopics(["ALL BLOGS", ...extractedTopics]);
//       setLoading(false);
//     })
//     .catch((err) => {
//       console.error(err);
//       setLoading(false);
//     });
// }, []);


useEffect(() => {
  fetch("http://localhost:5000/api/blogs")
    .then((res) => res.json())
    .then((data) => {
      // Sort blogs in descending order (for listing only)
      const sortedData = [...data].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setBlogs(sortedData);

      // Create topic list in the order of first API load
      setTopics((prevTopics) => {
        const currentTopics = new Set(prevTopics);
        const newTopics = [].reverse();

        data.forEach((blog) => {
          if (Array.isArray(blog.points)) {
            blog.points.forEach((point) => {
              if (!currentTopics.has(point)) {
                currentTopics.add(point);
                newTopics.push(point); // Append new topic
              }
            });
          }
        });

        // Always keep "ALL BLOGS" at the start
        return prevTopics.length === 0
          ? ["ALL BLOGS", ...newTopics]
          : [...prevTopics, ...newTopics];
      });

      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
}, []);



  const filteredBlogs =
    activeTopic && activeTopic !== "ALL BLOGS"
      ? blogs.filter(
          (blog) =>
            Array.isArray(blog.points) && blog.points.includes(activeTopic)
        )
      : blogs;

  if (loading) {
    return <p className="text-center mt-5">Loading blogs...</p>;
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container blog-container">
      <h2 className="blog-head">
        Everything you need to know about home ownership
      </h2>

      {/* Topic Filter Buttons */}
      <div className="row align-center d-flex mt-5">
        <div className="col-12 pb-3 mt-3 mb-3">
          <div className="case-cat-filter d-flex">
            <div className="icon-box">
              <i
                className="fas fa-chevron-left scroll-left"
                style={{ cursor: "pointer" }}
                onClick={scrollLeft}
              ></i>{" "}
            </div>
            {/* <div className="topic-cta-container mb-4"> */}
         <div
  className="case-cat-filter-scroll-width"
  ref={scrollContainerRef}
  id="scrollContainer"
>
  {[
    "ALL BLOGS",
    ...[...topics.filter((t) => t !== "ALL BLOGS")],
  ].map((topic, index) => (
    <TopicBarCta
      key={index}
      topic={topic}
      isActive={activeTopic === topic}
      onClick={() => setActiveTopic(topic)}
    />
  ))}
</div>


            {/* </div> */}
            <div className="icon-box">
              <i
                className="fas fa-chevron-right scroll-right"
                style={{ cursor: "pointer" }}
                onClick={scrollRight}
              ></i>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="blog-cards-container">
        <div className="row blog-cards-row">
          <div className="blog-cards-parent">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
