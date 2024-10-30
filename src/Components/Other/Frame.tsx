interface FrameProps {
  children: React.ReactNode;
  width: string;
}

const Frame = ({ children, width }: FrameProps) => {
  return (
    <div>
      <div className="project-glare w-10/12 mx-auto" />
      <div className={`flex flex-col items-center bg-[#181818] border border-[--border-color] rounded-3xl p-3`} style={{ maxWidth: width }}>
        {children}
      </div>
    </div>
  );
};

export default Frame;
