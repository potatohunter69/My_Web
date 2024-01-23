import React from "react";
import "./time.css"; // Ensure this CSS is being imported
import Timeline from "./Timeline";
import "../../style.css"; // Ensure this CSS is being imported
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Experience() {
  useEffect(() => {
    AOS.init();
  }, []);
  // Inline styles
  const sectionStyle = {
    paddingTop: "110px",
    paddingBottom: "30px",
    color: "white",
    position: "relative",
    backgroundImage: "var(--image-gradient), url(./home-bg.jpg)", // Using CSS variable and background image
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  };

  const titleStyle = {
    fontSize: "3em",
    marginTop: "15vh",
    marginBottom: "20px",
    textAlign: "center",
    color: "var(--imp-text-color)", // Using CSS variable
  };

  return (
    <section
      className="section home-section"
      id="experience"
      style={sectionStyle}
    >
      {" "}
      {/* Added 'home-section' class */}
      <div className="container" style={containerStyle}>
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
