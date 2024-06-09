import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import {
  DiPython,
  DiReact,
  DiDocker as DiDockerIcon, // Aliased to avoid conflict with SiDocker
  DiMongodb,
  DiGit,
  DiJavascript,
} from "react-icons/di";
import {
  SiCsharp,
  SiC,
  SiTensorflow,
  SiPytorch,
  SiDotnet,
  SiMicrosoftazure,
  SiNvidia,
  SiDocker,
  SiJavascript,
  PowerPlatform,
  SiPowerautomate,
} from "react-icons/si";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you're importing Bootstrap CSS

function Techstack() {
  // Function to render tooltip
  const renderTooltip = (props, text) => (
    <Tooltip id="button-tooltip" {...props}>
      {text}
    </Tooltip>
  );

  // Array of objects for each icon and its label
  const techs = [
    { icon: <SiC />, label: "C" },
    { icon: <SiCsharp />, label: "C#" },
    { icon: <DiPython />, label: "Python" },
    { icon: <SiTensorflow />, label: "Tensorflow" },
    { icon: <SiPytorch />, label: "PyTorch" },
    { icon: <DiReact />, label: "React" },
    { icon: <SiDotnet />, label: ".NET" },
    { icon: <SiMicrosoftazure />, label: "Microsoft Azure" },
    { icon: <DiMongodb />, label: "MongoDB" },
    { icon: <SiJavascript/>, label: "Javascript" },
    { icon: <DiGit />, label: "Git" },
    { icon: <DiDockerIcon />, label: "Docker" },
    { icon: <SiPowerautomate />, label: "Microsoft Power Platform" },
    // ... Add more techs as needed ...
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            delay={{ show: 0, hide: 0 }}
            overlay={(props) => renderTooltip(props, tech.label)}
          >
            <div>{tech.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
