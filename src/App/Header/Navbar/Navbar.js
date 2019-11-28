import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
	return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-inverse navbar-toggleable-md">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-md-center">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a class="nav-link color-green-hover"><Link to="/">Home</Link></a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link color-green-hover"><Link to="/EnglishPL">English Premier League</Link></a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link color-green-hover"><Link to="/MajorSL">USA Major Soccer League</Link></a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link color-green-hover"><Link to="/BundesL">German Bundesliga</Link></a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link color-green-hover"><Link to="/Contact">Contact</Link></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

    
    )
  }

  export default Navbar