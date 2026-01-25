import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Projects from "../Projects/Projects";
import "./Project.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const [project, setProject] = useState([]);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef(null);

  //fetch data
  useEffect(() => {
    fetch("project.json")
      .then((response) => response.json())
      .then((data) => setProject(data));
  }, []);

  useEffect(() => {
    if (project.length > 0) {
      const title = titleRef.current;
      const projects = projectsRef.current;

      // Title animation
      gsap.fromTo(
        title,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Projects list animation
      const projectItems = projects.children;
      gsap.fromTo(
        projectItems,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projects,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [project]);

  return (
    <div ref={sectionRef} className="projects-section">
      <div className="projects-background">
        <div className="projects-gradient"></div>
      </div>

      <div className="container">
        <h5 ref={titleRef} className="projects-title">
          My Projects
        </h5>

        <div ref={projectsRef} className="projects-list">
          {project.map((project) => (
            <Projects key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
