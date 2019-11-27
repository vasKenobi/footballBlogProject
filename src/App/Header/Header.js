import React from 'react'
import Topsearch from './Topsearch/Topsearch'
import Topbar from './Topbar/Topbar'
import Logo from './Logo/Logo'
import Navbar from './Navbar/Navbar'

const Header = () => {
	return (
    <div>

        <Topsearch/>
        <Topbar/>
        <Logo/>
        <Navbar/>

    </div>

    
    )
  }

  export default Header