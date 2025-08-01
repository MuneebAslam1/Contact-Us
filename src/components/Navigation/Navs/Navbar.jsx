import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={`container ${styles.navigationss}`}>
        <nav>
            <div className="logo">
            <img src="/images/logo.png" alt="" />
            </div> 
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar