import React,{Component} from 'react'
import PropTypes from 'prop-types';




class PostListItem extends Component {
  render(){

    return (
                                <div className="blog-box row">
                                    <div className="col-md-4">
                                        <div className="post-media">
                                            <a href="blog-football-EPL.html" title="">
                                                <img src={this.props.image} alt="" className="img-fluid"/>
                                                <div className="hovereffect"></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="blog-meta big-meta col-md-8">
                                    
                                        <span className="bg-aqua"><a href="blog-football-category-EPL.html" title="">{this.props.category}</a></span>
                                        <h4><a href="blog-football-EPL.html" title="">{this.props.title}</a></h4>
                                        <p>{this.props.description}</p>
                                     
                                        <small><a href="blog-football-EPL.html" title="">{this.props.date}</a></small>
                                        <small><a href="#" title="">{this.props.author}</a></small>
                                        
                                    </div>
                                </div>
        )
                            
    }
  }

  PostListItem.propTypes = {
      category:PropTypes.string.isRequired,
      title:PropTypes.string.isRequired,
      description:PropTypes.string.isRequired,
      date:PropTypes.string.isRequired,
      author:PropTypes.string.isRequired,
      image:PropTypes.string.isRequired,

  }

  export default PostListItem