import React from 'react'
import {Link} from 'react-router-dom'
import footerLogo from '../../images/version/blog-football-footer-logo.png'

const Footer = () => {
    return (
      <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="widget">
                            <div class="footer-text text-center">
                                <a><Link to="/"><img src={footerLogo} alt="" class="img-fluid"/></Link></a>
                                <p>Football blog - last news, interesting articles, forecasts.</p>
                                <div class="social">
                                    <a data-toggle="tooltip" data-placement="bottom" title="Facebook"><Link to="/"><i class="fa fa-facebook"></i></Link></a>              
                                    <a data-toggle="tooltip" data-placement="bottom" title="Twitter"><Link to="/"><i class="fa fa-twitter"></i></Link></a>
                                    <a data-toggle="tooltip" data-placement="bottom" title="Instagram"><Link to="/"><i class="fa fa-instagram"></i></Link></a>
                                    <a data-toggle="tooltip" data-placement="bottom" title="Pinterest"><Link to="/"><i class="fa fa-pinterest"></i></Link></a>
                                </div>

                                <hr class="invis"/>

                                <div class="newsletter-widget text-center">
                                    <form class="form-inline">
                                        <input type="text" class="form-control" placeholder="Enter your email address"/>
                                        <button type="submit" class="btn btn-primary">Subscribe <i class="fa fa-envelope-open-o"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 text-center">
                        <br/>
                        <br/>
                        <div class="copyright">&copy; Footbal Blog.</div>
                    </div>
                </div>
            </div>
        </footer>
    )
  }

  export default Footer