import React, { useEffect, useState } from "react";
import NumberTyping from "./NumberTyping";

const TypingArea = () => {
  const [typeNumber, setTypedNumbers] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (/[0-9]/.test(e.key)) {
        setTypedNumbers((prev) => prev + e.key);
      }
      //if ()
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
