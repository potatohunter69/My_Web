import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Engineer Specializing in AI and ML",
          "Specializing in AI and Machine Learning",
          "Passionate about exploring new technologies",
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
