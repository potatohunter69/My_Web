import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiCanva,
  SiOpenai,
  SiGithub,
} from "react-icons/si";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you're importing Bootstrap CSS
import { GitHub } from "@material-ui/icons";

function Toolstack() {
  // Function to render tooltip
  const renderTooltip = (props, text) => (
    <Tooltip id="button-tooltip" {...props}>
      {text}
    </Tooltip>
  );

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Icons with react-bootstrap tooltips */}
      {[
        { icon: <SiMacos />, label: "macOS" },
        { icon: <SiVisualstudiocode />, label: "Visual Studio Code" },
        { icon: <SiCanva />, label: "Canva" },
        { icon: <SiOpenai />, label: "OpenAI and ChatGPT" },
        { icon: <SiGithub />, label: "OpenAI and ChatGPT" },
  
        // Add more icons and labels here as needed
      ].map((item, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            delay={{ show: 0, hide: 0 }}
            overlay={(props) => renderTooltip(props, item.label)}
          >
            <div>{item.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
