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

      // Typing or Deleting logic
      if (!isDeleting.current) {
        // Typing logic
        if (letterIndex.current < fullTextLength) {
          setText(currentText.slice(0, letterIndex.current + 1));
          letterIndex.current++;
          setTimeout(type, typingSpeed);
        } else {
          setPaused(true);
          setTimeout(() => {
            isDeleting.current = true; // Start deleting after pause
            setPaused(false);
            type();
          }, pauseBetweenWords);
        }
      } else {
        // Deleting logic
        if (letterIndex.current > 0) {
          setText(currentText.slice(0, letterIndex.current + 1));
          letterIndex.current--;
          setTimeout(type, typingSpeed);
        } else {
          isDeleting.current = false;
          index.current = (index.current + 1) % texts.length; // Loop through words
          setTimeout(type, typingSpeed);
        }
      }
    }

    setTimeout(type, 100);
  }, []);

  return (
    <div className="flex mt-[16vw]">
      <div className="flex flex-col ml-[45vw] p-10 rounded-3xl overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 shadow-xl">
        <h1 className="text-[6rem] font-bold mr-12 mt-[-2rem]">
          Hi, I'm <span className="text-[--hero-text]">Issac</span>
        </h1>
        <h3 className="text-[4rem] font-bold text-gray-400">
          {`I'm ${text.split(" ")[0]} `}
          <span
            className={`${paused && "cursor-blink"} ${
              text.split(" ").slice(1).join(" ").charAt(0) == "M" ? "text-gradient" : "text-[--hero-text]"
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
