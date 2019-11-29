import React from 'react'
import {Link} from 'react-router-dom'
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
                                        <span className="bg-aqua"><a title=""><Link to="/EnglishPL">English Premier League</Link></a></span>
                                        <h4><a title=""><Link to="/BlogFootballEPL">No Salah, Firmino or Mane in Liverpool and Manchester City combined XI</Link> </a></h4>
                                        <small><a title=""><Link to="/">8 November, 2019</Link></a></small>
                                        <small><a title=""><Link to="/">Gzhegozh Bzhezh</Link></a></small>
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
                                        <span className="bg-aqua"><a title=""><Link to="/MajorSL">Major Soccer League</Link> </a></span>
                                        <h4><a title=""><Link to="/BlogFootballMSL">Lodeiro vs Pozuelo: The creative pair central as Seattle meet Toronto</Link></a></h4>
                                        <small><a title=""><Link to="/">9 November, 2019</Link></a></small>
                                        <small><a title=""><Link to="/">Gzhegozh Bzhezh</Link></a></small>
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
                                        <span className="bg-aqua"><a title=""><Link to="/BundesL">German Bundesliga</Link></a></span>
                                        <h4><a title=""><Link to="/BlogFootballBL">What next for Bayern following Kovac sacking?</Link></a></h4>
                                        <small><a title=""><Link to="/">5 November, 2019</Link></a></small>
                                        <small><a title=""><Link to="/">Gzhegozh Bzhezh</Link></a></small>
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