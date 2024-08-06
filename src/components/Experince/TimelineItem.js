import React from "react";
import MagnaImg from "../../Assets/Projects/magna.png";

function TimelineItem(props) {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-32x32">
        <img src={props.image} alt="" />
      </div>
      <div className="timeline-content">
        <h1  className="title is-4">{props.date}</h1>
        <h1 className="title is-4"><a target="_blank" rel="noreferrer" href={`${props.website}`}>{props.company}</a></h1>
        <h2  className="subtitle is-6">{props.position}</h2>
        <p >{props.summary}</p>
      </div>
    </div>
  );
}

export default TimelineItem;