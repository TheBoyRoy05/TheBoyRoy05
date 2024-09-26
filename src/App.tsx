import { Route, Routes } from "react-router-dom"
import HomePage from "./Components/Home/HomePage"
import ProjectsPage from "./Components/Projects/ProjectsPage"
import BlogPage from "./Components/Blogs/BlogPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  )
}

export default App
