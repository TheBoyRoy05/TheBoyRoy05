const Emphasize = ({ text }: { text: string }) => {
  return (
    <span className="italic text-shadow text-gray-200 gloock mr-1 tracking-wider">
      {` ${text}`}
    </span>
  );
};

export default Emphasize;
