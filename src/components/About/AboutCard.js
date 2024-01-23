import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sami Noroozi </span>
            from <span className="purple"> Jönköping, Sweden.</span>
            <br />
            I am currently studying Computer Engineering with a focus on AI and
            Machine Learning at Jönköping University. I have a strong passion
            for learning new technologies, especially in the field of AI. As an
            individual, I am highly ambitious and driven, consistently eager to
            develop and improve.
            <br />
            <br />
            <b>
              <b className="purple">Apart</b> from work and study, some other
              activities that I love to do!
            </b>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <b>Gym and exercise</b> to have a balanced life
            </li>
            <li className="about-activity">
              <ImPointRight /> <b>Playing Games</b> to have fun
            </li>

            <li className="about-activity">
              <ImPointRight /> <b>Hange out with friends</b> to pretend I am
              social "lol"
            </li>
            <li className="about-activity">
              <ImPointRight /> <b>Work on my own projects</b> to actually learn
              how to build something
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
