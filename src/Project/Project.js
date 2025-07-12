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

      // Projects grid animation
      const projectCards = projects.children;
      gsap.fromTo(
        projectCards,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: projects,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Hover effects for project cards
      Array.from(projectCards).forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
            boxShadow: "0 20px 40px rgba(255, 193, 7, 0.2)",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          });
        });
      });

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

        <div ref={projectsRef} className="projects-grid">
          {project.map((project) => (
            <Projects key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
