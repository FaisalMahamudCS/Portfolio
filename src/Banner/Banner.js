import React from 'react';
import { Bounce, Slide } from 'react-reveal';
import Typewriter from "typewriter-effect";
import {AiOutlineMail} from 'react-icons/ai';
import {GrLinkedin} from 'react-icons/gr';
import './Banner.css';
import {GoMarkGithub} from 'react-icons/go';

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
                                    "Front End Developer",
                                    "MERN Stack Developer",
                                    "Programmer",
                                    "Quick Learner",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h3>
                    <p>
                       I am a Front End Developer with Deep understanding of MERN Stack.I am skilled at 
                       React JS, Express JS , JavaScript (ES6), Firebase, API,Bootstrap,
Tailwind,React Hook ,React Query,SPA,JWT, HTML, CSS,MongoDB , MySQL.I am comfortable at Node JS, Laravel,Php,C,C++

                    </p>

                    <div className="social-icon m-3">
                        <a
                            href="mailto:fmfahim1202@gmail.com"
                            target="blank" className='ml-3 text-decoration-none'
                        >
                            {" "} {" "}
                            <AiOutlineMail className='text-warning mr-2' size={40}></AiOutlineMail>
                            <i className="far fa-envelope"></i>
                        </a>
                        {" "} {" "}
                        <a
                            href="https://www.linkedin.com/in/faisal-mahamud-7995691b5/"
                            target="blank" className='text-decoration-none ml-5'
                        >
                            {" "} {" "}

                            <GrLinkedin  className='text-warning mr-2' size={40}></GrLinkedin>
                            <i class="fab fa-linkedin"></i>
                        </a>
                        {" "} {" "}
                        <a href="https://github.com/FaisalMahamudCS" className='text-decoration-none' target="blank">
                            {" "} {" "}
                            <GoMarkGithub  className='text-warning mr-2' size={40}></GoMarkGithub>
                            <i class="fab fa-github"></i>
                        </a>
                    </div>

                    
                    <a 
                                        href="https://drive.google.com/uc?id=1c0N9mbY07TJUGoHwN1LCCv7SBebmHjLI&export=download"
                                        download
                                        className="btn btn-warning  mt-3"
                                    >
                                        Download Resume
                    </a>
                </div>
            </Bounce>

            <Slide bottom>
                <div className="col-12 col-md-6 banner-image my-3 my-md-0 ">
                    <img className="img-fluid" src="https://i.ibb.co/r6Ssh0w/CV-image-removebg-1-removebg-preview.png" alt="" />
                </div>
            </Slide>
        </div>
    );
};

export default Banner;