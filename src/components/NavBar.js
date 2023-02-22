import React, { useState } from 'react'
// import closeIcon from '../imgs/closeIcon.png'
// import menuIcon from '../imgs/menuIcon.jpg'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const NavBar = () => {
    // state that holds the navbar status
    // if the navbar is open then it is true else it is false
  const [navbar, setNavbar] = useState(false);
  
  return (
          <nav className="w-full bg-gray-100 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
              {/* Logo and menu button */}
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/">
                            <h2 className="text-2xl font-bold text-black">DEMO</h2>
                        </a>
                        {/* Small screen menu/close buttons */}
                        {/* This will be hidden on screens at least `md` in size. */}
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                              {/* If the navbar is open then show the closed icon */}
                              {/* If the navbar is closed then show the menu icon */}
                                {navbar ? (
                                  // Close button icon
                                    // <img src={closeIcon} className="w-6 h-6 text-black" alt="menuIcon" />
                                    <AiOutlineClose/>
                                ) : (
                                  // Menu button icon
                                    // <img src={menuIcon} className="w-6 h-6 text-black" alt="menuIcon" />
                                    <AiOutlineMenu/>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {/* Menu items */}
                <div>
                  {/* The function in the classname controls closing and opening in small screens */}
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}
                    >
                      {/* space is adding whitespace */}
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-black hover:text-green-600 duration-200">
                                <a href="/">Home</a>
                            </li>
                            <li className="text-black hover:text-green-600 duration-200">
                                <a href="/">Blog</a>
                            </li>
                            <li className="text-black hover:text-green-600 duration-200">
                                <a href="/">About US</a>
                            </li>
                            <li className="text-black hover:text-green-600 duration-200">
                                <a href="/">Contact US</a>
                            </li>
                            
                        </ul>
                        {/* Login and signup buttons  for small screens*/}
                        <div className="mt-3 space-y-2 md:hidden ">
                          <a
                              href="/login"
                              className="inline-block w-full px-4 py-2 text-center text-white bg-green-600 rounded-md shadow hover:bg-gray-800 duration-200"
                          >
                              Log in
                          </a>
                          <a
                              href="/signup"
                              className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 duration-200"
                          >
                              Sign up
                          </a>
                      </div>
                    </div>
                </div>
                {/* Login and signup buttons  for large screens*/}
                <div className="hidden space-x-2 md:inline-block">
                    <a
                        href="/login"
                        className="px-4 py-2 text-white bg-green-600 rounded-md shadow hover:bg-gray-800 duration-200"
                    >
                        Log in
                    </a>
                    <a
                        href="/signup"
                        className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 duration-200"
                    >
                        Sign up
                    </a>
                </div>
            </div>
        </nav>
  )
}

export default NavBar

