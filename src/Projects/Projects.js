import React from 'react';
import './Projects.css'
import { Link ,NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {GrView } from 'react-icons/gr';
const Projects = (props) => {
const {id,name,image,description,live}=props.project;
const navigate=useNavigate();
const projectDetail=(id)=>{
    navigate(`/project/${id}`)
}
    return (
        <div className='col container '>
            <div className='bg-black p-2 card h-100'>
            <img src={image} className='img-fluid' alt="" srcset="" />
            <p>{name}</p>
            <p>{description}</p>

            <div className="mx-auto ">
            <button className='mr-3 btn btn-dark ml-3' onClick={()=>projectDetail(id)} >Details </button> 
                                    <a href={live} className=' btn btn-dark ml-3' target="blank">
                                        <span>Live</span>
                                        <i class="fab fa-github"></i>
                                    </a>
                                    
                                    
                                </div>
            </div>
        </div>
    );
};

export default Projects;