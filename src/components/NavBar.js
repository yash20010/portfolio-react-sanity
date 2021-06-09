import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const NavBar = () => {
  return (
    <header className="bg-yellow-500">
      <div className="container mx-auto flex justify-between lg:flex-row md:flex-row flex-col items-center">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            className="inline-flex items-center py-6 px-3 mr-4 text-blue-500 hover:text-gray-50 text-6xl font-bold cursive tracking-widest"
            activeClassName="text-gray-50"
          >
            Yash
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-500 text-xl hover:text-gray-50"
            activeClassName="text-gray-50 bg-blue-700"
          >
            Blog Post
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-500 text-xl hover:text-gray-50"
            activeClassName="text-gray-50 bg-blue-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-500 text-xl hover:text-gray-50"
            activeClassName="text-gray-50 bg-blue-700"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/yash20010"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/yash20010"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/yash-c-parekh"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  )
}

export default NavBar
