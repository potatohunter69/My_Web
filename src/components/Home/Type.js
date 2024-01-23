import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Engineer Student",
          "Specilizing in AI and Machine Learning",
          "Love to explore new technologies",
          "Gym Rat",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
