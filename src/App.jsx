import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer component
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Ensure full-screen layout */}
        <Navbar /> {/* Navbar stays at the top */}
        <main className="flex-grow"> {/* Main content grows to fill available space */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer /> {/* Footer stays at the bottom */}
      </div>
    </Router>
  );
}

export default App;
