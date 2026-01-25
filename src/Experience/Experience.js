import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Experience.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);

  const experiences = [
    {
      id: 1,
      company: "Agrigate Network Ltd.",
      position: "Senior Full-Stack Engineer / DevOps",
      period: "Feb 2025 – Present",
      location: "Dhaka, Bangladesh",
      achievements: [
        "Led development of scalable web applications for an agricultural platform serving real-time market prices, weather data, and AI-driven agent development",
        "Built React & Next.js frontend interfaces with reusable components and optimized rendering for performance and responsiveness",
        "Designed and maintained NestJS, Python, FastAPI, Go APIs using Prisma, Mongo, PostgreSQL with secure authentication and RBAC",
        "Implemented web security best practices including JWT, OAuth, secure cookies, CORS policies, and input validation aligned with OWASP guidelines",
        "Scaled services horizontally on AWS (EC2, S3) using Docker and Kubernetes",
        "Automated deployment pipelines using Docker, CI/CD, and GitHub Actions, reducing release time by 20%, improving system reliability, and reducing AWS cloud costs by 40% through infrastructure right-sizing and cloud-native optimization"
      ]
    },
    {
      id: 2,
      company: "TopOfStack Software Ltd.",
      position: "Software Engineer & DevOps",
      period: "July 2024 – Feb 2025",
      location: "Dhaka, Bangladesh",
      achievements: [
        "Developed and scaled web applications serving millions of users, focusing on performance, maintainability, and secure user flows",
        "Improved frontend performance by optimizing component rendering, API consumption, and state management",
        "Built secure backend services using NestJS, Node.js, PostgreSQL, MySQL and implemented OAuth-based authentication and role-based access control",
        "Delivered production systems including Muslim Bangla App and Melbourne Limolink, Science Master, Permisgo ensuring high availability, scaled for million users and smooth user experience",
        "Automated deployments with Docker and CI/CD, reducing release time and operational risks"
      ]
    },
    {
      id: 3,
      company: "Velozity Global Solutions",
      position: "Full Stack Developer & DevOps",
      period: "Jan 2022 – July 2024",
      location: "Remote",
      achievements: [
        "Built modern React & NextJS, Express JS, applications for healthcare and enterprise clients with a strong focus on usability and performance",
        "Developed secure, HIPAA-compliant platforms handling sensitive data with strict access control and encryption",
        "Built backend and application features including patient enrollment, service management, device tracking, and billing, improving workflow efficiency by 20%",
        "Integrated AI/ML-based cardiac rhythm analysis pipelines, enabling faster and more accurate diagnoses",
        "Implemented frontend security measures against XSS, CSRF, and common web vulnerabilities",
        "Optimized PostgreSQL queries and API responses to improve application responsiveness at scale",
        "Collaborated closely with cross functional teams to deliver business-critical features"
      ]
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const timeline = timelineRef.current;

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

    // Timeline items animation
    const timelineItems = timeline?.querySelectorAll(".experience-item");
    if (timelineItems) {
      gsap.fromTo(
        timelineItems,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timeline,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Achievement items animation
    timelineItems?.forEach((item) => {
      const achievements = item.querySelectorAll(".achievement-item");
      gsap.fromTo(
        achievements,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} id="experience" className="experience-section">
      <div className="experience-background">
        <div className="experience-gradient"></div>
      </div>

      <div className="container">
        <h3 ref={titleRef} className="experience-title">
          Professional Experience
        </h3>

        <div ref={timelineRef} className="experience-list">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-company-info">
                    <div className="experience-number">{String(index + 1).padStart(2, '0')}</div>
                    <div className="experience-details">
                      <h4 className="experience-company">{exp.company}</h4>
                      <h5 className="experience-position">{exp.position}</h5>
                      <div className="experience-meta">
                        <span className="experience-period">{exp.period}</span>
                        <span className="experience-location">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience-achievements">
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
