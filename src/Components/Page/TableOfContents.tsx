import { useEffect, useState } from "react";
import { capitalize } from "../../Utils/functions";
import { ContentsType } from "../../Utils/types";

interface TableOfContentsProps {
  contents: ContentsType;
}

const TableOfContents = ({ contents }: TableOfContentsProps) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observers: IntersectionObserver[] = [];
    Object.entries(contents).forEach(([name, ref]) => {
      if (ref.current) {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) setActiveSection(name);
        }, observerOptions);

        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [contents]);

  const handleClick = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed left-[82vw] top-[150px] flex-col gap-6 z-[100] fade-in">
      <h6 className="text-gray-300 text-sm">CONTENTS</h6>
      {Object.entries(contents).map(([name, ref], index) => (
        <div
          key={index}
          onClick={() => handleClick(ref)}
          className={`hover:cursor-pointer hover:text-gray-200 font-light text-sm transition-all duration-200 ${
            activeSection === name ? "text-white font-medium" : "text-gray-500"
          }`}
        >
          {capitalize(name)}
        </div>
      ))}
    </div>
  );
};

export default TableOfContents;
