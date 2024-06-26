import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import myWeb from "../../Assets/Projects/myWeb.png";
import objectDetect from "../../Assets/Projects/objectDetect.png";
import embeded from "../../Assets/Projects/embeded.png";
import onScheduling from "../../Assets/Projects/onScheduling.png";
import rockPaperScissors from "../../Assets/Projects/rockPaper.png";
import ecommers from "../../Assets/Projects/ecommers.png";
import scaniaApp from "../../Assets/Projects/ScaniaApp.png";


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
              imgPath={scaniaApp}
              isBlog={false}
              title="Scania App"
              description="Developed a fully functional app during my internship at Scania using Microsoft's low-code stack and Azure pre-trained models. The app features functionalities such as extracting information from incoming emails and performing various actions accordingly. Learned to leverage low-code tools and pre-trained models for rapid development. Due to company policy, I can't show the source code or demo."
              
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommers}
              isBlog={false}
              
              title="Flow Studio (ecommers)"
              description="I developed a fully functional e-commerce website from scratch, starting with the people willing to sell their products, to designing and deploying the platform on the cloud. Throughout this project, I gained substantial experience in bringing an idea to reality, used CI/CD strategies to efficiently deliver the product to customers and gather their feedback."
              ghLink="https://github.com/potatohunter69/Candle."
              demoLink="http://flowstudio.store"
            />
          </Col>


          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myWeb}
              isBlog={false}
              title="My Portfolio"
              description="My portfolio website build with react.js. It is a single page website with smooth scroll and particle background. It is a fully functional website with contact form and resume download. The website is responsive and works on all devices."
              ghLink="https://github.com/potatohunter69/My_Web"
              demoLink="https://www.saminoroozi.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rockPaperScissors}
              isBlog={false}
              title="Rock Paper Scissors"
              description="Build a rock paper scissors object detection model using Pytorch and Roboflow. The model is trained on 3000 images and deployed on Roboflow. Feel free to try it out by clicking on the demo button below"
              ghLink="https://github.com/potatohunter69/RockPaperScissors/blob/main/Rock.ipynb"
              demoLink="https://universe.roboflow.com/yolov8-ajpvj/sami-rockpaperscissors/model/1"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={objectDetect}
              isBlog={false}
              title="Object Detection with Tensorflow and Keras API"
              description="Build a object detection model with 98% accuracy using Tensorflow and Keras API. The model is trained on COCO dataset and can detect many different objects."
              ghLink="https://github.com/potatohunter69/ML_Modelsz"
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
