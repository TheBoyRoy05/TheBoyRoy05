import { Route, Routes } from "react-router-dom"
import HomePage from "./Components/Home/HomePage"
import ProjectsPage from "./Components/Projects/ProjectsPage"
import BlogPage from "./Components/Blogs/BlogPage"
import AboutMePage from "./Components/About/AboutMePage"
import ContactMePage from "./Components/Contact/ContactMePage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-me" element={<AboutMePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact-me" element={<ContactMePage />} />
    </Routes>
  )
}

export default App
