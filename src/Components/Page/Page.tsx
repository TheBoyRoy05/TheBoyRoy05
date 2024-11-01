import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TableOfContents from "./TableOfContents";

interface PageProps {
  children: React.ReactNode;
  homePage?: boolean;
  contents?: object;
}

const Page = ({ children, homePage, contents }: PageProps) => {
  return (
    <SimpleBar className={`absolute left-0 top-0 w-screen h-screen overflow-x-hidden ${!homePage && "bg-[#101010]"}`}>
      <Navbar />
      {contents && <TableOfContents contents={contents} />}
      {homePage ? children : <div className="flex flex-col items-center py-[10vh]">{children}</div>}
      <Footer />
    </SimpleBar>
  );
};

export default Page;
