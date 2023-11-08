import React, { useEffect, useState } from "react";
import { generateNums } from "./scripts/makeNumbers";
import NumberTyping from "./NumberTyping";

const TypingArea = () => {
  const [typeNumber, setTypedNumbers] = useState<string>("");

  useEffect(() => {
    // handeling keyboard numbers entered when enter pressed, compare wtih the correct option
    const handleKeyDown = (e: KeyboardEvent) => {
      if (/[0-9]/.test(e.key)) {
        setTypedNumbers((prev) => prev + e.key);
      } else if (e.key == "Backspace") {
        setTypedNumbers((prev) => prev.slice(0, -1));
      } else if (e.key == "Enter") {
        // do nothing
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div>
      <div>
        <h1>Quick Math</h1>
      </div>
      <div>
        <p>
          {typeNumber} <span id="blinking-cursor">_</span>
        </p>
      </div>
    </div>
  );
};

export default TypingArea;
