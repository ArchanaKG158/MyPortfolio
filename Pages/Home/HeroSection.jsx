import React from "react";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Archana</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">MERN Stack</span>
            <br />
            Developer
          </h1>
          <p className="hero--section--description">
            Associate Software Engineer | Quality Analyst | JavaScript |
            React.js | Node.js | MongoDB | Express.js
          </p>
        </div>
      </div>
      <div className="hero-section--img">
        <img src="./img/ProfileImg.png" alt="Hero Section" />
      </div>
    </section>
  );
}
