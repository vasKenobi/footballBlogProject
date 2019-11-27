import React from 'react'

import './css/bootstrap.css'
import './css/colors.css'
import './css/font-awesome.min.css'
import './css/responsive.css'
import './css/style.css'
import './css/version/blog-football.css'


const App = () => {
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

        <section className="section first-section">
            <div className="container-fluid">
                <div className="masonry-blog clearfix">
                    <div className="left-side">
                        <div className="masonry-box post-media">
                             <img src="images/EPL/LFC_MC_Preview.png" alt="" className="img-fluid"/>
                             <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                        <span className="bg-aqua"><a href="blog-football-category-EPL.html" title="">English Premier League</a></span>
                                        <h4><a href="blog-football-EPL.html" title="">No Salah, Firmino or Mane in Liverpool and Manchester City combined XI </a></h4>
                                        <small><a href="blog-football-EPL.html" title="">08 November, 2019</a></small>
                                        <small><a href="#" title="">by Gzhegozh Bzhezh</a></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="center-side">
                        <div className="masonry-box post-media">
                             <img src="images/MSL/lodeiro.png" alt="" className="img-fluid"/>
                             <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                        <span className="bg-aqua"><a href="blog-football-category-MSL.html" title="">Major Soccer League</a></span>
                                        <h4><a href="blog-football-MSL.html" title="">Lodeiro vs Pozuelo: The creative pair central as Seattle meet Toronto</a></h4>
                                        <small><a href="blog-football-MSL.html" title="">9 November, 2019</a></small>
                                        <small><a href="#" title="">Gzhegozh Bzhezh</a></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right-side hidden-md-down">
                        <div className="masonry-box post-media">
                             <img src="images/bl/BMteam.png" alt="" className="img-fluid"/>
                             <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                        <span className="bg-aqua"><a href="blog-football-category-BL.html" title="">English Premier League</a></span>
                                        <h4><a href="blog-football-BL.html" title="">What next for Bayern following Kovac sacking?</a></h4>
                                        <small><a href="blog-football-BL.html" title="">05 November, 2019</a></small>
                                        <small><a href="#" title="">by Gzhegozh</a></small>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section wb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div className="page-wrapper">
                            <div className="blog-list clearfix">
                                <div className="blog-box row">
                                    <div className="col-md-4">
                                        <div className="post-media">
                                            <a href="blog-football-EPL.html" title="">
                                                <img src="images/EPL/LFC_MC_hm.png" alt="" className="img-fluid"/>
                                                <div className="hovereffect"></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="blog-meta big-meta col-md-8">
                                        <span className="bg-aqua"><a href="blog-football-category-EPL.html" title="">English Premier League</a></span>
                                        <h4><a href="blog-football-EPL.html" title="">No Salah, Firmino or Mane in Liverpool and Manchester City combined XI </a></h4>
                                        <p>Here we run through the best rated combined XI between Liverpool and Manchester City ahead of their highly anticipated match at Anfield on Sunday. Using Premier League ratings this season, only players with at least five appearances are considered, while injured and suspended players are ineligble.</p>
                                        
                                        <small><a href="blog-football-EPL.html" title="">08 November, 2019</a></small>
                                        <small><a href="#" title="">by Gzhegozh</a></small>
                                    </div>
                                </div>

                                <hr className="invis"/>

                                <div className="blog-box row">
                                    <div className="col-md-4">
                                        <div className="post-media">
                                            <a href="blog-football-MSL.html" title="">
                                                <img src="images/MSL/lodeiro_hm.png" alt="" className="img-fluid"/>
                                                <div className="hovereffect"></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="blog-meta big-meta col-md-8">
                                        <span className="bg-aqua"><a href="blog-football-category-MSL.html" title="">Major Soccer League</a></span>
                                        <h4><a href="blog-football-MSL.html" title="">Lodeiro vs Pozuelo: The creative pair central as Seattle meet Toronto</a></h4>
                                        <p>It all comes down to this. The 2019 MLS season comes to a head on Sunday night in a repeat of the 2016 MLS Cup final. Three years ago, Seattle Sounders emerged victorious on penalities after the pair had played out a 0-0 draw at BMO Field, with Toronto FC came away from the clash empty handed.</p>
                                        
                                        <small><a href="blog-football-MSL.html" title="">09 November, 2019</a></small>
                                        <small><a href="#" title="">by Gzhegozh</a></small>
                                    </div>
                                </div>

                                <hr className="invis"/>

                                <div className="blog-box row">
                                    <div className="col-md-4">
                                        <div className="post-media">
                                            <a href="blog-football-BL.html" title="">
                                                <img src="images/BL/Kovach_hm.png" alt="" className="img-fluid"/>
                                                <div className="hovereffect"></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="blog-meta big-meta col-md-8">
                                        <span className="bg-aqua"><a href="blog-football-category-BL.html" title="">German Bundesliga</a></span>
                                        <h4><a href="blog-football-BL.html" title="">What next for Bayern following Kovac sacking?</a></h4>
                                        <p>Niko Kovac could have been sacked 12 months ago. In that sense, then, he has endured a year-long stay of execution. On Sunday evening, the former Croatia international was relieved of his duties at the Allianz Arena after Bayern fell to a 5-1 hammering at the hands of Kovac's former employers Eintracht Frankfurt.</p>
                                        
                                        <small><a href="blog-football-BL.html" title="">05 November, 2019</a></small>
                                        <small><a href="#" title="">by Gzhegozh</a></small>
                                    </div>
                                </div>

                                <hr className="invis"/>

                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                        <div className="banner-spot clearfix">
                                            <div className="banner-img">
                                                <img src="images/banner.png" alt="" className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr className="invis"/>

                                <div className="blog-box row">
                                    <div className="col-md-4">
                                        <div className="post-media">
                                            <a href="blog-football-EPL-Klo.html" title="">
                                                <img src="images/EPL/Salah_hm.png" alt="" className="img-fluid"/>
                                                <div className="hovereffect"></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="blog-meta big-meta col-md-8">
                                        <span className="bg-aqua"><a href="blog-football-category-EPL.html" title="">English Premier League</a></span>
                                        <h4><a href="blog-football-EPL-Klo.html" title="">Liverpool vs Manchester: The ultimate 50/1 'Request A Bet'</a></h4>
                                        <p>In what is undeniably the biggest game of the 2019/20 Premier League campaign so far Liverpool are aiming to protect their unbeaten record this season against reigning champions Manchester City.</p>
                                        
                                        <small><a href="blog-football-EPL-Klo.html" title="">09 November, 2019</a></small>
                                        <small><a href="#" title="">by Gzhegozh</a></small>
                                    </div>
                                </div>

                                <hr className="invis"/>

                                <div className="blog-box row">
                                    <div className="col-md-4">
                                        <div className="post-media">
                                            <a href="blog-football-EPL-Vardy.html" title="">
                                                <img src="images/EPL/Vardy_hm.png" alt="" className="img-fluid"/>
                                                <div className="hovereffect"></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="blog-meta big-meta col-md-8">
                                        <span className="bg-aqua"><a href="blog-football-category-EPL.html" title="">English Premier League</a></span>
                                        <h4><a href="blog-football-EPL-Vardy.html" title="">Fanteam Fantasy Football: Vardy to extend top-six record at Arsenal's expense </a></h4>
                                        <p>Leicester will aim to take another step towards confirming a top-four berth this season and this weekend and could even head into the international break in second if they beat Arsenal and Liverpool beat Manchester City on Sunday.</p>
                                        
                                        <small><a href="blog-football-EPL-Vardy.html" title="">08 November, 2019</a></small>
                                        <small><a href="#" title="">by Gzhegozh</a></small>
                                    </div>
                                </div>

                                <hr className="invis"/>

                                <div className="blog-box row">
                                    <div className="col-md-4">
                                        <div className="post-media">
                                            <a href="blog-football-EPL-Leicester.html" title="">
                                                <img src="images/EPL/Leices_hm.png" alt="" className="img-fluid"/>
                                                <div className="hovereffect"></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="blog-meta big-meta col-md-8">
                                        <span className="bg-aqua"><a href="blog-football-category-EPL.html" title="">English Permier League</a></span>
                                        <h4><a href="blog-football-EPL-Leicester.html" title="">Leicester star triumphs to land PFA gong</a></h4>
                                        <p>Jamie Vardy has landed the PFA Premier League fan's player of the month award. The Leicester striker was exceptional for the high flying Foxes as he scored four times last month, more than any other Premier League player, as Brendan Rodgers' side ended October in the top four. </p>
                                        
                                        <small><a href="blog-football-EPL-Leicester.html" title="">04 November, 2019</a></small>
                                        <small><a href="#" title="">by Gzhegozh</a></small>
                                    </div>
                                </div>

                                <hr className="invis"/>

                                <div className="blog-box row">
                                    <div className="col-md-4">
                                        <div className="post-media">
                                            <a href="blog-football-EPL-TopScorer.html" title="">
                                                <img src="images/EPL/TopScorer_hm.png" alt="" className="img-fluid"/>
                                                <div className="hovereffect"></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="blog-meta big-meta col-md-8">
                                        <span className="bg-aqua"><a href="blog-football-category-EPL.html" title="">English Premier League</a></span>
                                        <h4><a href="blog-football-EPL-TopScorer.html" title="">Top scorer Vardy leapfrogs De Bruyne to top Premier League form rankings</a></h4>
                                        <p>Jamie Vardy has replaced Kevin De Bruyne at the top of the latest Premier League form rankings leaderboard after scoring for a third game running against Crystal Palace at the weekend.</p>
                                        
                                        <small><a href="blog-football-EPL-TopScorer.html" title="">05 November, 2019</a></small>
                                        <small><a href="#" title="">by Gzhegozh</a></small>
                                    </div>
                                </div>

                                <hr className="invis"/>

                                <div className="blog-box row">
                                    <div className="col-md-4">
                                        <div className="post-media">
                                            <a href="blog-football-EPL-TopScorer-LFC.html" title="">
                                                <img src="images/EPL/LFC_hm.png" alt="" className="img-fluid"/>
                                                <div className="hovereffect"></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="blog-meta big-meta col-md-8">
                                        <span className="bg-aqua"><a href="blog-football-category-EPL.html" title="">English Premier League</a></span>
                                        <h4><a href="blog-football-EPL-TopScorer-LFC.html" title="">Fanteam Fantasy Football: Liverpool fringe players to watch out for against Genk </a></h4>
                                        <p>We are now entering the business stage of the Champions League group stage and teams will start to discover their fate. The next three gameweeks will determine who qualifies for the knockout stage, who drops into the Europa League and who falls out of European competition altogether. </p>
                                        
                                        <small><a href="blog-football-EPL-TopScorer-LFC.html" title="">05 November, 2019</a></small>
                                        <small><a href="#" title="">by Gzhegozh</a></small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="invis"/>

                        <div className="row">
                            <div className="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-start">
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div className="sidebar">
                            <div className="widget">
                                <h2 className="widget-title">Search</h2>
                                <form className="form-inline search-form">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Search on the site"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                                </form>
                            </div>

                            <div className="widget">
                                <h2 className="widget-title">Recent Posts</h2>
                                <div className="blog-list-widget">
                                    <div className="list-group">
                                        <a href="blog-football-EPL.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <div className="w-100 justify-content-between">
                                                <img src="images/EPL/LFC_mn.png" alt="" className="img-fluid float-left"/>
                                                <h5 className="mb-1">No Salah, Firmino or Mane in Liverpool and Manchester City combined XI </h5>
                                                <small>08 November, 2019</small>
                                            </div>
                                        </a>

                                        <a href="blog-football-MSL.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <div className="w-100 justify-content-between">
                                                <img src="images/MSL/Seatle_mn.png" alt="" className="img-fluid float-left"/>
                                                <h5 className="mb-1">Lodeiro vs Pozuelo: The creative pair central as Seattle meet Toronto</h5>
                                                <small>09 November, 2019</small>
                                            </div>
                                        </a>

                                        <a href="blog-football-BL.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <div className="w-100 last-item justify-content-between">
                                                <img src="images/BL/BM_mn.png" alt="" className="img-fluid float-left"/>
                                                <h5 className="mb-1">What next for Bayern following Kovac sacking?</h5>
                                                <small>05 November, 2019</small>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="widget">
                                <h2 className="widget-title">Popular Categories</h2>
                                <div className="link-widget">
                                    <ul>
                                        <li><a href="blog-football-category-EPL.html">English Premier League <span>(888)</span></a></li>
                                        <li><a href="blog-football-category-MSL.html">Major Soccer League <span>(999)</span></a></li>
                                        <li><a href="blog-football-category-BL.html">German Bundesliga <span>(444)</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

  </div>
  )
}


export default App;
