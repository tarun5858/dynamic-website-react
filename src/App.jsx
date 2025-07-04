import './App.css'
import "./assets/css/App.css"
import { Routes, Route } from "react-router-dom";
// import BlogPage from "./screens/BlogPage"
// import BlogCard from './components/Blogcard'
import Blogdetails from './components/blogdetails'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from "./components/whatsappButton";
import ComponentsParent from "./screens/ComponentsParent";
import Home from './screens/Home';
import SuccessStories from './screens/SuccessStories';
import HowItWorks from './screens/HowItWorks';
function App() {

  return (
    <>
<Header></Header>
<WhatsAppButton></WhatsAppButton>
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          {/* <Route path="/" element={<ComponentsParent />} /> */}
          {/* <Route path="/" element={<BlogPage />} /> */}
          <Route path="/blog/:id" element={<Blogdetails />} />
        </Routes>
            {/* <BlogCard/> */}
            {/* <BlogPage/> */}

            <Footer></Footer>
    </>
  )
}

export default App
