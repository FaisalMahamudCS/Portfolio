import React from "react";
import "./Projects.css";
import { useNavigate } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = (props) => {
  const { id, name, description, live, tech } = props.project;
  const navigate = useNavigate();

  const projectDetail = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="project-list-item">
      <div className="project-header">
        <h3 className="project-name">{name}</h3>
        <div className="project-actions">
          <a href={live} className="live-link" target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt className="link-icon" />
            <span>Live</span>
          </a>
        </div>
      </div>

      <p className="project-description">{description}</p>

      {tech && tech.length > 0 && (
        <div className="project-tech">
          <span className="tech-label">Tech Stack:</span>
          <div className="tech-tags">
            {tech.map((technology, index) => (
              <span key={index} className="tech-tag">{technology}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
