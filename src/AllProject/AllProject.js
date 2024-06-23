
import React, { useEffect, useState } from 'react';
import Projects from '../fakedata/Projects.json'
import AllProjects from '../AllProjects/AllProjects';
const AllProject = () => {
    const [AllProject,setAllProject]=useState([]);
    //fetch data
    useEffect(()=>{
        // fetch('AllProject.json')
        // .then(response =>response.json())
        // .then(data=>setAllProject(data))
        setAllProject(Projects);
         },[])
    return (
        <div  className='mt-5 container w-100'>
        <h5 className='text-center mt-3'>All Projects </h5>
    <div className="work row row-cols-1  g-4">
        {
            AllProject.map(AllProject=><AllProjects AllProject={AllProject}></AllProjects>)
        }
    </div>
    </div>
    );
};

export default AllProject;