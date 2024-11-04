// SkillsSlider.js
import React from 'react';
import "./SkillsSliderAnimation.css"
import ReactImage from "../../assets/skills/react.png"
import HTMLImage from "../../assets/skills/html.png"
import CSSImage from "../../assets/skills/css.png"
import JSImage from "../../assets/skills/js.png"
import ReduxImage from "../../assets/skills/redux.png"
import ReactRouterImage from "../../assets/skills/react-router.png"
import NPMImage from "../../assets/skills/npm.png"
import GitImage from "../../assets/skills/git.png"
import GitHubImage from "../../assets/skills/github.png"
import FlowBiteImage from "../../assets/skills/flowbite.svg"
import PostManImage from "../../assets/skills/postman.png"

const skillsData = [
  { src: HTMLImage, alt: 'HTML', name: 'HTML' },
  { src: CSSImage, alt: 'CSS', name: 'CSS' },
  { src: JSImage, alt: 'JavaScript', name: 'JavaScript' },
  { src: ReactImage, alt: 'React', name: 'React' },
  { src: ReactRouterImage, alt: 'React Router', name: 'React Router' },
  { src: ReduxImage, alt: 'Redux', name: 'Redux' },
  { src: NPMImage, alt: 'NPM', name: 'NPM' },
  { src: GitImage, alt: 'Git', name: 'Git' },
  { src: GitHubImage, alt: 'GitHub', name: 'GitHub' },
  { src: FlowBiteImage, alt: 'FlowBite', name: 'FlowBite'},
  { src: PostManImage, alt: 'Postman', name: 'Postman' },
];

const SkillsSlider = () => {
  return (
    <div className="skills-slider bg-slate-50 dark:bg-gray-800 relative py-32  dark:border-y-2 dark:border-y-cyan-500" id='skills'>
        <h4 className='text-center text-[70px] sm:text-[100px] font-extrabold dark:text-white mb-32 tracking-wide'>Skills</h4>
      <div className='w-[80%] mx-auto overflow-hidden'>
        <div className="wrapper-skills inline-flex  py-12 animate-slide transition-all duration-500">
            {skillsData.map((skill, index) => (
            <div
                className="skill border bg-white border-gray-300 dark:bg-gray-900 text-center mx-12 w-40 hover:scale-110 dark:hover:shadow-md dark:hover:shadow-cyan-500 flex flex-col items-center relative p-6 rounded-lg cursor-pointer transition-transform duration-300 dark:border-2 dark:border-l-cyan-700 dark:border-b-cyan-700 dark:border-r-cyan-500 dark:border-t-cyan-500"
                key={index}
            >
                <div className="img pb-2">
                    <img src={skill.src} alt={skill.alt} loading='lazy' className="w-12 h-12" />
                </div>
                <div className="name-skill">
                    <p className="dark:text-white text-lg font-semibold mt-2">{skill.name}</p>
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSlider;
