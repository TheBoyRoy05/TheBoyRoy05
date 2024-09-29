import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageProps {
  children: React.ReactNode;
  homePage?: boolean;
}

const Page = ({ children, homePage }: PageProps) => {
  return (
    <SimpleBar className={`absolute left-0 top-0 w-screen h-screen overflow-x-hidden ${!homePage && "bg-[#101010]"}`}>
      <Navbar />
      {homePage ? children : <div className="flex flex-col items-center py-[10vh]">{children}</div>}
      <Footer />
    </SimpleBar>
  );
};

export default Page;
