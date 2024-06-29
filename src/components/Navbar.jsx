import React from 'react'
import { MdDeveloperBoard } from 'react-icons/md'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <div className='flex justify-between items-center py-8 text-white max-sm:grid max-sm:grid-cols-1 max-sm:text-center max-sm:gap-5'>
            <div className='flex gap-2 items-center max-sm:justify-center'>
                <MdDeveloperBoard size={50} color='white' />
                <h1 className='text-2xl font-bold'>DevS Community</h1>
            </div>
            <div className='flex justify-between items-center w-[60%] max-sm:w-full'>
                <nav className='flex items-center gap-6 max-sm:gap-4 text-xl'>
                    <NavLink to={'/'} className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Home</NavLink>
                    <NavLink to={'/about'} className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">About</NavLink>
                    <NavLink to={'/projects'} className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Projects</NavLink>
                </nav>
                <div>
                    <button onClick={() => navigate('/contact')} className='max-sm:w-[80px] w-[150px] h-[40px] rounded-lg bg-blue-500 text-white hover:shadow-blue-500 hover:shadow-md hover:text-white text-lg font-medium transition-all duration-300'>Hire us</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar