import React from "react";
import { Bounce, Slide } from "react-reveal";
import Typewriter from "typewriter-effect";
import { AiOutlineMail } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
import "./Banner.css";
import { GoMarkGithub } from "react-icons/go";

const Banner = () => {
  return (
    <div className="p-5 row justify-content-evenly align-items-center container mx-auto overflow-hidden">
      <Bounce left>
        <div className="col-12 col-md-6 banner-text">
          <h4 className="mb-0">Hello! I'm</h4>
          <h5>Faisal Mahamud</h5>
          <h3>
            <Typewriter
              options={{
                strings: [
                  "Senior Full Stack Developer",
                  "PERN Stack Specialist",
                  "Agricultural Technology Expert",
                  "DevOps Engineer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <p>
            Senior Full Stack Developer with 3+ years of PERN stack expertise,
            specializing in agricultural technology systems. Proven experience
            in building scalable web applications with interactive data
            visualizations, RESTful APIs, and responsive UI/UX. Strong
            background in PostgreSQL optimization, AWS deployment, and CI/CD
            pipelines.
          </p>

          <div className="social-icon m-3">
            <a
              href="mailto:faisal.mahamud.cs@gmail.com"
              target="blank"
              className="ml-3 text-decoration-none"
            >
              {" "}
              <AiOutlineMail
                className="text-warning mr-2"
                size={40}
              ></AiOutlineMail>
              <i className="far fa-envelope"></i>
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/faisal-mahamud-cs/"
              target="blank"
              className="text-decoration-none ml-5"
            >
              {" "}
              <GrLinkedin className="text-warning mr-2" size={40}></GrLinkedin>
              <i class="fab fa-linkedin"></i>
            </a>{" "}
            <a
              href="https://github.com/FaisalMahamudCS"
              className="text-decoration-none"
              target="blank"
            >
              {" "}
              <GoMarkGithub
                className="text-warning mr-2"
                size={40}
              ></GoMarkGithub>
              <i class="fab fa-github"></i>
            </a>
          </div>

          <a
            href="https://drive.google.com/file/d/1do6jgosyGrv9joAzH9vZ_jkZqvpV_ly2&export=download"
            download
            className="btn btn-warning  mt-3"
          >
            Download Resume
          </a>
        </div>
      </Bounce>

      <Slide bottom>
        <div className="col-12 col-md-6 banner-image my-3 my-md-0 ">
          <img
            className="img-fluid"
            src="https://i.ibb.co/r6Ssh0w/CV-image-removebg-1-removebg-preview.png"
            alt=""
          />
        </div>
      </Slide>
    </div>
  );
};

export default Banner;
