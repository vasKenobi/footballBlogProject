import React from 'react'

import PostListItem from './PostListItem'
import posts from './posts'

import '../../../../css/bootstrap.css'
import '../../../../css/colors.css'
import '../../../../css/font-awesome.min.css'
import '../../../../css/responsive.css'
import '../../../../css/style.css'
import '../../../../css/version/blog-football.css'

const Postlist = () => {
    return (
        <div className="blog-list clearfix">

            {
                    posts.map((post)=> (
                        <div key={post.id}>
                            <PostListItem
                                image={post.image}
                                category={post.category}
                                title={post.title}
                                description={post.description}
                                date={post.date}
                                author={post.author}
                            />
                            <hr className="invis"/>
                        </div> 
                    ))
                }
                

             </div>               

      

    )
  }

  export default Postlist