import React from 'react'
import LFC_MC_Preview from '../../../images/EPL/LFC_MC_Preview.png'
import lodeiro from '../../../images/MSL/lodeiro.png'
import BMteam from '../../../images/BL/BMteam.png'

const Firstsection = () => {
    return (
        <section className="section first-section">
            <div className="container-fluid">
                <div className="masonry-blog clearfix">
                    <div className="left-side">
                        <div className="masonry-box post-media">
                             <img src={LFC_MC_Preview} alt="" className="img-fluid"/>
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
                             <img src={lodeiro} alt="" className="img-fluid"/>
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
                             <img src={BMteam} alt="" className="img-fluid"/>
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

    )
  }

  export default Firstsection