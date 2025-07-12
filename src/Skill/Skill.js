import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skill.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const skills = skillsRef.current;

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

    // Skills grid animation
    const skillCards = skills.children;
    gsap.fromTo(
      skillCards,
      { opacity: 0, y: 100, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skills,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Hover effects for skill cards
    Array.from(skillCards).forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
          boxShadow: "0 20px 40px rgba(255, 193, 7, 0.3)",
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
  }, []);

  return (
    <div ref={sectionRef} className="skills-section">
      <div className="skills-background">
        <div className="skills-gradient"></div>
      </div>

      <div className="container">
        <h4 ref={titleRef} className="skills-title">
          Technical Skills
        </h4>

        <div ref={skillsRef} className="skills-grid">
          <div className="skill-card">
            <img
              src="https://i.ibb.co/F5NrVwP/4373213-js-logo-logos-icon.png"
              alt="JavaScript"
              className="skill-icon"
            />
            <span className="skill-name">JavaScript</span>
          </div>

          <div className="skill-card">
            <img
              src="https://i.ibb.co/cJGszs2/1174949-js-react-js-logo-react-react-native-icon-3.png"
              alt="React.js"
              className="skill-icon"
            />
            <span className="skill-name">React.js</span>
          </div>

          <div className="skill-card">
            <img
              src="https://i.ibb.co/FWHxSrp/1012818-code-development-logo-nodejs-icon.png"
              alt="Node.js"
              className="skill-icon"
            />
            <span className="skill-name">Node.js</span>
          </div>

          <div className="skill-card">
            <img
              src="https://i.ibb.co/Zh0f580/kisspng-express-js-node-js-javascript-session-web-applicat-5ae68d868c1d29-5946193015250589505739-1.png"
              alt="Express.js"
              className="skill-icon"
            />
            <span className="skill-name">Express.js</span>
          </div>

          <div className="skill-card">
            <img
              src="https://i.ibb.co/DMF72Gs/1012821-code-development-logo-mysql-icon.png"
              alt="PostgreSQL"
              className="skill-icon"
            />
            <span className="skill-name">PostgreSQL</span>
          </div>

          <div className="skill-card">
            <img
              src="https://i.ibb.co/6FtQCMK/1012822-code-development-logo-mongodb-programming-icon.png"
              alt="MongoDB"
              className="skill-icon"
            />
            <span className="skill-name">MongoDB</span>
          </div>

          <div className="skill-card">
            <img
              src="https://i.ibb.co/vQXVPpJ/kisspng-bootstrap-logo-computer-software-web-application-p-b-5abb6c2ab15640-3860806115222323627264.png"
              alt="Bootstrap 5"
              className="skill-icon"
            />
            <span className="skill-name">Bootstrap 5</span>
          </div>

          <div className="skill-card">
            <img
              src="https://i.ibb.co/sFv1KKt/Tailwind-CSS-Logo-svg.png"
              alt="Tailwind CSS"
              className="skill-icon"
            />
            <span className="skill-name">Tailwind CSS</span>
          </div>

          <div className="skill-card">
            <img
              src="https://i.ibb.co/9qb64JD/3069648-circle-laravel-programming-round-icon-icon.png"
              alt="AWS"
              className="skill-icon"
            />
            <span className="skill-name">AWS</span>
          </div>

          <div className="skill-card">
            <img
              src="https://i.ibb.co/9TfBzk3/1012812-code-development-logo-php-icon.png"
              alt="Docker"
              className="skill-icon"
            />
            <span className="skill-name">Docker</span>
          </div>

          <div className="skill-card">
            <img
              src="https://i.ibb.co/cJGszs2/1174949-js-react-js-logo-react-react-native-icon-3.png"
              alt="Chart.js"
              className="skill-icon"
            />
            <span className="skill-name">Chart.js</span>
          </div>

          <div className="skill-card">
            <img
              src="https://i.ibb.co/F5NrVwP/4373213-js-logo-logos-icon.png"
              alt="Git"
              className="skill-icon"
            />
            <span className="skill-name">Git</span>
          </div>

          <div className="skill-card">
            <img
              src="https://i.ibb.co/cJGszs2/1174949-js-react-js-logo-react-react-native-icon-3.png"
              alt="Next.js"
              className="skill-icon"
            />
            <span className="skill-name">Next.js</span>
          </div>

          <div className="skill-card">
            <img
              src="https://i.ibb.co/FWHxSrp/1012818-code-development-logo-nodejs-icon.png"
              alt="NestJS"
              className="skill-icon"
            />
            <span className="skill-name">NestJS</span>
          </div>

          <div className="skill-card">
            <img
              src="https://i.ibb.co/Zh0f580/kisspng-express-js-node-js-javascript-session-web-applicat-5ae68d868c1d29-5946193015250589505739-1.png"
              alt="Strapi.js"
              className="skill-icon"
            />
            <span className="skill-name">Strapi.js</span>
          </div>

          <div className="skill-card">
            <img
              src="https://i.ibb.co/DMF72Gs/1012821-code-development-logo-mysql-icon.png"
              alt="MySQL"
              className="skill-icon"
            />
            <span className="skill-name">MySQL</span>
          </div>

          <div className="skill-card">
            <img
              src="https://i.ibb.co/6FtQCMK/1012822-code-development-logo-mongodb-programming-icon.png"
              alt="Prisma"
              className="skill-icon"
            />
            <span className="skill-name">Prisma</span>
          </div>

          <div className="skill-card">
            <img
              src="https://i.ibb.co/vQXVPpJ/kisspng-bootstrap-logo-computer-software-web-application-p-b-5abb6c2ab15640-3860806115222323627264.png"
              alt="Zustand"
              className="skill-icon"
            />
            <span className="skill-name">Zustand</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
