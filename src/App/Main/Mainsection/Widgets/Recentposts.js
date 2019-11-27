import React from 'react'
import LFC_mn from '../../../../images/EPL/LFC_mn.png'
import Seatle_mn from '../../../../images/MSL/Seatle_mn.png'
import BM_mn from '../../../../images/BL/BM_mn.png'

const Recentposts = () => {
    return (

                            <div className="widget">
                                <h2 className="widget-title">Recent Posts</h2>
                                <div className="blog-list-widget">
                                    <div className="list-group">
                                        <a href="blog-football-EPL.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <div className="w-100 justify-content-between">
                                                <img src={LFC_mn} alt="" className="img-fluid float-left"/>
                                                <h5 className="mb-1">No Salah, Firmino or Mane in Liverpool and Manchester City combined XI </h5>
                                                <small>08 November, 2019</small>
                                            </div>
                                        </a>

                                        <a href="blog-football-MSL.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <div className="w-100 justify-content-between">
                                                <img src={Seatle_mn} alt="" className="img-fluid float-left"/>
                                                <h5 className="mb-1">Lodeiro vs Pozuelo: The creative pair central as Seattle meet Toronto</h5>
                                                <small>09 November, 2019</small>
                                            </div>
                                        </a>

                                        <a href="blog-football-BL.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <div className="w-100 last-item justify-content-between">
                                                <img src={BM_mn} alt="" className="img-fluid float-left"/>
                                                <h5 className="mb-1">What next for Bayern following Kovac sacking?</h5>
                                                <small>05 November, 2019</small>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
      

    )
  }

  export default Recentposts