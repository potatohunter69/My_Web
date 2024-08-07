import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Instagram } from "@material-ui/icons";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Sami Noroozi</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>MIT Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/potatohunter69"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sami-noroozi/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
                <a
                  href="mailto:saminoorzy@gmail.com"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MdEmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sami.noroozi1/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                
                  <FaInstagram/>
                </a>
                  
                </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;