import React from 'react'
import {Link} from 'react-router-dom'

const YouMayAlsoLike = () => {
    return (
                        <div class="custombox clearfix">
                                <h4 class="small-title">You may also like</h4>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="blog-box">
                                            <div class="post-media">
                                                <a title="">
                                                    <Link to="/EnglishPL">
                                                    <img src="images/EPL/LFC_MC_hm.png" alt="" class="img-fluid"/>
                                                    <div class="hovereffect">
                                                        <span class=""></span>
                                                    </div>
                                                    </Link>
                                                </a>
                                            </div>
                                            <div class="blog-meta">
                                                <h4><a title=""><Link to="/BlogFootballEPL">No Salah, Firmino or Mane in Liverpool and Manchester City combined XI </Link></a></h4>
                                                <small><a title=""><Link to="/EnglishPL">Gzhegozh</Link></a></small>
                                                <small><a title=""><Link to="/EnglishPL">08 November, 2019</Link></a></small>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="blog-box">
                                            <div class="post-media">
                                                <a title="">
                                                    <Link to="/BundesL">
                                                    <img src="images/BL/BMteam.png" alt="" class="img-fluid"/>
                                                    <div class="hovereffect">
                                                        <span class=""></span>
                                                    </div>
                                                    </Link>
                                                </a>
                                            </div>
                                            <div class="blog-meta">
                                                <h4><a title=""><Link to="/BlogFootballBL">What next for Bayern following Kovac sacking?</Link></a></h4>
                                                <small><a title=""><Link to="/BundesL">Gzhegozh</Link></a></small>
                                                <small><a title=""><Link to="/BundesL">05 November, 2019</Link></a></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    )
}
export default YouMayAlsoLike
