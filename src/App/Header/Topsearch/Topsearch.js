import React from 'react'

const Topsearch = () => {
	return (

    <div className="collapse top-search" id="collapseExample">
          <div className="card card-block">
            <div className="newsletter-widget text-center">
                <form className="form-inline">
                    <input type="text" className="form-control" placeholder="What you are looking for?"/>
                    <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                </form>
              </div>
          </div>
      </div>
    
    )
  }

  export default Topsearch