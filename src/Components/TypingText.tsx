/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect, useState } from "react";

const TypingText = () => {
  const texts = ["Developer", "Engineer", "Data Scientist", "Maker"];
  const text = useRef("");
  const index = useRef(0);
  const letterIndex = useRef(0);
  const [paused, setPaused] = useState(false);
  const isDeleting = useRef(false);
  const typingTarget = useRef<HTMLSpanElement>(null!);
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
          text.current += currentText.charAt(letterIndex.current);
          typingTarget.current.innerHTML = text.current;
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
          text.current = text.current.substring(0, letterIndex.current - 1);
          typingTarget.current.innerHTML = text.current;
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
    <div className="flex mt-[12%]">
      <div className="flex flex-col ml-[50%] p-10 rounded-3xl overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 shadow-xl">
        <h1 className="text-[6rem] font-bold mr-12 mt-[-2rem]">
          Hi, I'm <span className="text-[--primary]">Issac</span>
        </h1>
        <h3 className="text-[4rem] font-bold">
          {"I'm a "}
          <span
            className={`${
              paused && "cursor-blink"
            } text-[--primary] pr-0.5 border-r-[2px] border-r-[--cursor-color]`}
            ref={typingTarget}
          />
        </h3>
      </div>
    </div>
  );
};

export default TypingText;
