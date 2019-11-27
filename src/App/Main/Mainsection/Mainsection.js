import React from 'react'
import Popularcategories from './Widgets/Popularcategories'
import Recentposts from './Widgets/Recentposts'
import Sidebarsearch from './Widgets/Sidebarsearch'
import Pagination from './Pagination/Pagination'
import Postlist from './Postlist/Postlist'



const Mainsection = () => {
    return (

        <section className="section wb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div className="page-wrapper">
                            <div className="blog-list clearfix">
                                <Postlist/>
                            </div>
                        </div>

                        <hr className="invis"/>

                        <div className="row">
                            <div className="col-md-12">
                                <Pagination/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div className="sidebar">
                            <Sidebarsearch/>

                            <Recentposts/>

                            <Popularcategories/>
                        </div>
                    </div>
                </div>
            </div>
        </section>


      

    )
  }

  export default Mainsection