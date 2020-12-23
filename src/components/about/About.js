import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="root-about">
      <div className="container-about">
        <div className="about-para">
          <h1>About us</h1>
          <p>
            paragraph is a series of related sentences developing a central
            idea, called the topic. Try to think about paragraphs in terms of
            thematic unity: a paragraph is a sentence or a group of sentences
            idea, called the topic. Try to think about paragraphs in terms of
            thematic unity: a paragraph is a sentence or a group of sentences
            that supports one central, unified idea. Paragraphs add one idea at
            a time to your broader argument
          </p>
        </div>
        <div className="container-whyus">
          <h1>Why us?</h1>
          <div className="whyus-flex-container">
            {[0, 1, 2].map((item, index) => {
              return (
                <div className="whyus-points" key={index}>
                  <h3>Why us?</h3>
                  <p>
                    paragraph is a series of related sentences developing a
                    central idea, called the topic. Try to think about
                    paragraphs in terms of thematic unity: a paragraph is a
                    sentence or a group of sentences idea, called the topic. Try
                    to think about paragraphs in terms of thematic unity: a
                    paragraph is a sentence or a group of sentences that
                    supports one central, unified idea. Paragraphs add one idea
                    at a time to your broader argument
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
