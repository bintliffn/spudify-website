import React from "react";
import "../App.css";
import "./Documentation.css";

export default function Documentation() {
  return (
    <div className="info">
      <h1>Documentation</h1>
      <h2>Project Github Repository</h2>
      <p align="center">
        <a
          href="https://github.com/bintliffn/SpotifyStatistics-Recommendations"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spudify Github Repository
        </a>
      </p>
      <h2>Requirements</h2>
      <p align="center">
        <iframe
          title="Google Sheets Requirements"
          src="https://docs.google.com/spreadsheets/d/1dkrLl0Ad9vitMKxXvy-MftSmq9cyIRigKEl-5w15dP8/edit#gid=0"
          height={500}
          width={675}
        ></iframe>
      </p>
      <h2>Gantt Chart</h2>
      <p align="center">
        <iframe
          className="gantt"
          title="Google Sheets Gantt"
          src="https://docs.google.com/spreadsheets/d/1NmYfVro2YJXX868BZyjFInVhaj81q4kT/edit#gid=371999662"
          height={500}
          width={1400}
        ></iframe>
      </p>
      <h2>Figma</h2>
      <p align="center">
        <img
          src="images\figma.PNG"
          alt="This is supposed to be the figma"
        ></img>
      </p>
    </div>
  );
}
