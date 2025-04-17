import React from 'react'
import HeroImage from '../../assets/Hero.png'
// import ReactTypingEffect from 'react-typing-effect'
import { Button } from 'flowbite-react'
const Hero = () => {
  return (
    <main className="pt-[96px] h-[100vh] dark:bg-slate-900 max-[640px]:h-full max-[640px]:pb-24 xl:h-full xl:pb-24" >
        <div className="hero pb-24 dark:!bg-none dark:shadow-none">
            <div className='mx-12 pt-36 max-[497px]:pt-56'>
                <div className='flex justify-between items-center flex-col-reverse sm:flex-row'>
                    <div>
                        {/* <h3 className='text-4xl font-extrabold lg:text-5xl dark:text-white text-gray-800'>Hi! I'm <span className="block text-center ml-5 mt-12 dark:text-cyan-500"><ReactTypingEffect
                            text={["Mazen Mahmoud","Freelance Front End Developer"]}
                            cursorRenderer={cursor => <h4 className='text-5xl'>{cursor}</h4>}
                            typingDelay={0.1}
                            /></span>
                        </h3> */}
                        <h3 className='text-4xl font-extrabold lg:text-5xl dark:text-white text-center  text-gray-800'>Freelance Front End Developer</h3>
                    </div>
                    <div>
                        <img src={HeroImage} alt="Hero" className='max-lg:h-56 max-lg:w-56' height={500} width={500} />
                    </div>
                </div>
                <div className='flex gap-20 items-center mt-36 lg:mt-12 max-[497px]:flex-col'>
                        <Button><a href="https://wa.me/+2001148824619" className='flex items-center group' target='_blank' rel="noreferrer">Contact Me <i className="fa-solid fa-arrow-right mx-2 group-hover:ml-3 transition-all"></i></a></Button>
                        <Button className='bg-transparent hover:!bg-cyan-500 text-gray-900 outline outline-2 outline-cyan-500 dark:bg-transparent dark:text-white'><a href="#projects">View Projects</a></Button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Hero