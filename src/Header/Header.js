import React from 'react';
import { Slide } from 'react-reveal';
import { Link ,NavLink} from 'react-router-dom';

const Header = () => {
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
                            <i class="fas fa-bars"></i>
                        </span>
                    </button>
                    
                    <Slide right>
                        <div
                            className="collapse navbar-collapse justify-content-end"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav menu">
                                <li className="nav-item">
                                    <Link
                                        to="/"
                                        className="nav-link active"
                                        aria-current="page"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a href="#about" className="nav-link">
                                        About
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
                                        href="https://drive.google.com/uc?id=1do6jgosyGrv9joAzH9vZ_jkZqvpV_ly2&export=download"
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
                    </Slide>
                </div>
            </nav>









            














        </div>
    );
};

export default Header;