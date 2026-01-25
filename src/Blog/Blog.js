import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Blog.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const blogsRef = useRef(null);

  const blogs = [
    {
      id: 1,
      title: "PostgreSQL Optimization",
      author: "Faisal Mahamud",
      description: "Best practices for optimizing PostgreSQL schemas in agricultural technology applications",
      image: "https://i.ibb.co/DMF72Gs/1012821-code-development-logo-mysql-icon.png",
      link: "https://faisalmahamud.netlify.app/blog/postgresql-optimization"
    },
    {
      id: 2,
      title: "PERN Stack Development",
      author: "Faisal Mahamud",
      description: "Building scalable agricultural technology platforms with PERN stack",
      image: "https://i.ibb.co/cJGszs2/1174949-js-react-js-logo-react-react-native-icon-3.png",
      link: "https://faisalmahamud.netlify.app/blog/pern-stack"
    },
    {
      id: 3,
      title: "AWS Deployment",
      author: "Faisal Mahamud",
      description: "Deploying agricultural technology applications on AWS with Docker and CI/CD",
      image: "https://i.ibb.co/FWHxSrp/1012818-code-development-logo-nodejs-icon.png",
      link: "https://faisalmahamud.netlify.app/blog/aws-deployment"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const blogs = blogsRef.current;

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

    // Blog cards animation
    const blogCards = blogs?.querySelectorAll(".blog-card");
    if (blogCards) {
      gsap.fromTo(
        blogCards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: blogs,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} id="blog" className="blog-section">
      <div className="blog-background">
        <div className="blog-gradient"></div>
      </div>

      <div className="container">
        <h3 ref={titleRef} className="blog-title">
          Blogs
        </h3>

        <div ref={blogsRef} className="blog-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <div className="blog-image-container">
                <img src={blog.image} alt={blog.title} className="blog-image" />
                <div className="blog-overlay"></div>
              </div>
              <div className="blog-content">
                <h4 className="blog-card-title">{blog.title}</h4>
                <p className="blog-author">By {blog.author}</p>
                <p className="blog-description">{blog.description}</p>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-link"
                >
                  Read More <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
