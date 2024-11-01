interface FrameProps {
  children: React.ReactNode;
  width: string;
  color?: string;
}

const Frame = ({ children, width, color }: FrameProps) => {
  return (
    <div>
      <div
        className="w-10/12 mx-auto"
        style={{
          height: "1px",
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, ${
            color || "#dbdbdb"
          } 50%, rgba(0, 0, 0, 0) 100%)`,
        }}
      />
      <div
        className={`flex flex-col items-center bg-[#181818] border border-[--border-color] rounded-3xl p-3 mx-auto ${color && 'frame-bg'}`}
        style={{
          width: width,
          maxWidth: width,
          "--gradient-color": color || "#195277",
          "--opacity": color && 0.1,
        } as React.CSSProperties}
      >
        {children}
      </div>
    </div>
  );
};

export default Frame;
