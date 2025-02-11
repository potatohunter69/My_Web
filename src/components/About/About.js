import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Skillstack from "./Skillstack";
import myImg from "../../Assets/Projects/me3.jpg";
import MyStories from "./Background";

function About() {
  return (
    <Container
      fluid
      className="about-section"
      style={{ paddingBottom: "20vh" }}
    >
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "5vh",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who is <strong className="purple">Sami</strong>?
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingTop: "20vh" }} className="about-img">
            <div style={{
              width: "365px",
              height: "600px",
              display: "inline-block",
              borderRadius: "20px",
              padding: "2px",
              background: "linear-gradient(145deg, rgba(128, 0, 128, 0.6), rgba(128, 0, 128, 0.2))",
              boxShadow: "0 10px 30px -10px rgba(128, 0, 128, 0.3)",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0 15px 35px -10px rgba(128, 0, 128, 0.4)",
              }
            }}>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "18px",
                  background: "transparent",
                }}
              />
            </div>
          </Col>
        </Row>

        <Row style={{ marginTop: "40vh" }}>
          <h1 className="project-heading">
            <b>
              Some <strong className="purple">Background</strong> about me
            </b>
          </h1>
          <MyStories />
        </Row>

        <Row style={{ marginTop: "35vh" }}>
          <h1 className="project-heading">
            <strong className="purple">Frameworks</strong> and{" "}
            <strong className="purple">programming languages</strong>
          </h1>
          <h1 style={{ marginBottom: "5vh" }}>that I have worked with</h1>
          <Techstack />
        </Row>

        <Row style={{ marginTop: "30vh" }}>
          <h1 className="project-heading">
            Key focus areas in our<strong className="purple"> Academic </strong>
            program so far
          </h1>
          <Skillstack />
        </Row>

        <Row style={{ marginTop: "60vh" }}>
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
        </Row>

        <Row style={{ marginTop: "40vh", marginBottom: "20vh" }}>
          <Github />
        </Row>
      </Container>
    </Container>
  );
}

export default About;
