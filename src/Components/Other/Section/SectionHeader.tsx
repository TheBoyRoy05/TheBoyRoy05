const SectionHeader = ({ text, style }: { text: string; style: string }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-[10px] h-[10px] bg-white rounded-full white-glow" />
      <h4 className={`text-white text-shadow font-bold ${style}`}>
        {text}
      </h4>
    </div>
  );
};

export default SectionHeader;
