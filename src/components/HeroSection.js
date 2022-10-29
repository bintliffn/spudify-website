import React from "react";
import "../App.css";
//import { Button } from "./Button";
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
      <section className="topSection" align="center">
        <h1>
          Listening <i color="#1db954"> Redefined</i>.
        </h1>
        <div className="hero-btns">
          <a href="#id-spudify-screens">LEARN MORE</a>
        </div>
      </section>
      <section id="id-spudify-screens" className="sampleWrap">
        <div className="sample">
          <table className="screens">
            <tr>
              <th>Home Screen</th>
              <th>Recommendations</th>
              <th>View Your Top Songs and Artists!</th>
            </tr>
            <tr>
              <td>
                <img
                  src="images\figma.PNG"
                  alt="This is supposed to be the figma"
                ></img>
              </td>
              <td>
                <img
                  src="images\figma.PNG"
                  alt="This is supposed to be the figma"
                ></img>
              </td>
              <td>
                <img
                  src="images\figma.PNG"
                  alt="This is supposed to be the figma"
                ></img>
              </td>
            </tr>
          </table>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;

/* Unused Button Component
<Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        ></Button>
*/
