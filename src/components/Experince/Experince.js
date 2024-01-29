import React from "react";
import "./time.css"; // Ensure this CSS is being imported
import Timeline from "./Timeline";
import "../../style.css"; // Ensure this CSS is being imported
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Particle from "../Particle";

function Experience() {
  useEffect(() => {
    AOS.init();
  }, []);

  const titleStyle = {
    fontSize: "3em",
    marginTop: "15vh",
    marginBottom: "20px",
    textAlign: "center",
    color: "var(--imp-text-color)", // Using CSS variable
  };

  return (
    <section className="resume-section">
      <Particle/>
      {" "}
      {/* Added 'home-section' class */}
      <div className="container">
        <h1 className="title purple" style={titleStyle}>
          We are here{" "}
        </h1>{" "}
        {/* Added 'purple' class for color */}
        <div data-aos="fade-up">
          <Timeline />
        </div>
      </div>
    </section>
  );
}

export default Experience;
