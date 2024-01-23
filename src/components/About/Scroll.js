import React from "react";
import "./scroll.css";

function ScrollSymbol({ onClick }) {
  return (
    <div className="scroll-symbol" onClick={onClick}>
      <div className="scroll-symbol-arrow"></div>
    </div>
  );
}

export default ScrollSymbol;
