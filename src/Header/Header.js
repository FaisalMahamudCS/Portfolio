import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Header = () => {
  const menuRef = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;

    // Animate menu items sliding in from right
    gsap.fromTo(
      menu,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      }
    );

    // Animate individual menu items with stagger
    const menuItems = menu.querySelectorAll(".nav-item");
    gsap.fromTo(
      menuItems,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.4,
      }
    );
  }, []);

  return (
    <div className="mb-5">
      <nav className="navbar px-3 py-0 navbar-expand-lg navbar-dark bg-dark text-white header fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <h3 className="logo text-warning">Faisal </h3>
          </Link>
          <button
            className="navbar-toggler mobile-expand-menu"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div
            ref={menuRef}
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav menu">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#experience" className="nav-link">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="nav-link">
                  Blogs
                </Link>
              </li>

              <li className="nav-item">
                <a href="#education" className="nav-link">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
              <li className="nav-item mt-2 mb-5 mb-sm-0">
                <a
                  href="https://drive.google.com/uc?export=download&id=1RxA1WoIduLTmuVZN7b5ba88ajcF1k5ke"
                  download
                  className=" resume btn btn-warning"
                >
                  <span>
                    <i className="fas fa-file-download"></i>
                  </span>{" "}
                  RESUME
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
