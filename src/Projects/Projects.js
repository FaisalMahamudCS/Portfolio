import React from "react";
import "./Projects.css";
import { useNavigate } from "react-router-dom";
import { GrView } from "react-icons/gr";

const Projects = (props) => {
  const { id, name, image, description, live } = props.project;
  const navigate = useNavigate();

  const projectDetail = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={image} className="project-image" alt={name} />
        <div className="project-overlay">
          <div className="project-actions">
            <button className="details-btn" onClick={() => projectDetail(id)}>
              <GrView className="btn-icon" />
              <span>Details</span>
            </button>
            <a href={live} className="live-btn" target="blank">
              <span>Live</span>
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{name}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default Projects;
