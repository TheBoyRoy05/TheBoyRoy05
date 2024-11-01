interface SectionListProps {
  items: {
    title: string;
    text: string;
    symbol: React.ReactNode;
  }[];
  color: string;
}

const SectionList = ({ items, color }: SectionListProps) => {
  return (
    <div className="join join-vertical rounded-2xl flex flex-col gap-2">
      {items.map((item, index) => (
        <div className="join-item bg-gray-800 flex items-center py-6 pl-2 pr-4" key={index}>
          <div
            className="flex-1 text-2xl flex justify-center items-center"
            style={{ color: color }}
          >
            {item.symbol}
          </div>
          <p className="flex-[5] text-lg">
            <span className="text-white text-shadow">{item.title}</span> {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionList;
