import React from "react";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/aboutme.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box--about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h2 className="skills--section--heading">About Me</h2>
          <p className="hero--section--description">
            Experienced Software Engineer as Quality Analyst and intermediate
            Developer in designing and implementing innovative software
            solutions using React.js. <br />
            Seeking to leverage my skills in developing, improving and obtaining
            the necessary skills.
          </p>
          <span>
            <h3>Experience</h3>
            <ul className="hero--section--description">
              <li>CodeLab Systems, Mangalore (Intern, April 2024)</li>
              <li>Intellogic Software Pvt Ltd, Mangalore (Dec 2023)</li>
              <li>Nobleserve Pvt Ltd, Bangalore (Dec 2022)</li>
              <li>First American India Pvt Ltd, Bangalore (Sept 2021)</li>
            </ul>
          </span>
        </div>
      </div>
    </section>
  );
}
