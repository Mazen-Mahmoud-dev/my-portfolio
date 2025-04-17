import React from 'react'
import { Button, Navbar,Tooltip } from "flowbite-react";
import SwitcherMode from '../SwitcherMode/SwitcherMode';
import Logo from "../../assets/Logo.png"
const Header = () => {
  return (
    <Navbar fluid rounded className='fixed w-full border-b-4 dark:border-b-cyan-300 z-10'>
        <Navbar.Brand href="#" className='max-[497px]:mx-auto max-[497px]:mb-5'>
            <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Mazen Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Mazen Mahmoud</span>
        </Navbar.Brand>
        <div className="flex md:order-2  max-[497px]:mx-auto max-[497px]:gap-5">
            <SwitcherMode />
            <Button className='my-auto h-full'>Contact Me</Button>
            <Navbar.Toggle className='mr-3 ml-5' />
        </div>
        <Navbar.Collapse>
            <Navbar.Link href="#" active>
                Home
            </Navbar.Link>
            <Tooltip content="check my Skills">
                <Navbar.Link href="#skills">Skills</Navbar.Link>
            </Tooltip>
            <Tooltip content="check my Projects">
                <Navbar.Link href="#projects">Projects</Navbar.Link>
            </Tooltip>
            <Tooltip content="About me">
                <Navbar.Link href="#aboutus">About</Navbar.Link>
            </Tooltip>
            <Tooltip content="Contact me">
                <Navbar.Link href="https://wa.me/+2001148824619" target='_blank'>Contact</Navbar.Link>
            </Tooltip>
            
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header