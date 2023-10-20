import React from 'react'
import "../navbar/navbar.css"
import {CiSearch} from "react-icons/ci"
import {MdOutlineFavoriteBorder} from "react-icons/md"
import {IoIosNotificationsOutline} from "react-icons/io"
import admin from "../Image/user-icon-vector-260nw-393536320.jpg"

const Navbar = () => {
  return (
    <nav className="navbar">

<div className="search"> <CiSearch className='s-icon'/> <input type="search" placeholder="Search for anything........" className="input"/></div>
<div className='right-nav'> 

  <span className="r-icon"> <MdOutlineFavoriteBorder className="f-icon"/><div className='s'>5</div> </span>
  <span className="r-icon"><IoIosNotificationsOutline className="n-icon"/><div className='s'>2</div></span>
    <img src={admin} alt="" style= {{width: '8vh'}}/>
    
     </div>
    </nav>
  )
}

export default Navbar