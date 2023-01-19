import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from "react-router-hash-link"
import "../styles/Linking.scss"


const Linking = () => {
  return (
    <div className='gopi'>

         <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/contact"}>Contact</Link>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brand</HashLink>
            <Link to={"/services"}>Services</Link> 
    </div>
  )
}

export default Linking