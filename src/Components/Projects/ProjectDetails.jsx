import React, { useEffect, useState } from 'react'
import { projects } from './ProjectsData';
import { useParams } from 'react-router-dom';
const ProjectDetails = () => {
  const { id } = useParams();
  const [project,setProject] = useState([])
  useEffect(()=>{
    const project = projects.filter((project) => project.id === +id);
    setProject(project)
  },[id])
  
  
  return (
    <div className='pt-[120px]'>
      {project?.map((item)=>{
        return <h2 key={item.id}>{item.name}</h2>
      })}
    </div>
  )
}

export default ProjectDetails
