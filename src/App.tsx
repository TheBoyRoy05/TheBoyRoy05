import { Route, Routes, Navigate } from "react-router-dom"
import HomePage from "./Components/Home/HomePage"
import ProjectsPage from "./Components/Projects/ProjectsPage"
import BlogPage from "./Components/Blog/BlogPage.tsx"
import AboutMePage from "./Components/About/AboutMePage"
import ResumePage from "./Components/Other/ResumePage.tsx"
import ContactMePage from "./Components/Contact/ContactMePage"
import YipYapPage from "./Components/Projects/YipYapPage"
import SortingVizPage from "./Components/Projects/SortingVizPage"
import Turbo3DPage from "./Components/Projects/Turbo3DPage.tsx"
import NeuralNectorPage from "./Components/Projects/NeuralNectorPage.tsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-me" element={<AboutMePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/neural-nector" element={<NeuralNectorPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact-me" element={<ContactMePage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/yipyap" element={<YipYapPage />} />
      <Route path="/sorting-visualizer" element={<SortingVizPage />} />
      <Route path="/turbo-3d" element={<Turbo3DPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
