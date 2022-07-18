import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <nav>
    <div className='navbar'>
      <div className='title'>
        YourChallenge
      </div>
      
        <ul className='items-content'>
          <li className='product'>product</li>
          <li className='download'>download</li>
          <li className='pricing'>pricing</li>
        </ul>
      
    </div>
    </nav>
  )
}

export default Navbar