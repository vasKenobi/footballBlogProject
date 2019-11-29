import React,{Component} from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'




class PostListItem extends Component {
  render(){
      const{
          category,
          urlLink,
          title,
          description,
          date,
          author,
          image,

      }=this.props

    return (
                                <div className="blog-box row">
                                    <div className="col-md-4">
                                        <div className="post-media">
                                            <a title="">
                                                <Link to={urlLink}>
                                                <img src={image} alt="" className="img-fluid"/>
                                                <div className="hovereffect"></div>
                                                </Link>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="blog-meta big-meta col-md-8">
                                    
                                        <span className="bg-aqua"><a title=""><Link to={urlLink}>{category}</Link></a></span>
                                        <h4><a title=""><Link to={urlLink}>{title}</Link></a></h4>
                                        <p>{this.props.description}</p>
                                     
                                        <small><a title=""><Link to={urlLink}>{date}</Link></a></small>
                                        <small><a title=""><Link to={urlLink}>{author}</Link></a></small>
                                        
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