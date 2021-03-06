import React from "react";
import "./Results.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        🗣
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
