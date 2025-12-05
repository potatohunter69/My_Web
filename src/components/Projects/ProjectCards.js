import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaRocket } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ height: '100%' }}>
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ 
          height: "250px", 
          objectFit: "contain",
          backgroundColor: "#1a1a2e",
          borderBottom: "1px solid rgba(0,0,0,0.1)"
        }}
      />
      <Card.Body style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        padding: "1.8rem",
        backgroundColor: "rgba(255, 255, 255, 0.03)"
      }}>
        <Card.Title style={{ 
          fontSize: "1.4rem", 
          fontWeight: "600",
          marginBottom: "1.2rem",
          color: "#c770f0"
        }}>{props.title}</Card.Title>
        <Card.Text style={{ 
          textAlign: "justify",
          flex: 1,
          marginBottom: "1.5rem",
          fontSize: "0.95rem",
          lineHeight: "1.6",
          color: "#fff",
          opacity: "0.9"
        }}>
          {props.description}
        </Card.Text>
        <div style={{ 
          display: 'flex', 
          gap: '12px',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          marginTop: 'auto'
        }}>
          {props.ghLink && (
            <Button 
              variant="primary" 
              href={props.ghLink} 
              target="_blank"
              style={{
                padding: "0.5rem 1rem",
                fontSize: "0.9rem"
              }}
            >
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{
                padding: "0.5rem 1rem",
                fontSize: "0.9rem"
              }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}

          {props.liveLink && (
            <Button
              variant="success"
              href={props.liveLink}
              target="_blank"
              style={{
                padding: "0.5rem 1rem",
                fontSize: "0.9rem"
              }}
            >
              <FaRocket /> &nbsp;
              {"Visit"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
