import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";


export default function NavBar() {
    return (
        <header className="bg-gray-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="text-white"
                        className="inline-flex items-center py-6 px-6 mr-6 text-indigo-200 hover:text-blue-600 text-4xl font-bold cursive tracking-widest"
                    >
                        Drom Digital
                    </NavLink>
                    <NavLink to="/post" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-indigo-300 hover:text-blue-600"
                        activeClassName="text-indigo-700 bg-gray-800"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink to="/projects"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-indigo-300 hover:text-blue-600"
                        activeClassName="text-indigo-700 bg-gray-800"
                    >
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-indigo-300 hover:text-blue-600"
                        activeClassName="text-indigo-700 bg-gray-800"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                    url="https://www.instagram.com/prop_g_machine/?hl=en" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height: 35, width: 35}} 
                    />
                    <SocialIcon 
                    url="https://www.youtube.com/channel/UCSRVxxCArcN4SvXCULYMwgw" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height: 35, width: 35}} 
                    />
                    <SocialIcon 
                    url="https://github.com/Drom-Machine" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height: 35, width: 35}} 
                    />
                </div>
            </div>
        </header>
    )
}