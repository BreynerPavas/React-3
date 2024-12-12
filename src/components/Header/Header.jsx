import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
    <header>Header</header>
        <Link to="/">Home</Link>
        <Link to="/reserve">Reserve</Link>
        <Link to="/about">About</Link>
    </>
    
  )
}

export default Header