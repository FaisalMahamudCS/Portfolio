import React from "react";

const Blog = () => {
  return (
    <div className="container mt-2 mb-2">
      <h2 className="text-center m-2 text-warning">Blogs</h2>
      <div className="row">
        <div className="col-12  col-lg-4">
          <div className="card h-100  text-center bg-black">
            <img
              src="https://i.ibb.co/DMF72Gs/1012821-code-development-logo-mysql-icon.png"
              alt="PostgreSQL"
              className=""
              srcset=""
            />

            <h3>Blog On PostgreSQL Optimization</h3>
            <h5 className="text-muted">By Faisal Mahamud</h5>
            <p>
              Best practices for optimizing PostgreSQL schemas in agricultural
              technology applications
            </p>
            <a
              href="https://faisalmahamud.netlify.app/blog/postgresql-optimization"
              className="btn btn-warning text-decoration-none"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="col-12  col-lg-4">
          <div className="card h-100 text-center bg-black">
            <img
              src="https://i.ibb.co/cJGszs2/1174949-js-react-js-logo-react-react-native-icon-3.png"
              alt="React.js"
              srcset=""
            />

            <h3>Blog On PERN Stack</h3>
            <h5 className="text-muted">By Faisal Mahamud</h5>
            <p>
              Building scalable agricultural technology platforms with PERN
              stack
            </p>
            <a
              href="https://faisalmahamud.netlify.app/blog/pern-stack"
              className="btn btn-warning text-decoration-none"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="col-12  col-lg-4">
          <div className="card h-100 text-center bg-black">
            <img
              src="https://i.ibb.co/FWHxSrp/1012818-code-development-logo-nodejs-icon.png"
              alt="AWS"
              srcset=""
            />

            <h3>Blog On AWS Deployment</h3>
            <h5 className="text-muted">By Faisal Mahamud</h5>
            <p>
              Deploying agricultural technology applications on AWS with Docker
              and CI/CD
            </p>
            <a
              href="https://faisalmahamud.netlify.app/blog/aws-deployment"
              className="btn btn-warning text-decoration-none"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
