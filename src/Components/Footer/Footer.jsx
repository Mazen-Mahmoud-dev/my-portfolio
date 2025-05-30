import React from 'react'
import Logo from "../../assets/Logo.png"
const Footer = () => {
  return (
    <footer className='bg-gray-900 w-full py-8 px-4 dark:bg-gray-800'>
        <div className='flex align-items-center justify-between flex-col md:flex-row gap-24'>
            <div className='mx-auto md:mx-0'>
                <img src={Logo} alt="Logo" height={100} width={100} />
                <span className='footer-name text-xl capitalize text-white'>mazen mahmoud</span>
            </div>
            <div className='flex flex-col gap-8 items-center'>
                <div>
                    <div className='flex gap-10 flex-wrap text-xl text-white'>
                        <a href="https://www.linkedin.com/in/mazen-mahmoud-b03a15271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='rounded-[50%] hover:bg-gray-700 p-2 px-3 border-2 dark:border-cyan-500'><i className="fa-brands fa-linkedin-in" /></a>
                        <a href="https://www.facebook.com/profile.php?id=61550776358183" className='rounded-[50%] hover:bg-gray-700 p-2 px-3 border-2 dark:border-cyan-500'><i className="fa-brands fa-facebook-f" /></a>
                        <a href="https://www.instagram.com/mazen.programmer?igsh=MTA1Z3g0ZGhwdTVycw==" className='rounded-[50%] hover:bg-gray-700 p-2 px-3 border-2 dark:border-cyan-500'><i className="fa-brands fa-instagram" /></a>
                    </div>
                </div>
                <div>
                    <p className='text-white text-sm'>--Copyrights 2025-- All Rights Reserved here By Mazen Mahmoud Hosney</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer