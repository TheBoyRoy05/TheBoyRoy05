import SimpleBar from "simplebar-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageProps {
  children: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <SimpleBar className="absolute left-0 top-0 w-screen h-screen overflow-x-hidden bg-[#101010]">
      <Navbar />
      <div className="flex flex-col items-center pt-16">{children}</div>
      <Footer />
    </SimpleBar>
  );
};

export default Page;
