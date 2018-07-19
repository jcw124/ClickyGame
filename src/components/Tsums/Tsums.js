import React from "react";
import "./Tsums.css";

const Tsums = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img className="images" alt={props.image.replace(".png"|".jpeg"|".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default Tsums;