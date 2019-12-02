import React from 'react'
import {Link} from 'react-router-dom'
<<<<<<< HEAD

=======
>>>>>>> 61cae6e49025e593e1c7b52eac388098efacd4b2

const Breadcrumbs = () => {
    return (
        <div class="page-title wb">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <h2><i class="fa fa-rocket bg-green"></i> Football Blog</h2>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li class="breadcrumb-item active">Blog</li>
                            </ol>
                        </div>                  
                    </div>
                </div>
            </div>
    )
}
export default Breadcrumbs
