import React, { useEffect } from "react";
import Typed from "typed.js";

const TypingText = () => {
  useEffect(() => {
    const typed = new Typed(".typing-text", {
      strings: ["Vikiran.", "विकिरण.", "વિકિરણ.", "விகிரண்."],
      loop: true,
      typeSpeed: 70,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="typing-text text-6xl dark:text-slate-800 flex flex-row"></div>
  );
};

export default TypingText;
