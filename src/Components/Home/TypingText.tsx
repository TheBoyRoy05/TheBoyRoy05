/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect, useState } from "react";

const TypingText = () => {
  const texts = ["a Developer", "an Engineer", "a Data Scientist", "a Maker"];
  const index = useRef(0);
  const letterIndex = useRef(0);
  const isDeleting = useRef(false);

  const [text, setText] = useState("");
  const [paused, setPaused] = useState(false);

  const typingSpeed = 100;
  const pauseBetweenWords = 2200;

  useEffect(() => {
    function type() {
      const currentText = texts[index.current];
      const fullTextLength = currentText.length;

      if (!isDeleting.current) {
        if (letterIndex.current < fullTextLength) {
          setText(currentText.slice(0, letterIndex.current + 1));
          letterIndex.current++;
          setTimeout(type, typingSpeed);
        } else {
          setPaused(true);
          setTimeout(() => {
            isDeleting.current = true;
            setPaused(false);
            type();
          }, pauseBetweenWords);
        }
      } else {
        if (letterIndex.current > 0) {
          setText(currentText.slice(0, letterIndex.current + 1));
          letterIndex.current--;
          setTimeout(type, typingSpeed);
        } else {
          isDeleting.current = false;
          index.current = (index.current + 1) % texts.length;
          setTimeout(type, typingSpeed);
        }
      }
    }

    setTimeout(type, 100);
  }, []);

  return (
    <div className="flex justify-center items-center mt-20 md:mt-32 px-4 h-[80vh]">
      <div className="w-full md:w-fit md:ml-[20vw] mb-[10vh] p-6 md:p-10 rounded-3xl overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 shadow-xl text-center md:text-left">
        <h1 className="text-4xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-[--hero-text]">Issac</span>
        </h1>
        <h3 className="text-2xl md:text-5xl font-bold text-gray-400">
          {`I'm ${text.split(" ")[0]} `}
          <span
            className={`${paused && "cursor-blink"} ${
              text.split(" ").slice(1).join(" ").charAt(0) === "M"
                ? "text-gradient"
                : "text-[--hero-text]"
            } pr-0.5 border-r-[2px] border-r-[--cursor-color]`}
          >
            {text.split(" ").slice(1).join(" ")}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default TypingText;
