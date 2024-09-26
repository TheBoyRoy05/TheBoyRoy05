import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css";
import Navbar from "../Navbar";
import Projects from "./Projects";

const ProjectsPage = () => {
  return (
    <SimpleBar className="absolute left-0 top-0 w-screen h-screen overflow-x-hidden">
      <Navbar />
      <Projects />
    </SimpleBar>
  )
}

export default ProjectsPage
