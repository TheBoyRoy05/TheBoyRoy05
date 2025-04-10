import Frame from "../Other/Frame";

interface ItemProps {
  title: string;
  image: string;
  text: React.ReactNode;
  flip?: boolean;
}

const AboutMeItem = ({ title, image, text, flip = false }: ItemProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-8 md:gap-16 w-full ${
        flip ? "xl:flex-row-reverse" : "xl:flex-row"
      }`}
    >
      <Frame width="clamp(300px, 45vw, 600px)">
        <img src={image} className="rounded-2xl border-2 border-[--border-color]" />
      </Frame>
      <div className={`flex-col justify-center items-center gap-5 w-full`}>
        <h4 className="~text-base/xl text-gray-100 text-shadow font-bold">{title}</h4>
        <p
          className="text-gray-400 ~text-sm/lg font-light ~leading-7/8 indent-6"
          style={{ width: "clamp(300px, 50vw, 600px)" }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default AboutMeItem;
