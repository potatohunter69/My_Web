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
import clinic from "../../Assets/Projects/clinic.png";
import geneticAlgorithm from "../../Assets/Projects/GA.png";
import towerOfHanoi from "../../Assets/Projects/han.png";
import remarkableAI from "../../Assets/Projects/remarkableAI.png";


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
        <Row style={{ justifyContent: "center", paddingBottom: "10px", rowGap: "20px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={remarkableAI}
              isBlog={false}
              title="Remarkable AI - AI Keyboard"
              description="Founded and developed Remarkable AI, a cross-platform AI Keyboard application for iOS and Android built on top of open-source LLM models. The keyboard enables users to leverage LLM capabilities directly from their keyboard, featuring intelligent predictive text, context-aware autocorrect, and personalized suggestions. Built with on-device machine learning models for real-time typing assistance, boosting keyboard performance and responsiveness. Successfully launched to both App Store and Google Play Store."
              liveLink="https://remarkableai.app"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geneticAlgorithm}
              isBlog={false}
              title="Genetic Algorithm for TSP Optimization"
              description="Developed a sophisticated Genetic Algorithm from scratch to solve the Traveling Salesman Problem (TSP). The implementation features custom crossover, mutation, and selection operators, optimizing routes for up to 500(can be increased) cities with 95% efficiency. The solution has practical applications in logistics, delivery planning, and network optimization, demonstrating advanced algorithm design and evolutionary computation techniques."
              ghLink="https://github.com/potatohunter69/GA_for_TSP"
            />
          </Col>

    

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clinic}
              isBlog={false}
              title="Clinic website"
              description="Developed a modern website for one of Gothenburg's leading medical clinics using Flutter and Firebase. Gained experience in building real-world products, communicating with stakeholders, monetizing the platform, and establishing strong customer relationships."
            
              liveLink="https://uniquestyle.se/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scaniaApp}
              isBlog={false}
              title="Scania App"
              description="Developed various projects during my internship and summer training program at Scania using Microsoft's low-code stack and Microsoft Azure. Learned to work agile and effectively as part of a team in a large organization. Due to company policy, I am unable to share the source code or demos of my projects."
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={towerOfHanoi}
              isBlog={false}
              title="Tower of Hanoi with ASP Solver"
              description="Developed an interactive puzzle game featuring both classic and magnetic variants of Tower of Hanoi, powered by Answer Set Programming (ASP). Built with Python and Pygame, the system includes an intelligent hint system, autoplay mode, and real-time move validation. The ASP solver efficiently computes optimal solutions and validates moves, while the magnetic variant adds unique polarity-based constraints, demonstrating advanced logic programming and puzzle optimization techniques."
              ghLink="https://github.com/potatohunter69/TowerOfHanoi"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rockPaperScissors}
              isBlog={false}
              title="Rock Paper Scissors AI"
              description="Built an advanced rock-paper-scissors object detection model using PyTorch and Roboflow. The model is trained on a dataset of 3,000 images and achieves high accuracy in real-time hand gesture recognition. Try the live demo to play against the AI!"
              ghLink="https://github.com/potatohunter69/RockPaperScissors/blob/main/Rock.ipynb"
              demoLink="https://universe.roboflow.com/yolov8-ajpvj/sami-rockpaperscissors/model/1"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommers}
              isBlog={false}
              title="Flow Studio (E-commerce)"
              description="I developed a fully functional e-commerce website from scratch, starting with the people willing to sell their products, to designing and deploying the platform on the cloud. Throughout this project, I gained substantial experience in bringing an idea to reality, used CI/CD strategies to efficiently deliver the product to customers and gather their feedback."
              ghLink="https://github.com/potatohunter69/Candle."
              liveLink="https://flutterflows.azurewebsites.net"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={embeded}
              isBlog={false}
              title="Embedded Systems Portfolio"
              description="Created various embedded systems projects using FPGA, Microcontrollers, Arduino, and NVIDIA Jetson Nano. Projects include sensor integration, real-time data processing, and hardware-software interfacing, demonstrating practical experience with embedded systems development."
              ghLink="https://github.com/potatohunter69/Mikrodatorteknik"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onScheduling}
              isBlog={false}
              title="Online Event Scheduling Application"
              description="Developed a full-stack event scheduling application using the MERN stack (MongoDB, Express.js, React, Node.js). Implemented features like real-time updates, user authentication, and calendar integration. Used Git for version control and followed MVC architecture patterns."
              ghLink="https://github.com/ErkWWW2/OES"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
