import React from 'react'

import '../../../../css/bootstrap.css'
import '../../../../css/colors.css'
import '../../../../css/font-awesome.min.css'
import '../../../../css/responsive.css'
import '../../../../css/style.css'
import '../../../../css/version/blog-football.css'




const PostListItem = (props) => {
    return (
                                <div className="blog-box row">
                                    <div className="col-md-4">
                                        <div className="post-media">
                                            <a href="blog-football-EPL.html" title="">
                                                <img src={props.image} alt="" className="img-fluid"/>
                                                <div className="hovereffect"></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="blog-meta big-meta col-md-8">
                                    
                                        <span className="bg-aqua"><a href="blog-football-category-EPL.html" title="">{props.category}</a></span>
                                        <h4><a href="blog-football-EPL.html" title="">{props.title}</a></h4>
                                        <p>{props.description}</p>
                                     
                                        <small><a href="blog-football-EPL.html" title="">{props.date}</a></small>
                                        <small><a href="#" title="">{props.author}</a></small>
                                        
                                    </div>
                                </div>

                                

                                  

      

    )
  }

  export default PostListItem