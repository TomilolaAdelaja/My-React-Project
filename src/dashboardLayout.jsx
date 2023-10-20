import React from 'react'
import {Outlet} from "react-router-dom"
import Sidebar from "./sidebar/Sidebar"
import Navbar from "./navbar/Navbar"
// import Home from './Home/Home'
// import Navbar from './Navbar/Navbar'
import './dashboard.css';

const DashSharedLayout = () => {
  return (
    <main className='container'>

         <section className='aside'>   

<Sidebar/>

         </section>

{/* <Home/> */}


<section className='home'>  
<Navbar/>
        <Outlet/>
</section>

    </main>


  )
}

export default DashSharedLayout