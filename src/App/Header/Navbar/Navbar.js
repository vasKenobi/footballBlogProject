import React from 'react'


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
                                <a className="nav-link color-green-hover" href="blog-football-index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-green-hover" href="blog-football-category-EPL.html">English Premier League</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-green-hover" href="blog-football-category-MSL.html">USA Major Soccer League</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-green-hover" href="blog-football-category-BL.html">German Bundesliga</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-green-hover" href="blog-football-contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

    
    )
  }

  export default Navbar