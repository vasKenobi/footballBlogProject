import React,{Component} from 'react'

import '../css/bootstrap.css'
import '../css/colors.css'
import '../css/font-awesome.min.css'
import '../css/responsive.css'
import '../css/style.css'
import '../css/version/blog-football.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
  

class App extends Component {
  state = {
    postsLikeState: {

		}

  }

  addLike = (postId) => {
		this.setState((prevState)=>({
			postsLikeState:{
				...prevState.postsLikeState,
				[postId]:true
			}
		}))
  }
  
  removeLike = (postId) => {
		this.setState((prevState)=>({
			postsLikeState:{
				...prevState.postsLikeState,
				[postId]:false
			}
		}))
	}



  render(){
    return (
      <div>
          <Header/>
          <Main
            postsLikeState={this.state.postsLikeState}
            removeLike={this.removeLike}
            addLike={this.addLike}
          />
          <Footer/>

    </div>
    )
  }
}


export default App;
