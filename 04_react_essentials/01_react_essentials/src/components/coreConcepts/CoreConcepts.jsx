import React from "react";
import './CoreConcepts.css';

export default function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.description} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}