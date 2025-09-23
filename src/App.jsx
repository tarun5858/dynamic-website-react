import './App.css'
import "./assets/css/App.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Routes, Route } from "react-router-dom";
import BlogPage from "./screens/BlogPage"
// import BlogCard from './components/Blogcard'
// s from './components/blogdetails'
import Blogdetails from './components/Blogdetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from "./components/whatsappButton";
import ComponentsParent from "./screens/ComponentsParent";
import Home from './screens/Home';
import SuccessStories from './screens/SuccessStories';
import HowItWorks from './screens/HowItWorks';
import OurStoryPage from './screens/OurStoryPage';
// import BlogManager from "./pages/BlogManager"; 
// import Login from './screens/Login';
// import ProtectedRoute from './components/ProtectedRoute';
// import { AuthProvider } from "./context/AuthContext";


function App() {

  return (
    <>
<Header></Header>
<WhatsAppButton></WhatsAppButton>

 {/* <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/manage-blogs"
            element={
              <ProtectedRoute>
                <BlogManager />
              </ProtectedRoute>
            }
          />
        </Routes> */}


        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          {/* <Route path="/" element={<ComponentsParent />} /> */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<Blogdetails />} />

          {/* <Route path="/manage-blogs" element={<BlogManager />} />  */}
        </Routes>
            {/* <BlogCard/> */}

            <Footer></Footer>
    </>
  )
}

export default App
