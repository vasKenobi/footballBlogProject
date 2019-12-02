import React from 'react'
import Firstsection from './Firstsection/Firstsection'
import Mainsection from './Mainsection/Mainsection'


const Main = ({
  postsLikeState,
	removeLike,
	addLike,

}) => {
    return (
      <div>
        <Firstsection/>

        <Mainsection
        postsLikeState={postsLikeState}
        removeLike={removeLike}
        addLike={addLike}
/>


      </div>

    )
  }

  export default Main