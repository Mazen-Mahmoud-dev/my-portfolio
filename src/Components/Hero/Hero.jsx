import React from 'react'
import HeroImage from '../../assets/Hero.png'
import { Button } from 'flowbite-react'
import { motion } from "framer-motion";
import './Hero.css'
const Hero = () => {
  return (
    <main className="pt-[96px] dark:bg-slate-900 max-[640px]:h-full max-[640px]:pb-24 xl:h-full xl:pb-24" >
        <div className="hero pb-24 dark:!bg-none dark:shadow-none">
            <div className='mx-12 pt-12 max-[497px]:pt-56'>
                <div className='flex justify-between items-center flex-col-reverse sm:flex-col'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}>
                        <h1 className="text-2xl md:text-5xl text-center font-bold dark:text-white">Transform Your Ideas Into <span className="highlight">Stunning Websites</span></h1>
                        <h2 className="text-xl md:text-4xl text-center font-bold text-cyan-700">With start of 1000 EGP</h2>
                        <h5 className='font-extrabold dark:text-white text-center text-gray-800'>Freelance Front End Developer</h5>

                    </motion.div>
                    <div>
                        <img src={HeroImage} alt="Hero" className='max-lg:h-56 max-lg:w-56' height={500} width={500} />
                    </div>
                </div>
                <div className='flex gap-20 items-center mt-36 lg:mt-12 max-[497px]:flex-col'>
                        <Button><a href="https://wa.me/+2001148824619" className='flex items-center group' target='_blank' rel="noreferrer">Let's Start <i className="fa-solid fa-arrow-right mx-2 group-hover:ml-3 transition-all"></i></a></Button>
                        <Button className='bg-transparent hover:!bg-cyan-500  text-gray-900 hover:text-white outline outline-2 outline-cyan-500 dark:bg-transparent dark:text-white'><a href="#projects">View Projects</a></Button>
                </div>
                
            </div>
            {/* <div className="py-12 mt-36 text-center bg-slate-50 dark:bg-gray-800 text-4xl ">
              <p>🚀 <strong>5+ businesses</strong> launched with my websites!</p>
            </div> */}
        </div>
    </main>
  )
}

export default Hero