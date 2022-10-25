import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hero-container");
hiddenElements.forEach((el) => observer.observe(el));

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>
        Listening <i color="#1db954"> Redefined</i>.
      </h1>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          LEARN MORE
        </Button>
      </div>
      <div className="sample">
        <p>Description of the home screen placeholder yadayadayada</p>
      </div>
    </div>
  );
}

export default HeroSection;
