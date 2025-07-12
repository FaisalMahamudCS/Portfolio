import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutMe.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    const texts = textRefs.current;

    // Initial animation when section comes into view
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      title,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        image,
        { opacity: 0, x: -100, scale: 0.8 },
        { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.4"
      )
      .fromTo(
        content,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.6"
      )
      .fromTo(
        texts,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.4"
      );

    // Parallax effect for image
    gsap.to(image, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Text reveal animation on scroll
    texts.forEach((text, index) => {
      gsap.fromTo(
        text,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Hover effects
    image.addEventListener("mouseenter", () => {
      gsap.to(image, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        boxShadow: "0 20px 40px rgba(255, 193, 7, 0.2)",
      });
    });

    image.addEventListener("mouseleave", () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addTextRef = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <div ref={sectionRef} id="about" className="about-section">
      <div className="about-background">
        <div className="about-gradient"></div>
      </div>

      <div className="container">
        <h3 ref={titleRef} className="about-title">
          About Me
        </h3>

        <div className="about-content">
          <div className="about-image-container">
            <img
              ref={imageRef}
              className="about-image"
              src="https://i.ibb.co/fM5CLg2/aboutme.png"
              alt="Faisal Mahamud"
            />
            <div className="image-overlay"></div>
          </div>

          <div ref={contentRef} className="about-text-content">
            <p ref={addTextRef} className="about-paragraph">
              I am Faisal Mahamud, a Senior Full Stack Developer with 3+ years
              of PERN stack expertise, specializing in agricultural technology
              systems. I graduated from BGC Trust University with a B.Sc. in
              Computer Science & Engineering (CGPA: 3.86/4.00).
            </p>

            <p ref={addTextRef} className="about-paragraph">
              Currently working as Full Stack Developer & Lead DevOps at
              Agrigate Network Ltd, I have built comprehensive agro-tech
              marketplace platforms with real-time data visualizations,
              interactive dashboards using Chart.js, and enterprise ERP systems.
              My expertise includes PostgreSQL optimization, AWS deployment,
              Docker containerization, and CI/CD pipelines.
            </p>

            <p ref={addTextRef} className="about-paragraph">
              I have successfully delivered HIPAA-compliant healthcare
              platforms, agricultural technology projects, and comprehensive ERP
              systems. My achievements include 25% performance improvement
              through database optimization, 20% reduction in deployment time
              via automated CI/CD, and serving 100+ concurrent users with 99.9%
              uptime.
            </p>

            <p ref={addTextRef} className="about-paragraph">
              I am passionate about leveraging technology to solve real-world
              problems, particularly in the agricultural sector, and
              continuously strive to implement innovative solutions that drive
              business growth and user satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
