import React from "react";
import "./projects.scss";
import projectIntroImage from "../../media/buildings/home6.jpg";
import project1 from "../../media/buildings/project1.jpg";
import project2 from "../../media/buildings/project2.jpg";

const ourProjects = [
  {
    id: 1,
    title: "Project 1",
    description: `paragraph is a series of related sentences
    developing a central idea, called the topic. Try to
    think about paragraphs in terms of thematic unity:
    a paragraph is a sentence or a group of sentences
    that supports one central, unified idea. Paragraphs
    add one idea at a time`,
    titularPoints: [
      "paragraphs in terms of thematic unity",
      "paragraphs in terms of thematic unity",
      "paragraphs in terms of thematic unity",
    ],
    image: project1,
  },
  {
    id: 2,
    title: "Project 2",
    description: `paragraph is a series of related sentences
    developing a central idea, called the topic. Try to
    think about paragraphs in terms of thematic unity:
    a paragraph is a sentence or a group of sentences
    that supports one central, unified idea. Paragraphs
    add one idea at a time`,
    titularPoints: [
      "paragraphs in terms of thematic unity",
      "paragraphs in terms of thematic unity",
      "paragraphs in terms of thematic unity",
    ],
    image: project2,
  },
];
const Projects = () => {
  return (
    <div className="root-projects">
      <img src={projectIntroImage} alt="project -intro" />
      <div className="container-projects">
        <h1> Our Projects</h1>
        <div className="container-projects-inner">
          {ourProjects.map((project, index) => (
            <div className="container-project" key={index}>
              <div className="container-project-img">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="container-project-desc">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <ul>
                  {project.titularPoints.map((point, pointsindex) => (
                    <li key={pointsindex}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="container-btn">
          <button>Show all</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
