import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AiOutlineMail } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
import "./Banner.css";
import { GoMarkGithub } from "react-icons/go";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const bannerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const socialRef = useRef(null);
  const buttonRef = useRef(null);
  const typewriterRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial animation sequence
    tl.fromTo(
      bannerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        textRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        imageRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        Array.from(socialRef.current.children),
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      );

    // Hover animations for social icons
    Array.from(socialRef.current.children).forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          scale: 1.2,
          duration: 0.3,
          ease: "power2.out",
          color: "#ffc107",
        });
      });

      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
          color: "#ffc107",
        });
      });
    });

    // Button hover animation
    buttonRef.current.addEventListener("mouseenter", () => {
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        boxShadow: "0 10px 30px rgba(255, 193, 7, 0.3)",
      });
    });

    buttonRef.current.addEventListener("mouseleave", () => {
      gsap.to(buttonRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        boxShadow: "0 5px 15px rgba(255, 193, 7, 0.2)",
      });
    });

    // Scroll-triggered animations for image
    ScrollTrigger.create({
      trigger: bannerRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to(imageRef.current, {
          scale: 1.05,
          duration: 2,
          ease: "power2.out",
        });
      },
    });

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    const typewriterTexts = [
      "Full-Stack Engineer",
      "React & Node.js Specialist",
      "Microservices Architect",
      "DevOps Engineer",
      "TypeScript Expert",
    ];

    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;
    let typeSpeed = 100;

    const typeWriter = () => {
      const fullText = typewriterTexts[currentIndex];

      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
        typeSpeed = 50;
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
        typeSpeed = 100;
      }

      if (typewriterRef.current) {
        typewriterRef.current.textContent = currentText;
      }

      if (!isDeleting && currentText === fullText) {
        typeSpeed = 2000; // Wait before deleting
        isDeleting = true;
      } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % typewriterTexts.length;
        typeSpeed = 500; // Wait before typing next
      }

      setTimeout(typeWriter, typeSpeed);
    };

    typeWriter();
  }, []);

  return (
    <div ref={bannerRef} className="banner-container">
      <div className="banner-background">
        <div className="gradient-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="p-5 container mx-auto overflow-hidden">
        <div className="row justify-content-center align-items-center">
          <div ref={textRef} className="col-12 col-lg-6 banner-text">
            <div className="greeting-text">
              <h4 className="mb-0">Hello! I'm</h4>
              <h1 className="name-text">Faisal Mahamud</h1>
            </div>

            <div className="typewriter-container">
              <h3>
                <span ref={typewriterRef} className="typewriter-text"></span>
                <span className="cursor">|</span>
              </h3>
            </div>

            <p className="description-text">
              Senior Full-Stack / Backend Engineer with 4+ years of experience
              designing and scaling SaaS platforms and distributed systems.
              Strong expertise in Node.js microservices, React, event-driven
              architectures (RabbitMQ), circuit breaker patterns, and
              cloud-native deployments on AWS. Proven ability to own production
              systems end-to-end, improve reliability, optimize cloud costs, and
              collaborate with cross-functional and offshore teams.
            </p>

            <div
              ref={socialRef}
              className="social-icons justify-content-center"
            >
              <a
                href="mailto:faisal.mahamud.cs@gmail.com"
                target="blank"
                className="social-link"
              >
                <AiOutlineMail className="social-icon" size={40} />
              </a>
              <a
                href="https://www.linkedin.com/in/faisalmahamud/"
                target="blank"
                className="social-link"
              >
                <GrLinkedin className="social-icon" size={40} />
              </a>
              <a
                href="https://github.com/FaisalMahamudCS"
                className="social-link"
                target="blank"
              >
                <GoMarkGithub className="social-icon" size={40} />
              </a>
            </div>

            <a
              ref={buttonRef}
              href="https://drive.google.com/uc?export=download&id=1RxA1WoIduLTmuVZN7b5ba88ajcF1k5ke"
              download
              className="download-btn"
            >
              <span className="btn-text">Download Resume</span>
              <span className="btn-icon">📄</span>
            </a>
          </div>

          <div
            ref={imageRef}
            className="col-12 col-lg-6 banner-image-container"
          >
            <div className="profile-image-wrapper">
              <img
                alt="Faisal Mahamud"
                className="profile-image-round"
                src="/protfolio1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
