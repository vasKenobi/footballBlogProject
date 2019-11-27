import React from 'react'

const Header = () => {
	return (
    <div>

    <div className="collapse top-search" id="collapseExample">
          <div className="card card-block">
            <div className="newsletter-widget text-center">
                <form className="form-inline">
                    <input type="text" className="form-control" placeholder="What you are looking for?"/>
                    <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                </form>
              </div>
          </div>
      </div>

      <div className="topbar-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 hidden-xs-down">
                        <div className="topsocial">
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Youtube"><i className="fa fa-youtube"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i className="fa fa-pinterest"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Flickr"><i className="fa fa-flickr"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 hidden-md-down">
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="topsearch text-right">
                            <a data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i className="fa fa-search"></i> Search</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="header-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="logo">
                            <a href="blog-football-index.html"><img src="../images/version/blog-football-logo.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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

        </div>

    
    )
  }

  export default Header