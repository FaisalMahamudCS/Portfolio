import React from "react";

const AboutMe = () => {
  return (
    <div id="about">
      <div className="container">
        <h3 className="text-center text-warning">About Me</h3>
        <div className="row">
          <div className="col-12 col-lg-6">
            <img
              className="img-fluid"
              src="https://i.ibb.co/fM5CLg2/aboutme.png"
              alt=""
            />
          </div>
          <div className="col-12 mt-5 col-lg-6">
            <p>
              I am Faisal Mahamud, a Senior Full Stack Developer with 3+ years
              of PERN stack expertise, specializing in agricultural technology
              systems. I graduated from BGC Trust University with a B.Sc. in
              Computer Science & Engineering (CGPA: 3.86/4.00).
            </p>

            <p>
              Currently working as Full Stack Developer & Lead DevOps at
              Agrigate Network Ltd, I have built comprehensive agro-tech
              marketplace platforms with real-time data visualizations,
              interactive dashboards using Chart.js, and enterprise ERP systems.
              My expertise includes PostgreSQL optimization, AWS deployment,
              Docker containerization, and CI/CD pipelines.
            </p>

            <p>
              I have successfully delivered HIPAA-compliant healthcare
              platforms, agricultural technology projects, and comprehensive ERP
              systems. My achievements include 25% performance improvement
              through database optimization, 20% reduction in deployment time
              via automated CI/CD, and serving 100+ concurrent users with 99.9%
              uptime.
            </p>

            <p>
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
