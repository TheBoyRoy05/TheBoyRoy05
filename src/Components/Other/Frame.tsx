interface FrameProps {
  children: React.ReactNode;
  width: string;
  color?: string;
  className?: string;
}

const Frame = ({ children, width, color, className }: FrameProps) => {
  const glareStyle = {
    height: "1px",
    backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, ${
      color || "#dbdbdb"
    } 50%, rgba(0, 0, 0, 0) 100%)`,
  };

  const frameStyle = {
    width: width,
    maxWidth: width,
    "--gradient-color": color || "#195277",
    "--opacity": color && 0.1,
  } as React.CSSProperties;

  return (
    <div style={{ width: width }}>
      <div className="w-10/12 mx-auto" style={glareStyle} />
      <div
        className={`flex-col items-center bg-[#181818] border border-[--border-color] rounded-3xl p-3 mx-auto ${
          color && "frame-bg"
        } ${className}`}
        style={frameStyle}
      >
        {children}
      </div>
    </div>
  );
};

export default Frame;
