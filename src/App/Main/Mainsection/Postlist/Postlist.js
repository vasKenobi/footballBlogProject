import React from 'react'

import PostListItem from './PostListItem'
import posts from './posts'


const Postlist = () => {
    return (
        <div className="blog-list clearfix">

            {
                    posts.map(({
                        id,
                        category,
                        title,
                        description,
                        date,
                        author,
                        image
                    })=> (
                        <div key={id}>
                            <PostListItem
                                image={image}
                                category={category}
                                title={title}
                                description={description}
                                date={date}
                                author={author}
                            />
                            <hr className="invis"/>
                        </div> 
                    ))
                }
                

             </div>               

      

    )
  }

  export default Postlist