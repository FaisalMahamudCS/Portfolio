import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutMe.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
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
        content,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.4"
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
          <div ref={contentRef} className="about-text-content">
            <p ref={addTextRef} className="about-paragraph">
              I am Faisal Mahamud, a Senior Full-Stack / Backend Engineer with 4+ years
              of experience designing and scaling SaaS platforms and distributed systems.
              I graduated from BGC Trust University with a B.Sc. in
              Computer Science & Engineering (CGPA: 3.86/4.00).
            </p>

            <p ref={addTextRef} className="about-paragraph">
              Currently working as Senior Full-Stack Engineer / DevOps at
              Agrigate Network Ltd, I lead development of scalable web applications
              for agricultural platforms serving real-time market prices, weather data,
              and AI-driven agent development. My expertise includes Node.js microservices,
              React, event-driven architectures (RabbitMQ), circuit breaker patterns,
              and cloud-native deployments on AWS.
            </p>

            <p ref={addTextRef} className="about-paragraph">
              I have successfully delivered production systems serving millions of users,
              including Muslim Bangla App, Melbourne Limolink, Science Master, Permisgo,
              and HIPAA-compliant healthcare platforms. My achievements include reducing
              AWS cloud costs by 40% through infrastructure right-sizing, reducing release
              time by 20% via automated CI/CD pipelines, and improving workflow efficiency
              by 20% through optimized backend features.
            </p>

            <p ref={addTextRef} className="about-paragraph">
              I am passionate about leveraging technology to solve real-world
              problems, particularly in scaling distributed systems and optimizing
              cloud infrastructure. I continuously strive to implement innovative
              solutions that drive business growth, improve system reliability,
              and enhance user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
