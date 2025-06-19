import './App.css'
import "./assets/css/App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from "./screens/BlogPage"
// import BlogCard from './components/Blogcard'
import Blogdetails from './components/blogdetails'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from "./components/whatsappButton";


function App() {

  return (
    <>
<Header></Header>
<WhatsAppButton></WhatsAppButton>
      <Router>
        <Routes>
         
          <Route path="/" element={<BlogPage />} />
          <Route path="/blog/:id" element={<Blogdetails />} />
        </Routes>
      </Router>
            {/* <BlogCard/> */}
            {/* <BlogPage/> */}

            <Footer></Footer>
    </>
  )
}

export default App
