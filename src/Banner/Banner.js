import React, { useEffect, useRef, useState } from "react";
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
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const typewriterTexts = [
    "Senior Full Stack Developer",
    "PERN Stack Specialist",
    "Agricultural Technology Expert",
    "DevOps Engineer",
  ];

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
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.5"
      )
      .fromTo(
        imageRef.current,
        { opacity: 0, x: 100, scale: 0.8 },
        { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
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

    // Scroll-triggered animations
    ScrollTrigger.create({
      trigger: bannerRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to(imageRef.current, {
          rotation: 5,
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

      <div className="p-5 row justify-content-evenly align-items-center container mx-auto overflow-hidden">
        <div ref={textRef} className="col-12 col-md-6 banner-text">
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
            Senior Full Stack Developer with 3+ years of PERN stack expertise,
            specializing in agricultural technology systems. Proven experience
            in building scalable web applications with interactive data
            visualizations, RESTful APIs, and responsive UI/UX. Strong
            background in PostgreSQL optimization, AWS deployment, and CI/CD
            pipelines.
          </p>

          <div ref={socialRef} className="social-icons">
            <a
              href="mailto:faisal.mahamud.cs@gmail.com"
              target="blank"
              className="social-link"
            >
              <AiOutlineMail className="social-icon" size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/faisal-mahamud-cs/"
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

        <div ref={imageRef} className="col-12 col-md-6 banner-image-container">
          <div className="profile-image-wrapper">
            <img
              alt="Faisal Mahamud"
              className="profile-image"
              src="https://i.ibb.co/Kcx5rkvX/Whats-App-Image-2025-02-17-at-11-01-41-6a6c9bee.jpg"
            />
            <div className="image-glow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
