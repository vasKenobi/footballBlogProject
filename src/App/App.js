import React from 'react'

import '../css/bootstrap.css'
import '../css/colors.css'
import '../css/font-awesome.min.css'
import '../css/responsive.css'
import '../css/style.css'
import '../css/version/blog-football.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
  

const App = () => {
	return (
    <div>
        <Header/>
			  <Main/>
			  <Footer/>

  </div>
  )
}


export default App;
