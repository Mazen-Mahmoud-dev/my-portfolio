import React from 'react'
import Logo from "../../assets/Logo.png"
const AboutUs = () => {
  return (
    <section className="py-16 border-t-2 border-t-cyan-500 dark:bg-gray-900" id='aboutus'>
        <div>
            <h2 className="text-[#ebeced] text-[70px] sm:text-[100px] text-center font-extrabold tracking-[-3px] capitalize">about us</h2>
            <p className="mt-[-40px] text-[24px] text-center text-[#797979]">who I am ?</p>
        </div>
        <div className='mt-24 flex flex-col md:flex-row md:justify-between items-center md:gap-28'>
            <div>
                <img src={Logo} alt="logo" className='w-full h-full' />
            </div>
            <div className='max-w-2xl md:border-l-2 border-l-cyan-500 px-8 md:pl-24 dark:text-white'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi amet explicabo iste, facere deserunt assumenda ipsam excepturi doloribus consequatur debitis id eaque? Unde totam veniam consequatur, enim ipsam doloribus iste est quae dolorem blanditiis sed perspiciatis illo soluta quaerat nesciunt architecto quos voluptates. Alias vitae qui praesentium! Hic, quasi deserunt?</p>
            </div>
        </div>
    </section>
  )
}

export default AboutUs