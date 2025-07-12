import React, { useEffect, useState } from "react";
import ProductDetail from "../ProductDetail/ProductDetail";
import AllProject from "../fakedata/AllProject.json";
const ProjectDetails = () => {
  const [AllProjects, setAllProject] = useState([]);
  //fetch data
  useEffect(() => {
    // fetch('AllProject.json')
    // .then(response =>response.json())
    // .then(data=>setAllProject(data))
    setAllProject(AllProject);
  }, []);
  console.log(AllProject);

  return (
    <div>
      <div className="work row row-cols-1  g-4">
        {AllProjects.map((AllProjects) => (
          <ProductDetail AllProjects={AllProjects}></ProductDetail>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
