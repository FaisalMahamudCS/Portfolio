import React, { useEffect, useState } from 'react';
import Projects from '../Projects/Projects';

const Project = () => {
    const [project,setProject]=useState([]);
    //fetch data
    useEffect(()=>{
        fetch('project.json')
        .then(response =>response.json())
        .then(data=>setProject(data))
         },[])
    return (
        <div  className='mt-5 container w-100'>
        <h5 className='text-center mt-3'>My Projects </h5>
    <div className="work row row-cols-1 row-cols-md-3  g-4">
        {
            project.map(project=><Projects project={project}></Projects>)
        }
    </div>
    </div>
    );
};

export default Project;