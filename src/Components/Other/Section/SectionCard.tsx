import React from "react";
import Frame from "../Frame";

interface SectionCardProps {
  width: string;
  color: string;
  symbol: React.ReactNode;
  title: string;
  text: string;
}

const SectionCard = ({ width, color, symbol, title, text }: SectionCardProps) => {
  const symbolClass = `w-10 h-10 rounded-full border-t-2 border-l-2 border-r-2 flex justify-center items-center text-2xl`;

  return (
    <Frame width={width} color={color}>
      <div className="frame-content flex-col gap-4 items-center p-8">
        <div className={symbolClass} style={{ borderColor: color, color: color }}>
          {symbol}
        </div>
        <span className="text-gray-300">{title}</span>
        <h3 className="text-white text-3xl font-bold hero-text-shadow">{text}</h3>
      </div>
    </Frame>
  );
};

export default SectionCard;
