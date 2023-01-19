import { Link } from 'react-router-dom'
import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"

import "../styles/Header.scss"


const Header = () => {
  return (
    <nav>
        <h1>Akhtar.</h1>
        <main>
<Link to={"/link"}><AiOutlineMenu/></Link>
           
        </main>
    </nav>
  )
}

export default Header



// import React from "react";
// import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

// const Header = () => {
//   return (
//     <nav>
//       <h1>TechyStar.</h1>
//       <main>
//         <HashLink to={"/#home"}>Home</HashLink>
//         <Link to={"/contact"}>Contact</Link>
//         <HashLink to={"/#about"}>About</HashLink>
//         <HashLink to={"/#brands"}>Brands</HashLink>
//         <Link to={"/services"}>Services</Link>
//       </main>
//     </nav>
//   );
// };

// export default Header;