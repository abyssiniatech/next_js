import React from 'react'

const Header = () => {
  return (
    <div className="bg-indigo-900 text-white flex items-center justify-between  p-6">
        <h1>My website</h1>
        <ul className="flex item-center justify-center gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button className="btn btn-soft btn-primary">Login</button>
    </div>
  )
}

export default Header
