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
        <div class="collapse top-search" id="collapseExample">
          <div class="card card-block">
            <div class="newsletter-widget text-center">
                <form class="form-inline">
                    <input type="text" class="form-control" placeholder="What you are looking for?"/>
                    <button type="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>
                </form>
              </div>
          </div>
      </div>

      <div class="topbar-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6 hidden-xs-down">
                        <div class="topsocial">
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i class="fa fa-facebook"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Youtube"><i class="fa fa-youtube"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i class="fa fa-pinterest"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i class="fa fa-twitter"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Flickr"><i class="fa fa-flickr"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i class="fa fa-instagram"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-4 hidden-md-down">
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div class="topsearch text-right">
                            <a data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i class="fa fa-search"></i> Search</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="header-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="logo">
                            <a href="blog-football-index.html"><img src="../images/version/blog-football-logo.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <header class="header">
            <div class="container">
                <nav class="navbar navbar-inverse navbar-toggleable-md">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-md-center">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link color-green-hover" href="blog-football-index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link color-green-hover" href="blog-football-category-EPL.html">English Premier League</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link color-green-hover" href="blog-football-category-MSL.html">USA Major Soccer League</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link color-green-hover" href="blog-football-category-BL.html">German Bundesliga</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link color-green-hover" href="blog-football-contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

        <section class="section first-section">
            <div class="container-fluid">
                <div class="masonry-blog clearfix">
                    <div class="left-side">
                        <div class="masonry-box post-media">
                             <img src="images/EPL/LFC_MC_Preview.png" alt="" class="img-fluid"/>
                             <div class="shadoweffect">
                                <div class="shadow-desc">
                                    <div class="blog-meta">
                                        <span class="bg-aqua"><a href="blog-football-category-EPL.html" title="">English Premier League</a></span>
                                        <h4><a href="blog-football-EPL.html" title="">No Salah, Firmino or Mane in Liverpool and Manchester City combined XI </a></h4>
                                        <small><a href="blog-football-EPL.html" title="">08 November, 2019</a></small>
                                        <small><a href="#" title="">by Gzhegozh Bzhezh</a></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="center-side">
                        <div class="masonry-box post-media">
                             <img src="images/MSL/lodeiro.png" alt="" class="img-fluid"/>
                             <div class="shadoweffect">
                                <div class="shadow-desc">
                                    <div class="blog-meta">
                                        <span class="bg-aqua"><a href="blog-football-category-MSL.html" title="">Major Soccer League</a></span>
                                        <h4><a href="blog-football-MSL.html" title="">Lodeiro vs Pozuelo: The creative pair central as Seattle meet Toronto</a></h4>
                                        <small><a href="blog-football-MSL.html" title="">9 November, 2019</a></small>
                                        <small><a href="#" title="">Gzhegozh Bzhezh</a></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="right-side hidden-md-down">
                        <div class="masonry-box post-media">
                             <img src="images/bl/BMteam.png" alt="" class="img-fluid"/>
                             <div class="shadoweffect">
                                <div class="shadow-desc">
                                    <div class="blog-meta">
                                        <span class="bg-aqua"><a href="blog-football-category-BL.html" title="">English Premier League</a></span>
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

        <section class="section wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-list clearfix">
                                <div class="blog-box row">
                                    <div class="col-md-4">
                                        <div class="post-media">
                                            <a href="blog-football-EPL.html" title="">
                                                <img src="images/EPL/LFC_MC_hm.png" alt="" class="img-fluid"/>
                                                <div class="hovereffect"></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="blog-meta big-meta col-md-8">
                                        <span class="bg-aqua"><a href="blog-football-category-EPL.html" title="">English Premier League</a></span>
                                        <h4><a href="blog-football-EPL.html" title="">No Salah, Firmino or Mane in Liverpool and Manchester City combined XI </a></h4>
                                        <p>Here we run through the best rated combined XI between Liverpool and Manchester City ahead of their highly anticipated match at Anfield on Sunday. Using Premier League ratings this season, only players with at least five appearances are considered, while injured and suspended players are ineligble.</p>
                                        
                                        <small><a href="blog-football-EPL.html" title="">08 November, 2019</a></small>
                                        <small><a href="#" title="">by Gzhegozh</a></small>
                                    </div>
                                </div>

                                <hr class="invis"/>

                                <div class="blog-box row">
                                    <div class="col-md-4">
                                        <div class="post-media">
                                            <a href="blog-football-MSL.html" title="">
                                                <img src="images/MSL/lodeiro_hm.png" alt="" class="img-fluid"/>
                                                <div class="hovereffect"></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="blog-meta big-meta col-md-8">
                                        <span class="bg-aqua"><a href="blog-football-category-MSL.html" title="">Major Soccer League</a></span>
                                        <h4><a href="blog-football-MSL.html" title="">Lodeiro vs Pozuelo: The creative pair central as Seattle meet Toronto</a></h4>
                                        <p>It all comes down to this. The 2019 MLS season comes to a head on Sunday night in a repeat of the 2016 MLS Cup final. Three years ago, Seattle Sounders emerged victorious on penalities after the pair had played out a 0-0 draw at BMO Field, with Toronto FC came away from the clash empty handed.</p>
                                        
                                        <small><a href="blog-football-MSL.html" title="">09 November, 2019</a></small>
                                        <small><a href="#" title="">by Gzhegozh</a></small>
                                    </div>
                                </div>

                                <hr class="invis"/>

                                <div class="blog-box row">
                                    <div class="col-md-4">
                                        <div class="post-media">
                                            <a href="blog-football-BL.html" title="">
                                                <img src="images/BL/Kovach_hm.png" alt="" class="img-fluid"/>
                                                <div class="hovereffect"></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="blog-meta big-meta col-md-8">
                                        <span class="bg-aqua"><a href="blog-football-category-BL.html" title="">German Bundesliga</a></span>
                                        <h4><a href="blog-football-BL.html" title="">What next for Bayern following Kovac sacking?</a></h4>
                                        <p>Niko Kovac could have been sacked 12 months ago. In that sense, then, he has endured a year-long stay of execution. On Sunday evening, the former Croatia international was relieved of his duties at the Allianz Arena after Bayern fell to a 5-1 hammering at the hands of Kovac's former employers Eintracht Frankfurt.</p>
                                        
                                        <small><a href="blog-football-BL.html" title="">05 November, 2019</a></small>
                                        <small><a href="#" title="">by Gzhegozh</a></small>
                                    </div>
                                </div>

                                <hr class="invis"/>

                                <div class="row">
                                    <div class="col-lg-10 offset-lg-1">
                                        <div class="banner-spot clearfix">
                                            <div class="banner-img">
                                                <img src="images/banner.png" alt="" class="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr class="invis"/>

                                <div class="blog-box row">
                                    <div class="col-md-4">
                                        <div class="post-media">
                                            <a href="blog-football-EPL-Klo.html" title="">
                                                <img src="images/EPL/Salah_hm.png" alt="" class="img-fluid"/>
                                                <div class="hovereffect"></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="blog-meta big-meta col-md-8">
                                        <span class="bg-aqua"><a href="blog-football-category-EPL.html" title="">English Premier League</a></span>
                                        <h4><a href="blog-football-EPL-Klo.html" title="">Liverpool vs Manchester: The ultimate 50/1 'Request A Bet'</a></h4>
                                        <p>In what is undeniably the biggest game of the 2019/20 Premier League campaign so far Liverpool are aiming to protect their unbeaten record this season against reigning champions Manchester City.</p>
                                        
                                        <small><a href="blog-football-EPL-Klo.html" title="">09 November, 2019</a></small>
                                        <small><a href="#" title="">by Gzhegozh</a></small>
                                    </div>
                                </div>

                                <hr class="invis"/>

                                <div class="blog-box row">
                                    <div class="col-md-4">
                                        <div class="post-media">
                                            <a href="blog-football-EPL-Vardy.html" title="">
                                                <img src="images/EPL/Vardy_hm.png" alt="" class="img-fluid"/>
                                                <div class="hovereffect"></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="blog-meta big-meta col-md-8">
                                        <span class="bg-aqua"><a href="blog-football-category-EPL.html" title="">English Premier League</a></span>
                                        <h4><a href="blog-football-EPL-Vardy.html" title="">Fanteam Fantasy Football: Vardy to extend top-six record at Arsenal's expense </a></h4>
                                        <p>Leicester will aim to take another step towards confirming a top-four berth this season and this weekend and could even head into the international break in second if they beat Arsenal and Liverpool beat Manchester City on Sunday.</p>
                                        
                                        <small><a href="blog-football-EPL-Vardy.html" title="">08 November, 2019</a></small>
                                        <small><a href="#" title="">by Gzhegozh</a></small>
                                    </div>
                                </div>

                                <hr class="invis"/>

                                <div class="blog-box row">
                                    <div class="col-md-4">
                                        <div class="post-media">
                                            <a href="blog-football-EPL-Leicester.html" title="">
                                                <img src="images/EPL/Leices_hm.png" alt="" class="img-fluid"/>
                                                <div class="hovereffect"></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="blog-meta big-meta col-md-8">
                                        <span class="bg-aqua"><a href="blog-football-category-EPL.html" title="">English Permier League</a></span>
                                        <h4><a href="blog-football-EPL-Leicester.html" title="">Leicester star triumphs to land PFA gong</a></h4>
                                        <p>Jamie Vardy has landed the PFA Premier League fan's player of the month award. The Leicester striker was exceptional for the high flying Foxes as he scored four times last month, more than any other Premier League player, as Brendan Rodgers' side ended October in the top four. </p>
                                        
                                        <small><a href="blog-football-EPL-Leicester.html" title="">04 November, 2019</a></small>
                                        <small><a href="#" title="">by Gzhegozh</a></small>
                                    </div>
                                </div>

                                <hr class="invis"/>

                                <div class="blog-box row">
                                    <div class="col-md-4">
                                        <div class="post-media">
                                            <a href="blog-football-EPL-TopScorer.html" title="">
                                                <img src="images/EPL/TopScorer_hm.png" alt="" class="img-fluid"/>
                                                <div class="hovereffect"></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="blog-meta big-meta col-md-8">
                                        <span class="bg-aqua"><a href="blog-football-category-EPL.html" title="">English Premier League</a></span>
                                        <h4><a href="blog-football-EPL-TopScorer.html" title="">Top scorer Vardy leapfrogs De Bruyne to top Premier League form rankings</a></h4>
                                        <p>Jamie Vardy has replaced Kevin De Bruyne at the top of the latest Premier League form rankings leaderboard after scoring for a third game running against Crystal Palace at the weekend.</p>
                                        
                                        <small><a href="blog-football-EPL-TopScorer.html" title="">05 November, 2019</a></small>
                                        <small><a href="#" title="">by Gzhegozh</a></small>
                                    </div>
                                </div>

                                <hr class="invis"/>

                                <div class="blog-box row">
                                    <div class="col-md-4">
                                        <div class="post-media">
                                            <a href="blog-football-EPL-TopScorer-LFC.html" title="">
                                                <img src="images/EPL/LFC_hm.png" alt="" class="img-fluid"/>
                                                <div class="hovereffect"></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="blog-meta big-meta col-md-8">
                                        <span class="bg-aqua"><a href="blog-football-category-EPL.html" title="">English Premier League</a></span>
                                        <h4><a href="blog-football-EPL-TopScorer-LFC.html" title="">Fanteam Fantasy Football: Liverpool fringe players to watch out for against Genk </a></h4>
                                        <p>We are now entering the business stage of the Champions League group stage and teams will start to discover their fate. The next three gameweeks will determine who qualifies for the knockout stage, who drops into the Europa League and who falls out of European competition altogether. </p>
                                        
                                        <small><a href="blog-football-EPL-TopScorer-LFC.html" title="">05 November, 2019</a></small>
                                        <small><a href="#" title="">by Gzhegozh</a></small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="invis"/>

                        <div class="row">
                            <div class="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul class="pagination justify-content-start">
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div class="sidebar">
                            <div class="widget">
                                <h2 class="widget-title">Search</h2>
                                <form class="form-inline search-form">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Search on the site"/>
                                    </div>
                                    <button type="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>
                                </form>
                            </div>

                            <div class="widget">
                                <h2 class="widget-title">Recent Posts</h2>
                                <div class="blog-list-widget">
                                    <div class="list-group">
                                        <a href="blog-football-EPL.html" class="list-group-item list-group-item-action flex-column align-items-start">
                                            <div class="w-100 justify-content-between">
                                                <img src="images/EPL/LFC_mn.png" alt="" class="img-fluid float-left"/>
                                                <h5 class="mb-1">No Salah, Firmino or Mane in Liverpool and Manchester City combined XI </h5>
                                                <small>08 November, 2019</small>
                                            </div>
                                        </a>

                                        <a href="blog-football-MSL.html" class="list-group-item list-group-item-action flex-column align-items-start">
                                            <div class="w-100 justify-content-between">
                                                <img src="images/MSL/Seatle_mn.png" alt="" class="img-fluid float-left"/>
                                                <h5 class="mb-1">Lodeiro vs Pozuelo: The creative pair central as Seattle meet Toronto</h5>
                                                <small>09 November, 2019</small>
                                            </div>
                                        </a>

                                        <a href="blog-football-BL.html" class="list-group-item list-group-item-action flex-column align-items-start">
                                            <div class="w-100 last-item justify-content-between">
                                                <img src="images/BL/BM_mn.png" alt="" class="img-fluid float-left"/>
                                                <h5 class="mb-1">What next for Bayern following Kovac sacking?</h5>
                                                <small>05 November, 2019</small>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="widget">
                                <h2 class="widget-title">Popular Categories</h2>
                                <div class="link-widget">
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
