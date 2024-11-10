import { capitalize } from "../../Utils/functions";

const TableOfContents = ({ contents }: { contents: object }) => {
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
          className="hover:text-gray-200 hover:cursor-pointer text-gray-500 font-light text-sm"
        >
          {capitalize(name)}
        </div>
      ))}
    </div>
  );
};

export default TableOfContents;
