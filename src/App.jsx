import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from "./screens/BlogPage"
// import BlogCard from './components/Blogcard'
import Blogdetails from './components/blogdetails'
function App() {

  return (
    <>
      <Router>
        <Routes>
         
          <Route path="/" element={<BlogPage />} />
          <Route path="/blog-details" element={<Blogdetails />} />
        </Routes>
      </Router>
            {/* <BlogCard/> */}
            {/* <BlogPage/> */}
    </>
  )
}

export default App
