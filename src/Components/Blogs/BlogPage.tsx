import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css";
import Navbar from "../Navbar";
import Blogs from "./Blogs";

const BlogPage = () => {
  return (
    <SimpleBar className="absolute left-0 top-0 w-screen h-screen overflow-x-hidden">
      <Navbar />
      <Blogs />
    </SimpleBar>
  )
}

export default BlogPage
