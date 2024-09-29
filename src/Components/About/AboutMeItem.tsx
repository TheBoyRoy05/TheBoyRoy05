import Frame from "../Frame";

interface ItemProps {
  title: string;
  image: string;
  text: React.ReactNode;
  flip: boolean;
}

const AboutMeItem = ({ title, image, text, flip }: ItemProps) => {
  const picture = (
    <Frame width="40vw">
      <img src={image} className="rounded-2xl border-2 border-[--border-color]" />
    </Frame>
  );

  const words = (
    <div className={`flex flex-col justify-center items-center gap-5 ${flip ? "ml-10" : "mr-10"}`}>
      <h4 className="text-[1.25rem] text-gray-100 text-shadow font-bold">{title}</h4>
      <p className="text-gray-400 text-lg font-light leading-8 w-[28vw] indent-6">{text}</p>
    </div>
  );

  return <div className="flex flex-1 items-center gap-16">
    {flip ? words : picture }
    {flip ? picture : words }
  </div>;
};

export default AboutMeItem;
