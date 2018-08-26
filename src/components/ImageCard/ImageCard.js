import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <span onClick={() => props.updateGame(props.id)} className="randomize">
    </span>
  </div>
);

export default ImageCard;
