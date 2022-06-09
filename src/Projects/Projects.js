import React from 'react';
import './Projects.css'
const Projects = (props) => {
const {name,image,description}=props.project;
    return (
        <div className='col container '>
            <div className='bg-card text-white h-100'>
            <img src={image} className='img-fluid' alt="" srcset="" />
            <p>{name}</p>
            <p>{description}</p>
            </div>
        </div>
    );
};

export default Projects;