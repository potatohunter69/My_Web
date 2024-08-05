import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Skillstack from "./Skillstack";
import myImg from "../../Assets/profPic.jpg";
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
            <img
              src={myImg}
              className="img-fluid"
              alt="avatar"
              style={{
                borderRadius: "50%",
                width: "300px",
                height: "300px",
                objectFit: "cover",
                backfaceVisibility: "hidden",
              }}
            />
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
