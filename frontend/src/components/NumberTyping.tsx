// src/NumberTyping.tsx
import React, { useState, useEffect } from "react";

function NumberTyping() {
  const [typedNumbers, setTypedNumbers] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (/[0-9]/.test(e.key)) {
        setTypedNumbers((prev) => prev + e.key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h1>Number Typing App</h1>
      <h2>{typedNumbers}</h2>
    </div>
  );
}

export default NumberTyping;
