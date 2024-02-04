import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import myWeb from "../../Assets/Projects/myWeb.png";
import objectDetect from "../../Assets/Projects/objectDetect.png";
import embeded from "../../Assets/Projects/embeded.png";
import onScheduling from "../../Assets/Projects/onScheduling.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myWeb}
              isBlog={false}
              title="My Portfolio"
              description="My portfolio website build with react.js, . It is a single page website with smooth scroll and particle background. It is a fully functional website with contact form and resume download."
              ghLink="https://github.com/potatohunter69/My_Web"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={objectDetect}
              isBlog={false}
              title="Object Detection with Tensorflow and Keras API"
              description="Build a object detection model with 98% accuracy using Tensorflow and Keras API. The model is trained on COCO dataset and can detect many different objects."
              ghLink="https://github.com/potatohunter69/ML_Models"
              demoLink="a"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={embeded}
              isBlog={false}
              title="Embedded System Projects"
              description="Build diffrent emebedded system projects using FPGA, Microcontroller, Arduino and Nvida Jetson Nano. Learned how to use diffrent sensors and actuators and how to interface them with microcontrollers."
              ghLink="https://github.com/potatohunter69/Mikrodatorteknik"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card ">
            <ProjectCard
              imgPath={onScheduling}
              isBlog={false}
              title="Online Event Scheduling Application"
              description="Developed an online event scheduling application during my web development course using React, Node.js, Express, and MongoDB, applying various design patterns like MERN and MVC.
              Utilized GitHub for version control, enhancing software development and teamwork skills."
              ghLink="https://github.com/ErkWWW2/OES "
              demoLink=""
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
