import React, { useEffect, useState } from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';
import AllProject from '../fakedata/AllProject.json';
const ProjectDetails = () => {
    const [AllProjects,setAllProject]=useState([]);
    //fetch data
    useEffect(()=>{
        // fetch('AllProject.json')
        // .then(response =>response.json())
        // .then(data=>setAllProject(data))
        setAllProject(AllProject);
         },[])
         console.log(AllProject)
         const AllProject1=[
            {
             "_id":1,   
             "name":"Computer Assembler",
             "image":"https://i.ibb.co/yB41bg6/Screenshot-938.png",
             "description":"Computer Assembler is a manufacturer website",
             "live":"https://computer-manufacturer.web.app/",
             "client":"https://github.com/FaisalMahamudCS/computer-assembler-manufacturer-client",
             "server":"https://github.com/FaisalMahamudCS/computer-assembler-server"
            },
            {
            "_id":2,
            "name":"Tennis Inventory",
            "image":"https://i.ibb.co/YNzqD1Y/Screenshot-941.png",
            "description":"Tennis inventory is a inventory website.",
            "live":"https://sports-gear-inventory.web.app/",
            "client":"https://github.com/FaisalMahamudCS/tennis-inventory-client",
            "server":"https://github.com/FaisalMahamudCS/tennis-inventory-server"
        
            },
            {
                "_id":3,
                "name":"Faisal Photography",
                 "image":"https://i.ibb.co/QpDj8GW/Screenshot-939.png",
                 "description":"Faisal photography is a independent photographer website" ,
                 "live":"https://fir-auth-photo.web.app/",
                 "client":"https://github.com/FaisalMahamudCS/Faisal-photography",
                 "server":""     
            }
        ]
    
    return (
        <div>
             <div className="work row row-cols-1  g-4">
        {
            AllProjects.map(AllProjects=><ProductDetail AllProjects={AllProjects}></ProductDetail> )
        }
    </div>
        </div>
    );
};

export default ProjectDetails;