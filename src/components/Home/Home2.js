import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import laptopImg from "../../Assets/about.png";
import { MdEmail } from "react-icons/md";

import { Link } from "react-router-dom";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1
              style={{
                fontSize: "2.6em",
                fontWeight: "bold",
                textShadow: "2px 2px #000000",
              }}
            >
              <span className="purple">ABOUT THIS SITE</span>
            </h1>
            <p className="home-about-body">
              Welcome to my website. Please feel free to read more{" "}
              <Link className="purple" to="/about">
                about
              </Link>{" "}
              me, or you can check out my{" "}
              <Link className="purple" to="/resume">
                resume
              </Link>{" "}
              ,{" "}
              <Link className="purple" to="/project">
                projects
              </Link>{" "}
              or {" "}
              <Link className="purple" to="/experience">
                experiences
              </Link>. This is a great way for me to introduce myself and not being limited to a single page resume.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h4 className="purple">Feel free to connect with me</h4>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/potatohunter69"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sami-noroozi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:saminoorzy@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
