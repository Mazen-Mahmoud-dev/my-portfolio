import React from 'react'
import Logo from "../../assets/Logo.png"
import { Card, Tooltip } from 'flowbite-react'

import { Link } from 'react-router-dom'
import { projects } from './ProjectsData'
const Projects = () => {
    
  
  return (
    <section className="py-16 border-t-2 border-t-cyan-500 dark:bg-gray-900" id='projects'>
        <div>
            <h4 className="text-[#ebeced] text-[70px] md:text-[100px] text-center font-extrabold tracking-[-3px] capitalize">My Projects</h4>
            <img src={Logo} alt="logo" loading='lazy' className='mt-[-40px] mx-auto' width={100} height={100} />
        </div>
        <div className='mt-12 mx-auto'>
            <div className="flex flex-wrap gap-10 justify-center mx-5 sm:mx-0">
                {projects.map((project)=>{
                    return(
                        <Card
                            className="max-w-sm relative pb-8"
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={project.coverImage}
                            >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {project.name}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {project.description}
                            </p>
                            <div className="absolute bottom-0 right-3 flex gap-8">
                                <Tooltip content="More Details">
                                    <Link to={`/projects/${project.id}`} target='_blank' rel="noreferrer" className='rounded-[50%] flex hover:bg-gray-300 p-3 dark:text-cyan-500 dark:hover:bg-gray-900'><i class="fa-solid fa-info"></i></Link>
                                </Tooltip>
                                <Tooltip content="View Project" className='w-32 text-center'>
                                    <a href={project.viewLink} target='_blank' rel="noreferrer" className='rounded-[50%] flex hover:bg-gray-300 p-3 dark:text-cyan-500 dark:hover:bg-gray-900'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                                </Tooltip>
                            </div>
                        </Card>
                    )
                })}
                
                
            </div>
        </div>
    </section>
  )
}
export default Projects