import React from "react";
import Synonyms from "./Synonyms";
import "./Results.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <span className="titles"> definintion</span>:{" "}
            {definition.definition}
            <br />
            <em>{definition.example}</em>
            <br />
            <span className="titles"> synonyms</span>:{" "}
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
