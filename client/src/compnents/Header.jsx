import { Dropdown, Navbar } from 'flowbite-react'
import React from 'react'
import {Link, useLocation} from 'react-router-dom' 
import {  TextInput, Avatar } from 'flowbite-react'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon, FaSun} from 'react-icons/fa'
import { Button } from 'flowbite-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice'


export default function Header() {
    const path = useLocation().pathname;
    const {currentUser} = useSelector(state => state.user);
    const  dispatch = useDispatch();
    const {theme} = useSelector(state => state.theme);

  return (
    <Navbar className='border-b-2'>
        <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-3xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r text-3xl from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Atharva's</span>Blog
        </Link>

        <form >
            <TextInput
                type='text'
                placeholder='Search..'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline w-full'
            />
        </form>
        <button className='w-12 h-10 lg:hidden' color='gray' pill="true">
            <AiOutlineSearch/>
        </button>
        <div className='flex gap-2 md:order-2 items-center'>
            <button className='w-12 h-10 hidden sm:inline' color='gray' pill="true" onClick={()=>dispatch(toggleTheme())}>
                {theme === 'light' ? <FaSun/> : <FaMoon/>}
            </button>

        {currentUser ? (
            <Dropdown
                arrowIcon={false}
                inline
                label={
                    <img alt='user' src={currentUser.profilePicture} className='rounded-full w-10 h-10' />
                }
            >
                <Dropdown.Header>
                    <span className='block text-sm'>@{currentUser.username}</span>
                    <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
                </Dropdown.Header>
                <Link to={'/dashboard?tab=profile'}>
                    <Dropdown.Item>Profile</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item>Sign Out</Dropdown.Item>   
            </Dropdown> 
        ) : (
            <Link to='/sign-in'>
                <Button gradientDuoTone="purpleToBlue" className="px-6 py-2 text-lg border-2 border-transparent hover:border-blue-500">Sign In</Button>
            </Link>
        )}
            
            <Navbar.Toggle></Navbar.Toggle>       
        </div>
        <Navbar.Collapse>
            <ul className="flex flex-col md:flex-row md:gap-6">
                <li>
                    <Link to="/" className={`nav-links text-lg text-gray-700 hover:bg-gray-200 rounded-lg transition ${
                location.pathname === "/" ? "text-blue-600 font-semibold" : ""
              }`}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className={`nav-links text-lg text-gray-700 hover:bg-gray-200 rounded-lg transition ${
                location.pathname === "/about" ? "text-blue-600 font-semibold" : ""
              }`}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/projects" className={`nav-links text-lg text-gray-700 hover:bg-gray-200 rounded-lg transition ${
                location.pathname === "/projects" ? "text-blue-600 font-semibold" : ""
              }`}>
                        Projects
                    </Link>
                </li>
            </ul>
        </Navbar.Collapse>
    </Navbar>
  )
}
