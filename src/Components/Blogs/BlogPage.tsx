import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css";
import Navbar from "../Navbar";
import Blogs from "./Blogs";
import Footer from "../Footer";

const BlogPage = () => {
  return (
    <SimpleBar className="absolute left-0 top-0 w-screen h-screen overflow-x-hidden bg-[#101010]">
      <Navbar />
      <Blogs />
      <Footer />
    </SimpleBar>
  )
}

export default BlogPage
